'use client';

import { useEffect, useState } from 'react';
import EventListItem from '@/components/EventListItem';
import type { EventWithRelations } from '@/lib/db';

export default function Home() {
  const [events, setEvents] = useState<EventWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to load events');
        }
        const eventIds = await response.json();

        // Fetch full details for each event
        const fullEvents = await Promise.all(
          eventIds.map(async (event: { id: number }) => {
            const res = await fetch(`/api/events?id=${event.id}`);
            return res.json();
          })
        );

        setEvents(fullEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Fieldnotes</h1>
          <p className="text-sm text-gray-600 mt-1">
            Soho, London · Mid-1960s Music Scene
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {loading && (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading events...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            Error: {error}
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No events found</div>
            <p className="text-sm text-gray-400">
              Run <code className="bg-gray-100 px-2 py-1 rounded">npm run db:seed</code> to initialize sample data
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="space-y-6">
            <div className="text-sm text-gray-500 mb-4">
              {events.length} event{events.length !== 1 ? 's' : ''} found
            </div>

            {events.map(event => (
              <EventListItem key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 text-center text-xs text-gray-400">
        <p>Evidence-first research · Ambiguity preserved · Sources tracked</p>
      </footer>
    </div>
  );
}

