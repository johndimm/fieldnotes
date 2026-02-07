-- Extension to support media and witness accounts
-- Thin line approach: add only what we need now

-- Media items (photos, videos, audio)
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media_type TEXT NOT NULL, -- photo, video, audio
  url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  credit TEXT, -- photographer, videographer, source
  
  -- Link to what this media is about
  event_id INTEGER,
  entity_id INTEGER,
  venue_id INTEGER,
  
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (entity_id) REFERENCES entities(id) ON DELETE CASCADE,
  FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE CASCADE
);

-- Witness accounts / excerpts from books, articles, interviews
CREATE TABLE IF NOT EXISTS excerpts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id INTEGER NOT NULL,
  excerpt_text TEXT NOT NULL,
  speaker TEXT, -- who said this (e.g., "Eric Clapton")
  source_id INTEGER NOT NULL,
  
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_media_event ON media(event_id);
CREATE INDEX IF NOT EXISTS idx_excerpts_event ON excerpts(event_id);
