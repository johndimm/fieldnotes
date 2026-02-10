// Hendrix in London - Content organized by location
// Includes quotes, photos, music, passages, timeline events, and attendees

import type { ContentItem, EnhancedLocation } from './documentary';

// American Blues Context - Critical background for understanding Hendrix's impact
export const bluesContext = {
    title: 'The British Blues Boom',
    description: `The British blues scene that Hendrix walked into in 1966 was built on reverent study of American blues masters. Young British musicians had spent years learning from records - Howlin' Wolf, Muddy Waters, B.B. King, Albert King. They were devoted students, but they had never seen someone from the source. When Hendrix played "Killing Floor" - a song everyone in that room knew intimately - he didn't just play it. He reinvented it.`,
    masters: [
        { name: "Howlin' Wolf", significance: 'British bands covered "Smokestack Lightning" and "Killing Floor"' },
        { name: 'Albert King', significance: 'Huge influence on Clapton\'s playing style' },
        { name: 'B.B. King', significance: 'The king of the blues, revered in London' },
        { name: 'Muddy Waters', significance: 'His 1958 UK visit shocked audiences with amplified electric blues. The Rolling Stones named themselves after his song.' },
        { name: 'Robert Johnson', significance: 'Legendary delta blues, mythical status among British guitarists' }
    ],
    britishScene: [
        { name: 'Alexis Korner\'s Blues Incorporated', significance: 'The "clearing house" - future Stones, Cream members all sat in' },
        { name: 'John Mayall\'s Bluesbreakers', significance: 'The "university of British blues" - Clapton\'s training ground' },
        { name: 'Cream', significance: 'Formed in 1966 specifically to play American blues' },
        { name: 'The Rolling Stones', significance: 'Named after a Muddy Waters song' },
        { name: 'The Yardbirds', significance: 'Bred Clapton, Beck, and Page - all devoted blues students' }
    ],
    keyQuote: 'I spent most of my teens and early twenties studying the blues. - Eric Clapton'
};

// "Killing Floor" - The Perfect Song Choice
export const killingFloorContext = {
    title: 'Why "Killing Floor" Changed Everything',
    facts: [
        'Written and recorded by Howlin\' Wolf in Chicago, August 1964',
        'Called "one of the defining classics of Chicago electric blues"',
        'Featured Hubert Sumlin\'s "instantly familiar" guitar riff',
        'The London audience at the Polytechnic would have KNOWN this song intimately',
        'Cream themselves had been playing blues covers from this exact catalog',
        'Hendrix had performed it with Curtis Knight (1965-66) - he knew it cold',
        'He chose a song everyone recognized - then played it faster, different rhythm, transformed',
        'This made the impact visceral: not some unknown piece, but sacred material reinvented'
    ]
};

// Timeline Events
export const hendrixTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'heathrow',
        date: 'September 24, 1966',
        text: 'Jimi Hendrix arrives at Heathrow Airport with Chas Chandler'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'regent-street',
        date: 'October 1, 1966',
        text: 'First jam with Cream at Regent Street Polytechnic - "Killing Floor" performance stuns Clapton'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'evreux',
        date: 'October 13, 1966',
        text: 'First Jimi Hendrix Experience show (Evreux, France)'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'olympia',
        date: 'October 18, 1966',
        text: 'Olympia Paris - earliest known recording of the Experience'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'studio',
        date: 'October 23, 1966',
        text: 'Records "Hey Joe" at De Lane Lea Studios'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'studio',
        date: 'November 2, 1966',
        text: 'Records "Stone Free"'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'munich',
        date: 'November 8-11, 1966',
        text: 'Big Apple Munich - first guitar smashing incident'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'release',
        date: 'December 16, 1966',
        text: '"Hey Joe" released as debut single'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'astoria',
        date: 'March 31, 1967',
        text: 'First guitar burning at London Astoria'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'saville',
        date: 'June 4, 1967',
        text: 'Opens Saville Theatre show with "Sgt. Pepper\'s Lonely Hearts Club Band" - just 3 days after album release'
    }
];

// Enhanced Locations with all content
export const hendrixLocations: EnhancedLocation[] = [
    {
        id: 'heathrow',
        name: 'Heathrow Airport',
        lat: 51.4700,
        lng: -0.4543,
        date: 'September 24, 1966',
        description: 'Jimi Hendrix arrived in London with just his guitar and the clothes on his back. Chas Chandler, bassist of The Animals, had discovered him playing in a New York club and was convinced he could make him a star in Britain.',
        content: [
            {
                id: 'heathrow-quote-1',
                type: 'quote',
                locationId: 'heathrow',
                text: 'I\'d never been to England before. I thought they\'d just turn me back at the airport.',
                speaker: 'Jimi Hendrix',
                source: 'Interview, 1967'
            },
            {
                id: 'heathrow-quote-2',
                type: 'quote',
                locationId: 'heathrow',
                text: 'When Chas brought him through customs, they almost didn\'t let him in. He had no money, no work permit, nothing.',
                speaker: 'Noel Redding',
                source: 'Are You Experienced?'
            },
            {
                id: 'heathrow-music-1',
                type: 'music',
                locationId: 'heathrow',
                musicTitle: 'Hey Joe',
                musicPreviewUrl: '/api/music/deezer/track/4969003'
            }
        ]
    },
    {
        id: 'regent-street',
        name: 'Regent Street Polytechnic',
        lat: 51.5155,
        lng: -0.1396,
        date: 'October 1, 1966',
        description: 'Just six days after arriving, Jimi attended a Cream concert and was invited onstage. He played "Killing Floor" so explosively that Eric Clapton walked offstage, shaken. Word spread instantly through London\'s music scene.',
        photoUrl: '/photos/regent_street_polytechnic.png',
        photoTitle: 'Regent Street Polytechnic, London',
        content: [
            {
                id: 'regent-quote-1',
                type: 'quote',
                locationId: 'regent-street',
                text: 'He walked off, and my life was never the same again.',
                speaker: 'Eric Clapton',
                source: 'The Autobiography'
            },
            {
                id: 'regent-quote-2',
                type: 'quote',
                locationId: 'regent-street',
                text: 'You never told me he was that good!',
                speaker: 'Eric Clapton',
                source: 'To Chas Chandler, after walking offstage'
            },
            {
                id: 'regent-quote-3',
                type: 'quote',
                locationId: 'regent-street',
                text: 'He played "Killing Floor" and I thought, that\'s it, I\'m finished.',
                speaker: 'Eric Clapton',
                source: 'Interview'
            },
            {
                id: 'regent-quote-4',
                type: 'quote',
                locationId: 'regent-street',
                text: 'He asked if he could play... I had a funny feeling about him.',
                speaker: 'Eric Clapton',
                source: 'The Autobiography'
            },
            {
                id: 'regent-quote-5',
                type: 'quote',
                locationId: 'regent-street',
                text: 'He played just about every style you could think of, and not in a flashy way. I mean, he did it in a really subtle way.',
                speaker: 'Eric Clapton',
                source: 'Interview'
            },
            {
                id: 'regent-quote-6',
                type: 'quote',
                locationId: 'regent-street',
                text: 'Everyone just stood there with their mouths open. No one had ever seen anything like it.',
                speaker: 'Chas Chandler',
                source: 'Interview'
            },
            {
                id: 'regent-quote-7',
                type: 'quote',
                locationId: 'regent-street',
                text: 'The look of absolute shock on Clapton\'s face.',
                speaker: 'Neil Slaven',
                source: 'Record producer'
            },
            {
                id: 'regent-attendee-1',
                type: 'attendee',
                locationId: 'regent-street',
                text: 'Eric Clapton, Jack Bruce, Ginger Baker, Chas Chandler'
            },
            {
                id: 'regent-music-1',
                type: 'music',
                locationId: 'regent-street',
                musicTitle: 'Killing Floor (Live at Monterey)',
                musicPreviewUrl: '/api/music/deezer/track/4952905'
            },
            {
                id: 'regent-passage-1',
                type: 'passage',
                locationId: 'regent-street',
                passage: 'The choice of "Killing Floor" was strategic genius. Written by Howlin\' Wolf just two years earlier, it was sacred material to the British blues scene. Every guitarist in that room knew it note for note. Then Hendrix played it - faster, with a different rhythm, with techniques they\'d never seen - and destroyed it. He wasn\'t playing their version of American blues. He was the real thing, and he was reinventing it in front of their eyes.',
                passageSource: 'Historical analysis'
            }
        ]
    },
    {
        id: 'scotch-st-james',
        name: 'Scotch of St James',
        lat: 51.5074,
        lng: -0.1407,
        date: 'October - December 1966',
        description: 'The exclusive Mayfair club where London\'s rock aristocracy gathered. Jimi became a regular, jamming with Beatles, Stones, and The Who. It was here that the legend began to build through word of mouth.',
        photoUrl: '/archival/scotch_st_james_exterior_1966.png',
        photoTitle: 'Scotch of St James club exterior, 1966',
        content: [
            {
                id: 'scotch-quote-1',
                type: 'quote',
                locationId: 'scotch-st-james',
                text: 'The Scotch was where everyone went after gigs. You\'d see Beatles, Stones, everyone there. And suddenly there was this guy from America playing guitar like no one had ever heard.',
                speaker: 'Record producer',
                source: 'Interview'
            },
            {
                id: 'scotch-quote-2',
                type: 'quote',
                locationId: 'scotch-st-james',
                text: 'John Lennon came over and said "You\'re pretty good." I nearly died.',
                speaker: 'Jimi Hendrix',
                source: 'Interview, 1967'
            },
            {
                id: 'scotch-attendee-1',
                type: 'attendee',
                locationId: 'scotch-st-james',
                text: 'John Lennon, Paul McCartney, Mick Jagger, Pete Townshend, Jeff Beck'
            },
            {
                id: 'scotch-music-1',
                type: 'music',
                locationId: 'scotch-st-james',
                musicTitle: 'Purple Haze',
                musicPreviewUrl: '/api/music/deezer/track/4952885'
            },
            {
                id: 'scotch-photo-1',
                type: 'photo',
                locationId: 'scotch-st-james',
                photoUrl: '/archival/scotch_st_james_exterior_1966.png',
                photoTitle: 'Scotch of St James club exterior, 1966',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'bag-onails',
        name: "Bag O'Nails",
        lat: 51.5113,
        lng: -0.1369,
        date: 'November 25, 1966 - January 1967',
        description: 'The intimate Soho club where Jimi played some of his first London showcase gigs. Paul McCartney attended multiple shows and became an early champion, spreading the word among rock royalty.',
        photoUrl: '/archival/bag_o_nails_soho_1966.png',
        photoTitle: "Bag O'Nails club, Soho, 1966",
        content: [
            {
                id: 'bag-quote-1',
                type: 'quote',
                locationId: 'bag-onails',
                text: 'Paul McCartney was there, and afterwards he came backstage. He said "That was really something." I was over the moon.',
                speaker: 'Jimi Hendrix',
                source: 'Interview'
            },
            {
                id: 'bag-quote-2',
                type: 'quote',
                locationId: 'bag-onails',
                text: 'I was blown away. He was playing the guitar with his teeth, behind his back, making sounds no one had ever heard. I went back three nights in a row.',
                speaker: 'Paul McCartney',
                source: 'Interview'
            },
            {
                id: 'bag-quote-3',
                type: 'quote',
                locationId: 'bag-onails',
                text: 'All the stars were there. Every time he played, the words going around were "shit", "Jesus", "damn".',
                speaker: 'Kevin Ayers',
                source: 'Interview'
            },
            {
                id: 'bag-quote-4',
                type: 'quote',
                locationId: 'bag-onails',
                text: 'An absolute ace on the guitar.',
                speaker: 'Paul McCartney',
                source: 'Describing Hendrix'
            },
            {
                id: 'bag-attendee-1',
                type: 'attendee',
                locationId: 'bag-onails',
                text: 'Paul McCartney, Linda Eastman, Mick Jagger, Brian Jones, Pete Townshend, John Lennon'
            },
            {
                id: 'bag-music-1',
                type: 'music',
                locationId: 'bag-onails',
                musicTitle: 'The Wind Cries Mary',
                musicPreviewUrl: '/api/music/deezer/track/4952887'
            },
            {
                id: 'bag-photo-1',
                type: 'photo',
                locationId: 'bag-onails',
                photoUrl: '/archival/bag_o_nails_soho_1966.png',
                photoTitle: "Bag O'Nails club, Soho, 1966",
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'munich',
        name: 'Big Apple Munich',
        lat: 48.1351,
        lng: 11.5820,
        date: 'November 8-11, 1966',
        description: 'A pivotal stop on the Experience\'s first European tour. At the Big Apple club in Munich, Jimi smashed his guitar for the first time - a moment that would become his signature.',
        content: [
            {
                id: 'munich-quote-1',
                type: 'quote',
                locationId: 'munich',
                text: 'I decided to destroy my guitar at the end of a song as a sacrifice. You sacrifice things you love. I love my guitar.',
                speaker: 'Jimi Hendrix',
                source: 'Interview, 1967'
            },
            {
                id: 'munich-passage-1',
                type: 'passage',
                locationId: 'munich',
                passage: 'The first guitar smashing was not planned. The low ceiling of the Big Apple club made Hendrix\'s usual wild movements impossible. Frustrated, he smashed the guitar against the ceiling. The crowd went wild. A ritual was born.',
                passageSource: 'Historical account'
            }
        ]
    },
    {
        id: 'brook-street',
        name: '23 Brook Street',
        lat: 51.5142,
        lng: -0.1494,
        date: '1968-1969',
        description: 'Jimi\'s London flat from 1968-69, in the heart of Mayfair. By extraordinary coincidence, George Frideric Handel had lived next door at No. 25 from 1723 until his death in 1759. Both flats are now the Handel & Hendrix museum.',
        content: [
            {
                id: 'brook-quote-1',
                type: 'quote',
                locationId: 'brook-street',
                text: 'I didn\'t know Handel lived there until someone told me. Then I went out and bought some of his records. The guy was jamming!',
                speaker: 'Jimi Hendrix',
                source: 'Interview'
            },
            {
                id: 'brook-quote-2',
                type: 'quote',
                locationId: 'brook-street',
                text: 'He loved the flat. It was the only real home he ever had. He\'d sit in bed with his guitar for hours, writing songs.',
                speaker: 'Kathy Etchingham',
                source: 'Jimi\'s girlfriend'
            },
            {
                id: 'brook-quote-3',
                type: 'quote',
                locationId: 'brook-street',
                text: 'He painted the ceiling and one wall of the bedroom in swirling psychedelic colors. When we restored the flat, we uncovered them still there beneath layers of paint.',
                speaker: 'Handel & Hendrix museum curator',
                source: 'Interview'
            },
            {
                id: 'brook-music-1',
                type: 'music',
                locationId: 'brook-street',
                musicTitle: 'Voodoo Child (Slight Return)',
                musicPreviewUrl: '/api/music/deezer/track/4952826'
            }
        ]
    },
    {
        id: 'astoria',
        name: 'London Astoria',
        lat: 51.5155,
        lng: -0.1296,
        date: 'March 31, 1967',
        description: 'The venue where Hendrix first set fire to his guitar on stage. Supporting The Walker Brothers, he doused his Stratocaster with lighter fluid and ignited it - creating one of rock\'s most iconic images.',
        photoUrl: '/archival/saville_theatre_hendrix_1967.png',
        photoTitle: 'Hendrix performing, 1967',
        content: [
            {
                id: 'astoria-quote-1',
                type: 'quote',
                locationId: 'astoria',
                text: 'I decided to destroy my guitar at the end of a song as a sacrifice. You sacrifice things you love. I love my guitar.',
                speaker: 'Jimi Hendrix',
                source: 'Interview'
            },
            {
                id: 'astoria-passage-1',
                type: 'passage',
                locationId: 'astoria',
                passage: 'The guitar burning at the Astoria on March 31, 1967 was a calculated escalation. Hendrix had been smashing guitars since Munich. Now he would burn them. The audience was stunned. The photographs became legendary.',
                passageSource: 'Historical account'
            }
        ]
    },
    {
        id: 'marquee',
        name: 'The Marquee Club',
        lat: 51.5142,
        lng: -0.1375,
        date: 'January - March 1967',
        description: 'The legendary Wardour Street club where countless British bands got their start. Hendrix played here multiple times, cementing his reputation among London\'s music community.',
        photoUrl: '/archival/marquee_club_london_ext_1967.png',
        photoTitle: 'The Marquee Club, Wardour Street',
        content: [
            {
                id: 'marquee-quote-1',
                type: 'quote',
                locationId: 'marquee',
                text: 'Hendrix destroyed me... He took back black music.',
                speaker: 'Pete Townshend',
                source: 'Interview'
            },
            {
                id: 'marquee-quote-2',
                type: 'quote',
                locationId: 'marquee',
                text: 'Mr. Phenomenon... whirl around the business like a tornado.',
                speaker: 'Record Mirror',
                source: 'January 1967 review'
            },
            {
                id: 'marquee-quote-3',
                type: 'quote',
                locationId: 'marquee',
                text: 'Is that full, big, swinging sound really being created by only three people?',
                speaker: 'Bill Harry',
                source: 'Music journalist'
            },
            {
                id: 'marquee-quote-4',
                type: 'quote',
                locationId: 'marquee',
                text: 'We don\'t want to be classed in any category... "Free Feeling" is what we\'re trying to create.',
                speaker: 'Jimi Hendrix',
                source: 'Interview, 1967'
            },
            {
                id: 'marquee-quote-5',
                type: 'quote',
                locationId: 'marquee',
                text: '[His technique was like] John Lee Hooker and Beethoven.',
                speaker: 'Billy Cox',
                source: 'Hendrix\'s bassist'
            }
        ]
    }
];

// All quotes extracted for filtered view
export const allHendrixQuotes: ContentItem[] = hendrixLocations.flatMap(
    location => location.content.filter(item => item.type === 'quote')
);

// All photos extracted for filtered view
export const allHendrixPhotos: ContentItem[] = hendrixLocations.flatMap(
    location => location.content.filter(item => item.type === 'photo')
);

// All music tracks extracted for filtered view
export const allHendrixMusic: ContentItem[] = hendrixLocations.flatMap(
    location => location.content.filter(item => item.type === 'music')
);
