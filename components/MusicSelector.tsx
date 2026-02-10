'use client';

import { useEffect, useState, useRef } from 'react';

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

interface MusicSelectorProps {
    onSelectTracks: (tracks: DeezerTrack[]) => void;
    onClose: () => void;
}

// Optimal musical progression: Traditional blues → Psychedelic
const TRACK_ORDER = [
    'Howlin Wolf Smokestack Lightning',    // 1. Traditional Chicago blues
    'Muddy Waters Mannish Boy',            // 2. Electric blues evolution
    'John Lee Hooker Boom Boom',           // 3. Groove-based transition
    'BB King The Thrill Is Gone',          // 4. Sophisticated blues
    'Albert King Born Under a Bad Sign',   // 5. Modern heavy blues
    'Cream Spoonful',                      // 6. British psychedelic blues
    'Jimi Hendrix Killing Floor',          // 7. Psychedelic culmination
];

const RECOMMENDED_TRACKS = TRACK_ORDER;

export default function MusicSelector({ onSelectTracks, onClose }: MusicSelectorProps) {
    const [tracks, setTracks] = useState<DeezerTrack[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTrackIds, setSelectedTrackIds] = useState<string[]>([]);
    const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Fetch all recommended tracks
    useEffect(() => {
        async function fetchTracks() {
            try {
                setLoading(true);
                const fetchPromises = RECOMMENDED_TRACKS.map(async (query) => {
                    const response = await fetch(
                        `/api/music/deezer/search?q=${encodeURIComponent(query)}&limit=1`
                    );
                    const data = await response.json();
                    const track = data.tracks[0];
                    if (track) {
                        // Use our dynamic API for the preview URL to ensure it doesn't expire
                        return {
                            ...track,
                            previewUrl: `/api/music/deezer/track/${track.id}`
                        };
                    }
                    return null;
                });

                const results = await Promise.all(fetchPromises);
                const validTracks = results.filter((track): track is DeezerTrack => track !== null);
                setTracks(validTracks);
                setLoading(false);
            } catch (err) {
                setError('Failed to load music tracks');
                setLoading(false);
            }
        }

        fetchTracks();
    }, []);

    // Handle track preview playback
    const togglePreview = (track: DeezerTrack) => {
        if (playingTrackId === track.id) {
            // Stop current track
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            setPlayingTrackId(null);
        } else {
            // Stop any currently playing track
            if (audioRef.current) {
                audioRef.current.pause();
            }

            // Play new track
            audioRef.current = new Audio(track.previewUrl);
            audioRef.current.volume = 0.5;
            audioRef.current.play().catch(console.error);
            setPlayingTrackId(track.id);

            // Auto-stop when preview ends
            audioRef.current.onended = () => {
                setPlayingTrackId(null);
            };
        }
    };

    // Handle track selection (multiple)
    const toggleSelection = (track: DeezerTrack) => {
        setSelectedTrackIds(prev => {
            if (prev.includes(track.id)) {
                return prev.filter(id => id !== track.id);
            } else {
                return [...prev, track.id];
            }
        });
    };

    // Optimize track order
    const optimizeOrder = () => {
        const orderedIds = TRACK_ORDER
            .map(query => tracks.find(t =>
                t.name.toLowerCase().includes(query.split(' ').pop()!.toLowerCase())
            )?.id)
            .filter((id): id is string => id !== undefined && selectedTrackIds.includes(id));
        setSelectedTrackIds(orderedIds);
    };

    // Cleanup audio on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Handle confirm selection
    const handleConfirm = () => {
        // Stop any playing audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        setPlayingTrackId(null);

        // Get selected tracks in order
        const selectedTracks = selectedTrackIds
            .map(id => tracks.find(t => t.id === id))
            .filter((track): track is DeezerTrack => track !== undefined);

        onSelectTracks(selectedTracks);
        onClose();
    };

    // Handle close and cleanup
    const handleClose = () => {
        // Stop any playing audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        setPlayingTrackId(null);
        onClose();
    };

    if (loading) {
        return (
            <div className="music-selector-overlay">
                <div className="music-selector">
                    <div className="music-selector-header">
                        <h2>Select Background Music</h2>
                        <button className="close-btn" onClick={handleClose}>×</button>
                    </div>
                    <div className="loading-state">Loading tracks...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="music-selector-overlay">
                <div className="music-selector">
                    <div className="music-selector-header">
                        <h2>Select Background Music</h2>
                        <button className="close-btn" onClick={handleClose}>×</button>
                    </div>
                    <div className="error-state">{error}</div>
                    <button className="cancel-btn" onClick={handleClose}>Close</button>
                </div>
            </div>
        );
    }

    return (
        <div className="music-selector-overlay">
            <div className="music-selector">
                <div className="music-selector-header">
                    <h2>Select Background Music</h2>
                    <button className="close-btn" onClick={handleClose}>×</button>
                </div>

                <p className="music-selector-description">
                    Choose authentic blues and rock tracks for your documentary. Click play to preview.
                </p>

                <div className="tracks-grid">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className={`track-card ${selectedTrackIds.includes(track.id) ? 'selected' : ''}`}
                        >
                            <div className="track-image-container">
                                <img
                                    src={track.imageUrl}
                                    alt={`${track.name} album art`}
                                    className="track-image"
                                />
                                <button
                                    className="play-preview-btn"
                                    onClick={() => togglePreview(track)}
                                    aria-label={playingTrackId === track.id ? 'Pause preview' : 'Play preview'}
                                >
                                    {playingTrackId === track.id ? '⏸' : '▶'}
                                </button>
                            </div>

                            <div className="track-info">
                                <h3 className="track-name">{track.name}</h3>
                                <p className="track-artist">{track.artist}</p>
                                <p className="track-album">{track.album}</p>
                            </div>

                            <label className="track-checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedTrackIds.includes(track.id)}
                                    onChange={() => toggleSelection(track)}
                                />
                                <span>Select for documentary</span>
                            </label>
                        </div>
                    ))}
                </div>

                <div className="music-selector-footer">
                    <div className="footer-left">
                        <div className="track-count">
                            {selectedTrackIds.length} track{selectedTrackIds.length !== 1 ? 's' : ''} selected
                        </div>
                        {selectedTrackIds.length > 1 && (
                            <button className="optimize-btn" onClick={optimizeOrder}>
                                🎵 Optimize Order
                            </button>
                        )}
                    </div>
                    <div className="footer-right">
                        <button className="cancel-btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button
                            className="confirm-btn"
                            onClick={handleConfirm}
                            disabled={selectedTrackIds.length === 0}
                        >
                            Use Selected Track{selectedTrackIds.length !== 1 ? 's' : ''}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
