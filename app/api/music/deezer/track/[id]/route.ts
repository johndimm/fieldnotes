import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    if (!id) {
        return NextResponse.json({ error: 'Missing track ID' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api.deezer.com/track/${id}`);
        if (!response.ok) {
            throw new Error(`Deezer API responded with ${response.status}`);
        }

        const data = await response.json();
        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        if (!data.preview) {
            return NextResponse.json({ error: 'No preview URL available' }, { status: 404 });
        }

        // Redirect to the actual binary audio stream
        return NextResponse.redirect(data.preview);
    } catch (error) {
        console.error('Deezer API Proxy Error:', error);
        return NextResponse.json({ error: 'Failed to fetch track from Deezer' }, { status: 500 });
    }
}
