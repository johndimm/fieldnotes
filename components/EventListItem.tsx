import type { EventWithRelations } from '@/lib/db';
import Link from 'next/link';

interface EventListItemProps {
    event: EventWithRelations;
}

function formatDateRange(earliest: string | null, latest: string | null, certainty: string) {
    if (!earliest && !latest) return 'Date unknown';

    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    if (!earliest || !latest) {
        const validDate = earliest || latest;
        return validDate ? formatDate(validDate) : 'Date unknown';
    }

    if (earliest === latest) {
        return formatDate(earliest);
    }

    return `${formatDate(earliest)} – ${formatDate(latest)}`;
}

export default function EventListItem({ event }: EventListItemProps) {
    const performers = event.entities.filter(e => e.role === 'performer');
    const venue = event.venues[0];
    const photoCount = event.media.filter(m => m.media_type === 'photo').length;
    const hasVideo = event.media.some(m => m.media_type === 'video' || m.media_type === 'video_link');
    const excerptCount = event.excerpts.length;

    return (
        <Link
            href={`/events/${event.id}`}
            className="block border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all bg-white group"
        >
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {event.title}
            </h2>

            {/* Date */}
            <div className="text-sm text-gray-600 mb-3">
                {formatDateRange(event.date_earliest, event.date_latest, event.date_certainty)}
            </div>

            {/* Performers & Venue */}
            <div className="space-y-1 mb-3">
                {performers.length > 0 && (
                    <div className="text-sm">
                        <span className="text-gray-500 uppercase tracking-wide text-xs">Performer:</span>{' '}
                        <span className="text-gray-900">
                            {performers.map(p => p.name).join(', ')}
                        </span>
                    </div>
                )}
                {venue && (
                    <div className="text-sm">
                        <span className="text-gray-500 uppercase tracking-wide text-xs">Venue:</span>{' '}
                        <span className="text-gray-900">{venue.name}</span>
                    </div>
                )}
            </div>

            {/* Description preview */}
            {event.description && (
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {event.description}
                </p>
            )}

            {/* Media indicators */}
            <div className="flex gap-3 text-xs text-gray-500">
                {photoCount > 0 && (
                    <span className="flex items-center gap-1">
                        📷 {photoCount} photo{photoCount !== 1 ? 's' : ''}
                    </span>
                )}
                {hasVideo && (
                    <span className="flex items-center gap-1">
                        🎥 Video
                    </span>
                )}
                {excerptCount > 0 && (
                    <span className="flex items-center gap-1">
                        💬 {excerptCount} account{excerptCount !== 1 ? 's' : ''}
                    </span>
                )}
            </div>
        </Link>
    );
}
