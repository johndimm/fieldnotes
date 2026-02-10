// Einstein's Miracle Year - Content organized by location
// A patent clerk in Bern publishes 4 papers that change physics (1905)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const einsteinMiracleContext = {
    title: 'The Patent Clerk Who Rewrote the Universe',
    description: `In 1905, Albert Einstein was a 26-year-old patent examiner in Bern, Switzerland - a job he'd taken after failing to secure an academic position. In his spare time, after work and on weekends, he published four papers that revolutionized physics: explaining Brownian motion, proving atoms exist, introducing special relativity, and deriving E=mc². It remains the most productive year in the history of science.`,
    papers: [
        { title: 'Photoelectric Effect', significance: 'Light as quanta - foundation of quantum mechanics (Nobel Prize 1921)' },
        { title: 'Brownian Motion', significance: 'Proved the existence of atoms' },
        { title: 'Special Relativity', significance: 'Time dilation, length contraction, no absolute frame of reference' },
        { title: 'Mass-Energy Equivalence', significance: 'E=mc² - matter is frozen energy' }
    ],
    keyQuote: 'Imagination is more important than knowledge. - Albert Einstein'
};

// Timeline Events
export const einsteinMiracleTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'ulm',
        date: 'March 14, 1879',
        text: 'Albert Einstein born in Ulm, Germany'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'munich',
        date: '1889',
        text: 'At age 10, begins systematic self-study of mathematics and science'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'zurich',
        date: '1896-1900',
        text: 'Studies physics at ETH Zürich - graduates but cannot find academic position'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'zurich',
        date: 'January 6, 1903',
        text: 'Marries Mileva Marić, fellow physics student'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'patent-office',
        date: 'June 1902',
        text: 'Begins work as Technical Expert Third Class at Swiss Patent Office'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'kramgasse',
        date: 'March 17, 1905',
        text: 'Completes paper on the photoelectric effect (quantum theory)'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'kramgasse',
        date: 'May 11, 1905',
        text: 'Completes paper on Brownian motion (proof of atoms)'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'kramgasse',
        date: 'June 30, 1905',
        text: 'Completes paper on special relativity'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'kramgasse',
        date: 'September 27, 1905',
        text: 'Publishes E=mc² paper - mass-energy equivalence'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'bern',
        date: '1909',
        text: 'Finally leaves patent office for first academic position'
    }
];

// Enhanced Locations
export const einsteinMiracleLocations: EnhancedLocation[] = [
    {
        id: 'ulm',
        name: 'Ulm, Germany',
        lat: 48.4011,
        lng: 9.9876,
        date: 'March 14, 1879',
        description: 'Einstein was born at Bahnhofstraße 20. His family moved to Munich when he was one year old. His father Hermann ran an electrochemical business; his mother Pauline was musical and introduced Albert to the violin.',
        content: [
            {
                id: 'ulm-quote-1',
                type: 'quote',
                locationId: 'ulm',
                text: 'I have no special talents. I am only passionately curious.',
                speaker: 'Albert Einstein',
                source: 'Letter, 1952'
            },
            {
                id: 'ulm-quote-2',
                type: 'quote',
                locationId: 'ulm',
                text: 'At age five, his father showed him a compass. Albert was mesmerized - what invisible force moved the needle?',
                speaker: 'Maja Einstein',
                source: 'Sister\'s memoir'
            }
        ]
    },
    {
        id: 'munich',
        name: 'Munich',
        lat: 48.1351,
        lng: 11.5820,
        date: '1880-1894',
        description: 'Einstein grew up in Munich, attending the Luitpold Gymnasium. He hated the rigid, militaristic school system but taught himself calculus at age 12. A gift of a geometry book at age 10 was, he said, like discovering a "holy geometry book."',
        content: [
            {
                id: 'munich-quote-1',
                type: 'quote',
                locationId: 'munich',
                text: 'At the age of 12, I experienced a wonder... when I received the holy geometry book.',
                speaker: 'Albert Einstein',
                source: 'Autobiographical Notes'
            },
            {
                id: 'munich-quote-2',
                type: 'quote',
                locationId: 'munich',
                text: 'The teachers at school seemed to me like sergeants. I hated it.',
                speaker: 'Albert Einstein',
                source: 'Interview'
            },
            {
                id: 'munich-quote-3',
                type: 'quote',
                locationId: 'munich',
                text: 'He asked questions the teachers couldn\'t answer. They didn\'t like that.',
                speaker: 'Maja Einstein',
                source: 'Sister\'s memoir'
            }
        ]
    },
    {
        id: 'zurich',
        name: 'ETH Zürich',
        lat: 47.3769,
        lng: 8.5417,
        date: '1896-1900',
        description: 'Einstein studied physics at the prestigious Swiss Federal Institute of Technology. He met Mileva Marić, the only woman in the physics program. He skipped lectures, borrowed notes, and barely graduated - his professors refused to recommend him.',
        content: [
            {
                id: 'zurich-quote-1',
                type: 'quote',
                locationId: 'zurich',
                text: 'You\'re a clever fellow, Einstein, but you have one fault: you won\'t let anyone tell you anything.',
                speaker: 'Heinrich Weber',
                source: 'Einstein\'s physics professor'
            },
            {
                id: 'zurich-quote-2',
                type: 'quote',
                locationId: 'zurich',
                text: 'How happy I was when I met you - a creature like myself!',
                speaker: 'Albert Einstein',
                source: 'Letter to Mileva'
            },
            {
                id: 'zurich-quote-3',
                type: 'quote',
                locationId: 'zurich',
                text: 'I skipped most lectures. The library was better.',
                speaker: 'Albert Einstein',
                source: 'Autobiographical Notes'
            }
        ]
    },
    {
        id: 'patent-office',
        name: 'Swiss Patent Office',
        lat: 46.9465,
        lng: 7.4400,
        date: '1902-1909',
        description: 'The Federal Office for Intellectual Property at Speichergasse 6. Einstein examined patent applications for electromagnetic devices. The work was easy enough to leave his mind free for physics. He called it "that worldly cloister."',
        content: [
            {
                id: 'patent-quote-1',
                type: 'quote',
                locationId: 'patent-office',
                text: 'I soon learned to sniff out what was worthwhile that might lead to fundamentals and to turn aside from the rest.',
                speaker: 'Albert Einstein',
                source: 'On his patent office work'
            },
            {
                id: 'patent-quote-2',
                type: 'quote',
                locationId: 'patent-office',
                text: 'That worldly cloister where I hatched my most beautiful ideas.',
                speaker: 'Albert Einstein',
                source: 'On the patent office'
            },
            {
                id: 'patent-quote-3',
                type: 'quote',
                locationId: 'patent-office',
                text: 'I would finish my work in a few hours and spend the rest of the day on my own calculations.',
                speaker: 'Albert Einstein',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'kramgasse',
        name: '49 Kramgasse',
        lat: 46.9481,
        lng: 7.4514,
        date: '1903-1905',
        description: 'Einstein\'s apartment in Bern\'s old town, now a museum. In the small living room, often after putting baby Hans Albert to bed, Einstein worked on the four papers that would transform physics. Mileva helped with calculations.',
        content: [
            {
                id: 'kramgasse-quote-1',
                type: 'quote',
                locationId: 'kramgasse',
                text: 'I was sitting in a chair in the patent office at Bern when all of a sudden a thought occurred to me: if a person falls freely, he will not feel his own weight.',
                speaker: 'Albert Einstein',
                source: 'The happiest thought of my life'
            },
            {
                id: 'kramgasse-quote-2',
                type: 'quote',
                locationId: 'kramgasse',
                text: 'Thank you! I\'ve completely solved the problem. My argument will be published in a few weeks.',
                speaker: 'Albert Einstein',
                source: 'To Michele Besso, announcing special relativity'
            },
            {
                id: 'kramgasse-quote-3',
                type: 'quote',
                locationId: 'kramgasse',
                text: 'The theory is beautiful beyond comparison. However, only one colleague has really understood it.',
                speaker: 'Albert Einstein',
                source: 'Letter to Conrad Habicht'
            },
            {
                id: 'kramgasse-quote-4',
                type: 'quote',
                locationId: 'kramgasse',
                text: 'A storm broke loose in my mind.',
                speaker: 'Albert Einstein',
                source: 'On the moment of breakthrough'
            }
        ]
    },
    {
        id: 'bern',
        name: 'Olympia Academy',
        lat: 46.9480,
        lng: 7.4474,
        date: '1902-1905',
        description: 'Einstein\'s informal study group with Maurice Solovine and Conrad Habicht. They met evenings to discuss philosophy, physics, and literature - Hume, Mach, Spinoza. These discussions sharpened the thinking that led to relativity.',
        content: [
            {
                id: 'bern-quote-1',
                type: 'quote',
                locationId: 'bern',
                text: 'We called ourselves the Olympia Academy, in mocking reference to the grandeur of our discussions.',
                speaker: 'Maurice Solovine',
                source: 'Memoir'
            },
            {
                id: 'bern-quote-2',
                type: 'quote',
                locationId: 'bern',
                text: 'Reading David Hume was a crucial influence. He made me question everything I thought I knew about space and time.',
                speaker: 'Albert Einstein',
                source: 'On philosophical influences'
            },
            {
                id: 'bern-quote-3',
                type: 'quote',
                locationId: 'bern',
                text: 'We would read until late at night, then argue about what we\'d read. It was wonderful.',
                speaker: 'Albert Einstein',
                source: 'On the Olympia Academy'
            },
            {
                id: 'bern-attendee-1',
                type: 'attendee',
                locationId: 'bern',
                text: 'Maurice Solovine, Conrad Habicht, Michele Besso, Mileva Einstein'
            }
        ]
    },
    {
        id: 'annalen',
        name: 'Annalen der Physik',
        lat: 52.5200,
        lng: 13.4050,
        date: '1905',
        description: 'Germany\'s leading physics journal, where Einstein submitted his four revolutionary papers. Editor Paul Drude published them without peer review - recognizing their importance. The physics community was stunned.',
        content: [
            {
                id: 'annalen-quote-1',
                type: 'quote',
                locationId: 'annalen',
                text: 'If this young man is right, the whole of physics will have to be rewritten.',
                speaker: 'Max Planck',
                source: 'On reading Einstein\'s relativity paper'
            },
            {
                id: 'annalen-quote-2',
                type: 'quote',
                locationId: 'annalen',
                text: 'It was as if a new window had been opened on the universe.',
                speaker: 'Max Born',
                source: 'On Einstein\'s 1905 papers'
            },
            {
                id: 'annalen-quote-3',
                type: 'quote',
                locationId: 'annalen',
                text: 'The most interesting thing about the paper is that no one before had thought of it.',
                speaker: 'Hendrik Lorentz',
                source: 'On special relativity'
            }
        ]
    }
];

// The Four Papers
export const miracleYearPapers = [
    {
        title: 'On a Heuristic Point of View Concerning the Production and Transformation of Light',
        date: 'March 17, 1905',
        significance: 'Light exists as quanta (photons) - foundation of quantum mechanics',
        result: 'Nobel Prize in Physics, 1921'
    },
    {
        title: 'On the Movement of Small Particles Suspended in Stationary Liquids',
        date: 'May 11, 1905',
        significance: 'Explained Brownian motion - proved atoms exist',
        result: 'Ended century-long debate on atomic theory'
    },
    {
        title: 'On the Electrodynamics of Moving Bodies',
        date: 'June 30, 1905',
        significance: 'Special relativity - time and space are relative, speed of light is absolute',
        result: 'Revolutionized understanding of space, time, mass, and energy'
    },
    {
        title: 'Does the Inertia of a Body Depend Upon Its Energy Content?',
        date: 'September 27, 1905',
        significance: 'E=mc² - mass-energy equivalence',
        result: 'Foundation of nuclear physics and energy'
    }
];
