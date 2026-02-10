import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

let tokenExpirationTime = 0;

/**
 * Get a valid access token (client credentials flow)
 */
async function getAccessToken() {
    const now = Date.now();

    if (now < tokenExpirationTime) {
        // Token is still valid
        return;
    }

    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);

    // Set expiration time (expires_in is in seconds)
    tokenExpirationTime = now + (data.body.expires_in * 1000);
}

export interface SpotifyTrack {
    id: string;
    name: string;
    artist: string;
    album: string;
    previewUrl: string | null;
    imageUrl: string | null;
    releaseDate: string;
    popularity: number;
    externalUrl: string;
}

/**
 * Search for a track and return formatted results
 */
export async function searchTrack(query: string, limit = 5): Promise<SpotifyTrack[]> {
    await getAccessToken();

    const results = await spotifyApi.searchTracks(query, { limit, market: 'US' });

    return results.body.tracks?.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists.map(a => a.name).join(', '),
        album: track.album.name,
        previewUrl: track.preview_url,
        imageUrl: track.album.images[0]?.url || null,
        releaseDate: track.album.release_date,
        popularity: track.popularity,
        externalUrl: track.external_urls.spotify,
    })) || [];
}

/**
 * Get a specific track by Spotify ID
 */
export async function getTrack(trackId: string): Promise<SpotifyTrack | null> {
    await getAccessToken();

    const track = await spotifyApi.getTrack(trackId);

    return {
        id: track.body.id,
        name: track.body.name,
        artist: track.body.artists.map(a => a.name).join(', '),
        album: track.body.album.name,
        previewUrl: track.body.preview_url,
        imageUrl: track.body.album.images[0]?.url || null,
        releaseDate: track.body.album.release_date,
        popularity: track.body.popularity,
        externalUrl: track.body.external_urls.spotify,
    };
}
