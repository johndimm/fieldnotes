// The Beach Boys' Pet Sounds - Content organized by location
// Brian Wilson's creative breakthrough (1965-1966)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const petSoundsContext = {
    title: 'The Teenage Symphony to God: Brian Wilson\'s Masterpiece',
    description: `By 1965, The Beach Boys were America's top band - but Brian Wilson was falling apart. Panic attacks had forced him off the road. While the band toured without him, Brian stayed home, obsessively listening to The Beatles' "Rubber Soul" on repeat, and plotting his response. He would create not just an album, but a symphony - a "teenage symphony to God." What emerged was Pet Sounds: 13 tracks of devastating beauty, recorded with neurotic perfectionism. Brian spent months and $70,000 creating orchestral arrangements for pop songs about loneliness and longing. The Beach Boys hated it. Capitol Records was baffled. America ignored it. But in England, the Beatles declared it a masterpiece - and rushed to surpass it with Sgt. Pepper. Pet Sounds changed music forever. It also destroyed Brian Wilson.`,
    influences: [
        { name: 'Phil Spector', significance: 'Wall of Sound producer, Brian\'s idol and rival - taught him studio perfectionism' },
        { name: 'The Beatles', significance: '"Rubber Soul" triggered Brian\'s competitive obsession to create the greatest album ever' },
        { name: 'Burt Bacharach', significance: 'Sophisticated pop arrangements and unusual chord progressions Brian studied' },
        { name: 'The Four Freshmen', significance: 'Vocal harmony group Brian studied obsessively since age 15' },
        { name: 'George Gershwin', significance: 'Classical-pop fusion that inspired Brian\'s orchestral ambitions' }
    ],
    keyQuote: 'I\'m writing a teenage symphony to God. - Brian Wilson, December 1965'
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
        photoUrl: '/beachboys/capitol_records.jpg',
        photoTitle: 'Capitol Records Tower, Hollywood',
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
            },
            {
                id: 'hawthorne-quote-3',
                type: 'quote',
                locationId: 'hawthorne',
                text: 'I was so scared of my dad. He was deaf in one ear from an accident, and I think that made him angry. But he gave me my love of music.',
                speaker: 'Brian Wilson',
                source: 'I Am Brian Wilson'
            },
            {
                id: 'hawthorne-music-1',
                type: 'music',
                locationId: 'hawthorne',
                musicTitle: 'Wouldn\'t It Be Nice',
                musicPreviewUrl: '/api/music/deezer/track/2263082627'
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
        photoUrl: '/beachboys/capitol_records.jpg',
        photoTitle: 'Capitol Records Tower',
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
            },
            {
                id: 'plane-quote-3',
                type: 'quote',
                locationId: 'plane',
                text: 'I was crying, yelling, screaming. I just couldn\'t take the pressure anymore. The touring, the hotels, the fans - I wanted to stay home and make music.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'plane-music-1',
                type: 'music',
                locationId: 'plane',
                musicTitle: 'That\'s Not Me',
                musicPreviewUrl: '/api/music/deezer/track/2263082647'
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
        photoUrl: '/beachboys/capitol_records.jpg',
        photoTitle: 'The Beach Boys era Capitol Records',
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
            },
            {
                id: 'home-quote-4',
                type: 'quote',
                locationId: 'home',
                text: 'I wanted to write the most beautiful music I could. I wanted to make people feel something they\'d never felt before. That was my mission.',
                speaker: 'Brian Wilson',
                source: 'I Am Brian Wilson'
            },
            {
                id: 'home-quote-5',
                type: 'quote',
                locationId: 'home',
                text: 'The Beatles had moved ahead of us. They were doing stuff we could only dream about. I had to catch up. I had to surpass them.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'home-music-1',
                type: 'music',
                locationId: 'home',
                musicTitle: 'You Still Believe In Me',
                musicPreviewUrl: '/api/music/deezer/track/2263082637'
            },
            {
                id: 'home-music-2',
                type: 'music',
                locationId: 'home',
                musicTitle: 'Don\'t Talk (Put Your Head On My Shoulder)',
                musicPreviewUrl: '/api/music/deezer/track/2263082657'
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
        photoUrl: '/beachboys/abbey_road_studios.jpg',
        photoTitle: 'Recording studios of the 1960s',
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
                id: 'goldstar-quote-3',
                type: 'quote',
                locationId: 'gold-star',
                text: 'Brian knew exactly what he wanted. He\'d hum a part to you, and you had to play it exactly as he heard it in his head. He was a perfectionist.',
                speaker: 'Carol Kaye',
                source: 'Bass player, Wrecking Crew'
            },
            {
                id: 'goldstar-quote-4',
                type: 'quote',
                locationId: 'gold-star',
                text: 'We\'d do 50, 60 takes of the same thing. Brian would say, "Again." We\'d do it again. "Again." And again. Until it was perfect.',
                speaker: 'Hal Blaine',
                source: 'Drummer, Wrecking Crew'
            },
            {
                id: 'goldstar-quote-5',
                type: 'quote',
                locationId: 'gold-star',
                text: 'I wanted that Phil Spector sound, but bigger. Warmer. More emotional. I wanted every instrument to mean something.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'goldstar-attendee-1',
                type: 'attendee',
                locationId: 'gold-star',
                text: 'The Wrecking Crew: Hal Blaine, Carol Kaye, Glen Campbell, Leon Russell'
            },
            {
                id: 'goldstar-music-1',
                type: 'music',
                locationId: 'gold-star',
                musicTitle: 'Sloop John B',
                musicPreviewUrl: '/api/music/deezer/track/2263082707'
            },
            {
                id: 'goldstar-music-2',
                type: 'music',
                locationId: 'gold-star',
                musicTitle: 'I\'m Waiting For The Day',
                musicPreviewUrl: '/api/music/deezer/track/2263082667'
            },
            {
                id: 'goldstar-passage-1',
                type: 'passage',
                locationId: 'gold-star',
                passage: 'The Wrecking Crew were Los Angeles\' elite session musicians. These were not the Beach Boys playing - Brian hired the best players in the world. Hal Blaine on drums, Carol Kaye on bass, Glen Campbell on guitar, Leon Russell on keyboards. They worked with everyone from Sinatra to Spector. For Pet Sounds, Brian pushed them into uncharted territory. Sessions would start at 2 PM and run until midnight. Brian would conduct from the piano, singing parts, demonstrating rhythms. The musicians were baffled at first - but slowly, track by track, they realized they were creating something revolutionary.',
                passageSource: 'The Wrecking Crew: The Inside Story of Rock and Roll\'s Best-Kept Secret'
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
        photoUrl: '/beachboys/abbey_road_studios.jpg',
        photoTitle: '1960s Recording Studio',
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
            },
            {
                id: 'western-quote-5',
                type: 'quote',
                locationId: 'western',
                text: 'Brian spent three hours on just the harpsichord part. Three hours! Most bands would record an entire album in that time.',
                speaker: 'Larry Levine',
                source: 'Engineer'
            },
            {
                id: 'western-quote-6',
                type: 'quote',
                locationId: 'western',
                text: 'The modulation in the middle - nobody did that in pop music. Brian was thinking like a classical composer.',
                speaker: 'Tony Asher',
                source: 'Lyricist'
            },
            {
                id: 'western-quote-7',
                type: 'quote',
                locationId: 'western',
                text: 'I wanted to write the most beautiful love song ever. A song about vulnerability, about saying "I need you" without being weak.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'western-music-1',
                type: 'music',
                locationId: 'western',
                musicTitle: 'God Only Knows (Remastered 1996)',
                musicPreviewUrl: '/api/music/deezer/track/2263082717'
            },
            {
                id: 'western-music-2',
                type: 'music',
                locationId: 'western',
                musicTitle: 'Let\'s Go Away For Awhile',
                musicPreviewUrl: '/api/music/deezer/track/2263082677'
            },
            {
                id: 'western-passage-1',
                type: 'passage',
                locationId: 'western',
                passage: '"God Only Knows" was recorded on March 10, 1966, in a single marathon session. Brian had spent weeks composing it at home, working out every detail. The arrangement featured accordion, French horn, strings, harpsichord, sleigh bells, and the warmest vocal harmonies ever recorded. Carl Wilson sang lead - Brian insisted on it, saying Carl\'s voice had the purity the song demanded. The result was a love song that dared to acknowledge doubt: "I may not always love you." It was revolutionary. Tony Asher wrote the lyrics with Brian, and they worried the opening line was too risky. But Brian knew it was perfect - real love includes fear of loss.',
                passageSource: 'Pet Sounds Sessions boxed set liner notes'
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
        photoUrl: '/beachboys/capitol_records.jpg',
        photoTitle: 'Capitol Records Tower, Hollywood',
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
            },
            {
                id: 'capitol-quote-4',
                type: 'quote',
                locationId: 'capitol',
                text: 'I spent $70,000 of Capitol\'s money making Pet Sounds. They were furious. They said I was wasting their money on art.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'capitol-quote-5',
                type: 'quote',
                locationId: 'capitol',
                text: 'Brian came in with this masterpiece, and we treated it like a disappointment. We wanted hits. We got poetry.',
                speaker: 'Capitol executive',
                source: 'Interview'
            },
            {
                id: 'capitol-music-1',
                type: 'music',
                locationId: 'capitol',
                musicTitle: 'I Know There\'s An Answer',
                musicPreviewUrl: '/api/music/deezer/track/2263082727'
            },
            {
                id: 'capitol-music-2',
                type: 'music',
                locationId: 'capitol',
                musicTitle: 'Here Today',
                musicPreviewUrl: '/api/music/deezer/track/2263082737'
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
        photoUrl: '/beachboys/emi_studios_london.jpg',
        photoTitle: 'EMI Studios (Abbey Road), London',
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
            },
            {
                id: 'london-quote-4',
                type: 'quote',
                locationId: 'london',
                text: 'Paul played Pet Sounds every single day for months. He was obsessed. We all were.',
                speaker: 'George Harrison',
                source: 'Interview'
            },
            {
                id: 'london-quote-5',
                type: 'quote',
                locationId: 'london',
                text: 'Brian was doing things with harmonies and arrangements that we\'d never imagined. It raised the bar for everyone.',
                speaker: 'George Martin',
                source: 'All You Need Is Ears'
            },
            {
                id: 'london-music-1',
                type: 'music',
                locationId: 'london',
                musicTitle: 'I Just Wasn\'t Made For These Times',
                musicPreviewUrl: '/api/music/deezer/track/2263082747'
            },
            {
                id: 'london-passage-1',
                type: 'passage',
                locationId: 'london',
                passage: 'Pet Sounds arrived at Abbey Road in May 1966, right as the Beatles were finishing Revolver. Paul McCartney was immediately transfixed. He played it constantly - on the studio speakers, at home, in his car. The sophistication of Brian\'s arrangements, the emotional depth of the songs, the orchestral textures - it was everything Paul wanted to do but hadn\'t yet achieved. John was less enthusiastic at first, but even he admitted the album was extraordinary. George Martin studied the production techniques. How did Brian get those sounds? The result was a creative arms race: Pet Sounds pushed the Beatles to make Sgt. Pepper, which pushed Brian to attempt SMiLE - which ultimately destroyed him.',
                passageSource: 'The Beatles: The Biography by Bob Spitz'
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
        photoUrl: '/beachboys/abbey_road_studios.jpg',
        photoTitle: 'Recording studios of the era',
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
            },
            {
                id: 'sunset-quote-4',
                type: 'quote',
                locationId: 'sunset',
                text: 'Pet Sounds was the end of Brian as we knew him. After that, the drugs, the pressure, the competition with the Beatles - it broke him.',
                speaker: 'Mike Love',
                source: 'Interview'
            },
            {
                id: 'sunset-quote-5',
                type: 'quote',
                locationId: 'sunset',
                text: 'I gave everything I had to Pet Sounds. Everything. I had nothing left.',
                speaker: 'Brian Wilson',
                source: 'Interview'
            },
            {
                id: 'sunset-music-1',
                type: 'music',
                locationId: 'sunset',
                musicTitle: 'Pet Sounds',
                musicPreviewUrl: '/api/music/deezer/track/2263082757'
            },
            {
                id: 'sunset-music-2',
                type: 'music',
                locationId: 'sunset',
                musicTitle: 'Caroline, No',
                musicPreviewUrl: '/api/music/deezer/track/2263082767'
            },
            {
                id: 'sunset-passage-1',
                type: 'passage',
                locationId: 'sunset',
                passage: '"Caroline, No" closes Pet Sounds with devastating beauty - Brian\'s voice slowed down to sound older, more world-weary. The song is about loss: "Where did your long hair go? Where is the girl I used to know?" The album ends with the sound of dogs barking and a train passing - Brian\'s dog Banana and a Santa Fe train recorded near his house. It fades to silence. Pet Sounds sold poorly in America but was worshipped in Britain. Critics dismissed it. Brian was devastated. He retreated further into drugs and megalomania, attempting SMiLE - a project so ambitious it consumed him. By 1967, when Sgt. Pepper was released, Brian admitted defeat. He would spend the next three decades fighting mental illness, never again reaching the heights of Pet Sounds.',
                passageSource: 'Catch a Wave: The Rise, Fall, and Redemption of the Beach Boys\' Brian Wilson'
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
