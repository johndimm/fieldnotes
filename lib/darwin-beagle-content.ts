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
        photoUrl: '/darwin/the_mount_shrewsbury.png',
        photoTitle: 'The Mount, Darwin\'s childhood home',
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
            },
            {
                id: 'shrewsbury-quote-3',
                type: 'quote',
                locationId: 'shrewsbury',
                text: 'My mother died when I was eight years old, and it is odd that I can remember hardly anything about her except her deathbed, her black velvet gown, and her curiously constructed work-table.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            },
            {
                id: 'shrewsbury-music-1',
                type: 'music',
                locationId: 'shrewsbury',
                musicTitle: 'Schubert: Symphony No. 8 "Unfinished"',
                musicPreviewUrl: '/api/music/deezer/track/6526664'
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
        photoUrl: '/darwin/cambridge_university.jpg',
        photoTitle: 'Cambridge University, where Darwin studied',
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
            },
            {
                id: 'cambridge-quote-4',
                type: 'quote',
                locationId: 'cambridge',
                text: 'One day, on tearing off some old bark, I saw two rare beetles and seized one in each hand; then I saw a third and new kind, which I could not bear to lose, so that I popped the one which I held in my right hand into my mouth. Alas it ejected some intensely acrid fluid, which burnt my tongue so that I was forced to spit the beetle out.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            },
            {
                id: 'cambridge-passage-1',
                type: 'passage',
                locationId: 'cambridge',
                passage: 'At Cambridge, Darwin read Charles Lyell\'s "Principles of Geology," which argued that geological features formed through slow processes over vast periods of time. This gradualist view would profoundly influence Darwin\'s thinking about biological change. He also studied William Paley\'s "Natural Theology," with its watchmaker argument for divine design - an argument Darwin would eventually overturn.',
                passageSource: 'Historical account'
            },
            {
                id: 'cambridge-music-1',
                type: 'music',
                locationId: 'cambridge',
                musicTitle: 'Mendelssohn: Hebrides Overture "Fingal\'s Cave"',
                musicPreviewUrl: '/api/music/deezer/track/78160432'
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
        photoUrl: '/darwin/hms_beagle.jpg',
        photoTitle: 'HMS Beagle, the ship that carried Darwin around the world',
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
            },
            {
                id: 'plymouth-passage-1',
                type: 'passage',
                locationId: 'plymouth',
                passage: 'Captain Robert FitzRoy, just 26 years old, almost rejected Darwin because he didn\'t like the shape of his nose. FitzRoy was a passionate believer in phrenology and judged character by facial features. Darwin\'s nose supposedly indicated a lack of determination. FitzRoy would later become Darwin\'s great friend - and, after "Origin of Species," his bitter enemy.',
                passageSource: 'Historical account'
            },
            {
                id: 'plymouth-music-1',
                type: 'music',
                locationId: 'plymouth',
                musicTitle: 'Mendelssohn: Symphony No. 4 "Italian"',
                musicPreviewUrl: '/api/music/deezer/track/818520'
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
        photoUrl: '/darwin/brazilian_rainforest.jpg',
        photoTitle: 'Brazilian rainforest, Darwin\'s first encounter with tropical biodiversity',
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
            },
            {
                id: 'brazil-quote-4',
                type: 'quote',
                locationId: 'brazil',
                text: 'The elegance of the grasses, the novelty of the parasitical plants, the beauty of the flowers, the glossy green of the foliage, all tend to this end. A most paradoxical mixture of sound and silence pervades the shady parts of the wood.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'brazil-passage-1',
                type: 'passage',
                locationId: 'brazil',
                passage: 'In the Brazilian rainforest, Darwin witnessed nature\'s competitive struggle firsthand. Vines strangled trees. Parasites consumed hosts. Predators hunted prey. The sheer waste appalled him - thousands of seeds for one surviving plant, countless insects devoured by birds. Yet from this struggle emerged astonishing beauty and diversity. This observation would later become central to his theory: nature\'s "wedge" forcing adaptation through competition.',
                passageSource: 'Historical analysis'
            },
            {
                id: 'brazil-music-1',
                type: 'music',
                locationId: 'brazil',
                musicTitle: 'Chopin: Nocturne Op. 9 No. 2',
                musicPreviewUrl: '/api/music/deezer/track/6949912'
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
        photoUrl: '/darwin/megatherium_fossil.jpg',
        photoTitle: 'Megatherium fossil, giant extinct sloth discovered by Darwin',
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
            },
            {
                id: 'argentina-passage-1',
                type: 'passage',
                locationId: 'argentina',
                passage: 'The Megatherium was a giant ground sloth, as large as an elephant, that had roamed South America thousands of years ago. Its bones lay embedded in the same geological layer as shells of living species. Darwin recognized that the extinct Megatherium resembled living tree sloths and armadillos. Why would similar forms replace each other in the same location? The pattern suggested descent with modification, not separate acts of creation.',
                passageSource: 'Scientific analysis'
            },
            {
                id: 'argentina-quote-4',
                type: 'quote',
                locationId: 'argentina',
                text: 'It is impossible to reflect without the deepest astonishment on the changed state of this continent. Formerly it must have swarmed with great monsters, like the southern parts of Africa, but now we find only the tapir, guanaco, armadillo, and capybara.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'argentina-music-1',
                type: 'music',
                locationId: 'argentina',
                musicTitle: 'Berlioz: Symphonie Fantastique - Marche au supplice',
                musicPreviewUrl: '/api/music/deezer/track/67335791'
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
        photoUrl: '/darwin/tierra_del_fuego.jpg',
        photoTitle: 'Tierra del Fuego, the harsh southernmost tip of South America',
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
            },
            {
                id: 'fuego-passage-1',
                type: 'passage',
                locationId: 'tierra-del-fuego',
                passage: 'The Beagle carried three Fuegians who had been taken to England, "civilized," and were now being returned. Jemmy Button had been purchased for a pearl button. York Minster and Fuegia Basket completed the trio. FitzRoy had dressed them in English clothes and taught them Christianity. Within months of their return, they had reverted to their native ways. The experiment\'s failure profoundly affected Darwin - culture was not fixed, humans were shaped by environment. If culture could change so rapidly, why not species over vast time?',
                passageSource: 'Historical account'
            },
            {
                id: 'fuego-music-1',
                type: 'music',
                locationId: 'tierra-del-fuego',
                musicTitle: 'Schumann: Carnaval, Op. 9 - Chopin',
                musicPreviewUrl: '/api/music/deezer/track/5936816'
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
        photoUrl: '/darwin/hms_beagle.jpg',
        photoTitle: 'The Beagle off the Chilean coast',
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
            },
            {
                id: 'chile-passage-1',
                type: 'passage',
                locationId: 'chile',
                passage: 'The Concepción earthquake of February 20, 1835 was one of the most powerful in recorded history. Darwin felt the ground ripple beneath his feet like waves on the ocean. The city was reduced to rubble in two minutes. Days later, examining the coastline, Darwin found beds of mussels and barnacles raised above the high tide line - proof that the land had risen. If an earthquake could raise the land feet in minutes, slow steady elevation over millions of years could create the Andes Mountains. Lyell was right: vast changes through gradual processes over deep time.',
                passageSource: 'Geological analysis'
            },
            {
                id: 'chile-quote-4',
                type: 'quote',
                locationId: 'chile',
                text: 'The most remarkable effect of this earthquake was the permanent elevation of the land.',
                speaker: 'Charles Darwin',
                source: 'Voyage of the Beagle'
            },
            {
                id: 'chile-music-1',
                type: 'music',
                locationId: 'chile',
                musicTitle: 'Berlioz: Symphonie Fantastique, Op. 14',
                musicPreviewUrl: '/api/music/deezer/track/16779696'
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
        photoUrl: '/darwin/galapagos_finches.jpg',
        photoTitle: 'Darwin\'s finches, showing variation in beak shapes',
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
            },
            {
                id: 'galapagos-passage-1',
                type: 'passage',
                locationId: 'galapagos',
                passage: 'Darwin collected 13 species of finches from the Galápagos, though he didn\'t realize their significance at the time. He carelessly failed to note which island each specimen came from. Only later, when ornithologist John Gould examined them in London, did the pattern emerge: the finches were distinct species, each with beaks adapted to different food sources. Large beaks for cracking seeds. Small beaks for insects. Long beaks for probing cactus flowers. They had all descended from a common ancestor, then diverged as they adapted to different ecological niches.',
                passageSource: 'Ornithological analysis'
            },
            {
                id: 'galapagos-passage-2',
                type: 'passage',
                locationId: 'galapagos',
                passage: 'The mockingbirds were actually Darwin\'s "aha moment," not the finches. He noticed immediately that each island had its own species of mockingbird. "If there is the slightest foundation for these remarks," he wrote in his notebook, "the zoology of archipelagoes will be worth examining; for such facts would undermine the stability of species." This cryptic note, written in 1836, was Darwin\'s first hint that species might change - a heretical thought he dared not speak aloud for decades.',
                passageSource: 'Darwin\'s secret notebook'
            },
            {
                id: 'galapagos-quote-5',
                type: 'quote',
                locationId: 'galapagos',
                text: 'It is the fate of most voyagers, no sooner to discover what is most interesting in any locality, than they are hurried from it.',
                speaker: 'Charles Darwin',
                source: 'On leaving the Galápagos'
            },
            {
                id: 'galapagos-music-1',
                type: 'music',
                locationId: 'galapagos',
                musicTitle: 'Chopin: Nocturne in E-flat Major, Op. 9, No. 2',
                musicPreviewUrl: '/api/music/deezer/track/436445872'
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
        photoUrl: '/darwin/falmouth_harbour.jpg',
        photoTitle: 'Falmouth Harbour, where Darwin returned to England',
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
            },
            {
                id: 'falmouth-passage-1',
                type: 'passage',
                locationId: 'falmouth',
                passage: 'Darwin returned with 5,436 skins, bones, and specimens, plus 3,907 labeled storage jars, all carefully catalogued. His geological and zoological notes filled 1,750 pages. The voyage had cost him five years of his life and permanent damage to his health - he would suffer debilitating illness for the rest of his days. But he had witnessed the living laboratory that would unlock life\'s greatest mystery.',
                passageSource: 'Historical account'
            },
            {
                id: 'falmouth-quote-4',
                type: 'quote',
                locationId: 'falmouth',
                text: 'In July 1837, I opened my first notebook for facts in relation to the Origin of Species, about which I had long reflected, and never ceased working for the next twenty years.',
                speaker: 'Charles Darwin',
                source: 'Autobiography'
            },
            {
                id: 'falmouth-passage-2',
                type: 'passage',
                locationId: 'falmouth',
                passage: 'Darwin delayed publishing for 23 years. He feared the reaction. His theory would destroy the biblical account of creation, undermine the argument from design, reduce humans to mere animals. He worked in secret, gathering evidence, testing objections, building an unassailable case. Only when Alfred Russel Wallace independently conceived natural selection in 1858 did Darwin finally publish. "On the Origin of Species" appeared November 24, 1859. All 1,250 copies sold out the first day. The world would never be the same.',
                passageSource: 'Historical epilogue'
            },
            {
                id: 'falmouth-quote-5',
                type: 'quote',
                locationId: 'falmouth',
                text: 'There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one; and that, whilst this planet has gone cycling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.',
                speaker: 'Charles Darwin',
                source: 'Final words of Origin of Species, 1859'
            },
            {
                id: 'falmouth-music-1',
                type: 'music',
                locationId: 'falmouth',
                musicTitle: 'Mendelssohn: Symphony No. 4 "Italian" - Allegro Vivace',
                musicPreviewUrl: '/api/music/deezer/track/491721842'
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
