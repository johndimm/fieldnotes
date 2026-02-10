// The Beach Boys' Pet Sounds - Content organized by location
// Brian Wilson's creative breakthrough (1965-1966)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const petSoundsContext = {
    title: 'Beyond Surfing: Brian Wilson\'s Artistic Crisis',
    description: `By 1965, The Beach Boys were America's top band - but Brian Wilson was falling apart. Panic attacks had forced him off the road. While the band toured without him, Brian stayed home, obsessively listening to The Beatles' "Rubber Soul" and plotting his response. He would create not just an album, but a symphony - a "teenage symphony to God."`,
    influences: [
        { name: 'Phil Spector', significance: 'Wall of Sound producer, Brian\'s idol and rival' },
        { name: 'The Beatles', significance: '"Rubber Soul" triggered Brian\'s competitive drive' },
        { name: 'Burt Bacharach', significance: 'Sophisticated pop arrangements Brian admired' },
        { name: 'The Four Freshmen', significance: 'Vocal harmony group Brian studied obsessively' }
    ],
    keyQuote: 'Who\'s gonna hear this? The ears of a dog? - Marilyn Wilson, on the album title'
};

// Timeline Events
export const petSoundsTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'hawthorne',
        date: '1961',
        text: 'Beach Boys form in Hawthorne, California - the Wilson brothers, cousin Mike Love, friend Al Jardine'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'capitol',
        date: 'October 1961',
        text: '"Surfin\'" released on small Candix label'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'plane',
        date: 'December 23, 1964',
        text: 'Brian suffers panic attack on flight to Houston - stops touring permanently'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'home',
        date: 'December 1965',
        text: 'Brian hears "Rubber Soul" - declares "I\'m gonna make the greatest album ever"'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'gold-star',
        date: 'January 18, 1966',
        text: 'First Pet Sounds sessions at Gold Star Studios - "Sloop John B"'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'western',
        date: 'February-April 1966',
        text: 'Intensive recording sessions at Western, Sunset Sound, and Gold Star studios'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'western',
        date: 'March 10, 1966',
        text: '"God Only Knows" recorded - later called "the greatest song ever written" by Paul McCartney'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'capitol',
        date: 'May 16, 1966',
        text: 'Pet Sounds released - reaches #10 in US, #2 in UK'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'london',
        date: 'May 1966',
        text: 'Beatles hear Pet Sounds - McCartney plays it daily, inspires Sgt. Pepper'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'sunset',
        date: 'November 1966 - May 1967',
        text: 'SMiLE sessions begin and collapse - Brian\'s breakdown'
    }
];

// Enhanced Locations
export const petSoundsLocations: EnhancedLocation[] = [
    {
        id: 'hawthorne',
        name: 'Hawthorne, California',
        lat: 33.9164,
        lng: -118.3526,
        date: '1942-1963',
        description: 'Brian Wilson grew up at 3701 W. 119th Street. His father Murry was a domineering failed songwriter who managed the band. Brian, Dennis, and Carl practiced harmonies in this small house before becoming America\'s band.',
        content: [
            {
                id: 'hawthorne-quote-1',
                type: 'quote',
                locationId: 'hawthorne',
                text: 'My dad was a tyrant. He\'d beat us. But he also taught me about music.',
                speaker: 'Brian Wilson',
                source: 'Wouldn\'t It Be Nice'
            },
            {
                id: 'hawthorne-quote-2',
                type: 'quote',
                locationId: 'hawthorne',
                text: 'Brian would sit at the piano for hours, working out harmonies. He was obsessed.',
                speaker: 'Marilyn Wilson',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'plane',
        name: 'Flight to Houston',
        lat: 29.7604,
        lng: -95.3698,
        date: 'December 23, 1964',
        description: 'On a flight to Houston, Brian Wilson suffered a severe panic attack. He covered himself with a pillow and sobbed. He would never tour again. This breakdown, however, freed him to become a studio genius.',
        content: [
            {
                id: 'plane-quote-1',
                type: 'quote',
                locationId: 'plane',
                text: 'I just said, "I can\'t take it anymore." I felt like I was going to die.',
                speaker: 'Brian Wilson',
                source: 'Wouldn\'t It Be Nice'
            },
            {
                id: 'plane-quote-2',
                type: 'quote',
                locationId: 'plane',
                text: 'When Brian stopped touring, we lost our leader on stage. But we gained a genius in the studio.',
                speaker: 'Al Jardine',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'home',
        name: 'Brian\'s Home Studio',
        lat: 34.0736,
        lng: -118.4004,
        date: '1965-1966',
        description: 'Brian built a sandbox around his piano in the living room of his Bel Air home. He spent days in his bathrobe, eating candy, smoking pot, and composing. His wife Marilyn watched helplessly as brilliance and madness merged.',
        content: [
            {
                id: 'home-quote-1',
                type: 'quote',
                locationId: 'home',
                text: 'I heard "Rubber Soul" and I said to myself, "That\'s it. I\'m gonna make the greatest album ever."',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'home-quote-2',
                type: 'quote',
                locationId: 'home',
                text: 'He had this sandbox around the piano. He said he wanted to feel the sand between his toes while he played.',
                speaker: 'Marilyn Wilson',
                source: 'Interview'
            },
            {
                id: 'home-quote-3',
                type: 'quote',
                locationId: 'home',
                text: 'Brian was hearing things nobody else could hear. He\'d say, "Can you hear that?" and we\'d say no.',
                speaker: 'Van Dyke Parks',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'gold-star',
        name: 'Gold Star Studios',
        lat: 34.0906,
        lng: -118.3241,
        date: 'January-April 1966',
        description: 'Phil Spector\'s home studio at 6252 Santa Monica Boulevard. Brian worshipped Spector\'s Wall of Sound and now sought to surpass it. He used the same echo chamber, the same musicians - but his vision was entirely his own.',
        content: [
            {
                id: 'goldstar-quote-1',
                type: 'quote',
                locationId: 'gold-star',
                text: 'Brian would have 12 musicians playing the same bass line. We thought he was crazy. Then we heard the playback.',
                speaker: 'Hal Blaine',
                source: 'Wrecking Crew drummer'
            },
            {
                id: 'goldstar-quote-2',
                type: 'quote',
                locationId: 'gold-star',
                text: 'Nobody had ever asked for bicycle bells, Coca-Cola cans, and barking dogs on a pop record before.',
                speaker: 'Larry Levine',
                source: 'Engineer'
            },
            {
                id: 'goldstar-attendee-1',
                type: 'attendee',
                locationId: 'gold-star',
                text: 'The Wrecking Crew: Hal Blaine, Carol Kaye, Glen Campbell, Leon Russell'
            }
        ]
    },
    {
        id: 'western',
        name: 'Western Recorders',
        lat: 34.0987,
        lng: -118.3341,
        date: 'March 10, 1966',
        description: 'Studio 3 at 6000 Sunset Boulevard, where Brian recorded "God Only Knows." He spent days on the French horn intro alone. When the Beach Boys arrived to add vocals, they were stunned by what Brian had created.',
        content: [
            {
                id: 'western-quote-1',
                type: 'quote',
                locationId: 'western',
                text: '"God Only Knows" is the greatest song ever written.',
                speaker: 'Paul McCartney',
                source: 'Multiple interviews'
            },
            {
                id: 'western-quote-2',
                type: 'quote',
                locationId: 'western',
                text: 'I cried when I heard the playback. I couldn\'t believe I\'d written something so beautiful.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'western-quote-3',
                type: 'quote',
                locationId: 'western',
                text: 'Carl sang lead because I didn\'t think I could do it justice. His voice was pure.',
                speaker: 'Brian Wilson',
                source: 'On choosing Carl for lead vocals'
            },
            {
                id: 'western-quote-4',
                type: 'quote',
                locationId: 'western',
                text: 'We weren\'t sure about starting a song with "I may not always love you." It seemed risky.',
                speaker: 'Tony Asher',
                source: 'Lyricist'
            }
        ]
    },
    {
        id: 'capitol',
        name: 'Capitol Records',
        lat: 34.1031,
        lng: -118.3267,
        date: 'May 1966',
        description: 'The iconic Capitol Tower on Vine Street. When Brian delivered Pet Sounds, the label was confused. Where were the surfing songs? Mike Love complained it wasn\'t commercial. But in England, the album was revolutionary.',
        content: [
            {
                id: 'capitol-quote-1',
                type: 'quote',
                locationId: 'capitol',
                text: 'Don\'t fuck with the formula.',
                speaker: 'Mike Love',
                source: 'Arguing against Pet Sounds'
            },
            {
                id: 'capitol-quote-2',
                type: 'quote',
                locationId: 'capitol',
                text: 'The label didn\'t know what to do with it. They wanted "Surfin\' USA" again.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'capitol-quote-3',
                type: 'quote',
                locationId: 'capitol',
                text: 'In America it stiffed. In England, the Beatles couldn\'t stop playing it.',
                speaker: 'Derek Taylor',
                source: 'Beatles publicist'
            }
        ]
    },
    {
        id: 'london',
        name: 'EMI Studios, London',
        lat: 51.5320,
        lng: -0.1778,
        date: 'May-December 1966',
        description: 'When Pet Sounds reached Abbey Road, the Beatles were recording Revolver. McCartney played it daily in the studio. John Lennon was annoyed - but they all knew they had to respond. Sgt. Pepper was born.',
        content: [
            {
                id: 'london-quote-1',
                type: 'quote',
                locationId: 'london',
                text: 'It was Pet Sounds that blew me out of the water. I love the album so much.',
                speaker: 'Paul McCartney',
                source: 'Interview'
            },
            {
                id: 'london-quote-2',
                type: 'quote',
                locationId: 'london',
                text: 'We tried to equal Pet Sounds. We didn\'t quite succeed, but we got close with Sgt. Pepper.',
                speaker: 'George Martin',
                source: 'Interview'
            },
            {
                id: 'london-quote-3',
                type: 'quote',
                locationId: 'london',
                text: 'Without Pet Sounds, Sgt. Pepper wouldn\'t have happened. Brian pushed us.',
                speaker: 'Paul McCartney',
                source: 'Many Years From Now'
            }
        ]
    },
    {
        id: 'sunset',
        name: 'Sunset Sound Studios',
        lat: 34.0985,
        lng: -118.3366,
        date: 'November 1966 - May 1967',
        description: 'Where SMiLE died. Brian\'s follow-up to Pet Sounds was to be his masterpiece - but paranoia, drugs, and perfectionism destroyed him. When he heard Sgt. Pepper, he went to bed for years.',
        content: [
            {
                id: 'sunset-quote-1',
                type: 'quote',
                locationId: 'sunset',
                text: 'When I heard Sgt. Pepper, I said, "That\'s it. I\'m done. They beat me."',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'sunset-quote-2',
                type: 'quote',
                locationId: 'sunset',
                text: 'Brian thought the fire stations burning in LA were because of his music. He burned the tapes.',
                speaker: 'Van Dyke Parks',
                source: 'On Brian\'s paranoia during SMiLE'
            },
            {
                id: 'sunset-quote-3',
                type: 'quote',
                locationId: 'sunset',
                text: 'I went to bed. I didn\'t get up for a long time.',
                speaker: 'Brian Wilson',
                source: 'On his breakdown'
            }
        ]
    }
];

// Music suggestions
export const petSoundsMusic = [
    { title: 'God Only Knows', artist: 'The Beach Boys', year: 1966 },
    { title: 'Wouldn\'t It Be Nice', artist: 'The Beach Boys', year: 1966 },
    { title: 'Caroline, No', artist: 'The Beach Boys', year: 1966 },
    { title: 'Sloop John B', artist: 'The Beach Boys', year: 1966 },
    { title: 'I Just Wasn\'t Made for These Times', artist: 'The Beach Boys', year: 1966 }
];
