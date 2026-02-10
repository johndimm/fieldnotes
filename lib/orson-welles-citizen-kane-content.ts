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
                id: 'rko-stages-attendee-1',
                type: 'attendee',
                locationId: 'rko-stages',
                text: 'Gregg Toland, Joseph Cotten, Agnes Moorehead, Everett Sloane, Bernard Herrmann'
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
