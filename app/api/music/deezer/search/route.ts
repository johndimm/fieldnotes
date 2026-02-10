import { NextRequest, NextResponse } from 'next/server';
import { searchTrack } from '@/lib/deezer';

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
        console.error('Deezer API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to search tracks',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}
