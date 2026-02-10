'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { APIProvider, Map, Marker, useMap } from '@vis.gl/react-google-maps';

// Custom Polyline component because it's not exported from the core library
function Polyline(props: google.maps.PolylineOptions) {
    const map = useMap();
    const polyline = useMemo(() => new google.maps.Polyline(props), []);

    useEffect(() => {
        polyline.setMap(map);
        return () => polyline.setMap(null);
    }, [map]);

    useEffect(() => {
        polyline.setOptions(props);
    }, [props]);

    return null;
}

interface Location {
    id: string;
    name: string;
    lat: number;
    lng: number;
    description: string;
    date?: string;
    photoUrl?: string;
    photoTitle?: string;
    photoFocalPoint?: string;
    musicTitle?: string;
    musicPreviewUrl?: string;
    excerpts?: string[];
    notableAttendees?: string[];
}

interface InteractiveTourMapProps {
    locations: Location[];
    className?: string;
}

// Inner component to use useMap()
function MapContent({
    locations,
    selectedLocation,
    setSelectedLocation
}: {
    locations: Location[],
    selectedLocation: Location | null,
    setSelectedLocation: (loc: Location) => void
}) {
    const map = useMap();

    // Auto-fit bounds when locations change
    useEffect(() => {
        if (!map || locations.length === 0) return;

        const bounds = new google.maps.LatLngBounds();
        locations.forEach(loc => bounds.extend({ lat: loc.lat, lng: loc.lng }));
        map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
    }, [map, locations]);

    console.log('[MapContent] Rendering Map component');

    return (
        <Map
            defaultCenter={{ lat: 50, lng: 5 }}
            defaultZoom={4}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || undefined}
            gestureHandling="greedy"
            disableDefaultUI={false}
            className="w-full h-full rounded"
        >
            {/* Route Polyline */}
            {locations.length > 1 && (
                <Polyline
                    path={locations.map(loc => ({ lat: loc.lat, lng: loc.lng }))}
                    strokeColor="#3b82f6"
                    strokeOpacity={0.6}
                    strokeWeight={3}
                />
            )}

            {/* Location Markers */}
            {locations.map((location, idx) => (
                <Marker
                    key={location.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    onClick={() => setSelectedLocation(location)}
                    label={{
                        text: String(idx + 1),
                        color: selectedLocation?.id === location.id ? 'white' : '#2563eb',
                        fontWeight: 'bold'
                    }}
                />
            ))}
        </Map>
    );
}

export default function InteractiveTourMap({ locations, className = '' }: InteractiveTourMapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';
    console.log('[InteractiveTourMap] Rendering with', locations.length, 'locations');
    console.log('[InteractiveTourMap] API Key:', apiKey ? apiKey.substring(0, 10) + '...' : 'MISSING');

    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Initial selection - auto-select first location on mount
    useEffect(() => {
        if (locations.length > 0 && !selectedLocation) {
            setSelectedLocation(locations[0]);
        }
    }, [locations]);

    // Autoplay music when location with music is selected (except on initial load)
    useEffect(() => {
        if (selectedLocation?.musicPreviewUrl && audioRef.current) {
            audioRef.current.src = selectedLocation.musicPreviewUrl;
            // Don't autoplay on initial load - let user click play
            if (!isInitialLoad) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.log('Autoplay prevented:', err));
            } else {
                setIsInitialLoad(false);
            }
        } else {
            setIsPlaying(false);
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }, [selectedLocation]);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
            <APIProvider apiKey={apiKey}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🗺️ Interactive Tour Map</h3>

                <audio
                    ref={audioRef}
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Google Map Section */}
                    <div className="relative h-[500px] rounded border border-gray-200">
                        <MapContent
                            locations={locations}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col h-[500px] overflow-y-auto pr-2">
                        {selectedLocation ? (
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">{selectedLocation.name}</h4>
                                    {selectedLocation.date && (
                                        <p className="text-sm text-gray-600 mt-1">{selectedLocation.date}</p>
                                    )}
                                    <p className="text-gray-700 mt-2">{selectedLocation.description}</p>
                                </div>

                                {selectedLocation.notableAttendees && selectedLocation.notableAttendees.length > 0 && (
                                    <div className="bg-amber-50 p-3 rounded border border-amber-200">
                                        <h5 className="font-semibold text-amber-900 text-sm mb-1">Notable Attendees</h5>
                                        <p className="text-sm text-amber-800">{selectedLocation.notableAttendees.join(' · ')}</p>
                                    </div>
                                )}

                                {selectedLocation.photoUrl && (
                                    <div>
                                        <img
                                            src={selectedLocation.photoUrl}
                                            alt={selectedLocation.photoTitle || selectedLocation.name}
                                            className="w-full h-64 object-cover rounded border border-gray-200"
                                            style={{ objectPosition: selectedLocation.photoFocalPoint || 'center' }}
                                        />
                                        {selectedLocation.photoTitle && (
                                            <p className="text-xs text-gray-500 mt-2 text-center italic">{selectedLocation.photoTitle}</p>
                                        )}
                                    </div>
                                )}

                                {selectedLocation.musicPreviewUrl && (
                                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="font-semibold text-purple-900 text-sm">🎵 Now Playing Preview</h5>
                                                <p className="text-xs text-purple-700 font-medium">{selectedLocation.musicTitle}</p>
                                            </div>
                                            <button
                                                onClick={togglePlayPause}
                                                className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-md"
                                            >
                                                {isPlaying ? '⏸' : '▶'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {selectedLocation.excerpts && selectedLocation.excerpts.length > 0 && (
                                    <div className="bg-gray-50 p-4 rounded border border-gray-100 italic text-sm text-gray-600 space-y-2">
                                        {selectedLocation.excerpts.map((excerpt, i) => (
                                            <p key={i}>"{excerpt}"</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400 text-center flex-col space-y-3">
                                <span className="text-4xl">👆</span>
                                <p className="font-medium">Click a marker on the map to explore</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Legend/Selector */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                        {locations.map((loc, idx) => (
                            <button
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-3 py-1.5 rounded text-xs transition-colors border ${selectedLocation?.id === loc.id
                                    ? 'bg-blue-600 text-white border-blue-700 font-semibold'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                                    }`}
                            >
                                {idx + 1}. {loc.name}
                                {loc.musicPreviewUrl && <span className="ml-1">🎵</span>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Music Track List */}
                {locations.some(loc => loc.musicPreviewUrl) && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="text-md font-semibold text-gray-900 mb-3">🎵 Music Tracks by Location</h4>
                        <div className="space-y-2">
                            {locations.map((loc, idx) => (
                                loc.musicPreviewUrl && (
                                    <div
                                        key={loc.id}
                                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                            selectedLocation?.id === loc.id
                                                ? 'bg-purple-50 border-purple-300 shadow-sm'
                                                : 'bg-gray-50 border-gray-200 hover:border-purple-200'
                                        }`}
                                    >
                                        <button
                                            onClick={() => {
                                                setSelectedLocation(loc);
                                                // Trigger play
                                                if (audioRef.current) {
                                                    audioRef.current.src = loc.musicPreviewUrl!;
                                                    audioRef.current.play()
                                                        .then(() => setIsPlaying(true))
                                                        .catch(err => console.log('Play prevented:', err));
                                                }
                                            }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                                selectedLocation?.id === loc.id && isPlaying
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-white border-2 border-purple-400 text-purple-600 hover:bg-purple-100'
                                            }`}
                                        >
                                            {selectedLocation?.id === loc.id && isPlaying ? '⏸' : '▶'}
                                        </button>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                                                    {idx + 1}
                                                </span>
                                                <span className="font-medium text-gray-900 truncate">{loc.musicTitle}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-0.5">{loc.name} {loc.date && `· ${loc.date}`}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </APIProvider>
        </div>
    );
}
