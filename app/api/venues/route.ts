import { NextResponse } from 'next/server';
import { getAllVenues } from '@/lib/db';

export async function GET() {
    const venues = getAllVenues();
    return NextResponse.json(venues);
}
