import { getDatabase } from './init-db';
import type { Database } from 'better-sqlite3';

export interface Event {
    id: number;
    title: string;
    description: string | null;
    event_type: string;
    date_earliest: string | null;
    date_latest: string | null;
    date_certainty: string;
    created_at: string;
    updated_at: string;
}

export interface Entity {
    id: number;
    name: string;
    entity_type: string;
    notes: string | null;
    created_at: string;
}

export interface Venue {
    id: number;
    name: string;
    address: string | null;
    notes: string | null;
    created_at: string;
}

export interface Source {
    id: number;
    title: string;
    url: string | null;
    source_type: string;
    publication_date: string | null;
    notes: string | null;
    created_at: string;
}

export interface Media {
    id: number;
    media_type: string;
    url: string;
    title: string | null;
    description: string | null;
    credit: string | null;
    event_id: number | null;
    entity_id: number | null;
    venue_id: number | null;
    created_at: string;
}

export interface Excerpt {
    id: number;
    event_id: number;
    excerpt_text: string;
    speaker: string | null;
    source_id: number;
    created_at: string;
}

export interface EventWithRelations extends Event {
    entities: Array<Entity & { role: string; source_id: number | null }>;
    venues: Array<Venue & { source_id: number | null }>;
    sources: Source[];
    media: Media[];
    excerpts: Array<Excerpt & { source_title: string }>;
}

let db: Database | null = null;

export function getDb(): Database {
    if (!db) {
        db = getDatabase();
    }
    return db;
}

// Event queries
export function getAllEvents(): Event[] {
    const db = getDb();
    return db.prepare('SELECT * FROM events ORDER BY date_earliest DESC').all() as Event[];
}

export function getEventById(id: number): EventWithRelations | null {
    const db = getDb();

    const event = db.prepare('SELECT * FROM events WHERE id = ?').get(id) as Event | undefined;
    if (!event) return null;

    // Get related entities
    const entities = db.prepare(`
    SELECT e.*, ee.role, ee.source_id
    FROM entities e
    JOIN event_entities ee ON e.id = ee.entity_id
    WHERE ee.event_id = ?
  `).all(id) as Array<Entity & { role: string; source_id: number | null }>;

    // Get related venues
    const venues = db.prepare(`
    SELECT v.*, ev.source_id
    FROM venues v
    JOIN event_venues ev ON v.id = ev.venue_id
    WHERE ev.event_id = ?
  `).all(id) as Array<Venue & { source_id: number | null }>;

    // Get media
    const media = db.prepare('SELECT * FROM media WHERE event_id = ?').all(id) as Media[];

    // Get excerpts with source titles
    const excerpts = db.prepare(`
        SELECT e.*, s.title as source_title
        FROM excerpts e
        JOIN sources s ON e.source_id = s.id
        WHERE e.event_id = ?
    `).all(id) as Array<Excerpt & { source_title: string }>;

    // Get all sources referenced
    const sourceIds = new Set<number>();
    entities.forEach(e => e.source_id && sourceIds.add(e.source_id));
    venues.forEach(v => v.source_id && sourceIds.add(v.source_id));
    excerpts.forEach(ex => sourceIds.add(ex.source_id));

    const sources = sourceIds.size > 0
        ? db.prepare(`SELECT * FROM sources WHERE id IN (${Array.from(sourceIds).join(',')})`).all() as Source[]
        : [];

    return {
        ...event,
        entities,
        venues,
        sources,
        media,
        excerpts
    };
}

export function createEvent(data: {
    title: string;
    description?: string;
    event_type: string;
    date_earliest?: string;
    date_latest?: string;
    date_certainty?: string;
}): number {
    const db = getDb();
    const result = db.prepare(`
    INSERT INTO events (title, description, event_type, date_earliest, date_latest, date_certainty)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
        data.title,
        data.description || null,
        data.event_type,
        data.date_earliest || null,
        data.date_latest || null,
        data.date_certainty || 'unknown'
    );

    return result.lastInsertRowid as number;
}

// Entity queries
export function createEntity(data: {
    name: string;
    entity_type: string;
    notes?: string;
}): number {
    const db = getDb();
    const result = db.prepare(`
    INSERT INTO entities (name, entity_type, notes)
    VALUES (?, ?, ?)
  `).run(data.name, data.entity_type, data.notes || null);

    return result.lastInsertRowid as number;
}

export function getAllEntities(): Entity[] {
    const db = getDb();
    return db.prepare('SELECT * FROM entities ORDER BY name').all() as Entity[];
}

// Venue queries
export function createVenue(data: {
    name: string;
    address?: string;
    notes?: string;
}): number {
    const db = getDb();
    const result = db.prepare(`
    INSERT INTO venues (name, address, notes)
    VALUES (?, ?, ?)
  `).run(data.name, data.address || null, data.notes || null);

    return result.lastInsertRowid as number;
}

export function getAllVenues(): Venue[] {
    const db = getDb();
    return db.prepare('SELECT * FROM venues ORDER BY name').all() as Venue[];
}

// Source queries
export function createSource(data: {
    title: string;
    url?: string;
    source_type: string;
    publication_date?: string;
    notes?: string;
}): number {
    const db = getDb();
    const result = db.prepare(`
    INSERT INTO sources (title, url, source_type, publication_date, notes)
    VALUES (?, ?, ?, ?, ?)
  `).run(
        data.title,
        data.url || null,
        data.source_type,
        data.publication_date || null,
        data.notes || null
    );

    return result.lastInsertRowid as number;
}

export function getAllSources(): Source[] {
    const db = getDb();
    return db.prepare('SELECT * FROM sources ORDER BY title').all() as Source[];
}

// Relationship helpers
export function linkEventEntity(eventId: number, entityId: number, role: string, sourceId?: number) {
    const db = getDb();
    db.prepare(`
    INSERT INTO event_entities (event_id, entity_id, role, source_id)
    VALUES (?, ?, ?, ?)
  `).run(eventId, entityId, role, sourceId || null);
}

export function linkEventVenue(eventId: number, venueId: number, sourceId?: number) {
    const db = getDb();
    db.prepare(`
    INSERT INTO event_venues (event_id, venue_id, source_id)
    VALUES (?, ?, ?)
  `).run(eventId, venueId, sourceId || null);
}
