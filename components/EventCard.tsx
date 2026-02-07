import type { EventWithRelations } from '@/lib/db';

interface EventCardProps {
    event: EventWithRelations;
}

function formatDateRange(earliest: string | null, latest: string | null, certainty: string) {
    if (!earliest && !latest) return 'Date unknown';

    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    // Handle case where one date is null
    if (!earliest || !latest) {
        const validDate = earliest || latest;
        return validDate ? `${formatDate(validDate)} (${certainty})` : 'Date unknown';
    }

    if (earliest === latest) {
        const certaintyBadge = certainty === 'confirmed' ? '' : ` (${certainty})`;
        return formatDate(earliest) + certaintyBadge;
    }

    return `${formatDate(earliest)} – ${formatDate(latest)} (${certainty})`;
}

function getCertaintyColor(certainty: string) {
    switch (certainty) {
        case 'confirmed': return 'text-green-700 bg-green-50';
        case 'likely': return 'text-blue-700 bg-blue-50';
        case 'disputed': return 'text-orange-700 bg-orange-50';
        default: return 'text-gray-700 bg-gray-50';
    }
}

export default function EventCard({ event }: EventCardProps) {
    // Group entities by role
    const entityRoles = event.entities.reduce((acc, entity) => {
        if (!acc[entity.role]) acc[entity.role] = [];
        acc[entity.role].push(entity);
        return acc;
    }, {} as Record<string, typeof event.entities>);

    // Check for conflicting venues (multiple venue claims)
    const hasConflictingVenues = event.venues.length > 1;

    return (
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
            {/* Date and Certainty */}
            <div className="flex items-center gap-2 mb-2">
                <time className="text-sm font-medium text-gray-900">
                    {formatDateRange(event.date_earliest, event.date_latest, event.date_certainty)}
                </time>
                {event.date_certainty !== 'confirmed' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getCertaintyColor(event.date_certainty)}`}>
                        {event.date_certainty}
                    </span>
                )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
            </h3>

            {/* Description */}
            {event.description && (
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {event.description}
                </p>
            )}

            {/* Entities */}
            {Object.entries(entityRoles).map(([role, entities]) => (
                <div key={role} className="mb-2">
                    <span className="text-xs uppercase tracking-wide text-gray-500 mr-2">
                        {role}:
                    </span>
                    <span className="text-sm text-gray-900">
                        {entities.map(e => e.name).join(', ')}
                    </span>
                </div>
            ))}

            {/* Venues - with ambiguity indicator */}
            {event.venues.length > 0 && (
                <div className="mb-2">
                    <span className="text-xs uppercase tracking-wide text-gray-500 mr-2">
                        Venue{event.venues.length > 1 ? 's' : ''}:
                    </span>
                    {hasConflictingVenues ? (
                        <div className="inline-flex flex-col gap-1 mt-1">
                            {event.venues.map((venue, idx) => {
                                const source = event.sources.find(s => s.id === venue.source_id);
                                return (
                                    <div key={idx} className="text-sm">
                                        <span className="text-gray-900">{venue.name}</span>
                                        {source && (
                                            <span className="text-xs text-gray-500 ml-2">
                                                [per {source.title}]
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                            <span className="text-xs italic text-orange-600 mt-1">
                                ⚠ Conflicting venue claims
                            </span>
                        </div>
                    ) : (
                        <span className="text-sm text-gray-900">
                            {event.venues[0].name}
                        </span>
                    )}
                </div>
            )}

            {/* Media */}
            {event.media && event.media.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                    {/* Photos */}
                    {event.media.filter(m => m.media_type === 'photo').length > 0 && (
                        <div className="mb-4">
                            <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">Photos</div>
                            <div className="grid grid-cols-2 gap-3">
                                {event.media.filter(m => m.media_type === 'photo').map(photo => (
                                    <div key={photo.id} className="space-y-1">
                                        <img
                                            src={photo.url}
                                            alt={photo.title || 'Historical photo'}
                                            className="w-full h-auto object-contain rounded border border-gray-200 bg-gray-50"
                                        />
                                        {photo.title && (
                                            <div className="text-xs text-gray-700">{photo.title}</div>
                                        )}
                                        {photo.credit && (
                                            <div className="text-xs text-gray-400">Credit: {photo.credit}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Video Links */}
                    {event.media.filter(m => m.media_type === 'video_link').length > 0 && (
                        <div>
                            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Related Performance</div>
                            {event.media.filter(m => m.media_type === 'video_link').map(video => (
                                <a
                                    key={video.id}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    {video.title || 'Watch Video'}
                                </a>
                            ))}
                            {event.media.filter(m => m.media_type === 'video_link').map(video => video.description && (
                                <div key={`desc-${video.id}`} className="text-xs text-gray-500 mt-2">
                                    {video.description}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Video embeds (if any still work) */}
                    {event.media.filter(m => m.media_type === 'video' && m.url.includes('youtube.com')).map(mediaItem => (
                        <div key={mediaItem.id} className="space-y-2">
                            <div className="text-xs uppercase tracking-wide text-gray-500">Video</div>
                            <iframe
                                width="100%"
                                height="315"
                                src={mediaItem.url.replace('watch?v=', 'embed/')}
                                title={mediaItem.title || 'Video'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded"
                            />
                            {mediaItem.title && (
                                <div className="text-sm text-gray-700">{mediaItem.title}</div>
                            )}
                            {mediaItem.description && (
                                <div className="text-xs text-gray-500">{mediaItem.description}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Witness Accounts / Excerpts */}
            {event.excerpts && event.excerpts.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                        Witness Accounts
                    </div>
                    <div className="space-y-3">
                        {event.excerpts.map(excerpt => (
                            <blockquote key={excerpt.id} className="border-l-2 border-gray-300 pl-3 py-1">
                                <p className="text-sm text-gray-700 italic mb-1">
                                    "{excerpt.excerpt_text}"
                                </p>
                                <footer className="text-xs text-gray-500">
                                    — {excerpt.speaker || 'Anonymous'}
                                    {excerpt.source_title && (
                                        <span className="ml-1">({excerpt.source_title})</span>
                                    )}
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            )}

            {/* Sources */}
            {event.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                    <details className="text-xs text-gray-500">
                        <summary className="cursor-pointer hover:text-gray-700">
                            {event.sources.length} source{event.sources.length !== 1 ? 's' : ''}
                        </summary>
                        <ul className="mt-2 space-y-1 ml-4">
                            {event.sources.map(source => (
                                <li key={source.id}>
                                    {source.url ? (
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {source.title}
                                        </a>
                                    ) : (
                                        <span>{source.title}</span>
                                    )}
                                    <span className="text-gray-400 ml-1">({source.source_type})</span>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            )}
        </div>
    );
}
