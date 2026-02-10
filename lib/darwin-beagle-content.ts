// Darwin on the Beagle - Content organized by location
// The voyage that shaped evolutionary theory (1831-1836)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const darwinBeagleContext = {
    title: 'The Voyage That Changed Everything',
    description: `In 1831, 22-year-old Charles Darwin was a directionless Cambridge graduate with a passion for beetles and geology. His father wanted him to become a clergyman. Instead, by chance, he was offered a place on HMS Beagle as a gentleman naturalist. The five-year voyage around the world - especially the Galápagos Islands - would lead him to formulate the most important theory in the history of biology.`,
    keyFigures: [
        { name: 'Captain Robert FitzRoy', significance: 'Commander of the Beagle, devout Christian, later opposed Darwin\'s theory' },
        { name: 'John Stevens Henslow', significance: 'Cambridge botanist who recommended Darwin for the voyage' },
        { name: 'Charles Lyell', significance: 'Geologist whose "Principles of Geology" shaped Darwin\'s thinking' },
        { name: 'Thomas Malthus', significance: 'Economist whose population theory inspired natural selection' }
    ],
    keyQuote: 'The voyage of the Beagle has been by far the most important event in my life. - Charles Darwin'
};

// Timeline Events
export const darwinBeagleTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'shrewsbury',
        date: 'February 12, 1809',
        text: 'Charles Robert Darwin born in Shrewsbury, England - same day as Abraham Lincoln'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'cambridge',
        date: '1828-1831',
        text: 'Studies at Cambridge, befriends botanist John Henslow'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'plymouth',
        date: 'December 27, 1831',
        text: 'HMS Beagle departs Plymouth - Darwin is 22 years old'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'cape-verde',
        date: 'January 16, 1832',
        text: 'First landfall at Cape Verde Islands - Darwin\'s geological observations begin'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'brazil',
        date: 'February-July 1832',
        text: 'Brazil - tropical rainforest overwhelms Darwin with its diversity'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'argentina',
        date: 'September 1832',
        text: 'Punta Alta - discovers giant fossil mammals (Megatherium)'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'tierra-del-fuego',
        date: 'December 1832',
        text: 'Tierra del Fuego - encounters Fuegian people, profound cultural shock'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'chile',
        date: 'February 20, 1835',
        text: 'Witnesses massive earthquake in Chile - sees land rise before his eyes'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'galapagos',
        date: 'September 15 - October 20, 1835',
        text: 'Galápagos Islands - five weeks that would change biology forever'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'falmouth',
        date: 'October 2, 1836',
        text: 'Returns to England after 4 years, 9 months - a changed man'
    }
];

// Enhanced Locations
export const darwinBeagleLocations: EnhancedLocation[] = [
    {
        id: 'shrewsbury',
        name: 'The Mount, Shrewsbury',
        lat: 52.7068,
        lng: -2.7540,
        date: '1809-1825',
        description: 'Darwin grew up in this Georgian house overlooking the River Severn. His father Robert was a wealthy physician; his mother Susannah died when Charles was eight. His passion for collecting beetles began in these gardens.',
        content: [
            {
                id: 'shrewsbury-quote-1',
                type: 'quote',
                locationId: 'shrewsbury',
                text: 'I was born a naturalist. I collected beetles with a passion that was ridiculous.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            },
            {
                id: 'shrewsbury-quote-2',
                type: 'quote',
                locationId: 'shrewsbury',
                text: 'You care for nothing but shooting, dogs, and rat-catching, and you will be a disgrace to yourself and all your family.',
                speaker: 'Robert Darwin',
                source: 'Father to young Charles'
            }
        ]
    },
    {
        id: 'cambridge',
        name: 'Cambridge University',
        lat: 52.2053,
        lng: 0.1218,
        date: '1828-1831',
        description: 'Darwin studied divinity at Christ\'s College, but spent more time collecting beetles and attending John Henslow\'s botany lectures. It was Henslow who recommended him for the Beagle voyage - changing the course of scientific history.',
        content: [
            {
                id: 'cambridge-quote-1',
                type: 'quote',
                locationId: 'cambridge',
                text: 'No pursuit at Cambridge gave me so much pleasure as collecting beetles.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            },
            {
                id: 'cambridge-quote-2',
                type: 'quote',
                locationId: 'cambridge',
                text: 'I recommend my pupil Mr. Darwin as a young man of promising ability, extremely fond of geology and natural science.',
                speaker: 'John Henslow',
                source: 'Letter recommending Darwin for Beagle'
            },
            {
                id: 'cambridge-quote-3',
                type: 'quote',
                locationId: 'cambridge',
                text: 'I owe more to Henslow than any other person. He influenced my whole career.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            }
        ]
    },
    {
        id: 'plymouth',
        name: 'Plymouth, HMS Beagle',
        lat: 50.3755,
        lng: -4.1427,
        date: 'December 27, 1831',
        description: 'The 90-foot brig HMS Beagle departed on a mission to chart South American coastlines. Darwin\'s cabin was tiny, his berth strung above the chart table. He was seasick for most of the voyage - but never stopped observing.',
        content: [
            {
                id: 'plymouth-quote-1',
                type: 'quote',
                locationId: 'plymouth',
                text: 'The misery I endured from sea-sickness is far beyond what I ever guessed at.',
                speaker: 'Charles Darwin',
                source: 'Letter to father'
            },
            {
                id: 'plymouth-quote-2',
                type: 'quote',
                locationId: 'plymouth',
                text: 'I hate every wave of the ocean with a fervor which you cannot understand.',
                speaker: 'Charles Darwin',
                source: 'Letter to Henslow'
            },
            {
                id: 'plymouth-quote-3',
                type: 'quote',
                locationId: 'plymouth',
                text: 'If it were not for sea-sickness, the whole world would be sailors.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            }
        ]
    },
    {
        id: 'brazil',
        name: 'Brazilian Rainforest',
        lat: -22.9068,
        lng: -43.1729,
        date: 'February-July 1832',
        description: 'Darwin\'s first experience of a tropical rainforest near Rio de Janeiro overwhelmed him. The biodiversity, the interconnections, the sheer abundance of life forms - here the questions that would lead to evolution began forming.',
        content: [
            {
                id: 'brazil-quote-1',
                type: 'quote',
                locationId: 'brazil',
                text: 'The delight one experiences in such times bewilders the mind. If the eye attempts to follow the flight of a gaudy butterfly, it is arrested by some strange tree or fruit.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            },
            {
                id: 'brazil-quote-2',
                type: 'quote',
                locationId: 'brazil',
                text: 'Twiners entwining twiners - tresses like hair - beautiful lepidoptera - silence - hosannah.',
                speaker: 'Charles Darwin',
                source: 'Field notes, Brazilian forest'
            },
            {
                id: 'brazil-quote-3',
                type: 'quote',
                locationId: 'brazil',
                text: 'I am at present red-hot with spiders.',
                speaker: 'Charles Darwin',
                source: 'Letter to Henslow'
            }
        ]
    },
    {
        id: 'argentina',
        name: 'Punta Alta, Argentina',
        lat: -38.8778,
        lng: -62.0833,
        date: 'September 1832',
        description: 'On a desolate beach, Darwin discovered fossils of giant extinct mammals - Megatherium, Glyptodon. These ancient creatures resembled living South American species. Why would God create successive similar species? The question haunted him.',
        content: [
            {
                id: 'argentina-quote-1',
                type: 'quote',
                locationId: 'argentina',
                text: 'I have been wonderfully lucky with fossil bones. Some of the animals must have been of great size.',
                speaker: 'Charles Darwin',
                source: 'Letter to Henslow'
            },
            {
                id: 'argentina-quote-2',
                type: 'quote',
                locationId: 'argentina',
                text: 'This wonderful relationship in the same continent between the dead and the living will throw more light on the appearance of organic beings than any other class of facts.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'argentina-quote-3',
                type: 'quote',
                locationId: 'argentina',
                text: 'The great size of the bones... astonished me.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            }
        ]
    },
    {
        id: 'tierra-del-fuego',
        name: 'Tierra del Fuego',
        lat: -54.8019,
        lng: -68.3030,
        date: 'December 1832 - February 1833',
        description: 'The "land of fire" at South America\'s southern tip. Darwin encountered the Yaghan people, naked in the freezing cold. The Beagle carried three Fuegians who had been "civilized" in England - their return was a disaster.',
        content: [
            {
                id: 'fuego-quote-1',
                type: 'quote',
                locationId: 'tierra-del-fuego',
                text: 'I could not have believed how wide was the difference between savage and civilized man. It is greater than between a wild and domesticated animal.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            },
            {
                id: 'fuego-quote-2',
                type: 'quote',
                locationId: 'tierra-del-fuego',
                text: 'The astonishment which I felt on first seeing a party of Fuegians cannot be described.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'fuego-quote-3',
                type: 'quote',
                locationId: 'tierra-del-fuego',
                text: 'Viewing such men, one can hardly make oneself believe that they are fellow-creatures.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            }
        ]
    },
    {
        id: 'chile',
        name: 'Valdivia, Chile',
        lat: -39.8196,
        lng: -73.2452,
        date: 'February 20, 1835',
        description: 'Darwin experienced a massive earthquake that destroyed Concepción. Days later, he saw the coastline had risen several feet. Lyell\'s geology made sense - the Earth changed through slow, ongoing processes, not sudden creation.',
        content: [
            {
                id: 'chile-quote-1',
                type: 'quote',
                locationId: 'chile',
                text: 'An earthquake like this at once destroys the oldest associations: the world, the very emblem of all that is solid, moves beneath our feet.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            },
            {
                id: 'chile-quote-2',
                type: 'quote',
                locationId: 'chile',
                text: 'Captain FitzRoy found mussel-beds above high-water mark, proving that the land had risen at least nine feet.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'chile-quote-3',
                type: 'quote',
                locationId: 'chile',
                text: 'Nothing, not even the wind that blows, is so unstable as the level of the crust of this earth.',
                speaker: 'Charles Darwin',
                source: 'Letter to Henslow'
            }
        ]
    },
    {
        id: 'galapagos',
        name: 'Galápagos Islands',
        lat: -0.9538,
        lng: -90.9656,
        date: 'September 15 - October 20, 1835',
        description: 'Five weeks on volcanic islands 600 miles off Ecuador. Darwin noticed that finches, mockingbirds, and tortoises differed from island to island. The governor could identify which island a tortoise came from by its shell. Why would God create such variation?',
        content: [
            {
                id: 'galapagos-quote-1',
                type: 'quote',
                locationId: 'galapagos',
                text: 'The natural history of this archipelago is very remarkable: it seems to be a little world within itself.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'galapagos-quote-2',
                type: 'quote',
                locationId: 'galapagos',
                text: 'I never dreamed that islands about 50 or 60 miles apart, formed of precisely the same rocks, under similar climate, would have different tenants.',
                speaker: 'Charles Darwin',
                source: 'Beagle Diary'
            },
            {
                id: 'galapagos-quote-3',
                type: 'quote',
                locationId: 'galapagos',
                text: 'Here, both in space and time, we seem to be brought somewhat near to that great fact - that mystery of mysteries - the first appearance of new beings on this earth.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'galapagos-quote-4',
                type: 'quote',
                locationId: 'galapagos',
                text: 'Seeing this gradation and diversity of structure in one small, intimately related group of birds, one might really fancy that from an original paucity of birds in this archipelago, one species had been taken and modified for different ends.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle - the key insight'
            }
        ]
    },
    {
        id: 'falmouth',
        name: 'Falmouth, England',
        lat: 50.1526,
        lng: -5.0672,
        date: 'October 2, 1836',
        description: 'After circumnavigating the globe, Darwin returned to England. He was 27 years old, carrying specimens and notebooks that would revolutionize science. He would spend the next 23 years developing his theory before publishing.',
        content: [
            {
                id: 'falmouth-quote-1',
                type: 'quote',
                locationId: 'falmouth',
                text: 'I am so very happy I hardly know what to do. The voyage has been by far the most important event in my life.',
                speaker: 'Charles Darwin',
                source: 'Letter to Henslow'
            },
            {
                id: 'falmouth-quote-2',
                type: 'quote',
                locationId: 'falmouth',
                text: 'I found I had grown 2 inches in height while on the voyage - curious at my age.',
                speaker: 'Charles Darwin',
                source: 'Letter to sister'
            },
            {
                id: 'falmouth-quote-3',
                type: 'quote',
                locationId: 'falmouth',
                text: 'I am become a happy, well-meaning old philosopher.',
                speaker: 'Charles Darwin',
                source: 'On his transformation'
            }
        ]
    }
];

// Key specimens and discoveries
export const beagleDiscoveries = [
    { name: 'Darwin\'s Finches', significance: '13 species with different beaks - adaptation to different food sources' },
    { name: 'Galápagos Mockingbirds', significance: 'Different species on different islands - first hint of evolution' },
    { name: 'Galápagos Tortoises', significance: 'Shell shape varied by island - adaptation to local conditions' },
    { name: 'Marine Iguanas', significance: 'Only seagoing lizard - evidence of adaptation' },
    { name: 'Megatherium fossils', significance: 'Giant ground sloth - extinct relatives of living species' }
];
