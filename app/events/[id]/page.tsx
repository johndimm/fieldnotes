'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { EventWithRelations } from '@/lib/db';
import EventCard from '@/components/EventCard';
import DocumentaryViewer from '@/components/DocumentaryViewer';
import { createCuratedHendrixDocumentary } from '@/lib/documentary';


export default function EventDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [event, setEvent] = useState<EventWithRelations | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [documentaryMode, setDocumentaryMode] = useState(false);

    useEffect(() => {
        async function loadEvent() {
            try {
                const response = await fetch(`/api/events?id=${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to load event');
                }
                const eventData = await response.json();
                setEvent(eventData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        }

        loadEvent();
    }, [params.id]);

    return (
        <div className="min-h-screen bg-stone-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <button
                        onClick={() => router.push('/')}
                        className="text-sm text-blue-600 hover:text-blue-700 mb-2 flex items-center gap-1"
                    >
                        ← Back to Events
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Fieldnotes</h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Soho, London · Mid-1960s Music Scene
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
                {loading && (
                    <div className="text-center py-12">
                        <div className="text-gray-500">Loading event...</div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        Error: {error}
                    </div>
                )}

                {!loading && !error && event && (
                    <>
                        {/* Documentary Mode */}
                        {documentaryMode && (
                            <DocumentaryViewer
                                slides={createCuratedHendrixDocumentary()}
                                audioUrl="/audio/documentary_music.mp3"
                                onClose={() => setDocumentaryMode(false)}
                            />
                        )}

                        {/* Documentary Launch Button */}
                        {event.media.filter(m => m.media_type === 'photo').length >= 3 && (
                            <div className="mb-6">
                                <button
                                    onClick={() => setDocumentaryMode(true)}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg font-medium group"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">🎬</span>
                                    <span>Watch Documentary Segment</span>
                                    <span className="text-sm opacity-75">(~75 seconds)</span>
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    Experience the story through Ken Burns-style photography with witness accounts
                                </p>
                            </div>
                        )}

                        <EventCard event={event} />
                    </>
                )}
            </main>
        </div>
    );
}
