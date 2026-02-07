import { NextResponse } from 'next/server';
import { getAllEntities } from '@/lib/db';

export async function GET() {
    const entities = getAllEntities();
    return NextResponse.json(entities);
}
