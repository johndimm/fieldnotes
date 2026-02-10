// Bob Dylan Goes Electric - Content organized by location
// The moment folk went rock: Newport Folk Festival 1965

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const dylanElectricContext = {
    title: 'The Folk Revival and Its Betrayal',
    description: `By 1965, Bob Dylan was the crowned prince of folk music - the voice of a generation, the heir to Woody Guthrie. The folk movement was politically pure: acoustic guitars, protest songs, authenticity. Electric instruments were the enemy - they meant commercialism, teen idols, selling out. When Dylan plugged in at Newport, he wasn't just changing instruments. He was detonating the entire folk establishment.`,
    folkMovement: [
        { name: 'Pete Seeger', significance: 'Folk legend, Newport founder, allegedly tried to cut the power cables' },
        { name: 'Alan Lomax', significance: 'Folklorist who introduced Dylan at Newport 1963' },
        { name: 'Joan Baez', significance: 'Queen of folk, Dylan\'s former lover and champion' },
        { name: 'Peter, Paul and Mary', significance: 'Made "Blowin\' in the Wind" a hit' },
        { name: 'Woody Guthrie', significance: 'Dylan\'s hero, visited him in hospital, carried his torch' }
    ],
    keyQuote: 'Folk music is the only music where you can\'t be booed off stage for being real. - Pete Seeger'
};

// Timeline Events
export const dylanElectricTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'hibbing',
        date: 'May 24, 1941',
        text: 'Robert Zimmerman born in Duluth, Minnesota, raised in Hibbing'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'greenwich',
        date: 'January 1961',
        text: 'Dylan arrives in New York, plays Greenwich Village folk clubs'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'columbia',
        date: 'November 1961',
        text: 'Signs with Columbia Records, producer John Hammond'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'newport-63',
        date: 'July 26, 1963',
        text: 'Newport Folk Festival triumph - performs with Joan Baez, Peter, Paul and Mary'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'march-washington',
        date: 'August 28, 1963',
        text: 'Performs at March on Washington before Martin Luther King\'s "I Have a Dream" speech'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'columbia',
        date: 'January 1965',
        text: 'Records "Bringing It All Back Home" - Side A electric, Side B acoustic'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'studio',
        date: 'June 15-16, 1965',
        text: 'Records "Like a Rolling Stone" at Columbia Studio A'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'newport-65',
        date: 'July 25, 1965',
        text: 'THE NIGHT: Dylan goes electric at Newport Folk Festival'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'forest-hills',
        date: 'August 28, 1965',
        text: 'Forest Hills Tennis Stadium - first half acoustic, second half electric, booing continues'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'manchester',
        date: 'May 17, 1966',
        text: 'Manchester Free Trade Hall - "Judas!" shouted from audience, Dylan responds with furious "Like a Rolling Stone"'
    }
];

// Enhanced Locations
export const dylanElectricLocations: EnhancedLocation[] = [
    {
        id: 'hibbing',
        name: 'Hibbing, Minnesota',
        lat: 47.4272,
        lng: -92.9377,
        date: '1941-1959',
        description: 'Bob Dylan grew up in this iron mining town on the Mesabi Range. He formed rock bands in high school, playing Little Richard and Elvis covers, before discovering folk music at the University of Minnesota.',
        content: [
            {
                id: 'hibbing-quote-1',
                type: 'quote',
                locationId: 'hibbing',
                text: 'Hibbing was a town where you could not be poor, but you could not be rich either.',
                speaker: 'Bob Dylan',
                source: 'Chronicles'
            },
            {
                id: 'hibbing-quote-2',
                type: 'quote',
                locationId: 'hibbing',
                text: 'When I first heard Woody Guthrie, it was like a million megaton bomb dropped on me.',
                speaker: 'Bob Dylan',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'greenwich',
        name: 'Greenwich Village',
        lat: 40.7336,
        lng: -74.0027,
        date: '1961-1965',
        description: 'The heart of the folk revival. Dylan played basket houses like Gerde\'s Folk City and the Gaslight Cafe, sleeping on couches, learning hundreds of songs, crafting his persona.',
        content: [
            {
                id: 'greenwich-quote-1',
                type: 'quote',
                locationId: 'greenwich',
                text: 'I came to New York to see Woody Guthrie. He was the one I came to see.',
                speaker: 'Bob Dylan',
                source: 'Interview, 1962'
            },
            {
                id: 'greenwich-quote-2',
                type: 'quote',
                locationId: 'greenwich',
                text: 'He was like a sponge. He absorbed everything and everybody.',
                speaker: 'Dave Van Ronk',
                source: 'Mayor of MacDougal Street'
            },
            {
                id: 'greenwich-quote-3',
                type: 'quote',
                locationId: 'greenwich',
                text: 'There was nobody like him. You knew something was happening.',
                speaker: 'Joan Baez',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'newport-63',
        name: 'Newport Folk Festival 1963',
        lat: 41.4901,
        lng: -71.3128,
        date: 'July 26, 1963',
        description: 'Dylan\'s coronation. He performed "Blowin\' in the Wind" with Peter, Paul and Mary, joined Joan Baez for duets. The folk establishment embraced him as their prophet.',
        content: [
            {
                id: 'newport63-quote-1',
                type: 'quote',
                locationId: 'newport-63',
                text: 'Here he is... take him, you know him, he\'s yours.',
                speaker: 'Peter Yarrow',
                source: 'Introducing Dylan at Newport 1963'
            },
            {
                id: 'newport63-quote-2',
                type: 'quote',
                locationId: 'newport-63',
                text: 'We finished "Blowin\' in the Wind" and there was no one left to ask what it meant.',
                speaker: 'Peter Yarrow',
                source: 'Interview'
            },
            {
                id: 'newport63-attendee-1',
                type: 'attendee',
                locationId: 'newport-63',
                text: 'Joan Baez, Pete Seeger, Peter, Paul and Mary, Theodore Bikel'
            }
        ]
    },
    {
        id: 'studio',
        name: 'Columbia Studio A, NYC',
        lat: 40.7614,
        lng: -73.9776,
        date: 'June 15-16, 1965',
        description: 'Over two days, Dylan and a crack band recorded "Like a Rolling Stone." At over six minutes, Columbia thought it was commercial suicide. It became the greatest rock song ever recorded.',
        content: [
            {
                id: 'studio-quote-1',
                type: 'quote',
                locationId: 'studio',
                text: 'It was just a rhythm thing on paper. Then I went over and I got a piano, and just played these chords over and over.',
                speaker: 'Bob Dylan',
                source: 'Interview'
            },
            {
                id: 'studio-quote-2',
                type: 'quote',
                locationId: 'studio',
                text: 'The whole room was charged. You could feel it. Something was happening.',
                speaker: 'Al Kooper',
                source: 'Backstage Passes'
            },
            {
                id: 'studio-quote-3',
                type: 'quote',
                locationId: 'studio',
                text: 'I knew we had something. Tom Wilson looked at me and said, "What was that?"',
                speaker: 'Al Kooper',
                source: 'On the organ riff he improvised'
            }
        ]
    },
    {
        id: 'newport-65',
        name: 'Newport Folk Festival 1965',
        lat: 41.4901,
        lng: -71.3128,
        date: 'July 25, 1965',
        description: 'The night that changed everything. Dylan took the stage with the Paul Butterfield Blues Band, plugged in his Fender Stratocaster, and launched into "Maggie\'s Farm." The crowd erupted - in anger.',
        content: [
            {
                id: 'newport65-quote-1',
                type: 'quote',
                locationId: 'newport-65',
                text: 'I couldn\'t believe it. I thought it was some kind of joke. Then they started booing.',
                speaker: 'Maria Muldaur',
                source: 'Interview'
            },
            {
                id: 'newport65-quote-2',
                type: 'quote',
                locationId: 'newport-65',
                text: 'Pete Seeger was furious. He said, "If I had an axe, I\'d cut the cable right now."',
                speaker: 'George Wein',
                source: 'Festival organizer'
            },
            {
                id: 'newport65-quote-3',
                type: 'quote',
                locationId: 'newport-65',
                text: 'It was very, very loud. Too loud. You couldn\'t hear the words.',
                speaker: 'Pete Seeger',
                source: 'Interview'
            },
            {
                id: 'newport65-quote-4',
                type: 'quote',
                locationId: 'newport-65',
                text: 'He came back out with an acoustic guitar and played "It\'s All Over Now, Baby Blue." That was his answer.',
                speaker: 'Joe Boyd',
                source: 'White Bicycles'
            },
            {
                id: 'newport65-quote-5',
                type: 'quote',
                locationId: 'newport-65',
                text: 'I had a hard time understanding what was going on. People were booing. I didn\'t know what to make of it.',
                speaker: 'Bob Dylan',
                source: 'Press conference, 1965'
            },
            {
                id: 'newport65-attendee-1',
                type: 'attendee',
                locationId: 'newport-65',
                text: 'Pete Seeger, Alan Lomax, Mike Bloomfield, Al Kooper, Paul Butterfield Blues Band'
            }
        ]
    },
    {
        id: 'manchester',
        name: 'Manchester Free Trade Hall',
        lat: 53.4774,
        lng: -2.2451,
        date: 'May 17, 1966',
        description: 'The most famous heckle in rock history. After a solo acoustic first half, Dylan returned with The Hawks. The hostility built until someone shouted "Judas!" Dylan\'s response: "I don\'t believe you. You\'re a liar." Then turned to the band: "Play fucking loud."',
        content: [
            {
                id: 'manchester-quote-1',
                type: 'quote',
                locationId: 'manchester',
                text: 'Judas!',
                speaker: 'Keith Butler',
                source: 'Audience member (identified decades later)'
            },
            {
                id: 'manchester-quote-2',
                type: 'quote',
                locationId: 'manchester',
                text: 'I don\'t believe you. You\'re a liar.',
                speaker: 'Bob Dylan',
                source: 'Response to "Judas!" heckle'
            },
            {
                id: 'manchester-quote-3',
                type: 'quote',
                locationId: 'manchester',
                text: 'Play it fucking loud.',
                speaker: 'Bob Dylan',
                source: 'To the band, before "Like a Rolling Stone"'
            },
            {
                id: 'manchester-quote-4',
                type: 'quote',
                locationId: 'manchester',
                text: 'The version of "Like a Rolling Stone" that followed was the most intense performance I\'ve ever witnessed.',
                speaker: 'Jonathan Cott',
                source: 'Rolling Stone'
            }
        ]
    }
];

// Music suggestions
export const dylanElectricMusic = [
    { title: 'Like a Rolling Stone', artist: 'Bob Dylan', year: 1965 },
    { title: 'Maggie\'s Farm', artist: 'Bob Dylan', year: 1965 },
    { title: 'It\'s All Over Now, Baby Blue', artist: 'Bob Dylan', year: 1965 },
    { title: 'Mr. Tambourine Man', artist: 'Bob Dylan', year: 1965 },
    { title: 'Subterranean Homesick Blues', artist: 'Bob Dylan', year: 1965 }
];
