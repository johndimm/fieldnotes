// Orson Welles and Citizen Kane - Content organized by location
// A 25-year-old makes the greatest film ever (1940-1941)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const orsonWellesCitizenKaneContext = {
    title: 'The Boy Genius and the Tycoon',
    description: `In 1940, Orson Welles was 24 years old and already the most famous man in America. His War of the Worlds broadcast had caused a national panic. Hollywood gave him an unprecedented contract: final cut, total creative control. He had never made a film. What he made was Citizen Kane - a thinly veiled attack on William Randolph Hearst that nearly destroyed his career but changed cinema forever.`,
    keyFigures: [
        { name: 'William Randolph Hearst', significance: 'Media tycoon who was the model for Charles Foster Kane' },
        { name: 'Herman J. Mankiewicz', significance: 'Co-screenwriter, former Hearst employee' },
        { name: 'Gregg Toland', significance: 'Cinematographer who invented deep focus for the film' },
        { name: 'Bernard Herrmann', significance: 'Composer who created the iconic score' },
        { name: 'John Houseman', significance: 'Producer and collaborator from Mercury Theatre' }
    ],
    keyQuote: 'I started at the top and worked my way down. - Orson Welles'
};

// Timeline Events
export const orsonWellesCitizenKaneTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'kenosha',
        date: 'May 6, 1915',
        text: 'George Orson Welles born in Kenosha, Wisconsin'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'gate-theatre',
        date: '1931',
        text: 'At 16, talks his way into Dublin\'s Gate Theatre claiming to be a Broadway star'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'mercury',
        date: '1937',
        text: 'Founds Mercury Theatre in New York with John Houseman'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'cbs',
        date: 'October 30, 1938',
        text: 'War of the Worlds broadcast causes nationwide panic'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'rko',
        date: 'July 1939',
        text: 'Signs unprecedented contract with RKO - complete creative control'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'victorville',
        date: 'January-February 1940',
        text: 'Herman Mankiewicz writes first draft of screenplay at Victorville ranch'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'rko-stages',
        date: 'June 29, 1940',
        text: 'Principal photography begins at RKO Studios'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'rko-stages',
        date: 'October 23, 1940',
        text: 'Filming completed - Welles is 25 years old'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'hearst-castle',
        date: 'January 1941',
        text: 'Hearst newspapers launch campaign to destroy the film'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'rko-palace',
        date: 'May 1, 1941',
        text: 'Citizen Kane premieres at RKO Palace Theatre - commercial failure, critical triumph'
    }
];

// Enhanced Locations
export const orsonWellesCitizenKaneLocations: EnhancedLocation[] = [
    {
        id: 'kenosha',
        name: 'Kenosha, Wisconsin',
        lat: 42.5847,
        lng: -87.8212,
        date: '1915-1926',
        description: 'Orson Welles was born to a wealthy inventor father and a concert pianist mother. By age 10, he had been declared a genius. His mother died when he was 9, his father when he was 15. He was essentially raised by guardians.',
        photoUrl: '/welles/citizen_kane_poster.png',
        photoTitle: 'Citizen Kane - The film that changed cinema',
        content: [
            {
                id: 'kenosha-quote-1',
                type: 'quote',
                locationId: 'kenosha',
                text: 'I was born old and got younger. That\'s why I was so good so young.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'kenosha-quote-2',
                type: 'quote',
                locationId: 'kenosha',
                text: 'Everybody told me from the moment I could hear that I was absolutely marvelous.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'kenosha-quote-3',
                type: 'quote',
                locationId: 'kenosha',
                text: 'His mother called him her little genius. She died when he was nine. He spent the rest of his life trying to live up to her.',
                speaker: 'Peter Bogdanovich',
                source: 'This Is Orson Welles'
            },
            {
                id: 'kenosha-music-1',
                type: 'music',
                locationId: 'kenosha',
                musicTitle: 'Prelude (From "Citizen Kane" 1941)',
                musicPreviewUrl: '/api/music/deezer/track/95560474'
            }
        ]
    },
    {
        id: 'gate-theatre',
        name: 'Gate Theatre, Dublin',
        lat: 53.3521,
        lng: -6.2639,
        date: '1931',
        description: 'At 16, Welles arrived in Dublin claiming to be a star of the New York Theatre Guild. The Gate Theatre hired him. He was electrifying. The lie launched his career - deception and brilliance inseparable from the start.',
        photoUrl: '/welles/gate_theatre_dublin.jpg',
        photoTitle: 'Gate Theatre, Dublin - Where the boy genius began',
        content: [
            {
                id: 'gate-quote-1',
                type: 'quote',
                locationId: 'gate-theatre',
                text: 'I said I was a star of the Theatre Guild. They found out I was lying, but by then I was too good to fire.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'gate-quote-2',
                type: 'quote',
                locationId: 'gate-theatre',
                text: 'He was sixteen and looked thirty. He had this voice that seemed to come from the depths of the earth.',
                speaker: 'Micheál Mac Liammóir',
                source: 'Gate Theatre director'
            },
            {
                id: 'gate-quote-3',
                type: 'quote',
                locationId: 'gate-theatre',
                text: 'The audacity of genius is to assume you belong in places you haven\'t earned the right to be.',
                speaker: 'Orson Welles',
                source: 'On lying his way into theatre'
            }
        ]
    },
    {
        id: 'mercury',
        name: 'Mercury Theatre, New York',
        lat: 40.7580,
        lng: -73.9855,
        date: '1937-1939',
        description: 'Welles and John Houseman founded the Mercury Theatre on 41st Street. Their modern-dress Julius Caesar made Welles a star. The company would follow him to Hollywood and form the core of Citizen Kane\'s cast.',
        photoUrl: '/welles/mercury_theatre.jpg',
        photoTitle: 'Mercury Theatre - Welles\' creative laboratory',
        content: [
            {
                id: 'mercury-quote-1',
                type: 'quote',
                locationId: 'mercury',
                text: 'The Mercury Theatre presents Orson Welles.',
                speaker: 'Radio announcer',
                source: 'Weekly opening'
            },
            {
                id: 'mercury-quote-2',
                type: 'quote',
                locationId: 'mercury',
                text: 'Working with Orson was like working with a force of nature. Exhausting and exhilarating.',
                speaker: 'John Houseman',
                source: 'Run-Through'
            },
            {
                id: 'mercury-quote-3',
                type: 'quote',
                locationId: 'mercury',
                text: 'I have always been more interested in experiment than in accomplishment.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'mercury-quote-4',
                type: 'quote',
                locationId: 'mercury',
                text: 'He set Julius Caesar in fascist Italy. The critics called it genius. He was 22 years old.',
                speaker: 'John Houseman',
                source: 'Run-Through'
            },
            {
                id: 'mercury-music-1',
                type: 'music',
                locationId: 'mercury',
                musicTitle: 'Rachmaninoff: The Isle of the Dead, Op. 29',
                musicPreviewUrl: '/api/music/deezer/track/118932304'
            }
        ]
    },
    {
        id: 'cbs',
        name: 'CBS Studio One, New York',
        lat: 40.7614,
        lng: -73.9776,
        date: 'October 30, 1938',
        description: 'The night that changed everything. Mercury Theatre on the Air broadcast a radio adaptation of War of the Worlds. Millions of Americans believed Martians had landed. Welles became the most famous man in America overnight.',
        photoUrl: '/welles/cbs_radio.jpg',
        photoTitle: 'CBS Radio - The War of the Worlds broadcast',
        content: [
            {
                id: 'cbs-quote-1',
                type: 'quote',
                locationId: 'cbs',
                text: 'Ladies and gentlemen, I have a grave announcement to make. Incredible as it may seem, those strange beings who landed in the Jersey farmlands tonight are the vanguard of an invading army from the planet Mars.',
                speaker: 'Orson Welles',
                source: 'War of the Worlds broadcast'
            },
            {
                id: 'cbs-quote-2',
                type: 'quote',
                locationId: 'cbs',
                text: 'I had no idea people would believe it. None of us did.',
                speaker: 'Orson Welles',
                source: 'Press conference, next day'
            },
            {
                id: 'cbs-quote-3',
                type: 'quote',
                locationId: 'cbs',
                text: 'People ran into the streets in panic. It was a national hysteria.',
                speaker: 'Newspaper report',
                source: 'October 31, 1938'
            },
            {
                id: 'cbs-quote-4',
                type: 'quote',
                locationId: 'cbs',
                text: 'The power of radio was never more terrifyingly demonstrated. He had scared a nation.',
                speaker: 'Dorothy Thompson',
                source: 'New York Tribune'
            },
            {
                id: 'cbs-quote-5',
                type: 'quote',
                locationId: 'cbs',
                text: 'At 23, I was the most talked-about man in America. RKO called the next day.',
                speaker: 'Orson Welles',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'rko',
        name: 'RKO Pictures, Hollywood',
        lat: 34.0900,
        lng: -118.3200,
        date: 'July 1939',
        description: 'RKO gave 24-year-old Welles the most extraordinary contract in Hollywood history: final cut on two films, complete creative control, no studio interference. The industry was outraged. No one had ever been given such power.',
        photoUrl: '/welles/citizen_kane_filming.jpg',
        photoTitle: 'Filming Citizen Kane at RKO Studios',
        content: [
            {
                id: 'rko-quote-1',
                type: 'quote',
                locationId: 'rko',
                text: 'This is the biggest electric train set a boy ever had.',
                speaker: 'Orson Welles',
                source: 'On arriving at RKO'
            },
            {
                id: 'rko-quote-2',
                type: 'quote',
                locationId: 'rko',
                text: 'He had never been on a movie set in his life. He didn\'t know what a movie camera was.',
                speaker: 'Gregg Toland',
                source: 'Cinematographer'
            },
            {
                id: 'rko-quote-3',
                type: 'quote',
                locationId: 'rko',
                text: 'I want to work with the man who filmed Wuthering Heights.',
                speaker: 'Orson Welles',
                source: 'Requesting Gregg Toland'
            },
            {
                id: 'rko-quote-4',
                type: 'quote',
                locationId: 'rko',
                text: 'No other studio would have made such a deal. They called it suicide.',
                speaker: 'George Schaefer',
                source: 'RKO President'
            },
            {
                id: 'rko-quote-5',
                type: 'quote',
                locationId: 'rko',
                text: 'Hollywood hated him before he even arrived. The boy wonder with final cut.',
                speaker: 'Joseph Cotten',
                source: 'Actor, Mercury Theatre'
            },
            {
                id: 'rko-music-1',
                type: 'music',
                locationId: 'rko',
                musicTitle: 'Xanadu Music (From Citizen Kane)',
                musicPreviewUrl: '/api/music/deezer/track/123799328'
            }
        ]
    },
    {
        id: 'victorville',
        name: 'Campbell Ranch, Victorville',
        lat: 34.5362,
        lng: -117.2928,
        date: 'January-February 1940',
        description: 'Herman Mankiewicz, a brilliant alcoholic screenwriter, was installed at this remote ranch to dry out while writing the screenplay. He had worked for Hearst and knew all the secrets. The bitter first draft was called "American."',
        photoUrl: '/welles/citizen_kane_filming.jpg',
        photoTitle: 'The screenplay that would destroy Welles',
        content: [
            {
                id: 'victorville-quote-1',
                type: 'quote',
                locationId: 'victorville',
                text: 'I wrote it. Welles got the credit. That\'s Hollywood.',
                speaker: 'Herman J. Mankiewicz',
                source: 'On the screenplay dispute'
            },
            {
                id: 'victorville-quote-2',
                type: 'quote',
                locationId: 'victorville',
                text: 'Mank knew where the bodies were buried. He\'d been to San Simeon dozens of times.',
                speaker: 'John Houseman',
                source: 'On Mankiewicz\'s Hearst knowledge'
            },
            {
                id: 'victorville-quote-3',
                type: 'quote',
                locationId: 'victorville',
                text: 'It\'s not based on Hearst. It\'s based on several people.',
                speaker: 'Orson Welles',
                source: 'Press interview (unconvincingly)'
            },
            {
                id: 'victorville-quote-4',
                type: 'quote',
                locationId: 'victorville',
                text: 'Mank dictated the script with a broken leg. He couldn\'t run from his demons anymore.',
                speaker: 'Sara Mankiewicz',
                source: 'On her husband\'s condition'
            },
            {
                id: 'victorville-quote-5',
                type: 'quote',
                locationId: 'victorville',
                text: 'The screenplay is the most important part of filmmaking. Orson knew that.',
                speaker: 'Herman J. Mankiewicz',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'rko-stages',
        name: 'RKO Stage 19',
        lat: 34.0900,
        lng: -118.3195,
        date: 'June-October 1940',
        description: 'On this soundstage, Welles and Toland invented modern cinema. Deep focus photography, ceilinged sets, extreme camera angles - techniques that would influence every film that followed. Welles was 25 years old.',
        photoUrl: '/welles/citizen_kane_filming.jpg',
        photoTitle: 'Filming the greatest movie ever made',
        content: [
            {
                id: 'rko-stages-quote-1',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'Toland taught me everything in three hours. The rest I figured out.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'rko-stages-quote-2',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'I asked Toland why we couldn\'t see ceilings in movies. He said nobody had ever asked.',
                speaker: 'Orson Welles',
                source: 'On innovating'
            },
            {
                id: 'rko-stages-quote-3',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'Welles didn\'t know the rules. That\'s why he could break them.',
                speaker: 'Gregg Toland',
                source: 'Interview'
            },
            {
                id: 'rko-stages-quote-4',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'I didn\'t know what you couldn\'t do. I didn\'t deliberately set out to invent anything.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'rko-stages-quote-5',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'He demanded 12 weeks to compose the score. Most films got two. I gave him what he wanted.',
                speaker: 'Orson Welles',
                source: 'On Bernard Herrmann'
            },
            {
                id: 'rko-stages-quote-6',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'The score is 50 percent of the success of the film.',
                speaker: 'Orson Welles',
                source: 'On Herrmann\'s music'
            },
            {
                id: 'rko-stages-quote-7',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'Deep focus meant everything in the shot was important. The audience could choose what to look at.',
                speaker: 'Gregg Toland',
                source: 'On revolutionary cinematography'
            },
            {
                id: 'rko-stages-quote-8',
                type: 'quote',
                locationId: 'rko-stages',
                text: 'He dug holes in the floor for low angles. He built ceilings on every set. He was insane with genius.',
                speaker: 'Robert Wise',
                source: 'Film editor'
            },
            {
                id: 'rko-stages-attendee-1',
                type: 'attendee',
                locationId: 'rko-stages',
                text: 'Gregg Toland, Joseph Cotten, Agnes Moorehead, Everett Sloane, Bernard Herrmann, Dorothy Comingore, Ray Collins'
            },
            {
                id: 'rko-stages-music-1',
                type: 'music',
                locationId: 'rko-stages',
                musicTitle: 'Prelude (From "Citizen Kane" 1941)',
                musicPreviewUrl: '/api/music/deezer/track/95560474'
            }
        ]
    },
    {
        id: 'hearst-castle',
        name: 'San Simeon (Hearst Castle)',
        lat: 35.6852,
        lng: -121.1682,
        date: '1919-1947',
        description: 'William Randolph Hearst\'s castle was the model for Xanadu. When Hearst learned about the film, he declared war. His newspapers banned all RKO advertising. Studios refused to show it. Hearst tried to buy and destroy the negative.',
        photoUrl: '/welles/hearst_castle.jpg',
        photoTitle: 'San Simeon - The real Xanadu',
        content: [
            {
                id: 'hearst-quote-1',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'Hearst is a man who has everything and wants more. Kane is that man.',
                speaker: 'Orson Welles',
                source: 'Interview'
            },
            {
                id: 'hearst-quote-2',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'That boy Welles will never work in Hollywood again.',
                speaker: 'William Randolph Hearst',
                source: 'Attributed'
            },
            {
                id: 'hearst-quote-3',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'Rosebud was his pet name for Marion Davies\' most intimate part.',
                speaker: 'Gore Vidal',
                source: 'On why Hearst was really furious'
            },
            {
                id: 'hearst-quote-4',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'Hearst offered to buy the film for $800,000 to burn it. RKO refused.',
                speaker: 'George Schaefer',
                source: 'RKO President'
            },
            {
                id: 'hearst-quote-5',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'Every Hearst newspaper in America was forbidden to mention the film. It was total war.',
                speaker: 'Louella Parsons',
                source: 'Hearst gossip columnist'
            },
            {
                id: 'hearst-quote-6',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'Louis B. Mayer offered RKO $850,000 to destroy the negative. The other studios were terrified.',
                speaker: 'Herman J. Mankiewicz',
                source: 'On Hollywood\'s fear of Hearst'
            },
            {
                id: 'hearst-quote-7',
                type: 'quote',
                locationId: 'hearst-castle',
                text: 'If Hearst wants to destroy me, let him try. I made the greatest film ever made.',
                speaker: 'Orson Welles',
                source: 'Defiant statement, 1941'
            },
            {
                id: 'hearst-music-1',
                type: 'music',
                locationId: 'hearst-castle',
                musicTitle: 'Xanadu Music (From Citizen Kane)',
                musicPreviewUrl: '/api/music/deezer/track/123799328'
            }
        ]
    },
    {
        id: 'rko-palace',
        name: 'RKO Palace Theatre, New York',
        lat: 40.7580,
        lng: -73.9855,
        date: 'May 1, 1941',
        description: 'Citizen Kane premiered to ecstatic reviews and empty theaters. Hearst\'s campaign had worked - major theater chains refused to show it. The film lost money. It would take decades for the world to recognize its greatness.',
        content: [
            {
                id: 'premiere-quote-1',
                type: 'quote',
                locationId: 'rko-palace',
                text: 'Citizen Kane is perhaps the most exciting film that has come out of Hollywood in twenty-five years.',
                speaker: 'John O\'Hara',
                source: 'Newsweek'
            },
            {
                id: 'premiere-quote-2',
                type: 'quote',
                locationId: 'rko-palace',
                text: 'It was as if the film had been made in a vacuum. Nobody came.',
                speaker: 'Orson Welles',
                source: 'On the empty theaters'
            },
            {
                id: 'premiere-quote-3',
                type: 'quote',
                locationId: 'rko-palace',
                text: 'I started at the top and worked my way down.',
                speaker: 'Orson Welles',
                source: 'On his career after Kane'
            },
            {
                id: 'premiere-quote-4',
                type: 'quote',
                locationId: 'rko-palace',
                text: 'It\'s the best movie ever made.',
                speaker: 'Sight & Sound poll',
                source: 'Voted #1 from 1962-2012'
            }
        ]
    }
];

// Technical Innovations
export const citizenKaneInnovations = [
    { innovation: 'Deep Focus Photography', description: 'Everything in frame sharp, foreground to background' },
    { innovation: 'Low Angle Shots with Ceilings', description: 'First film to show ceilings on sets' },
    { innovation: 'Overlapping Dialogue', description: 'Characters talk over each other naturally' },
    { innovation: 'Non-Linear Narrative', description: 'Story told through fragmented flashbacks' },
    { innovation: 'Long Takes', description: 'Extended shots without cutting' }
];
