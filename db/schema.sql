-- Fieldnotes Database Schema
-- Event-centric design for historical research
-- Preserves ambiguity and tracks sources

-- Core Events Table
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT NOT NULL, -- gig, recording, meeting, etc.
  
  -- Date handling with ambiguity
  date_earliest TEXT, -- ISO 8601 date
  date_latest TEXT,   -- ISO 8601 date (can be same as earliest if certain)
  date_certainty TEXT DEFAULT 'unknown', -- confirmed, likely, disputed, unknown
  
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- People, bands, organizations
CREATE TABLE IF NOT EXISTS entities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  entity_type TEXT NOT NULL, -- person, band, organization
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Physical locations
CREATE TABLE IF NOT EXISTS venues (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  address TEXT,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Sources for evidence tracking
CREATE TABLE IF NOT EXISTS sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT, -- YouTube, book link, etc.
  source_type TEXT NOT NULL, -- book, article, video, photo, interview, website
  publication_date TEXT,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Many-to-many: Events to Entities with roles
CREATE TABLE IF NOT EXISTS event_entities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id INTEGER NOT NULL,
  entity_id INTEGER NOT NULL,
  role TEXT NOT NULL, -- performer, attendee, organizer, support_act, etc.
  source_id INTEGER, -- which source claims this connection
  
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (entity_id) REFERENCES entities(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE SET NULL
);

-- Many-to-many: Events to Venues (allows conflicting venue claims)
CREATE TABLE IF NOT EXISTS event_venues (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id INTEGER NOT NULL,
  venue_id INTEGER NOT NULL,
  source_id INTEGER, -- which source claims this venue
  
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE SET NULL
);

-- Freeform factual claims (for contradictory or uncertain information)
CREATE TABLE IF NOT EXISTS claims (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  claim_text TEXT NOT NULL,
  
  -- Nullable foreign keys - claim can relate to event, entity, or venue
  event_id INTEGER,
  entity_id INTEGER,
  venue_id INTEGER,
  
  source_id INTEGER NOT NULL,
  confidence TEXT DEFAULT 'unknown', -- confirmed, likely, disputed, unknown
  
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (entity_id) REFERENCES entities(id) ON DELETE CASCADE,
  FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE CASCADE
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date_earliest, date_latest);
CREATE INDEX IF NOT EXISTS idx_event_entities_event ON event_entities(event_id);
CREATE INDEX IF NOT EXISTS idx_event_entities_entity ON event_entities(entity_id);
CREATE INDEX IF NOT EXISTS idx_event_venues_event ON event_venues(event_id);
CREATE INDEX IF NOT EXISTS idx_claims_event ON claims(event_id);
CREATE INDEX IF NOT EXISTS idx_claims_entity ON claims(entity_id);
