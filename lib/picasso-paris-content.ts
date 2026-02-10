// Young Picasso in Paris - Content organized by location
// The Blue Period: Starving artist days at Bateau-Lavoir (1900-1904)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const picassoParisContext = {
    title: 'Bohemia and the Birth of Modernism',
    description: `Pablo Picasso arrived in Paris at 19, a prodigy from Barcelona entering the world capital of art. He lived in freezing studios, burned his drawings for warmth, and watched his closest friend shoot himself. From this crucible of poverty, death, and heartbreak emerged the Blue Period - paintings of beggars, prostitutes, and the blind that would revolutionize modern art.`,
    contemporaries: [
        { name: 'Carles Casagemas', significance: 'Best friend whose suicide triggered the Blue Period' },
        { name: 'Fernande Olivier', significance: 'First great love, model, chronicler of their years at Bateau-Lavoir' },
        { name: 'Max Jacob', significance: 'Poet, friend, let Picasso share his bed while he slept on the floor' },
        { name: 'Guillaume Apollinaire', significance: 'Poet who championed Cubism' },
        { name: 'Henri Matisse', significance: 'Rival and eventual friend' }
    ],
    keyQuote: 'I do not seek. I find. - Pablo Picasso'
};

// Timeline Events
export const picassoParisTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'malaga',
        date: 'October 25, 1881',
        text: 'Pablo Ruiz Picasso born in Málaga, Spain'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'barcelona',
        date: '1895-1900',
        text: 'Studies at La Llotja art school in Barcelona, frequents Els Quatre Gats café'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'paris-arrival',
        date: 'October 1900',
        text: 'First trip to Paris with Casagemas for the Universal Exhibition'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'montmartre',
        date: 'February 17, 1901',
        text: 'Carles Casagemas shoots himself in a Paris café - Picasso devastated'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'vollard',
        date: 'June 1901',
        text: 'First Paris exhibition at Vollard\'s gallery - 64 paintings'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'studio',
        date: 'Winter 1901-1902',
        text: 'Blue Period begins - "La Vie," "The Old Guitarist," "The Tragedy"'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'bateau-lavoir',
        date: 'Spring 1904',
        text: 'Moves to Bateau-Lavoir in Montmartre - studio 13'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'bateau-lavoir',
        date: 'August 1904',
        text: 'Meets Fernande Olivier during a storm - beginning of Rose Period'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'lapin',
        date: '1905',
        text: 'Meets Guillaume Apollinaire at Le Lapin Agile'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'bateau-lavoir',
        date: '1907',
        text: 'Paints Les Demoiselles d\'Avignon - birth of Cubism'
    }
];

// Enhanced Locations
export const picassoParisLocations: EnhancedLocation[] = [
    {
        id: 'malaga',
        name: 'Málaga, Spain',
        lat: 36.7213,
        lng: -4.4214,
        date: '1881-1891',
        description: 'Picasso\'s birthplace on the Plaza de la Merced. His father José was a painter and art teacher who recognized his son\'s extraordinary talent early. According to legend, Pablo\'s first word was "piz" - short for lápiz (pencil).',
        content: [
            {
                id: 'malaga-quote-1',
                type: 'quote',
                locationId: 'malaga',
                text: 'When I was a child my mother said to me, "If you become a soldier you\'ll be a general. If you become a monk you\'ll end up as the pope." Instead, I became a painter and wound up as Picasso.',
                speaker: 'Pablo Picasso',
                source: 'Attributed'
            },
            {
                id: 'malaga-quote-2',
                type: 'quote',
                locationId: 'malaga',
                text: 'I could draw like Raphael at 12. It took me a lifetime to draw like a child.',
                speaker: 'Pablo Picasso',
                source: 'Interview'
            }
        ]
    },
    {
        id: 'barcelona',
        name: 'Els Quatre Gats, Barcelona',
        lat: 41.3851,
        lng: 2.1734,
        date: '1897-1900',
        description: 'The bohemian café on Carrer Montsió where young artists and intellectuals gathered. Picasso had his first exhibition here in 1900. He met Carles Casagemas, whose suicide would haunt him for years.',
        content: [
            {
                id: 'barcelona-quote-1',
                type: 'quote',
                locationId: 'barcelona',
                text: 'Els Quatre Gats was our world. We were young, we were poor, we were going to change everything.',
                speaker: 'Pablo Picasso',
                source: 'Memoir'
            },
            {
                id: 'barcelona-quote-2',
                type: 'quote',
                locationId: 'barcelona',
                text: 'Pablo drew constantly. Napkins, tablecloths, anything. He couldn\'t stop.',
                speaker: 'Jaime Sabartés',
                source: 'Friend and later secretary'
            },
            {
                id: 'barcelona-attendee-1',
                type: 'attendee',
                locationId: 'barcelona',
                text: 'Carles Casagemas, Jaime Sabartés, Santiago Rusiñol, Ramón Casas'
            }
        ]
    },
    {
        id: 'paris-arrival',
        name: 'Gare d\'Orsay',
        lat: 48.8600,
        lng: 2.3266,
        date: 'October 1900',
        description: 'Picasso arrived in Paris by train with Casagemas for the Universal Exhibition. Neither spoke French. They had almost no money. But Paris was the center of the art world, and Picasso was determined to conquer it.',
        content: [
            {
                id: 'paris-quote-1',
                type: 'quote',
                locationId: 'paris-arrival',
                text: 'When I arrived in Paris I was so poor I had to burn my drawings to keep warm.',
                speaker: 'Pablo Picasso',
                source: 'Interview'
            },
            {
                id: 'paris-quote-2',
                type: 'quote',
                locationId: 'paris-arrival',
                text: 'Paris was the only place to be. Nowhere else mattered.',
                speaker: 'Pablo Picasso',
                source: 'Memoir'
            }
        ]
    },
    {
        id: 'montmartre',
        name: 'Café l\'Hippodrome',
        lat: 48.8834,
        lng: 2.3386,
        date: 'February 17, 1901',
        description: 'In this café, Carles Casagemas shot himself over unrequited love for a model named Germaine. Picasso was in Spain and didn\'t learn of it for days. The trauma launched the Blue Period - paintings suffused with grief, isolation, and mortality.',
        content: [
            {
                id: 'montmartre-quote-1',
                type: 'quote',
                locationId: 'montmartre',
                text: 'It was thinking about Casagemas that started me painting in blue.',
                speaker: 'Pablo Picasso',
                source: 'Interview'
            },
            {
                id: 'montmartre-quote-2',
                type: 'quote',
                locationId: 'montmartre',
                text: 'He painted Casagemas in his coffin. He painted him again and again. He couldn\'t let go.',
                speaker: 'Fernande Olivier',
                source: 'Loving Picasso'
            },
            {
                id: 'montmartre-quote-3',
                type: 'quote',
                locationId: 'montmartre',
                text: 'I started painting in blue when I learned of Casagemas\'s death.',
                speaker: 'Pablo Picasso',
                source: 'To Pierre Daix'
            }
        ]
    },
    {
        id: 'vollard',
        name: 'Galerie Vollard',
        lat: 48.8742,
        lng: 2.3470,
        date: 'June 1901',
        description: 'Ambroise Vollard, the legendary dealer who championed Cézanne, gave 19-year-old Picasso his first Paris show. Critics were impressed but puzzled by his chameleonic style. 64 paintings sold well - but the money vanished quickly.',
        content: [
            {
                id: 'vollard-quote-1',
                type: 'quote',
                locationId: 'vollard',
                text: 'This Spaniard will go far. He can do anything.',
                speaker: 'Ambroise Vollard',
                source: 'On first seeing Picasso\'s work'
            },
            {
                id: 'vollard-quote-2',
                type: 'quote',
                locationId: 'vollard',
                text: 'The exhibition was a success. But the money was gone in a week.',
                speaker: 'Pablo Picasso',
                source: 'Memoir'
            }
        ]
    },
    {
        id: 'studio',
        name: 'Boulevard de Clichy Studio',
        lat: 48.8839,
        lng: 2.3328,
        date: '1901-1902',
        description: 'Picasso shared a small room with Max Jacob at 130 Boulevard de Clichy. They had one bed - Jacob slept at night while working days, Picasso painted at night and slept days. Here the Blue Period masterpieces were born.',
        content: [
            {
                id: 'studio-quote-1',
                type: 'quote',
                locationId: 'studio',
                text: 'Max slept at night, I slept during the day. The bed was never empty.',
                speaker: 'Pablo Picasso',
                source: 'Interview'
            },
            {
                id: 'studio-quote-2',
                type: 'quote',
                locationId: 'studio',
                text: 'He painted all night by candlelight. The candles were sometimes our only heat.',
                speaker: 'Max Jacob',
                source: 'Memoir'
            },
            {
                id: 'studio-quote-3',
                type: 'quote',
                locationId: 'studio',
                text: 'I paint what I feel, not what I see.',
                speaker: 'Pablo Picasso',
                source: 'On the Blue Period'
            }
        ]
    },
    {
        id: 'bateau-lavoir',
        name: 'Bateau-Lavoir',
        lat: 48.8859,
        lng: 2.3394,
        date: '1904-1909',
        description: 'The ramshackle building at 13 Place Émile-Goudeau became legend. No heat, no gas, one water tap for thirty studios. But here Picasso met Fernande, ended the Blue Period, and painted Les Demoiselles d\'Avignon - the work that invented Cubism.',
        content: [
            {
                id: 'bateau-quote-1',
                type: 'quote',
                locationId: 'bateau-lavoir',
                text: 'It smelled of cats and mildew. The floors were so warped you could twist an ankle. I loved it.',
                speaker: 'Fernande Olivier',
                source: 'Loving Picasso'
            },
            {
                id: 'bateau-quote-2',
                type: 'quote',
                locationId: 'bateau-lavoir',
                text: 'One day there was a terrible storm. A beautiful girl was sheltering in the doorway with a kitten. That was Fernande.',
                speaker: 'Pablo Picasso',
                source: 'Memoir'
            },
            {
                id: 'bateau-quote-3',
                type: 'quote',
                locationId: 'bateau-lavoir',
                text: 'When I saw Les Demoiselles in his studio, I thought he had gone mad.',
                speaker: 'Georges Braque',
                source: 'Interview'
            },
            {
                id: 'bateau-quote-4',
                type: 'quote',
                locationId: 'bateau-lavoir',
                text: 'It was as if he had drunk petrol and spat fire.',
                speaker: 'Guillaume Apollinaire',
                source: 'On Les Demoiselles d\'Avignon'
            },
            {
                id: 'bateau-attendee-1',
                type: 'attendee',
                locationId: 'bateau-lavoir',
                text: 'Fernande Olivier, Max Jacob, Juan Gris, Amedeo Modigliani, Guillaume Apollinaire'
            }
        ]
    },
    {
        id: 'lapin',
        name: 'Le Lapin Agile',
        lat: 48.8870,
        lng: 2.3401,
        date: '1904-1909',
        description: 'The famous cabaret at 22 Rue des Saules where Picasso and his circle gathered. He paid for meals with paintings - one now hangs in the Metropolitan Museum. Here he met Apollinaire, who would become Cubism\'s champion.',
        content: [
            {
                id: 'lapin-quote-1',
                type: 'quote',
                locationId: 'lapin',
                text: 'Frédé accepted paintings for food. Thank God, or we would have starved.',
                speaker: 'Pablo Picasso',
                source: 'On the owner Frédé Gérard'
            },
            {
                id: 'lapin-quote-2',
                type: 'quote',
                locationId: 'lapin',
                text: 'We talked all night about art, about revolution, about women. We were going to change the world.',
                speaker: 'Guillaume Apollinaire',
                source: 'Memoir'
            },
            {
                id: 'lapin-attendee-1',
                type: 'attendee',
                locationId: 'lapin',
                text: 'Guillaume Apollinaire, Max Jacob, André Salmon, Modigliani, Maurice Utrillo'
            }
        ]
    }
];

// Art suggestions
export const picassoParisMasterworks = [
    { title: 'La Vie', year: 1903, location: 'Cleveland Museum of Art' },
    { title: 'The Old Guitarist', year: 1903, location: 'Art Institute of Chicago' },
    { title: 'The Tragedy', year: 1903, location: 'National Gallery of Art' },
    { title: 'La Celestina', year: 1904, location: 'Musée Picasso, Paris' },
    { title: 'Les Demoiselles d\'Avignon', year: 1907, location: 'MoMA, New York' }
];
