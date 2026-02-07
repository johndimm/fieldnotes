import { initializeDatabase } from '../lib/init-db';
import {
    createEvent,
    createEntity,
    createVenue,
    createSource,
    linkEventEntity,
    linkEventVenue
} from '../lib/db';

console.log('Initializing database...');
const db = initializeDatabase();

console.log('Seeding data...');

// Create sources first
const source1 = createSource({
    title: 'The Who: Maximum R&B',
    source_type: 'book',
    publication_date: '2002-01-01',
    notes: 'Comprehensive band biography by Richard Barnes'
});

const source2 = createSource({
    title: 'Jimi Hendrix at the Polytechnic - YouTube',
    url: 'https://www.youtube.com/watch?v=example',
    source_type: 'video',
    publication_date: '1966-10-01',
    notes: 'Performance footage from Polytechnic show'
});

const source3 = createSource({
    title: 'London Music Scene 1965 - Conflicting Accounts',
    source_type: 'article',
    notes: 'Various interviews with venue owners - some contradictions about specific dates'
});

// Create venues
const marquee = createVenue({
    name: 'Marquee Club',
    address: '90 Wardour Street, Soho, London',
    notes: 'Legendary venue that hosted many pivotal performances'
});

const flamingo = createVenue({
    name: 'Flamingo Club',
    address: '33-37 Wardour Street, Soho, London',
    notes: 'Jazz and R&B club in Soho'
});

const polytechnic = createVenue({
    name: 'Regent Street Polytechnic',
    address: '309 Regent Street, London',
    notes: 'Educational institution that hosted concerts'
});

// Create entities (bands and people)
const theWho = createEntity({
    name: 'The Who',
    entity_type: 'band',
    notes: 'British rock band formed in 1964'
});

const jimiHendrix = createEntity({
    name: 'Jimi Hendrix',
    entity_type: 'person',
    notes: 'American guitarist and singer'
});

const theExperience = createEntity({
    name: 'The Jimi Hendrix Experience',
    entity_type: 'band',
    notes: 'Power trio formed in 1966'
});

const peteTownshend = createEntity({
    name: 'Pete Townshend',
    entity_type: 'person',
    notes: 'The Who guitarist and primary songwriter'
});

const rogerDaltrey = createEntity({
    name: 'Roger Daltrey',
    entity_type: 'person',
    notes: 'The Who lead vocalist'
});

// Event 1: The Who at Marquee - Date uncertain, conflicting venue claims
const event1 = createEvent({
    title: 'The Who Performance',
    description: 'Early performance by The Who. Exact date and venue disputed in historical sources.',
    event_type: 'gig',
    date_earliest: '1965-02-01',
    date_latest: '1965-03-31',
    date_certainty: 'disputed',
});

linkEventEntity(event1, theWho, 'performer', source1);
linkEventEntity(event1, peteTownshend, 'performer', source1);
linkEventEntity(event1, rogerDaltrey, 'performer', source1);

// Conflicting venue claims from different sources
linkEventVenue(event1, marquee, source1);
linkEventVenue(event1, flamingo, source3); // Source 3 claims it was at Flamingo instead

// Event 2: Jimi Hendrix at Polytechnic - Better documented
const event2 = createEvent({
    title: 'Jimi Hendrix Experience at Polytechnic',
    description: 'One of the earliest UK performances by the Jimi Hendrix Experience. Video footage exists.',
    event_type: 'gig',
    date_earliest: '1966-10-01',
    date_latest: '1966-10-01',
    date_certainty: 'confirmed',
});

linkEventEntity(event2, jimiHendrix, 'performer', source2);
linkEventEntity(event2, theExperience, 'performer', source2);
linkEventVenue(event2, polytechnic, source2);

// Event 3: The Who - Multiple Date Claims
const event3 = createEvent({
    title: 'The Who Marquee Residency Show',
    description: 'Part of The Who\'s regular Tuesday night residency at the Marquee. Specific date uncertain.',
    event_type: 'gig',
    date_earliest: '1965-05-01',
    date_latest: '1965-05-30',
    date_certainty: 'likely',
});

linkEventEntity(event3, theWho, 'performer', source1);
linkEventVenue(event3, marquee, source1);

console.log('✓ Database seeded successfully');
console.log('  - 3 events created');
console.log('  - 7 entities created');
console.log('  - 3 venues created');
console.log('  - 3 sources created');
console.log('  - Relationships established with ambiguity preserved');

db.close();
