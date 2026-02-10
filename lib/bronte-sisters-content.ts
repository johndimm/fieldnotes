// The Brontë Sisters at Haworth - Content organized by location
// Three sisters writing masterpieces in a Yorkshire parsonage

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const bronteSistersContext = {
    title: 'Genius in the Parsonage',
    description: `In a grey stone parsonage on the edge of the Yorkshire moors, three sisters created immortal literature from isolation, loss, and ferocious imagination. Charlotte, Emily, and Anne Brontë grew up in a house shadowed by death - their mother died when they were children, their two older sisters perished from tuberculosis at a brutal school, their gifted brother destroyed himself with drink and opium. In their tiny dining room, they walked circles around the table, reading their work aloud by candlelight. They wrote under male pseudonyms - Currer, Ellis, and Acton Bell - because the world would not take women seriously. In 1847-48, they published three of the greatest novels in English: Jane Eyre, Wuthering Heights, and The Tenant of Wildfell Hall. Then came the catastrophe: Branwell died in September 1848, Emily in December, Anne in May 1849. Charlotte survived alone, writing Villette in the empty house, surrounded by ghosts. She married her father's curate in 1854 and died nine months later, pregnant. All six Brontë children dead before forty. But the novels - fierce, strange, brilliant - live forever.`,
    theSisters: [
        { name: 'Charlotte (1816-1855)', significance: 'Author of Jane Eyre, Villette, The Professor - eldest survivor, tiny and half-blind but fierce' },
        { name: 'Emily (1818-1848)', significance: 'Author of Wuthering Heights - wild, enigmatic, refused a doctor until the day she died' },
        { name: 'Anne (1820-1849)', significance: 'Author of The Tenant of Wildfell Hall, Agnes Grey - quiet, moral, overlooked genius' },
        { name: 'Branwell (1817-1848)', significance: 'Brilliant failure - painter, writer, addict - died first, broke their hearts' }
    ],
    keyQuote: 'I am no bird; and no net ensnares me; I am a free human being with an independent will. - Charlotte Brontë, Jane Eyre'
};

// Timeline Events
export const bronteSistersTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'thornton',
        date: '1816-1820',
        text: 'Charlotte, Branwell, Emily, and Anne born in Thornton, near Bradford'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'haworth',
        date: 'April 1820',
        text: 'Family moves to Haworth Parsonage when Patrick Brontë becomes curate'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'haworth',
        date: 'September 1821',
        text: 'Mother Maria dies of cancer - children essentially orphaned'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'cowan-bridge',
        date: '1824-1825',
        text: 'Maria and Elizabeth die of tuberculosis at Clergy Daughters\' School'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'haworth',
        date: '1826',
        text: 'Toy soldiers arrive - beginning of Angria and Gondal imaginary worlds'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'roe-head',
        date: '1831-1832',
        text: 'Charlotte attends Roe Head school, meets lifelong friends Ellen Nussey and Mary Taylor'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'haworth',
        date: '1846',
        text: 'Poems by Currer, Ellis, and Acton Bell published - 2 copies sold'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'london',
        date: 'October 1847',
        text: 'Jane Eyre published - immediate sensation'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'london',
        date: 'December 1847',
        text: 'Wuthering Heights and Agnes Grey published'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'haworth',
        date: '1848-1849',
        text: 'Branwell, Emily, and Anne die within nine months'
    }
];

// Enhanced Locations
export const bronteSistersLocations: EnhancedLocation[] = [
    {
        id: 'thornton',
        name: 'Thornton, Bradford',
        lat: 53.8167,
        lng: -1.8500,
        date: '1816-1820',
        description: 'The birthplace of the Brontë children. Their father Patrick was the perpetual curate of Thornton Chapel. The family lived at 74 Market Street, a modest house that would see four remarkable children born in four years.',
        photoUrl: '/bronte/thornton_birthplace.jpg',
        photoTitle: 'Thornton Birthplace',
        content: [
            {
                id: 'thornton-quote-1',
                type: 'quote',
                locationId: 'thornton',
                text: 'They were the most wonderfully clever children I have ever known.',
                speaker: 'Nancy Garrs',
                source: 'Family servant'
            },
            {
                id: 'thornton-quote-2',
                type: 'quote',
                locationId: 'thornton',
                text: 'We were all strangely precocious and had read everything in the house.',
                speaker: 'Charlotte Brontë',
                source: 'Letter'
            },
            {
                id: 'thornton-music-1',
                type: 'music',
                locationId: 'thornton',
                musicTitle: 'Schubert: Ave Maria',
                musicPreviewUrl: '/api/music/deezer/track/79898634'
            }
        ]
    },
    {
        id: 'haworth',
        name: 'Haworth Parsonage',
        lat: 53.8289,
        lng: -1.9575,
        date: '1820-1855',
        description: 'The grey stone parsonage overlooking the churchyard became the Brontës\' universe. Here they created their imaginary kingdoms, wrote their novels, and buried their dead. The dining room table where they walked in circles, reading aloud and discussing their work, is still there.',
        photoUrl: '/bronte/haworth_parsonage.jpg',
        photoTitle: 'Haworth Parsonage',
        content: [
            {
                id: 'haworth-quote-1',
                type: 'quote',
                locationId: 'haworth',
                text: 'We were wholly dependent on ourselves and each other, on books and study, for the enjoyments and occupations of life.',
                speaker: 'Charlotte Brontë',
                source: 'Letter to Ellen Nussey'
            },
            {
                id: 'haworth-quote-2',
                type: 'quote',
                locationId: 'haworth',
                text: 'At half past nine we set about making the porridge for breakfast. We had one candle and a fire.',
                speaker: 'Emily Brontë',
                source: 'Diary paper'
            },
            {
                id: 'haworth-quote-3',
                type: 'quote',
                locationId: 'haworth',
                text: 'The four children used to walk round and round the table, discussing their stories. It was their custom.',
                speaker: 'Ellen Nussey',
                source: 'Reminiscences'
            },
            {
                id: 'haworth-quote-4',
                type: 'quote',
                locationId: 'haworth',
                text: 'Emily was the tallest person in the house, except Papa. She was not pretty, but she was grand.',
                speaker: 'Charlotte Brontë',
                source: 'Letter'
            },
            {
                id: 'haworth-quote-5',
                type: 'quote',
                locationId: 'haworth',
                text: 'I am no bird; and no net ensnares me; I am a free human being with an independent will.',
                speaker: 'Charlotte Brontë',
                source: 'Jane Eyre'
            },
            {
                id: 'haworth-quote-6',
                type: 'quote',
                locationId: 'haworth',
                text: 'Whatever our souls are made of, his and mine are the same.',
                speaker: 'Emily Brontë',
                source: 'Wuthering Heights'
            },
            {
                id: 'haworth-quote-7',
                type: 'quote',
                locationId: 'haworth',
                text: 'I wished to tell the truth, for truth always conveys its own moral.',
                speaker: 'Anne Brontë',
                source: 'Preface to The Tenant of Wildfell Hall'
            },
            {
                id: 'haworth-quote-8',
                type: 'quote',
                locationId: 'haworth',
                text: 'My home is humble and unattractive to strangers, but to me it contains what I shall find nowhere else in the world.',
                speaker: 'Anne Brontë',
                source: 'Letter'
            },
            {
                id: 'haworth-attendee-1',
                type: 'attendee',
                locationId: 'haworth',
                text: 'Patrick Brontë, Aunt Branwell, Tabitha Aykroyd (servant)'
            },
            {
                id: 'haworth-music-1',
                type: 'music',
                locationId: 'haworth',
                musicTitle: 'Chopin: Nocturne Op. 9 No. 2',
                musicPreviewUrl: '/api/music/deezer/track/79034866'
            }
        ]
    },
    {
        id: 'cowan-bridge',
        name: 'Clergy Daughters\' School',
        lat: 54.1847,
        lng: -2.5153,
        date: '1824-1825',
        description: 'The harsh boarding school where Maria and Elizabeth Brontë contracted tuberculosis and died. Charlotte immortalized it as Lowood in Jane Eyre - the cold, the hunger, the cruelty. The trauma haunted her forever.',
        photoUrl: '/bronte/haworth_parsonage.jpg',
        photoTitle: 'The Parsonage that became their refuge',
        content: [
            {
                id: 'cowan-quote-1',
                type: 'quote',
                locationId: 'cowan-bridge',
                text: 'I suffered much from cold and hunger, and the cruelty of the teachers.',
                speaker: 'Charlotte Brontë',
                source: 'On her school experience'
            },
            {
                id: 'cowan-quote-2',
                type: 'quote',
                locationId: 'cowan-bridge',
                text: 'My sister Maria\'s sufferings were beyond description. She was punished for being untidy when she was dying.',
                speaker: 'Charlotte Brontë',
                source: 'Letter'
            },
            {
                id: 'cowan-quote-3',
                type: 'quote',
                locationId: 'cowan-bridge',
                text: 'The school was the model for Lowood. I softened some things, but not many.',
                speaker: 'Charlotte Brontë',
                source: 'Letter to her publisher'
            },
            {
                id: 'cowan-quote-4',
                type: 'quote',
                locationId: 'cowan-bridge',
                text: 'Life appears to me too short to be spent in nursing animosity or registering wrongs.',
                speaker: 'Charlotte Brontë',
                source: 'Jane Eyre - Helen Burns (based on Maria Brontë)'
            },
            {
                id: 'cowan-music-1',
                type: 'music',
                locationId: 'cowan-bridge',
                musicTitle: 'Chopin: Prelude Op. 28 No. 4',
                musicPreviewUrl: '/api/music/deezer/track/66393512'
            }
        ]
    },
    {
        id: 'moors',
        name: 'The Yorkshire Moors',
        lat: 53.8500,
        lng: -1.9800,
        date: '1820-1855',
        description: 'The wild, windswept moors stretching behind the parsonage were the sisters\' refuge. Emily especially loved them with a fierce passion. They became the landscape of Wuthering Heights - beautiful, dangerous, and immortal.',
        photoUrl: '/bronte/yorkshire_moors.jpg',
        photoTitle: 'The Yorkshire Moors',
        content: [
            {
                id: 'moors-quote-1',
                type: 'quote',
                locationId: 'moors',
                text: 'My sister Emily loved the moors. Flowers brighter than the rose bloomed in the blackest of the heath for her.',
                speaker: 'Charlotte Brontë',
                source: 'Biographical Notice of Ellis Bell'
            },
            {
                id: 'moors-quote-2',
                type: 'quote',
                locationId: 'moors',
                text: 'I\'ll walk where my own nature would be leading: It vexes me to choose another guide.',
                speaker: 'Emily Brontë',
                source: 'Poem'
            },
            {
                id: 'moors-quote-3',
                type: 'quote',
                locationId: 'moors',
                text: 'The heath for a carpet, the sky for a covering - what else do we want?',
                speaker: 'Emily Brontë',
                source: 'Attributed'
            },
            {
                id: 'moors-quote-4',
                type: 'quote',
                locationId: 'moors',
                text: 'He\'s more myself than I am. Whatever our souls are made of, his and mine are the same.',
                speaker: 'Emily Brontë',
                source: 'Wuthering Heights - Catherine on Heathcliff'
            },
            {
                id: 'moors-quote-5',
                type: 'quote',
                locationId: 'moors',
                text: 'If all else perished, and he remained, I should still continue to be. If all else remained, and he were annihilated, the universe would turn to a mighty stranger.',
                speaker: 'Emily Brontë',
                source: 'Wuthering Heights'
            },
            {
                id: 'moors-music-1',
                type: 'music',
                locationId: 'moors',
                musicTitle: 'Schubert: Impromptu Op. 90 No. 3',
                musicPreviewUrl: '/api/music/deezer/track/95586954'
            }
        ]
    },
    {
        id: 'angria-gondal',
        name: 'Angria and Gondal',
        lat: 53.8289,
        lng: -1.9575,
        date: '1826-1845',
        description: 'When Branwell received toy soldiers, the children created elaborate imaginary kingdoms: Angria (Charlotte and Branwell) and Gondal (Emily and Anne). They wrote thousands of pages in tiny handwriting. These juvenilia were the training ground for their genius.',
        photoUrl: '/bronte/bronte_sisters_painting.jpg',
        photoTitle: 'The Brontë Sisters (painting by Branwell)',
        content: [
            {
                id: 'angria-quote-1',
                type: 'quote',
                locationId: 'angria-gondal',
                text: 'We then chose who should be ours. Branwell chose his, and called him Buonaparte.',
                speaker: 'Charlotte Brontë',
                source: 'History of the Year 1829'
            },
            {
                id: 'angria-quote-2',
                type: 'quote',
                locationId: 'angria-gondal',
                text: 'The Gondals are discovering the interior of Gaaldine. Sally Mosley is washing in the back kitchen.',
                speaker: 'Emily Brontë',
                source: 'Diary paper, 1834'
            },
            {
                id: 'angria-quote-3',
                type: 'quote',
                locationId: 'angria-gondal',
                text: 'I wish I were a girl of five and had no other knowledge than what I learnt from the toy soldiers.',
                speaker: 'Charlotte Brontë',
                source: 'Letter'
            },
            {
                id: 'angria-quote-4',
                type: 'quote',
                locationId: 'angria-gondal',
                text: 'We wove a web in childhood, a web of sunny air.',
                speaker: 'Charlotte Brontë',
                source: 'Poem, We Wove a Web in Childhood'
            },
            {
                id: 'angria-music-1',
                type: 'music',
                locationId: 'angria-gondal',
                musicTitle: 'Mendelssohn: Songs Without Words Op. 19b No. 1',
                musicPreviewUrl: '/api/music/deezer/track/6587428'
            }
        ]
    },
    {
        id: 'roe-head',
        name: 'Roe Head School',
        lat: 53.7167,
        lng: -1.7333,
        date: '1831-1832, 1835-1838',
        description: 'The school at Mirfield where Charlotte was educated and later taught. She met Ellen Nussey and Mary Taylor, who remained lifelong friends. Charlotte was tiny, plain, and half-blind - but her intelligence astonished everyone.',
        photoUrl: '/bronte/haworth_parsonage.jpg',
        photoTitle: 'The world beyond Haworth',
        content: [
            {
                id: 'roe-quote-1',
                type: 'quote',
                locationId: 'roe-head',
                text: 'I first saw her coming out of a covered cart, in very old-fashioned clothes, and looking very cold and miserable.',
                speaker: 'Ellen Nussey',
                source: 'Reminiscences'
            },
            {
                id: 'roe-quote-2',
                type: 'quote',
                locationId: 'roe-head',
                text: 'She knew things none of us knew. She was ignorant of some very ordinary things.',
                speaker: 'Mary Taylor',
                source: 'Letter'
            },
            {
                id: 'roe-quote-3',
                type: 'quote',
                locationId: 'roe-head',
                text: 'I am not acquainted with myself yet - but I think I am hard and harsh.',
                speaker: 'Charlotte Brontë',
                source: 'Letter to Ellen'
            },
            {
                id: 'roe-quote-4',
                type: 'quote',
                locationId: 'roe-head',
                text: 'I would not sell you for gold or gallantry. I love you, and that is the beginning and end of everything.',
                speaker: 'Charlotte Brontë',
                source: 'Letter to her friend'
            },
            {
                id: 'roe-music-1',
                type: 'music',
                locationId: 'roe-head',
                musicTitle: 'Schumann: Träumerei (Kinderszenen Op. 15)',
                musicPreviewUrl: '/api/music/deezer/track/769892'
            }
        ]
    },
    {
        id: 'london',
        name: 'Smith, Elder & Co., London',
        lat: 51.5074,
        lng: -0.1278,
        date: 'August-October 1847',
        description: 'The publishing house at 65 Cornhill received a manuscript titled "Jane Eyre: An Autobiography, edited by Currer Bell." George Smith read it in one sitting and published it within weeks. It was an instant sensation.',
        photoUrl: '/bronte/bronte_sisters_painting.jpg',
        photoTitle: 'The sisters who became Currer, Ellis, and Acton Bell',
        content: [
            {
                id: 'london-quote-1',
                type: 'quote',
                locationId: 'london',
                text: 'I sat down and began to read it. Before I finished, I had written to the author accepting it.',
                speaker: 'George Smith',
                source: 'Publisher'
            },
            {
                id: 'london-quote-2',
                type: 'quote',
                locationId: 'london',
                text: 'Jane Eyre is the best novel of the season.',
                speaker: 'William Makepeace Thackeray',
                source: 'Letter to publisher'
            },
            {
                id: 'london-quote-3',
                type: 'quote',
                locationId: 'london',
                text: 'Who is Currer Bell? Everyone is asking.',
                speaker: 'The Athenaeum',
                source: 'Review, 1847'
            },
            {
                id: 'london-quote-4',
                type: 'quote',
                locationId: 'london',
                text: 'I walked about London silent but seeing all.',
                speaker: 'Charlotte Brontë',
                source: 'On her first visit to her publishers'
            },
            {
                id: 'london-quote-5',
                type: 'quote',
                locationId: 'london',
                text: 'Reader, I married him.',
                speaker: 'Charlotte Brontë',
                source: 'Jane Eyre - the most famous line'
            },
            {
                id: 'london-quote-6',
                type: 'quote',
                locationId: 'london',
                text: 'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!',
                speaker: 'Charlotte Brontë',
                source: 'Jane Eyre'
            },
            {
                id: 'london-quote-7',
                type: 'quote',
                locationId: 'london',
                text: 'A ruffled mind makes a restless pillow.',
                speaker: 'Charlotte Brontë',
                source: 'The Professor'
            },
            {
                id: 'london-music-1',
                type: 'music',
                locationId: 'london',
                musicTitle: 'Mendelssohn: Songs Without Words - Spring Song',
                musicPreviewUrl: '/api/music/deezer/track/6956933'
            }
        ]
    },
    {
        id: 'scarborough',
        name: 'Scarborough',
        lat: 54.2826,
        lng: -0.3985,
        date: 'May 1849',
        description: 'Anne Brontë loved Scarborough and asked to die there, seeing the sea one last time. Charlotte took her dying sister on the train journey. Anne died on May 28, 1849, aged 29. She is buried in St. Mary\'s churchyard.',
        photoUrl: '/bronte/scarborough_yorkshire.jpg',
        photoTitle: 'Scarborough - Anne\'s final resting place',
        content: [
            {
                id: 'scarborough-quote-1',
                type: 'quote',
                locationId: 'scarborough',
                text: 'Take courage, Charlotte; take courage.',
                speaker: 'Anne Brontë',
                source: 'Final words to her sister'
            },
            {
                id: 'scarborough-quote-2',
                type: 'quote',
                locationId: 'scarborough',
                text: 'She died without severe struggle, resigned, trusting in God - thankful for release from a suffering life.',
                speaker: 'Charlotte Brontë',
                source: 'Letter to Ellen Nussey'
            },
            {
                id: 'scarborough-quote-3',
                type: 'quote',
                locationId: 'scarborough',
                text: 'I am alone now. The others have all left me.',
                speaker: 'Charlotte Brontë',
                source: 'After Anne\'s death'
            },
            {
                id: 'scarborough-quote-4',
                type: 'quote',
                locationId: 'scarborough',
                text: 'A light wind swept over the corn, and all nature laughed in the sunshine.',
                speaker: 'Anne Brontë',
                source: 'Agnes Grey'
            },
            {
                id: 'scarborough-quote-5',
                type: 'quote',
                locationId: 'scarborough',
                text: 'All our talents increase in the using, and every faculty, both good and bad, strengthens by exercise.',
                speaker: 'Anne Brontë',
                source: 'The Tenant of Wildfell Hall'
            },
            {
                id: 'scarborough-quote-6',
                type: 'quote',
                locationId: 'scarborough',
                text: 'I see the moments of my life flash before me. And I am so tired. But I die in peace.',
                speaker: 'Anne Brontë',
                source: 'Final days, recalled by Charlotte'
            },
            {
                id: 'scarborough-music-1',
                type: 'music',
                locationId: 'scarborough',
                musicTitle: 'Schubert: Impromptu Op. 142 No. 3',
                musicPreviewUrl: '/api/music/deezer/track/63697003'
            }
        ]
    }
];

// The Novels
export const bronteNovels = [
    { title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, pseudonym: 'Currer Bell' },
    { title: 'Wuthering Heights', author: 'Emily Brontë', year: 1847, pseudonym: 'Ellis Bell' },
    { title: 'Agnes Grey', author: 'Anne Brontë', year: 1847, pseudonym: 'Acton Bell' },
    { title: 'The Tenant of Wildfell Hall', author: 'Anne Brontë', year: 1848, pseudonym: 'Acton Bell' },
    { title: 'Shirley', author: 'Charlotte Brontë', year: 1849, pseudonym: 'Currer Bell' },
    { title: 'Villette', author: 'Charlotte Brontë', year: 1853, pseudonym: 'Currer Bell' }
];
