/**
 * Deezer API helper
 * No authentication required for basic search and track data
 */

export interface DeezerTrack {
    id: string;
    name: string;
    artist: string;
    album: string;
    previewUrl: string;
    imageUrl: string;
    releaseDate: string;
    duration: number; // in seconds
    externalUrl: string;
}

/**
 * Search for tracks on Deezer
 */
export async function searchTrack(query: string, limit = 5): Promise<DeezerTrack[]> {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api.deezer.com/search?q=${encodedQuery}&limit=${limit}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Deezer API error: ${response.status}`);
    }

    const data = await response.json();

    return data.data.map((track: any) => ({
        id: track.id.toString(),
        name: track.title,
        artist: track.artist.name,
        album: track.album.title,
        previewUrl: track.preview,
        imageUrl: track.album.cover_big || track.album.cover_medium,
        releaseDate: track.release_date || '',
        duration: track.duration,
        externalUrl: track.link,
    }));
}

/**
 * Get a specific track by Deezer ID
 */
export async function getTrack(trackId: string): Promise<DeezerTrack | null> {
    const url = `https://api.deezer.com/track/${trackId}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Deezer API error: ${response.status}`);
    }

    const track = await response.json();

    return {
        id: track.id.toString(),
        name: track.title,
        artist: track.artist.name,
        album: track.album.title,
        previewUrl: track.preview,
        imageUrl: track.album.cover_big || track.album.cover_medium,
        releaseDate: track.release_date || '',
        duration: track.duration,
        externalUrl: track.link,
    };
}
