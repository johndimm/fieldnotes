import { NextRequest, NextResponse } from 'next/server';
import { searchTrack } from '@/lib/spotify';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '5');

    if (!query) {
        return NextResponse.json(
            { error: 'Query parameter "q" is required' },
            { status: 400 }
        );
    }

    try {
        const tracks = await searchTrack(query, limit);
        return NextResponse.json({ tracks });
    } catch (error) {
        console.error('Spotify API error:', error);
        console.error('Client ID present:', !!process.env.SPOTIFY_CLIENT_ID);
        console.error('Client Secret present:', !!process.env.SPOTIFY_CLIENT_SECRET);
        return NextResponse.json(
            {
                error: 'Failed to search tracks',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }

}
