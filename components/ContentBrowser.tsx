'use client';

import { useState, useRef } from 'react';
import type { EnhancedLocation, ContentItem } from '@/lib/documentary';

type FilterType = 'all' | 'quotes' | 'photos' | 'music' | 'timeline';

interface ContentBrowserProps {
    locations: EnhancedLocation[];
    timeline?: ContentItem[];
    className?: string;
}

export default function ContentBrowser({ locations, timeline = [], className = '' }: ContentBrowserProps) {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [expandedLocations, setExpandedLocations] = useState<Set<string>>(new Set(locations.map(l => l.id)));
    const [expandedPassages, setExpandedPassages] = useState<Set<string>>(new Set());
    const [playingAudio, setPlayingAudio] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const filters: { type: FilterType; label: string; icon: string }[] = [
        { type: 'all', label: 'All', icon: '📋' },
        { type: 'quotes', label: 'Quotes', icon: '💬' },
        { type: 'photos', label: 'Photos', icon: '📸' },
        { type: 'music', label: 'Music', icon: '🎵' },
        { type: 'timeline', label: 'Timeline', icon: '📅' },
    ];

    const toggleLocation = (locationId: string) => {
        const newExpanded = new Set(expandedLocations);
        if (newExpanded.has(locationId)) {
            newExpanded.delete(locationId);
        } else {
            newExpanded.add(locationId);
        }
        setExpandedLocations(newExpanded);
    };

    const togglePassage = (passageId: string) => {
        const newExpanded = new Set(expandedPassages);
        if (newExpanded.has(passageId)) {
            newExpanded.delete(passageId);
        } else {
            newExpanded.add(passageId);
        }
        setExpandedPassages(newExpanded);
    };

    const playMusic = (previewUrl: string, itemId: string) => {
        if (audioRef.current) {
            if (playingAudio === itemId) {
                audioRef.current.pause();
                setPlayingAudio(null);
            } else {
                audioRef.current.src = previewUrl;
                audioRef.current.play().catch(console.error);
                setPlayingAudio(itemId);
            }
        }
    };

    // Get all content items across all locations
    const getAllContent = (): ContentItem[] => {
        return locations.flatMap(loc => loc.content);
    };

    // Filter content based on active filter
    const getFilteredContent = () => {
        const allContent = getAllContent();

        switch (activeFilter) {
            case 'quotes':
                return allContent.filter(item => item.type === 'quote');
            case 'photos':
                return allContent.filter(item => item.type === 'photo');
            case 'music':
                return allContent.filter(item => item.type === 'music');
            case 'timeline':
                return timeline.length > 0 ? timeline : allContent.filter(item => item.type === 'timeline');
            default:
                return allContent;
        }
    };

    // Get location name by ID
    const getLocationName = (locationId: string): string => {
        return locations.find(l => l.id === locationId)?.name || locationId;
    };

    // Render a single content item
    const renderContentItem = (item: ContentItem, showLocation: boolean = false) => {
        switch (item.type) {
            case 'quote':
                return (
                    <div key={item.id} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                        <p className="text-gray-800 italic">"{item.text}"</p>
                        {item.speaker && (
                            <p className="text-sm text-amber-700 mt-2 font-medium">— {item.speaker}</p>
                        )}
                        {item.source && (
                            <p className="text-xs text-gray-500 mt-1">{item.source}</p>
                        )}
                        {showLocation && (
                            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
                                <span>📍</span> {getLocationName(item.locationId)}
                            </p>
                        )}
                    </div>
                );

            case 'photo':
                return (
                    <div key={item.id} className="bg-gray-50 rounded overflow-hidden border border-gray-200">
                        {item.photoUrl && (
                            <img
                                src={item.photoUrl}
                                alt={item.photoTitle || 'Historical photo'}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-3">
                            {item.photoTitle && (
                                <p className="text-sm font-medium text-gray-800">{item.photoTitle}</p>
                            )}
                            {item.credit && (
                                <p className="text-xs text-gray-500 mt-1">Credit: {item.credit}</p>
                            )}
                            {showLocation && (
                                <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
                                    <span>📍</span> {getLocationName(item.locationId)}
                                </p>
                            )}
                        </div>
                    </div>
                );

            case 'music':
                const isPlaying = playingAudio === item.id;
                return (
                    <div key={item.id} className="bg-purple-50 border border-purple-200 p-4 rounded flex items-center justify-between">
                        <div>
                            <p className="text-purple-800 font-medium flex items-center gap-2">
                                <span>🎵</span> {item.musicTitle}
                            </p>
                            {showLocation && (
                                <p className="text-xs text-blue-600 mt-1 flex items-center gap-1">
                                    <span>📍</span> {getLocationName(item.locationId)}
                                </p>
                            )}
                        </div>
                        {item.musicPreviewUrl && (
                            <button
                                onClick={() => playMusic(item.musicPreviewUrl!, item.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    isPlaying
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                                }`}
                            >
                                {isPlaying ? '⏸ Pause' : '▶ Play'}
                            </button>
                        )}
                    </div>
                );

            case 'passage':
                const isExpanded = expandedPassages.has(item.id);
                const displayText = isExpanded
                    ? item.passage
                    : (item.passage?.substring(0, 150) + '...');
                return (
                    <div key={item.id} className="bg-blue-50 border border-blue-200 p-4 rounded">
                        <p className="text-gray-700">{displayText}</p>
                        {item.passage && item.passage.length > 150 && (
                            <button
                                onClick={() => togglePassage(item.id)}
                                className="text-blue-600 text-sm mt-2 hover:underline"
                            >
                                {isExpanded ? 'Show less' : 'Read more'}
                            </button>
                        )}
                        {item.passageSource && (
                            <p className="text-xs text-gray-500 mt-2">{item.passageSource}</p>
                        )}
                        {showLocation && (
                            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
                                <span>📍</span> {getLocationName(item.locationId)}
                            </p>
                        )}
                    </div>
                );

            case 'timeline':
                return (
                    <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                        <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-1.5" />
                        <div>
                            {item.date && (
                                <p className="text-sm font-semibold text-blue-600">{item.date}</p>
                            )}
                            <p className="text-gray-700">{item.text}</p>
                            {showLocation && (
                                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                    <span>📍</span> {getLocationName(item.locationId)}
                                </p>
                            )}
                        </div>
                    </div>
                );

            case 'attendee':
                return (
                    <div key={item.id} className="bg-green-50 border border-green-200 p-3 rounded">
                        <p className="text-sm text-green-800 font-medium flex items-center gap-2">
                            <span>👥</span> Notable Attendees
                        </p>
                        <p className="text-gray-700 mt-1">{item.text}</p>
                    </div>
                );

            default:
                return null;
        }
    };

    // Render the "All" view (grouped by location)
    const renderAllView = () => {
        return (
            <div className="space-y-4">
                {locations.map((location, idx) => {
                    const isExpanded = expandedLocations.has(location.id);
                    return (
                        <div key={location.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleLocation(location.id)}
                                className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-medium">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{location.name}</h4>
                                        {location.date && (
                                            <p className="text-sm text-gray-500">{location.date}</p>
                                        )}
                                    </div>
                                </div>
                                <span className="text-gray-400 text-xl">
                                    {isExpanded ? '−' : '+'}
                                </span>
                            </button>

                            {isExpanded && (
                                <div className="p-4 space-y-4">
                                    <p className="text-gray-700">{location.description}</p>

                                    {location.photoUrl && (
                                        <div className="rounded overflow-hidden border border-gray-200">
                                            <img
                                                src={location.photoUrl}
                                                alt={location.photoTitle || location.name}
                                                className="w-full h-48 object-cover"
                                                style={{ objectPosition: location.photoFocalPoint || 'center' }}
                                            />
                                            {location.photoTitle && (
                                                <p className="text-xs text-gray-500 p-2 text-center italic">
                                                    {location.photoTitle}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* Render all content items for this location */}
                                    <div className="space-y-3">
                                        {location.content.map(item => renderContentItem(item, false))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    // Render filtered view (flat list)
    const renderFilteredView = () => {
        const filteredContent = getFilteredContent();

        if (activeFilter === 'timeline') {
            return (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="space-y-4">
                        {filteredContent.map(item => renderContentItem(item, true))}
                    </div>
                </div>
            );
        }

        if (activeFilter === 'photos') {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredContent.map(item => renderContentItem(item, true))}
                </div>
            );
        }

        return (
            <div className="space-y-4">
                {filteredContent.map(item => renderContentItem(item, true))}
            </div>
        );
    };

    return (
        <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
            {/* Audio element for music playback */}
            <audio
                ref={audioRef}
                onEnded={() => setPlayingAudio(null)}
            />

            {/* Filter tabs */}
            <div className="border-b border-gray-200 p-4">
                <div className="flex flex-wrap gap-2">
                    {filters.map(filter => (
                        <button
                            key={filter.type}
                            onClick={() => setActiveFilter(filter.type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                                activeFilter === filter.type
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <span>{filter.icon}</span>
                            {filter.label}
                            {activeFilter === filter.type && (
                                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                    {filter.type === 'all'
                                        ? locations.length
                                        : getFilteredContent().length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content area */}
            <div className="p-4">
                {activeFilter === 'all' ? renderAllView() : renderFilteredView()}
            </div>
        </div>
    );
}
