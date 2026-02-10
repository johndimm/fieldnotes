// Bob Dylan Goes Electric - Content organized by location
// The moment folk went rock: Newport Folk Festival 1965

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const dylanElectricContext = {
    title: 'The Folk Revival and Its Betrayal',
    description: `By 1965, Bob Dylan was the crowned prince of folk music - the voice of a generation, the heir to Woody Guthrie. The folk movement was politically pure: acoustic guitars, protest songs, authenticity. Electric instruments were the enemy - they meant commercialism, teen idols, selling out. When Dylan plugged in at Newport, he wasn't just changing instruments. He was detonating the entire folk establishment.`,
    theContoversy: `The booing that greeted Dylan's electric performances wasn't just about sound quality or volume. It was about betrayal. The folk movement saw itself as the conscience of America - politically engaged, culturally authentic, opposed to commercial mass culture. Dylan was their prophet, the one who would carry Woody Guthrie's torch into the 1960s. When he went electric, he wasn't just changing his sound - he was rejecting an entire ideology. The folk purists felt personally betrayed, as if Dylan had sold his soul for rock and roll stardom.`,
    theTransformation: `But Dylan's electric period wasn't a sellout - it was a liberation. The three albums he recorded between January 1965 and May 1966 - "Bringing It All Back Home," "Highway 61 Revisited," and "Blonde on Blonde" - revolutionized rock music. Dylan proved that rock could be as literate, as poetic, as meaningful as folk. He merged the raw energy of rock and roll with the literary ambition of folk. The result was something entirely new: rock as art form.`,
    folkMovement: [
        { name: 'Pete Seeger', significance: 'Folk legend, Newport founder, allegedly tried to cut the power cables' },
        { name: 'Alan Lomax', significance: 'Folklorist who introduced Dylan at Newport 1963' },
        { name: 'Joan Baez', significance: 'Queen of folk, Dylan\'s former lover and champion' },
        { name: 'Peter, Paul and Mary', significance: 'Made "Blowin\' in the Wind" a hit' },
        { name: 'Woody Guthrie', significance: 'Dylan\'s hero, visited him in hospital, carried his torch' },
        { name: 'Mike Bloomfield', significance: 'Blues guitarist who played at Newport 1965' },
        { name: 'Al Kooper', significance: 'Organist who created the signature sound of "Like a Rolling Stone"' },
        { name: 'The Hawks', significance: 'Later became The Band, backed Dylan on the electric tour' }
    ],
    keyQuote: 'Folk music is the only music where you can\'t be booed off stage for being real. - Pete Seeger',
    electricTriology: [
        { album: 'Bringing It All Back Home', date: 'March 1965', significance: 'Side A electric, Side B acoustic - the declaration' },
        { album: 'Highway 61 Revisited', date: 'August 1965', significance: 'Fully electric - "Like a Rolling Stone" and the masterpiece' },
        { album: 'Blonde on Blonde', date: 'May 1966', significance: 'The double album culmination - rock as high art' }
    ]
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
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Early Dylan era',
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
            },
            {
                id: 'hibbing-passage-1',
                type: 'passage',
                locationId: 'hibbing',
                passage: 'Robert Zimmerman was a middle-class Jewish kid in a town dominated by iron ore and conservatism. He learned piano, formed rock bands, and dreamed of Little Richard stardom. But when he discovered Woody Guthrie records at 19, everything changed. He reinvented himself completely - new name, new biography, new voice.',
                passageSource: 'Biographical account'
            },
            {
                id: 'hibbing-music-1',
                type: 'music',
                locationId: 'hibbing',
                musicTitle: 'Highway 61 Revisited',
                musicPreviewUrl: '/api/music/deezer/track/14477362'
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
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Greenwich Village folk scene',
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
            },
            {
                id: 'greenwich-passage-1',
                type: 'passage',
                locationId: 'greenwich',
                passage: 'The Village was religion and Dylan was its newest convert. He haunted the basket houses - passed-hat clubs where you played for tips. He slept on couches, borrowed records, learned 300 folk songs in six months. The folk establishment demanded authenticity: you sang old songs, worker songs, topical songs. You channeled the people. Dylan learned the rules perfectly - then prepared to break them all.',
                passageSource: 'Historical account'
            },
            {
                id: 'greenwich-quote-4',
                type: 'quote',
                locationId: 'greenwich',
                text: 'The folk music scene was very purist. You had to be real, you had to be authentic. Electric guitars were taboo.',
                speaker: 'Eric Von Schmidt',
                source: 'Folk musician'
            },
            {
                id: 'greenwich-music-1',
                type: 'music',
                locationId: 'greenwich',
                musicTitle: 'Subterranean Homesick Blues',
                musicPreviewUrl: '/api/music/deezer/track/13782684'
            }
        ]
    },
    {
        id: 'march-washington',
        name: 'March on Washington',
        lat: 38.8893,
        lng: -77.0502,
        date: 'August 28, 1963',
        description: 'Dylan performed at the March on Washington for Jobs and Freedom, singing "When the Ship Comes In" and "Only a Pawn in Their Game" before Martin Luther King Jr. delivered his "I Have a Dream" speech. It was the peak of Dylan as protest singer - and the role he would soon reject.',
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Civil Rights era',
        content: [
            {
                id: 'march-quote-1',
                type: 'quote',
                locationId: 'march-washington',
                text: 'I was there because I wanted to be there. But I didn\'t feel like I fit in.',
                speaker: 'Bob Dylan',
                source: 'Interview'
            },
            {
                id: 'march-passage-1',
                type: 'passage',
                locationId: 'march-washington',
                passage: 'Over 250,000 people gathered at the Lincoln Memorial. Dylan was 22 years old, standing before the largest crowd he\'d ever seen, singing protest songs. This was what the folk movement wanted from him: topical songs, political commitment, the voice of his generation. But Dylan was already chafing at the role. He didn\'t want to be a spokesman. He wanted to be free.',
                passageSource: 'Historical account'
            },
            {
                id: 'march-quote-2',
                type: 'quote',
                locationId: 'march-washington',
                text: 'They wanted me to be a protest singer. They wanted me to write more "Blowin\' in the Wind." But I had other things to say.',
                speaker: 'Bob Dylan',
                source: 'Interview'
            },
            {
                id: 'march-quote-3',
                type: 'quote',
                locationId: 'march-washington',
                text: 'Dylan sang "Only a Pawn in Their Game." It was about the man who killed Medgar Evers, saying he was just a pawn. It made some people uncomfortable.',
                speaker: 'Joan Baez',
                source: 'Recollection'
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
        photoUrl: '/dylan/newport_folk.jpg',
        photoTitle: 'Newport Folk Festival',
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
                id: 'newport63-passage-1',
                type: 'passage',
                locationId: 'newport-63',
                passage: 'This was Dylan at the peak of his folk purity. Joan Baez, already a star, brought him onstage. He sang protest anthems. The crowd sang along. Pete Seeger beamed. Dylan was the movement\'s crown prince, the voice of his generation. But he was already restless, already plotting his escape.',
                passageSource: 'Historical account'
            },
            {
                id: 'newport63-quote-3',
                type: 'quote',
                locationId: 'newport-63',
                text: 'The people there were very intense about their folk music. It was like a religion.',
                speaker: 'Bob Dylan',
                source: 'Chronicles'
            },
            {
                id: 'newport63-attendee-1',
                type: 'attendee',
                locationId: 'newport-63',
                text: 'Joan Baez, Pete Seeger, Peter, Paul and Mary, Theodore Bikel'
            },
            {
                id: 'newport63-music-1',
                type: 'music',
                locationId: 'newport-63',
                musicTitle: 'Mr. Tambourine Man',
                musicPreviewUrl: '/api/music/deezer/track/13167146'
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
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Columbia Studios era',
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
            },
            {
                id: 'studio-passage-1',
                type: 'passage',
                locationId: 'studio',
                passage: 'Al Kooper wasn\'t even supposed to be on organ - he was a guitar player. But when Mike Bloomfield showed up, Kooper snuck over to the organ. He\'d never played organ on a session before. That swirling, magical riff that defines "Like a Rolling Stone"? Pure improvisation. Dylan heard it and said, "Turn the organ up." The greatest rock song ever recorded was an accident.',
                passageSource: 'Recording session account'
            },
            {
                id: 'studio-quote-4',
                type: 'quote',
                locationId: 'studio',
                text: 'When we finished that take, the entire studio erupted. I knew we had captured lightning in a bottle.',
                speaker: 'Al Kooper',
                source: 'Backstage Passes'
            },
            {
                id: 'studio-quote-5',
                type: 'quote',
                locationId: 'studio',
                text: 'It was very revolutionary at the time. Six minutes long! No radio station would play it. But they did.',
                speaker: 'Bob Dylan',
                source: 'Interview'
            },
            {
                id: 'studio-music-1',
                type: 'music',
                locationId: 'studio',
                musicTitle: 'Like a Rolling Stone',
                musicPreviewUrl: '/api/music/deezer/track/14477354'
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
        photoUrl: '/dylan/newport_folk.jpg',
        photoTitle: 'Newport Folk Festival - The Electric Night',
        content: [
            {
                id: 'newport65-passage-1',
                type: 'passage',
                locationId: 'newport-65',
                passage: 'The electricity was barely working. The sound was muddy, distorted. But that wasn\'t why they booed. They booed because their prophet had betrayed them. Dylan in sunglasses and a black leather jacket, playing rock and roll at a folk festival. Pete Seeger, the folk patriarch, reportedly wanted to cut the power cables with an axe. "If I had an axe, I\'d chop the microphone cable," he said. The revolution was eating its children.',
                passageSource: 'Eyewitness accounts'
            },
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
                id: 'newport65-passage-2',
                type: 'passage',
                locationId: 'newport-65',
                passage: 'Dylan only played three songs electric: "Maggie\'s Farm," "Like a Rolling Stone," and "Phantom Engineer" (later "It Takes a Lot to Laugh"). Three songs. Fifteen minutes. But those fifteen minutes split the decade in half. When he walked off, the crowd was in chaos - some booing, some cheering, many just stunned.',
                passageSource: 'Historical account'
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
                id: 'newport65-quote-6',
                type: 'quote',
                locationId: 'newport-65',
                text: 'The sound was terrible. You literally couldn\'t hear the words. That\'s what upset people - they wanted to hear what Bob was saying.',
                speaker: 'Al Kooper',
                source: 'Backstage Passes'
            },
            {
                id: 'newport65-quote-7',
                type: 'quote',
                locationId: 'newport-65',
                text: 'They were booing because he had betrayed them. He was their poet, their spokesman. Now he was just another rock and roller.',
                speaker: 'Eric Von Schmidt',
                source: 'Interview'
            },
            {
                id: 'newport65-attendee-1',
                type: 'attendee',
                locationId: 'newport-65',
                text: 'Pete Seeger, Alan Lomax, Mike Bloomfield, Al Kooper, Paul Butterfield Blues Band'
            },
            {
                id: 'newport65-music-1',
                type: 'music',
                locationId: 'newport-65',
                musicTitle: 'Maggie\'s Farm',
                musicPreviewUrl: '/api/music/deezer/track/13782568'
            }
        ]
    },
    {
        id: 'forest-hills',
        name: 'Forest Hills Tennis Stadium',
        lat: 40.7186,
        lng: -73.8448,
        date: 'August 28, 1965',
        description: 'One month after Newport, Dylan returned to New York for a hometown concert. The pattern was set: acoustic first half, electric second half. The booing was relentless, but Dylan pressed on.',
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Dylan in New York',
        content: [
            {
                id: 'forest-hills-passage-1',
                type: 'passage',
                locationId: 'forest-hills',
                passage: 'Forest Hills was Dylan\'s first major concert after Newport. The tennis stadium filled with 15,000 people - folkies who wanted their prophet back, and curious rock fans who wanted to hear this new sound. The acoustic set went well enough. Then came the electric half, with the same band from Newport, now called The Hawks.',
                passageSource: 'Concert account'
            },
            {
                id: 'forest-hills-quote-1',
                type: 'quote',
                locationId: 'forest-hills',
                text: 'The booing was incredible. But there was cheering too. The audience was at war with itself.',
                speaker: 'Al Aronowitz',
                source: 'Music journalist'
            },
            {
                id: 'forest-hills-quote-2',
                type: 'quote',
                locationId: 'forest-hills',
                text: 'I felt like I was in the middle of a battleground. Half the audience loved it, half hated it.',
                speaker: 'Robbie Robertson',
                source: 'The Hawks guitarist'
            },
            {
                id: 'forest-hills-passage-2',
                type: 'passage',
                locationId: 'forest-hills',
                passage: 'During the electric set, the booing was so loud that Dylan couldn\'t hear the band. But he also heard cheering. The audience had split into two camps: the folk purists who wanted their acoustic troubadour back, and the rock fans who embraced the new electric sound. Dylan had chosen his side.',
                passageSource: 'Historical account'
            },
            {
                id: 'forest-hills-quote-3',
                type: 'quote',
                locationId: 'forest-hills',
                text: 'I don\'t play folk-rock. I play rock and roll. I always have.',
                speaker: 'Bob Dylan',
                source: 'Press conference, August 1965'
            },
            {
                id: 'forest-hills-music-1',
                type: 'music',
                locationId: 'forest-hills',
                musicTitle: 'Positively 4th Street',
                musicPreviewUrl: '/api/music/deezer/track/15195124'
            }
        ]
    },
    {
        id: 'columbia',
        name: 'Columbia Records',
        lat: 40.7614,
        lng: -73.9776,
        date: 'November 1961',
        description: 'John Hammond, the legendary Columbia Records producer who had signed Billie Holiday and Count Basie, took a chance on a 20-year-old folk singer. Dylan\'s first album sold only 5,000 copies. Hammond was mocked as "Hammond\'s Folly." But Hammond believed.',
        photoUrl: '/dylan/greenwich_village.jpg',
        photoTitle: 'Columbia Records era',
        content: [
            {
                id: 'columbia-quote-1',
                type: 'quote',
                locationId: 'columbia',
                text: 'He looked like a choir boy. But when he started to sing, I knew he was special.',
                speaker: 'John Hammond',
                source: 'Producer, Columbia Records'
            },
            {
                id: 'columbia-passage-1',
                type: 'passage',
                locationId: 'columbia',
                passage: 'Dylan\'s early Columbia recordings were pure folk - acoustic guitar, harmonica, traditional songs. But by 1964, the songs were changing. "Another Side of Bob Dylan" hinted at something new. Then in January 1965, he brought a rock band into the studio for "Bringing It All Back Home." Side A was electric. Side B was acoustic. It was a declaration of independence.',
                passageSource: 'Recording history'
            },
            {
                id: 'columbia-quote-2',
                type: 'quote',
                locationId: 'columbia',
                text: 'The first album sold like five thousand copies. They called it "Hammond\'s Folly." But I knew.',
                speaker: 'John Hammond',
                source: 'Interview'
            },
            {
                id: 'columbia-quote-3',
                type: 'quote',
                locationId: 'columbia',
                text: 'Tom Wilson was the producer who really got the electric thing. He understood what I was trying to do.',
                speaker: 'Bob Dylan',
                source: 'Chronicles'
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
        photoUrl: '/dylan/newport_folk.jpg',
        photoTitle: 'Dylan electric period',
        content: [
            {
                id: 'manchester-passage-1',
                type: 'passage',
                locationId: 'manchester',
                passage: 'By 1966, Dylan had been touring electric for eight months. Every night, the same pattern: acoustic first half to scattered applause, electric second half to waves of booing. Manchester was the climax. The crowd was hostile from the start of the electric set. Slow handclaps. Jeers. Then the shout that echoed through rock history.',
                passageSource: 'Concert account'
            },
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
                id: 'manchester-passage-2',
                type: 'passage',
                locationId: 'manchester',
                passage: 'The bootleg recording of this show became legendary - for years it was mislabeled as "Royal Albert Hall." But it was Manchester. And the "Like a Rolling Stone" that followed the "Judas" shout is one of the most ferocious performances in rock history. Dylan and The Hawks playing with pure fury, drowning out the boos with electric rage.',
                passageSource: 'Recording history'
            },
            {
                id: 'manchester-quote-4',
                type: 'quote',
                locationId: 'manchester',
                text: 'The version of "Like a Rolling Stone" that followed was the most intense performance I\'ve ever witnessed.',
                speaker: 'Jonathan Cott',
                source: 'Rolling Stone'
            },
            {
                id: 'manchester-quote-5',
                type: 'quote',
                locationId: 'manchester',
                text: 'Every night we\'d go out there and get booed. But we kept playing. We believed in what we were doing.',
                speaker: 'Robbie Robertson',
                source: 'The Hawks guitarist'
            },
            {
                id: 'manchester-quote-6',
                type: 'quote',
                locationId: 'manchester',
                text: 'They can boo till the end of time. I know that the music is real, more real than any of them.',
                speaker: 'Bob Dylan',
                source: 'Interview, 1966'
            },
            {
                id: 'manchester-music-1',
                type: 'music',
                locationId: 'manchester',
                musicTitle: 'Ballad of a Thin Man',
                musicPreviewUrl: '/api/music/deezer/track/14477357'
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
