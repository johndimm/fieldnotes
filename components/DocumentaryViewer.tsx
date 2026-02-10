'use client';

import { useEffect, useState, useRef } from 'react';
import '../app/documentary.css';

export interface DocumentarySlide {
    photoUrl: string;
    photoTitle: string;
    photoFocalPoint?: string; // CSS object-position value, e.g., 'top', 'center', '50% 20%'
    animation: 'pan-right' | 'pan-left' | 'zoom-in' | 'zoom-out' | 'diagonal-up' | 'diagonal-down';
    duration: number; // seconds
    musicTrackIndex?: number; // Optional: which track from audioTracks to play (0-indexed)
    quotes: Array<{
        text: string;
        speaker: string;
        source: string;
        startTime: number; // seconds into slide
        duration: number; // how long to show
    }>;
    videoId?: string; // Optional YouTube ID
    videoStart?: number; // Optional start time (seconds)
    videoEnd?: number; // Optional end time (seconds)
}

interface DeezerTrack {
    id: string;
    name: string;
    artist: string;
    album: string;
    previewUrl: string;
    imageUrl: string;
    duration: number;
    externalUrl: string;
}

interface DocumentaryViewerProps {
    slides: DocumentarySlide[];
    audioUrl?: string;
    audioTracks?: DeezerTrack[];
    onClose: () => void;
}

export default function DocumentaryViewer({ slides, audioUrl, audioTracks, onClose }: DocumentaryViewerProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [slideProgress, setSlideProgress] = useState(0);
    const [activeQuoteIndex, setActiveQuoteIndex] = useState<number | null>(null);
    const [totalProgress, setTotalProgress] = useState(0);

    const audioARef = useRef<HTMLAudioElement | null>(null);
    const audioBRef = useRef<HTMLAudioElement | null>(null);
    const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
    const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const quoteTimersRef = useRef<NodeJS.Timeout[]>([]);
    const crossfadeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const previousTrackIndexRef = useRef<number | undefined>(undefined);

    const currentSlide = slides[currentSlideIndex];

    // Initialize audio with act-based crossfade support
    useEffect(() => {
        const startAudio = async () => {
            if (audioTracks && audioTracks.length > 0) {
                // Act-based crossfade timing
                const fadeTime = 3; // 3 second crossfade

                // Define act boundaries (2 tracks per act)
                // Act 1: tracks 0-1, Act 2: tracks 2-3, Act 3: tracks 4-5
                const act1Duration = 12; // Howlin' Wolf slide
                const act2Duration = 21; // Carnaby + Piccadilly
                const act3Start = act1Duration + act2Duration; // 33 seconds

                // Initialize both audio elements
                audioARef.current = new Audio();
                audioBRef.current = new Audio();
                audioARef.current.volume = 0.3;
                audioBRef.current.volume = 0;

                // Start first track (Act 1)
                if (audioARef.current && audioTracks[0]) {
                    audioARef.current.src = audioTracks[0].previewUrl;
                    // Don't auto-play here, let the play button or slide effect handle it
                    // But if we are already 'isPlaying' (e.g. from a prop), we should start
                    if (isPlaying) {
                        try {
                            await audioARef.current.play();
                        } catch (e) {
                            console.error("Audio playback failed", e);
                        }
                    }
                }
            } else if (audioUrl) {
                // Single track mode (legacy)
                audioARef.current = new Audio(audioUrl);
                audioARef.current.loop = true;
                audioARef.current.volume = 0.3;
                if (isPlaying) {
                    audioARef.current.play().catch(console.error);
                }
            }
        };

        startAudio();

        return () => {
            if (audioARef.current) {
                audioARef.current.pause();
                audioARef.current = null;
            }
            if (audioBRef.current) {
                audioBRef.current.pause();
                audioBRef.current = null;
            }
            if (crossfadeTimerRef.current) {
                clearTimeout(crossfadeTimerRef.current);
            }
        };
    }, [audioUrl, audioTracks, isPlaying, slides]);

    // Handle slide transitions
    useEffect(() => {
        if (!isPlaying) return;

        const slideDuration = currentSlide.duration * 1000;

        // Start slide timer
        slideTimerRef.current = setTimeout(() => {
            if (currentSlideIndex < slides.length - 1) {
                setCurrentSlideIndex(prev => prev + 1);
                setSlideProgress(0);
            } else {
                // Documentary finished - fade out music
                setIsPlaying(false);
                const fadeOut = async () => {
                    const activeAudio = audioARef.current || audioBRef.current;
                    if (activeAudio && activeAudio.volume > 0) {
                        const steps = 20;
                        const fadeTime = 2000; // 2 second fade out
                        const stepDuration = fadeTime / steps;
                        const volStep = activeAudio.volume / steps;

                        for (let i = 0; i < steps; i++) {
                            await new Promise(resolve => setTimeout(resolve, stepDuration));
                            activeAudio.volume = Math.max(0, activeAudio.volume - volStep);
                        }
                        activeAudio.pause();
                    }
                };
                fadeOut();
            }
        }, slideDuration);

        // Progress bar
        const progressInterval = 50;
        progressTimerRef.current = setInterval(() => {
            setSlideProgress(prev => {
                const newProgress = prev + (progressInterval / slideDuration) * 100;
                return newProgress >= 100 ? 100 : newProgress;
            });
        }, progressInterval);

        // Schedule quotes
        quoteTimersRef.current = currentSlide.quotes.map((quote, index) => {
            const showTimer = setTimeout(() => {
                setActiveQuoteIndex(index);

                // Hide quote after duration
                setTimeout(() => {
                    setActiveQuoteIndex(prev => prev === index ? null : prev);
                }, quote.duration * 1000);
            }, quote.startTime * 1000);

            return showTimer;
        });

        return () => {
            if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
            quoteTimersRef.current.forEach(timer => clearTimeout(timer));
        };
    }, [currentSlideIndex, isPlaying, currentSlide, slides.length]);

    // Handle music track changes based on slide's musicTrackIndex
    useEffect(() => {
        // Check for video slide - pause background audio if video is playing
        if (currentSlide.videoId) {
            if (audioARef.current) audioARef.current.pause();
            if (audioBRef.current) audioBRef.current.pause();
            // Force track update when leaving video slide
            previousTrackIndexRef.current = -1;
            return;
        }

        if (!audioTracks || audioTracks.length === 0 || !isPlaying) return;
        if (!audioARef.current || !audioBRef.current) return;

        const newTrackIndex = currentSlide.musicTrackIndex;
        if (newTrackIndex === undefined) return;

        // CRITICAL: Only switch if track index actually changed
        // OR if we are coming from a video slide (previousTrackIndexRef is -1)
        if (previousTrackIndexRef.current === newTrackIndex && previousTrackIndexRef.current !== -1) return;

        const changeTrack = async () => {
            // Helper function to fade volume
            const fadeVolume = (audio: HTMLAudioElement, fromVol: number, toVol: number, duration: number) => {
                return new Promise<void>((resolve) => {
                    const steps = 30;
                    const stepDuration = (duration * 1000) / steps;
                    const volStep = (toVol - fromVol) / steps;
                    let currentStep = 0;

                    const interval = setInterval(() => {
                        currentStep++;
                        audio.volume = Math.max(0, Math.min(1, fromVol + (volStep * currentStep)));

                        if (currentStep >= steps) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, stepDuration);
                });
            };

            // Check if we need to change tracks
            const newTrackUrl = audioTracks[newTrackIndex]?.previewUrl;
            if (!newTrackUrl) return;

            const currentAudio = audioARef.current!;
            const nextAudio = audioBRef.current!;
            const currentTrackUrl = currentAudio.volume > 0 ? currentAudio.src : nextAudio.src;

            if (currentTrackUrl === newTrackUrl) return; // Already playing this track

            // Determine which audio element is currently active
            const activeAudio = currentAudio.volume > 0 ? currentAudio : nextAudio;
            const inactiveAudio = currentAudio.volume > 0 ? nextAudio : currentAudio;

            // Crossfade to new track
            inactiveAudio.src = newTrackUrl;
            inactiveAudio.volume = 0;
            await inactiveAudio.play().catch(console.error);

            // Update ref to prevent re-triggering
            previousTrackIndexRef.current = newTrackIndex;

            const fadeTime = 2; // 2 second crossfade
            await Promise.all([
                fadeVolume(activeAudio, activeAudio.volume, 0, fadeTime),
                fadeVolume(inactiveAudio, 0, 0.3, fadeTime)
            ]);

            activeAudio.pause();
            activeAudio.currentTime = 0;
        };

        changeTrack();
    }, [currentSlideIndex, currentSlide.musicTrackIndex, audioTracks, isPlaying]);

    // Play/pause handler
    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
        if (audioARef.current) {
            if (isPlaying) {
                audioARef.current.pause();
            } else {
                audioARef.current.play().catch(console.error);
            }
        }
        if (audioBRef.current) {
            if (isPlaying) {
                audioBRef.current.pause();
            } else {
                audioBRef.current.play().catch(console.error);
            }
        }
    };

    // Navigation
    const goToNextSlide = () => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(prev => prev + 1);
            setSlideProgress(0);
            setActiveQuoteIndex(null);
        }
    };

    const goToPrevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(prev => prev - 1);
            setSlideProgress(0);
            setActiveQuoteIndex(null);
        }
    };

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === ' ') {
                e.preventDefault();
                togglePlayPause();
            }
            if (e.key === 'ArrowRight') goToNextSlide();
            if (e.key === 'ArrowLeft') goToPrevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlideIndex, isPlaying]);

    // Calculate total progress
    useEffect(() => {
        const totalDuration = slides.reduce((sum, slide) => sum + slide.duration, 0);
        const elapsed = slides.slice(0, currentSlideIndex).reduce((sum, slide) => sum + slide.duration, 0)
            + (currentSlide.duration * slideProgress / 100);
        setTotalProgress((elapsed / totalDuration) * 100);
    }, [currentSlideIndex, slideProgress, slides]);

    // Get current music track info for display
    const currentTrackIndex = currentSlide.musicTrackIndex !== undefined
        ? currentSlide.musicTrackIndex
        : (previousTrackIndexRef.current && previousTrackIndexRef.current !== -1 ? previousTrackIndexRef.current : 0);

    // Ensure we have a valid track index and tracks exist
    const currentTrack = (audioTracks && audioTracks.length > 0 && currentTrackIndex >= 0 && currentTrackIndex < audioTracks.length)
        ? audioTracks[currentTrackIndex]
        : null;

    return (
        <div className="documentary-viewer">
            {/* Progress bar */}
            <div className="documentary-progress">
                <div
                    className="documentary-progress-bar"
                    style={{ width: `${totalProgress}%` }}
                />
            </div>

            {/* Music Info */}
            {currentTrack && (
                <div className="documentary-music-info" style={{
                    position: 'absolute',
                    top: '30px',
                    left: '30px',
                    zIndex: 100,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    fontFamily: 'sans-serif',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px 15px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 'bold', color: '#fff' }}>♫ {currentTrack.name}</span>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{currentTrack.artist}</span>
                    </div>
                    {currentTrack.externalUrl && (
                        <a
                            href={currentTrack.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                marginLeft: '10px',
                                fontSize: '1.2rem',
                                opacity: 0.8,
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                            title="Listen on Deezer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            ↗
                        </a>
                    )}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const plan = `Documentary Music Plan\n\n1. Howlin' Wolf - Smokestack Lightnin' (Intro)\n2. Cream - Spoonful (London Scene)\n3. Eric Clapton - Crossroads (The Arrival)\n4. Jimi Hendrix - Killing Floor (The Performance)\n5. Jimi Hendrix - Hey Joe (The Legacy)`;
                            alert(plan);
                        }}
                        style={{
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            color: '#fff',
                            cursor: 'pointer',
                            marginLeft: '5px',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        title="View Music Plan"
                    >
                        ?
                    </button>
                </div>
            )}

            {/* Close button */}
            <button
                className="documentary-close"
                onClick={onClose}
                aria-label="Close documentary"
            >
                ×
            </button>

            {/* Slide Content (Image or Video) */}
            <div className="documentary-slide active">
                {currentSlide.videoId ? (
                    <div className="documentary-video-container" style={{ width: '100%', height: '100%' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentSlide.videoId}?autoplay=1&start=${currentSlide.videoStart || 0}&end=${currentSlide.videoEnd || ''}&controls=0&rel=0`}
                            title={currentSlide.photoTitle}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ pointerEvents: 'none' }} // Prevent interaction to keep documentary feel
                        />
                    </div>
                ) : (
                    <img
                        src={currentSlide.photoUrl}
                        alt={currentSlide.photoTitle}
                        className={`documentary-image ${currentSlide.animation}`}
                        style={{
                            '--slide-duration': `${currentSlide.duration}s`,
                            objectPosition: currentSlide.photoFocalPoint || 'center'
                        } as React.CSSProperties}
                    />
                )}

                {/* Quote overlay */}
                {activeQuoteIndex !== null && (
                    <div className="documentary-quote show">
                        <div className="documentary-quote-text">
                            "{currentSlide.quotes[activeQuoteIndex].text}"
                        </div>
                        <div className="documentary-quote-speaker">
                            — {currentSlide.quotes[activeQuoteIndex].speaker}
                        </div>
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="documentary-controls">
                <button
                    className="documentary-control-btn"
                    onClick={goToPrevSlide}
                    disabled={currentSlideIndex === 0}
                    style={{ opacity: currentSlideIndex === 0 ? 0.3 : 1 }}
                >
                    ← Previous
                </button>

                <button
                    className="documentary-control-btn"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>

                <button
                    className="documentary-control-btn"
                    onClick={goToNextSlide}
                    disabled={currentSlideIndex === slides.length - 1}
                    style={{ opacity: currentSlideIndex === slides.length - 1 ? 0.3 : 1 }}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}
