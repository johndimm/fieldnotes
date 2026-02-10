import React from 'react';

interface MapComponentProps {
    locations: Array<{
        name: string;
        lat: number;
        lng: number;
        description?: string;
    }>;
    className?: string;
}

export default function MapComponent({ locations, className = '' }: MapComponentProps) {
    // For now, display a simple list of locations
    // This can be enhanced with an actual map library like Leaflet or Mapbox later
    return (
        <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📍 Locations</h3>
            <div className="space-y-3">
                {locations.map((location, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium text-sm">
                            {index + 1}
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">{location.name}</div>
                            {location.description && (
                                <div className="text-sm text-gray-600 mt-1">{location.description}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
