'use client';

import { useEffect, useState, useRef } from 'react';
import '../app/documentary.css';

export interface DocumentarySlide {
    photoUrl: string;
    photoTitle: string;
    animation: 'pan-right' | 'pan-left' | 'zoom-in' | 'zoom-out' | 'diagonal-up' | 'diagonal-down';
    duration: number; // seconds
    quotes: Array<{
        text: string;
        speaker: string;
        source: string;
        startTime: number; // seconds into slide
        duration: number; // how long to show
    }>;
}

interface DocumentaryViewerProps {
    slides: DocumentarySlide[];
    audioUrl?: string;
    onClose: () => void;
}

export default function DocumentaryViewer({ slides, audioUrl, onClose }: DocumentaryViewerProps) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [slideProgress, setSlideProgress] = useState(0);
    const [activeQuoteIndex, setActiveQuoteIndex] = useState<number | null>(null);
    const [totalProgress, setTotalProgress] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
    const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
    const quoteTimersRef = useRef<NodeJS.Timeout[]>([]);

    const currentSlide = slides[currentSlideIndex];

    // Initialize audio
    useEffect(() => {
        if (audioUrl) {
            audioRef.current = new Audio(audioUrl);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.3;
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            }
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [audioUrl]);

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
                // Documentary finished
                setIsPlaying(false);
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

    // Play/pause handler
    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
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

    return (
        <div className="documentary-viewer">
            {/* Progress bar */}
            <div className="documentary-progress">
                <div
                    className="documentary-progress-bar"
                    style={{ width: `${totalProgress}%` }}
                />
            </div>

            {/* Close button */}
            <button
                className="documentary-close"
                onClick={onClose}
                aria-label="Close documentary"
            >
                ×
            </button>

            {/* Slide */}
            <div className="documentary-slide active">
                <img
                    src={currentSlide.photoUrl}
                    alt={currentSlide.photoTitle}
                    className={`documentary-image ${currentSlide.animation}`}
                    style={{
                        '--slide-duration': `${currentSlide.duration}s`
                    } as React.CSSProperties}
                />

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
