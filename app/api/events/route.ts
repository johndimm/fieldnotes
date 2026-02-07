import { NextResponse } from 'next/server';
import { getAllEvents, getEventById } from '@/lib/db';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const event = getEventById(parseInt(id));
        if (!event) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 });
        }
        return NextResponse.json(event);
    }

    const events = getAllEvents();
    return NextResponse.json(events);
}
