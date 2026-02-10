// The Beatles in Hamburg - Content organized by location
// The crucible that forged the world's greatest band (1960-1962)

import type { ContentItem, EnhancedLocation } from './documentary';

// Timeline Events
export const beatlesHamburgTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'liverpool',
        date: 'August 16, 1960',
        text: 'The Beatles depart Liverpool for Hamburg - John, Paul, George, Pete Best, and Stuart Sutcliffe'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'indra',
        date: 'August 17, 1960',
        text: 'First performance at the Indra Club, Große Freiheit'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'kaiserkeller',
        date: 'October 4, 1960',
        text: 'Move to the Kaiserkeller after Indra closes due to noise complaints'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'kaiserkeller',
        date: 'October 1960',
        text: 'Meet Ringo Starr, drumming for Rory Storm and the Hurricanes'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'hamburg',
        date: 'November 21, 1960',
        text: 'George Harrison deported for being underage (17)'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'bambi',
        date: 'December 1960',
        text: 'Paul and Pete arrested after setting fire to a condom in the Bambi Kino - deported'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'top-ten',
        date: 'April-July 1961',
        text: 'Return to Hamburg - 92 consecutive nights at the Top Ten Club'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'hamburg',
        date: 'April 10, 1962',
        text: 'Stuart Sutcliffe dies of brain hemorrhage in Hamburg'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'star-club',
        date: 'April 13, 1962',
        text: 'First Star-Club engagement begins'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'star-club',
        date: 'December 31, 1962',
        text: 'Final Hamburg performance - they return as stars'
    }
];

// Enhanced Locations
export const beatlesHamburgLocations: EnhancedLocation[] = [
    {
        id: 'liverpool',
        name: 'Liverpool',
        lat: 53.4084,
        lng: -2.9916,
        date: 'Pre-1960',
        description: 'The Beatles formed in Liverpool from the remnants of John Lennon\'s skiffle group The Quarrymen. By 1960, they were a five-piece: John, Paul, George, Stuart Sutcliffe on bass, and Pete Best on drums.',
        photoUrl: '/beatles/liverpool_cavern.jpg',
        photoTitle: 'The Cavern Club, Liverpool',
        content: [
            {
                id: 'liverpool-quote-1',
                type: 'quote',
                locationId: 'liverpool',
                text: 'We were just a bunch of guys who wanted to be in a band. We had no idea what we were doing.',
                speaker: 'Paul McCartney',
                source: 'Anthology'
            },
            {
                id: 'liverpool-quote-2',
                type: 'quote',
                locationId: 'liverpool',
                text: 'Before Hamburg we were crap. We didn\'t have a clue.',
                speaker: 'John Lennon',
                source: 'Interview'
            },
            {
                id: 'liverpool-music-1',
                type: 'music',
                locationId: 'liverpool',
                musicTitle: 'My Bonnie',
                musicPreviewUrl: '/api/music/deezer/track/3668065912'
            }
        ]
    },
    {
        id: 'indra',
        name: 'Indra Club',
        lat: 53.5497,
        lng: 9.9666,
        date: 'August 17 - October 3, 1960',
        description: 'A seedy strip club on Große Freiheit where The Beatles played their first Hamburg engagement. They played 4-6 hours a night, learning to perform and hold an audience.',
        photoUrl: '/beatles/hamburg_reeperbahn.jpg',
        photoTitle: 'The Reeperbahn, Hamburg',
        content: [
            {
                id: 'indra-quote-1',
                type: 'quote',
                locationId: 'indra',
                text: 'Mach Schau! Mach Schau!',
                speaker: 'Bruno Koschmider',
                source: 'Club owner, shouting at them to put on a show'
            },
            {
                id: 'indra-quote-2',
                type: 'quote',
                locationId: 'indra',
                text: 'We had to learn to play properly. We had to make a show for eight hours, so we really had to find new ways of playing.',
                speaker: 'John Lennon',
                source: 'Anthology'
            },
            {
                id: 'indra-quote-3',
                type: 'quote',
                locationId: 'indra',
                text: 'In Liverpool, we just used to do our best numbers - the same ones at every gig. In Hamburg we had to play for eight hours, so we had to learn new material.',
                speaker: 'Paul McCartney',
                source: 'Anthology'
            },
            {
                id: 'indra-music-1',
                type: 'music',
                locationId: 'indra',
                musicTitle: 'Long Tall Sally',
                musicPreviewUrl: '/api/music/deezer/track/116348832'
            }
        ]
    },
    {
        id: 'kaiserkeller',
        name: 'Kaiserkeller',
        lat: 53.5495,
        lng: 9.9668,
        date: 'October - November 1960',
        description: 'After the Indra closed due to noise complaints, The Beatles moved to the larger Kaiserkeller. Here they met Rory Storm and the Hurricanes - including their drummer, Ringo Starr.',
        photoUrl: '/beatles/hamburg_reeperbahn.jpg',
        photoTitle: 'Hamburg Reeperbahn district',
        content: [
            {
                id: 'kaiserkeller-quote-1',
                type: 'quote',
                locationId: 'kaiserkeller',
                text: 'We used to have to keep going all night. It was murder, but it made us.',
                speaker: 'George Harrison',
                source: 'Interview'
            },
            {
                id: 'kaiserkeller-quote-2',
                type: 'quote',
                locationId: 'kaiserkeller',
                text: 'I used to hide behind the cymbals. I was no good onstage, I was very nervous.',
                speaker: 'Ringo Starr',
                source: 'On playing with Rory Storm'
            },
            {
                id: 'kaiserkeller-quote-3',
                type: 'quote',
                locationId: 'kaiserkeller',
                text: 'Ringo was a star in his own right. He was always a good drummer and a good guy.',
                speaker: 'John Lennon',
                source: 'On first meeting Ringo'
            },
            {
                id: 'kaiserkeller-attendee-1',
                type: 'attendee',
                locationId: 'kaiserkeller',
                text: 'Ringo Starr, Rory Storm, Astrid Kirchherr, Klaus Voormann'
            },
            {
                id: 'kaiserkeller-music-1',
                type: 'music',
                locationId: 'kaiserkeller',
                musicTitle: 'Roll Over Beethoven',
                musicPreviewUrl: '/api/music/deezer/track/116348710'
            }
        ]
    },
    {
        id: 'bambi',
        name: 'Bambi Kino',
        lat: 53.5500,
        lng: 9.9660,
        date: '1960',
        description: 'The Beatles lived in squalid conditions behind the screen of this cinema. No windows, filthy conditions, but cheap. When they were evicted, Paul and Pete allegedly set fire to a condom on the wall - leading to their deportation.',
        photoUrl: '/beatles/hamburg_reeperbahn.jpg',
        photoTitle: 'Hamburg Reeperbahn district',
        content: [
            {
                id: 'bambi-quote-1',
                type: 'quote',
                locationId: 'bambi',
                text: 'We lived backstage in the Bambi Kino, next to the toilets. The living conditions were bad.',
                speaker: 'Pete Best',
                source: 'Interview'
            },
            {
                id: 'bambi-quote-2',
                type: 'quote',
                locationId: 'bambi',
                text: 'It was a bit of a hovel. But we were young and we didn\'t care.',
                speaker: 'Paul McCartney',
                source: 'Anthology'
            },
            {
                id: 'bambi-music-1',
                type: 'music',
                locationId: 'bambi',
                musicTitle: 'I Saw Her Standing There',
                musicPreviewUrl: '/api/music/deezer/track/116348314'
            }
        ]
    },
    {
        id: 'top-ten',
        name: 'Top Ten Club',
        lat: 53.5492,
        lng: 9.9670,
        date: 'April - July 1961',
        description: 'The Beatles returned to Hamburg in 1961 for a legendary 92-night residency at the Top Ten Club. Here they truly transformed, playing 7-8 hours every night.',
        photoUrl: '/beatles/star_club_hamburg.jpg',
        photoTitle: 'Hamburg Star-Club area',
        content: [
            {
                id: 'top-ten-quote-1',
                type: 'quote',
                locationId: 'top-ten',
                text: 'Hamburg was really where we developed. It was there that we really found our sound.',
                speaker: 'George Harrison',
                source: 'Anthology'
            },
            {
                id: 'top-ten-quote-2',
                type: 'quote',
                locationId: 'top-ten',
                text: 'We were rough as guts but we were loud and we had energy.',
                speaker: 'Paul McCartney',
                source: 'Interview'
            },
            {
                id: 'top-ten-quote-3',
                type: 'quote',
                locationId: 'top-ten',
                text: 'I grew up in Hamburg, not Liverpool.',
                speaker: 'John Lennon',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'star-club',
        name: 'Star-Club',
        lat: 53.5493,
        lng: 9.9665,
        date: '1962',
        description: 'The legendary Star-Club opened in 1962 and immediately booked The Beatles. By their final performances here in December 1962, "Love Me Do" had charted and they were on the verge of world fame.',
        content: [
            {
                id: 'star-club-quote-1',
                type: 'quote',
                locationId: 'star-club',
                text: 'The Star-Club was the best club we ever played in. It had the best sound.',
                speaker: 'John Lennon',
                source: 'Interview'
            },
            {
                id: 'star-club-quote-2',
                type: 'quote',
                locationId: 'star-club',
                text: 'By the end of 1962, we knew we were going to make it. You could feel it.',
                speaker: 'Paul McCartney',
                source: 'Anthology'
            }
        ]
    },
    {
        id: 'astrid',
        name: 'Astrid Kirchherr\'s World',
        lat: 53.5510,
        lng: 9.9680,
        date: '1960-1962',
        description: 'Astrid Kirchherr, a young German photographer, met The Beatles at the Kaiserkeller. She fell in love with Stuart Sutcliffe, created their iconic early photographs, and gave them the "mop-top" haircut that would define their image.',
        content: [
            {
                id: 'astrid-quote-1',
                type: 'quote',
                locationId: 'astrid',
                text: 'I knew from the first moment I saw Stuart that he was different. He was an artist.',
                speaker: 'Astrid Kirchherr',
                source: 'Interview'
            },
            {
                id: 'astrid-quote-2',
                type: 'quote',
                locationId: 'astrid',
                text: 'They were so full of life, so different from anyone I had met.',
                speaker: 'Astrid Kirchherr',
                source: 'On first seeing The Beatles'
            },
            {
                id: 'astrid-passage-1',
                type: 'passage',
                locationId: 'astrid',
                passage: 'Astrid\'s photographs of The Beatles - leather-clad, moody, artistic - created the template for rock photography. Her relationship with Stuart Sutcliffe was intense and brief; he left the band to stay with her in Hamburg, studying art. He died of a brain hemorrhage in April 1962, aged 21.',
                passageSource: 'Historical account'
            }
        ]
    }
];

// All quotes extracted for filtered view
export const allBeatlesHamburgQuotes: ContentItem[] = beatlesHamburgLocations.flatMap(
    location => location.content.filter(item => item.type === 'quote')
);
