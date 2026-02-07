import { getDb } from '../lib/db';
import { readFileSync } from 'fs';
import { join } from 'path';

console.log('Applying schema extensions...');
const db = getDb();

const extensions = readFileSync(join(process.cwd(), 'db', 'schema_extensions.sql'), 'utf-8');
db.exec(extensions);

console.log('✓ Schema extensions applied');

// Now enrich the Hendrix event with media and excerpts
console.log('\nEnriching Hendrix Polytechnic event...');

// Get the event ID
const hendrixEvent = db.prepare('SELECT id FROM events WHERE title LIKE ?').get('%Hendrix%Polytechnic%') as { id: number } | undefined;

if (!hendrixEvent) {
    console.error('Hendrix event not found!');
    process.exit(1);
}

// Update the event with better details
db.prepare(`
  UPDATE events 
  SET 
    description = ?,
    date_earliest = ?,
    date_latest = ?,
    date_certainty = ?
  WHERE id = ?
`).run(
    'Jimi Hendrix guest appearance with Cream at Regent Street Polytechnic. Hendrix performed a legendary version of "Killing Floor" that stunned Eric Clapton and the audience. This impromptu jam session is considered a pivotal moment in rock history, marking Hendrix\'s dramatic entry into the British music scene.',
    '1966-10-01',
    '1966-10-01',
    'confirmed',
    hendrixEvent.id
);

// Add media
const mediaInsert = db.prepare(`
  INSERT INTO media (media_type, url, title, description, event_id)
  VALUES (?, ?, ?, ?, ?)
`);

mediaInsert.run(
    'video',
    'https://www.youtube.com/watch?v=g3U8A-Z6DFU',
    'The Night Jimi Hendrix Shocked Eric Clapton',
    'YouTube documentary clip about the legendary Polytechnic jam session',
    hendrixEvent.id
);

// Add witness account sources
const sourceInsert = db.prepare(`
  INSERT INTO sources (title, source_type, notes)
  VALUES (?, ?, ?)
`);

const claptonBioSource = sourceInsert.run(
    'Eric Clapton Autobiography',
    'book',
    'Clapton\'s memoir containing his account of meeting Hendrix'
);

const louderSoundSource = sourceInsert.run(
    'The Night Jimi Hendrix Killed God - Louder Sound',
    'article',
    'Detailed account with multiple witness testimonies'
);

const guardianSource = sourceInsert.run(
    'How Jimi Hendrix blew Eric Clapton\'s mind - The Guardian',
    'article',
    'Contemporary journalism about the legendary jam'
);

// Add witness excerpts
const excerptInsert = db.prepare(`
  INSERT INTO excerpts (event_id, excerpt_text, speaker, source_id)
  VALUES (?, ?, ?, ?)
`);

excerptInsert.run(
    hendrixEvent.id,
    'He played it exactly like it ought to be played, and he totally blew me away.',
    'Eric Clapton',
    claptonBioSource.lastInsertRowid
);

excerptInsert.run(
    hendrixEvent.id,
    'You never told me he was that fucking good.',
    'Eric Clapton to Chas Chandler',
    louderSoundSource.lastInsertRowid
);

excerptInsert.run(
    hendrixEvent.id,
    'He plugged into my bass amp and just blew us all away.',
    'Jack Bruce (Cream bassist)',
    louderSoundSource.lastInsertRowid
);

excerptInsert.run(
    hendrixEvent.id,
    'When Hendrix took the stage, it tipped right over the edge.',
    'Nick Mason (Pink Floyd)',
    louderSoundSource.lastInsertRowid
);

excerptInsert.run(
    hendrixEvent.id,
    'The look of absolute shock on Clapton\'s face.',
    'Neil Slaven (record producer)',
    louderSoundSource.lastInsertRowid
);

console.log('✓ Added:');
console.log('  - 1 YouTube video');
console.log('  - 3 new sources (books/articles)');
console.log('  - 5 witness account excerpts');
console.log('  - Updated event description and date to confirmed');

db.close();
console.log('\n✓ Enrichment complete!');
