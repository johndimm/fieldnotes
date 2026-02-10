// The Brontë Sisters at Haworth - Content organized by location
// Three sisters writing masterpieces in a Yorkshire parsonage

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const bronteSistersContext = {
    title: 'Genius in the Parsonage',
    description: `In a remote Yorkshire parsonage, three sisters created some of the greatest novels in the English language. Charlotte, Emily, and Anne Brontë grew up in isolation, their mother dead, their two older sisters dead, their brother destroying himself with alcohol and opium. They invented imaginary worlds, walked the windswept moors, and published under male pseudonyms. Within three years, all three would be dead - but Jane Eyre, Wuthering Heights, and The Tenant of Wildfell Hall would live forever.`,
    theSisters: [
        { name: 'Charlotte (1816-1855)', significance: 'Author of Jane Eyre, the eldest surviving sister, fierce and ambitious' },
        { name: 'Emily (1818-1848)', significance: 'Author of Wuthering Heights, mysterious, wild, died at 30' },
        { name: 'Anne (1820-1849)', significance: 'Author of The Tenant of Wildfell Hall, often overlooked, deeply moral' },
        { name: 'Branwell (1817-1848)', significance: 'The brother - brilliant, destroyed by addiction, died first' }
    ],
    keyQuote: 'I am no bird; and no net ensnares me. - Charlotte Brontë, Jane Eyre'
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
                id: 'haworth-attendee-1',
                type: 'attendee',
                locationId: 'haworth',
                text: 'Patrick Brontë, Aunt Branwell, Tabitha Aykroyd (servant)'
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
