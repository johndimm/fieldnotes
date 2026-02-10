'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import DocumentaryViewer from '@/components/DocumentaryViewer';
import InteractiveTourMap from '@/components/InteractiveTourMap';
import ContentBrowser from '@/components/ContentBrowser';
import {
    createCuratedHendrixDocumentary,
    getDocumentaryMusicTracks,
    createCuratedMozartDocumentary,
    getMozartDocumentaryMusicTracks,
    generateDocumentaryFromContent,
    createKillingFloorDocumentary,
    createBritishBluesContextDocumentary,
    createMozartIllnessDocumentary
} from '@/lib/documentary';
import { getDocumentaryConfig, type DocumentaryConfig } from '@/lib/documentary-registry';
import '../../music-selector.css';

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

// Documentary Card Component with thumbnail and script preview
function DocumentaryCard({
    title,
    duration,
    imageUrl,
    imagePosition = 'center',
    description,
    scriptPreview,
    onClick
}: {
    title: string;
    duration: string;
    imageUrl: string;
    imagePosition?: string;
    description: string;
    scriptPreview: string;
    onClick: () => void;
}) {
    const [showScript, setShowScript] = useState(false);

    return (
        <div className="relative group">
            <button
                onClick={onClick}
                onMouseEnter={() => setShowScript(true)}
                onMouseLeave={() => setShowScript(false)}
                className="w-full rounded-lg border border-gray-200 overflow-hidden text-left transition-all hover:border-blue-400 hover:shadow-lg"
            >
                <div className="relative h-32 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ objectPosition: imagePosition }}
                        onError={(e) => {
                            // Fallback for broken images
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23374151" width="400" height="300"/><text fill="%239CA3AF" font-size="48" x="50%" y="50%" text-anchor="middle" dy=".3em">📽️</text></svg>';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                        <div className="text-white font-semibold">{title}</div>
                        <div className="text-white/80 text-xs">{description} · {duration}</div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        ▶ Play
                    </div>
                </div>
            </button>

            {/* Script preview tooltip */}
            {showScript && (
                <div className="absolute z-50 left-0 right-0 top-full mt-2 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl max-h-40 overflow-y-auto">
                    <div className="font-semibold text-amber-400 mb-1">Script Preview:</div>
                    <div className="italic leading-relaxed">{scriptPreview}</div>
                </div>
            )}
        </div>
    );
}

// Convert EnhancedLocation to InteractiveTourMap format
function convertLocationsForMap(locations: DocumentaryConfig['locations']) {
    return locations.map(loc => {
        const quotes = loc.content.filter(c => c.type === 'quote');
        const photos = loc.content.filter(c => c.type === 'photo');
        const music = loc.content.filter(c => c.type === 'music');

        return {
            id: loc.id,
            name: loc.name,
            lat: loc.lat,
            lng: loc.lng,
            description: loc.description,
            date: loc.date,
            photoUrl: loc.photoUrl || photos[0]?.photoUrl,
            photoTitle: loc.photoTitle || photos[0]?.photoTitle,
            photoFocalPoint: loc.photoFocalPoint,
            musicTitle: music[0]?.musicTitle,
            musicPreviewUrl: music[0]?.musicPreviewUrl,
            excerpts: quotes.map(q => `${q.text} - ${q.speaker}`)
        };
    });
}

// Get script preview from locations
function getScriptPreview(locations: DocumentaryConfig['locations']): string {
    const quotes = locations.flatMap(loc =>
        loc.content.filter(c => c.type === 'quote').slice(0, 1)
    ).slice(0, 3);

    return quotes.map(q => `"${q.text?.slice(0, 50)}..."`).join(' ');
}

// Get first image from locations
function getFirstImage(config: DocumentaryConfig): string {
    if (config.heroImage) return config.heroImage;

    for (const loc of config.locations) {
        if (loc.photoUrl) return loc.photoUrl;
        const photo = loc.content.find(c => c.type === 'photo');
        if (photo?.photoUrl) return photo.photoUrl;
    }

    return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%23374151" width="400" height="300"/><text fill="%239CA3AF" font-size="48" x="50%" y="50%" text-anchor="middle" dy=".3em">📽️</text></svg>';
}

type DocumentaryType = 'curated' | 'auto' | 'killing-floor' | 'british-blues' | 'mozart-illness';

export default function EventDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [config, setConfig] = useState<DocumentaryConfig | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [documentaryMode, setDocumentaryMode] = useState(false);
    const [documentaryType, setDocumentaryType] = useState<DocumentaryType>('auto');
    const [selectedTracks, setSelectedTracks] = useState<DeezerTrack[]>([]);

    const eventId = params.id as string;
    const isMozartEvent = eventId === '3' || eventId === 'mozart-grand-tour-1763';
    const isHendrixSohoEvent = eventId === '2' || eventId === 'hendrix-soho-1966';

    useEffect(() => {
        async function loadEvent() {
            try {
                const docConfig = getDocumentaryConfig(eventId);

                if (docConfig) {
                    setConfig(docConfig);
                    setLoading(false);
                    return;
                }

                // Fallback for unknown events
                setError(`Documentary "${eventId}" not found`);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        }

        loadEvent();
    }, [eventId]);

    // Auto-load documentary music tracks for legacy events
    useEffect(() => {
        async function loadMusic() {
            if (isMozartEvent) {
                const tracks = await getMozartDocumentaryMusicTracks();
                if (tracks.length > 0) setSelectedTracks(tracks);
            } else if (isHendrixSohoEvent) {
                const tracks = await getDocumentaryMusicTracks();
                if (tracks.length > 0) setSelectedTracks(tracks);
            }
        }
        loadMusic();
    }, [isMozartEvent, isHendrixSohoEvent]);

    // Get slides for documentary viewer
    const getSlides = () => {
        if (!config) return [];

        // Special curated documentaries for Hendrix and Mozart
        if (documentaryType === 'curated') {
            if (isHendrixSohoEvent) return createCuratedHendrixDocumentary();
            if (isMozartEvent) return createCuratedMozartDocumentary();
        }
        if (documentaryType === 'killing-floor' && isHendrixSohoEvent) {
            return createKillingFloorDocumentary();
        }
        if (documentaryType === 'british-blues' && isHendrixSohoEvent) {
            return createBritishBluesContextDocumentary();
        }
        if (documentaryType === 'mozart-illness' && isMozartEvent) {
            return createMozartIllnessDocumentary();
        }

        // Auto-generate from content for all documentaries
        return generateDocumentaryFromContent(config.locations);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center">
                <div className="text-gray-500">Loading documentary...</div>
            </div>
        );
    }

    if (error || !config) {
        return (
            <div className="min-h-screen bg-stone-50">
                <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                    <div className="max-w-4xl mx-auto px-6 py-6">
                        <button
                            onClick={() => router.push('/')}
                            className="text-sm text-blue-600 hover:text-blue-700 mb-2 flex items-center gap-1"
                        >
                            ← Back to Home
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900">Fieldnotes</h1>
                    </div>
                </header>
                <main className="max-w-4xl mx-auto px-6 py-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        {error || 'Documentary not found'}
                    </div>
                </main>
            </div>
        );
    }

    const interactiveLocations = convertLocationsForMap(config.locations);
    const heroImage = getFirstImage(config);
    const scriptPreview = getScriptPreview(config.locations);

    return (
        <div className="min-h-screen bg-stone-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <button
                        onClick={() => router.push('/')}
                        className="text-sm text-blue-600 hover:text-blue-700 mb-2 flex items-center gap-1"
                    >
                        ← Back to Home
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
                    <p className="text-sm text-gray-600 mt-1">
                        {config.locationName} · {config.dateRange}
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Documentary Mode */}
                {documentaryMode && (
                    <DocumentaryViewer
                        slides={getSlides()}
                        audioTracks={selectedTracks}
                        onClose={() => setDocumentaryMode(false)}
                    />
                )}

                {/* Interactive Tour Map */}
                <InteractiveTourMap
                    locations={interactiveLocations}
                    className="mb-8"
                />

                {/* Documentary Selection */}
                <div className="mb-8 bg-white rounded-lg border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentary Segments</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Click to watch · Hover for script preview
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Auto-generated documentary - available for all */}
                        <DocumentaryCard
                            title="Location by Location"
                            duration={`~${config.locations.length * 12}s`}
                            imageUrl={heroImage}
                            description="Every stop on the journey"
                            scriptPreview={scriptPreview}
                            onClick={() => { setDocumentaryType('auto'); setDocumentaryMode(true); }}
                        />

                        {/* Special curated documentaries for Hendrix */}
                        {isHendrixSohoEvent && (
                            <>
                                <DocumentaryCard
                                    title="The Complete Story"
                                    duration="~100s"
                                    imageUrl="/photos/jimi_hendrix_1967.png"
                                    imagePosition="top"
                                    description="From Heathrow to legend"
                                    scriptPreview="I'd never been to England before... He asked if he could play, I had a funny feeling about him... He walked off, and my life was never the same again..."
                                    onClick={() => { setDocumentaryType('curated'); setDocumentaryMode(true); }}
                                />
                                <DocumentaryCard
                                    title="Killing Floor"
                                    duration="~45s"
                                    imageUrl="/photos/regent_street_polytechnic.png"
                                    description="The night that changed everything"
                                    scriptPreview="'Killing Floor' - written by Howlin' Wolf in Chicago, 1964... Every guitarist in London knew this song note for note..."
                                    onClick={() => { setDocumentaryType('killing-floor'); setDocumentaryMode(true); }}
                                />
                                <DocumentaryCard
                                    title="British Blues Boom"
                                    duration="~50s"
                                    imageUrl="/archival/howlin_wolf_1970.jpg"
                                    description="The scene before Hendrix arrived"
                                    scriptPreview="Howlin' Wolf. Muddy Waters. B.B. King. Their records crossed the Atlantic..."
                                    onClick={() => { setDocumentaryType('british-blues'); setDocumentaryMode(true); }}
                                />
                            </>
                        )}

                        {/* Special curated documentaries for Mozart */}
                        {isMozartEvent && (
                            <>
                                <DocumentaryCard
                                    title="The Grand Tour"
                                    duration="~150s"
                                    imageUrl="/mozart/grand_tour_map.jpg"
                                    description="Complete journey across Europe"
                                    scriptPreview="The miracle which God let be born in Salzburg... My boy knows more in his eighth year than one would expect from a man of forty..."
                                    onClick={() => { setDocumentaryType('curated'); setDocumentaryMode(true); }}
                                />
                                <DocumentaryCard
                                    title="The Hague Crisis"
                                    duration="~60s"
                                    imageUrl="/mozart/the_hague.png"
                                    description="Both children nearly die"
                                    scriptPreview="Prepare your heart to hear one of the saddest events... Wolfgang was so ill that he could not speak..."
                                    onClick={() => { setDocumentaryType('mozart-illness'); setDocumentaryMode(true); }}
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* Content Browser */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse Content</h3>
                    <ContentBrowser
                        locations={config.locations}
                        timeline={config.timeline}
                    />
                </div>

                {/* Event Summary Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h2>
                    <p className="text-gray-600 mb-4">{config.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>📍 {config.locations.length} locations</span>
                        <span>📅 {config.dateRange}</span>
                        <span>🌍 {config.locationName}</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
