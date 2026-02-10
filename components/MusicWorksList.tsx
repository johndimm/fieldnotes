import React, { useState, useRef } from 'react';

interface MusicWork {
    title: string;
    kochel?: string;
    location: string;
    year: string;
    deezerUrl?: string;
    youtubeId?: string;
    musicPreviewUrl?: string;
    locationId?: string;
}

interface MusicWorksListProps {
    works: MusicWork[];
    selectedLocationId?: string | null;
    onWorkSelect?: (work: MusicWork) => void;
}

export default function MusicWorksList({ works, selectedLocationId, onWorkSelect }: MusicWorksListProps) {
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = (url: string) => {
        if (playingUrl === url) {
            audioRef.current?.pause();
            setPlayingUrl(null);
        } else {
            setPlayingUrl(url);
            if (audioRef.current) {
                audioRef.current.src = url;
                audioRef.current.play().catch(console.error);
            }
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🎼 Music Composed & Performed</h3>

            <audio
                ref={audioRef}
                onEnded={() => setPlayingUrl(null)}
                onPause={() => setPlayingUrl(null)}
            />

            <div className="space-y-4">
                {works.map((work, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{work.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    {work.kochel} · {work.location}, {work.year}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                {work.musicPreviewUrl && (
                                    <button
                                        onClick={() => togglePlay(work.musicPreviewUrl!)}
                                        className={`px-3 py-1.5 rounded text-sm transition-colors flex items-center gap-2 ${playingUrl === work.musicPreviewUrl
                                            ? 'bg-purple-600 text-white shadow-md'
                                            : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                                            }`}
                                    >
                                        {playingUrl === work.musicPreviewUrl ? (
                                            <><span>⏸</span> Stop</>
                                        ) : (
                                            <><span>▶️</span> Listen</>
                                        )}
                                    </button>
                                )}
                                {work.youtubeId && (
                                    <a
                                        href={`https://www.youtube.com/watch?v=${work.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 bg-red-50 text-red-700 text-sm rounded hover:bg-red-100 border border-red-200 transition-colors flex items-center gap-1"
                                    >
                                        <span>📺</span> YouTube
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
