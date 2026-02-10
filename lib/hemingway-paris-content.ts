// Young Hemingway in Paris - Content organized by location
// "A Moveable Feast" era, Gertrude Stein's salon (1921-1926)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const hemingwayParisContext = {
    title: 'The Lost Generation Finds Its Voice',
    description: `Ernest Hemingway arrived in Paris in December 1921 as a 22-year-old journalist with a new wife and ambitions to become a writer. Over the next five years, in cheap apartments on the Left Bank, cafés, and Gertrude Stein's salon, he stripped prose to its bones and invented a new American literature. The Paris of the '20s - Stein, Pound, Joyce, Fitzgerald - was the greatest concentration of literary talent in history.`,
    contemporaries: [
        { name: 'Gertrude Stein', significance: 'His mentor - "You are all a lost generation"' },
        { name: 'Ezra Pound', significance: 'Edited his early work, taught him to cut' },
        { name: 'F. Scott Fitzgerald', significance: 'Friend and rival - introduced him to Scribner\'s' },
        { name: 'James Joyce', significance: 'Master he worshipped from afar' },
        { name: 'Sylvia Beach', significance: 'Shakespeare and Company owner, lent him books' }
    ],
    keyQuote: 'If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life it stays with you, for Paris is a moveable feast. - Ernest Hemingway'
};

// Timeline Events
export const hemingwayParisTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'oak-park',
        date: 'July 21, 1899',
        text: 'Ernest Miller Hemingway born in Oak Park, Illinois'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'italy',
        date: 'July 8, 1918',
        text: 'Wounded on Italian front driving ambulance - 237 shrapnel wounds'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'paris-arrival',
        date: 'December 22, 1921',
        text: 'Arrives in Paris with wife Hadley - letter of introduction to Gertrude Stein from Sherwood Anderson'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'rue-cardinal',
        date: 'January 1922',
        text: 'Moves into tiny apartment at 74 rue du Cardinal-Lemoine'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'stein',
        date: 'March 1922',
        text: 'First visit to Gertrude Stein\'s salon at 27 rue de Fleurus'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'gare-de-lyon',
        date: 'December 1922',
        text: 'Hadley loses suitcase containing all Hemingway\'s manuscripts - everything destroyed'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'paris',
        date: 'Spring 1924',
        text: '"In Our Time" stories published in small press'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'pamplona',
        date: 'July 1925',
        text: 'Fiesta at Pamplona - the trip that becomes The Sun Also Rises'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'scribners',
        date: 'October 22, 1926',
        text: 'The Sun Also Rises published by Scribner\'s - Hemingway becomes famous'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'paris',
        date: '1926',
        text: 'Divorces Hadley, marries Pauline Pfeiffer - Paris era ends'
    }
];

// Enhanced Locations
export const hemingwayParisLocations: EnhancedLocation[] = [
    {
        id: 'oak-park',
        name: 'Oak Park, Illinois',
        lat: 41.8850,
        lng: -87.7845,
        date: '1899-1917',
        description: 'Hemingway grew up in this affluent Chicago suburb. His father was a doctor who taught him to hunt and fish; his mother was a domineering musician. He later called Oak Park a place of "broad lawns and narrow minds."',
        content: [
            {
                id: 'oak-park-quote-1',
                type: 'quote',
                locationId: 'oak-park',
                text: 'Broad lawns and narrow minds.',
                speaker: 'Ernest Hemingway',
                source: 'On Oak Park'
            },
            {
                id: 'oak-park-quote-2',
                type: 'quote',
                locationId: 'oak-park',
                text: 'My mother was a bitch and my father was a coward.',
                speaker: 'Ernest Hemingway',
                source: 'Attributed'
            }
        ]
    },
    {
        id: 'italy',
        name: 'Fossalta di Piave, Italy',
        lat: 45.6500,
        lng: 12.5833,
        date: 'July 8, 1918',
        description: 'At 18, Hemingway was driving an ambulance on the Italian front when an Austrian mortar shell exploded. He was hit by 237 shrapnel fragments. He carried a wounded soldier to safety before collapsing. The trauma would shape all his writing.',
        content: [
            {
                id: 'italy-quote-1',
                type: 'quote',
                locationId: 'italy',
                text: 'When you go to war as a boy you have a great illusion of immortality. Then you get badly wounded and that illusion is gone.',
                speaker: 'Ernest Hemingway',
                source: 'Interview'
            },
            {
                id: 'italy-quote-2',
                type: 'quote',
                locationId: 'italy',
                text: 'I died then. I felt my soul go out of me and then come back.',
                speaker: 'Ernest Hemingway',
                source: 'On being wounded'
            }
        ]
    },
    {
        id: 'paris-arrival',
        name: 'Gare de Lyon',
        lat: 48.8443,
        lng: 2.3737,
        date: 'December 22, 1921',
        description: 'Hemingway and Hadley arrived in Paris with little money and a letter of introduction from Sherwood Anderson. Paris was cheap, beautiful, and filled with artists. It was exactly what a young writer needed.',
        content: [
            {
                id: 'paris-arrival-quote-1',
                type: 'quote',
                locationId: 'paris-arrival',
                text: 'Paris was where the twentieth century was.',
                speaker: 'Gertrude Stein',
                source: 'Paris France'
            },
            {
                id: 'paris-arrival-quote-2',
                type: 'quote',
                locationId: 'paris-arrival',
                text: 'We were very poor and very happy.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            }
        ]
    },
    {
        id: 'rue-cardinal',
        name: '74 rue du Cardinal-Lemoine',
        lat: 48.8459,
        lng: 2.3513,
        date: '1922-1923',
        description: 'A cold-water flat on the fourth floor with no toilet. Hemingway wrote in a rented room nearby, heating only with a bundle of twigs. Here he learned his craft - one true sentence at a time.',
        content: [
            {
                id: 'rue-cardinal-quote-1',
                type: 'quote',
                locationId: 'rue-cardinal',
                text: 'All you have to do is write one true sentence. Write the truest sentence that you know.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'rue-cardinal-quote-2',
                type: 'quote',
                locationId: 'rue-cardinal',
                text: 'It was a pleasant café, warm and clean and friendly, and I hung up my old waterproof on the coat rack to dry and put my worn and weathered felt hat on the rack above the bench.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'rue-cardinal-quote-3',
                type: 'quote',
                locationId: 'rue-cardinal',
                text: 'I would stand and look out over the roofs of Paris and think, "Do not worry. You have always written before and you will write now."',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            }
        ]
    },
    {
        id: 'stein',
        name: '27 rue de Fleurus',
        lat: 48.8460,
        lng: 2.3292,
        date: '1922-1926',
        description: 'Gertrude Stein\'s legendary salon, walls covered with Picassos, Matisses, Cézannes. Stein taught Hemingway about rhythm and repetition, about seeing clearly. She called his generation "lost" - he made the phrase immortal.',
        content: [
            {
                id: 'stein-quote-1',
                type: 'quote',
                locationId: 'stein',
                text: 'You are all a lost generation.',
                speaker: 'Gertrude Stein',
                source: 'To Hemingway'
            },
            {
                id: 'stein-quote-2',
                type: 'quote',
                locationId: 'stein',
                text: 'Hemingway, remarks are not literature.',
                speaker: 'Gertrude Stein',
                source: 'On editing his work'
            },
            {
                id: 'stein-quote-3',
                type: 'quote',
                locationId: 'stein',
                text: 'She had beautiful eyes and a mobile face. She talked and I listened.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'stein-quote-4',
                type: 'quote',
                locationId: 'stein',
                text: 'I always wanted to fuck her and she knew it.',
                speaker: 'Ernest Hemingway',
                source: 'Letter, on his complicated feelings for Stein'
            },
            {
                id: 'stein-attendee-1',
                type: 'attendee',
                locationId: 'stein',
                text: 'Alice B. Toklas, Picasso, Matisse, Sherwood Anderson, Ezra Pound'
            }
        ]
    },
    {
        id: 'shakespeare',
        name: 'Shakespeare and Company',
        lat: 48.8526,
        lng: 2.3471,
        date: '1921-1926',
        description: 'Sylvia Beach\'s bookshop at 12 rue de l\'Odéon was the headquarters of English-language modernism. She had published Joyce\'s Ulysses when no one else would. She lent Hemingway books and became a lifelong friend.',
        content: [
            {
                id: 'shakespeare-quote-1',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'On a cold windswept street, this was a warm, cheerful place with a big stove.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'shakespeare-quote-2',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'Sylvia had a lively, sharply sculptured face and brown eyes that were as alive as a small animal\'s.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'shakespeare-quote-3',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'I read Turgenev there, and all of Dostoevsky, and everything by Tolstoy.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'shakespeare-attendee-1',
                type: 'attendee',
                locationId: 'shakespeare',
                text: 'Sylvia Beach, James Joyce, Ezra Pound, Gertrude Stein'
            }
        ]
    },
    {
        id: 'closerie',
        name: 'La Closerie des Lilas',
        lat: 48.8427,
        lng: 2.3375,
        date: '1922-1926',
        description: 'Hemingway\'s favorite café for writing, at the corner of Boulevard Montparnasse and Boulevard Saint-Michel. He wrote at a corner table, ordering café crème and watching the chestnut trees. Here he rewrote The Sun Also Rises.',
        content: [
            {
                id: 'closerie-quote-1',
                type: 'quote',
                locationId: 'closerie',
                text: 'The Closerie des Lilas was the nearest good café. It was one of the best cafés in Paris.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'closerie-quote-2',
                type: 'quote',
                locationId: 'closerie',
                text: 'I sat in a corner with the afternoon light coming in over my shoulder and wrote in the notebook.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'closerie-quote-3',
                type: 'quote',
                locationId: 'closerie',
                text: 'I rewrote the ending thirty-nine times before I was satisfied.',
                speaker: 'Ernest Hemingway',
                source: 'On finishing The Sun Also Rises'
            }
        ]
    },
    {
        id: 'pamplona',
        name: 'Pamplona, Spain',
        lat: 42.8125,
        lng: -1.6458,
        date: 'July 1925',
        description: 'The fiesta of San Fermín - bullfights, running of the bulls, and too much drinking. Hemingway went with a group of friends whose jealousies and betrayals became The Sun Also Rises. Lady Duff Twysden was Brett Ashley.',
        content: [
            {
                id: 'pamplona-quote-1',
                type: 'quote',
                locationId: 'pamplona',
                text: 'Nobody ever lives their life all the way up except bull-fighters.',
                speaker: 'Ernest Hemingway',
                source: 'The Sun Also Rises'
            },
            {
                id: 'pamplona-quote-2',
                type: 'quote',
                locationId: 'pamplona',
                text: 'Isn\'t it pretty to think so?',
                speaker: 'Ernest Hemingway',
                source: 'Final line of The Sun Also Rises'
            },
            {
                id: 'pamplona-quote-3',
                type: 'quote',
                locationId: 'pamplona',
                text: 'The book was written in six weeks. I wrote it in one sitting, then rewrote it completely.',
                speaker: 'Ernest Hemingway',
                source: 'Interview'
            },
            {
                id: 'pamplona-attendee-1',
                type: 'attendee',
                locationId: 'pamplona',
                text: 'Lady Duff Twysden, Harold Loeb, Bill Smith, Donald Ogden Stewart'
            }
        ]
    },
    {
        id: 'scribners',
        name: 'Charles Scribner\'s Sons, New York',
        lat: 40.7549,
        lng: -73.9840,
        date: 'October 1926',
        description: 'F. Scott Fitzgerald introduced Hemingway to his editor, Maxwell Perkins, at Scribner\'s. The Sun Also Rises was published on October 22, 1926. Hemingway became famous overnight. He was 27 years old.',
        content: [
            {
                id: 'scribners-quote-1',
                type: 'quote',
                locationId: 'scribners',
                text: 'This is not a book to be set aside lightly. It should be thrown with great force.',
                speaker: 'Dorothy Parker',
                source: 'Review (actually about another book, often misattributed)'
            },
            {
                id: 'scribners-quote-2',
                type: 'quote',
                locationId: 'scribners',
                text: 'Ernest Hemingway has produced a genuinely new work.',
                speaker: 'The New York Times',
                source: 'Review of The Sun Also Rises'
            },
            {
                id: 'scribners-quote-3',
                type: 'quote',
                locationId: 'scribners',
                text: 'I had learned to write one sentence, then go on to the next. I kept my concentration.',
                speaker: 'Ernest Hemingway',
                source: 'On his method'
            }
        ]
    }
];

// Key Works
export const hemingwayParisWorks = [
    { title: 'Three Stories and Ten Poems', year: 1923, note: 'First book, 300 copies' },
    { title: 'In Our Time', year: 1925, note: 'Short story collection' },
    { title: 'The Sun Also Rises', year: 1926, note: 'The breakthrough novel' },
    { title: 'A Moveable Feast', year: 1964, note: 'Memoir of Paris years, published posthumously' }
];
