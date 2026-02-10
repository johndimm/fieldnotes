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
        photoUrl: '/hemingway/hemingway_birthplace.jpg',
        photoTitle: 'Hemingway\'s birthplace in Oak Park',
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
            },
            {
                id: 'oak-park-quote-3',
                type: 'quote',
                locationId: 'oak-park',
                text: 'I was always embarrassed by the words sacred, glorious, and sacrifice. We had heard them, on proclamations that were slapped up by billposters over other proclamations, now for a long time, and I had seen nothing sacred, and the things that were glorious had no glory.',
                speaker: 'Ernest Hemingway',
                source: 'A Farewell to Arms'
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
        photoUrl: '/hemingway/hemingway_portrait.jpg',
        photoTitle: 'Young Hemingway in uniform',
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
            },
            {
                id: 'italy-quote-3',
                type: 'quote',
                locationId: 'italy',
                text: 'The world breaks everyone and afterward many are strong at the broken places.',
                speaker: 'Ernest Hemingway',
                source: 'A Farewell to Arms'
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
        photoUrl: '/hemingway/gare_de_lyon.jpg',
        photoTitle: 'Gare de Lyon, Paris',
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
            },
            {
                id: 'paris-arrival-quote-3',
                type: 'quote',
                locationId: 'paris-arrival',
                text: 'There is never any ending to Paris and the memory of each person who has lived in it differs from that of any other.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'paris-arrival-music-1',
                type: 'music',
                locationId: 'paris-arrival',
                musicTitle: 'La Vie en Rose',
                musicPreviewUrl: '/api/music/deezer/track/3135556'
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
        photoUrl: '/hemingway/hemingway_portrait.jpg',
        photoTitle: 'Hemingway in Paris',
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
            },
            {
                id: 'rue-cardinal-quote-4',
                type: 'quote',
                locationId: 'rue-cardinal',
                text: 'Hunger is good discipline.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'rue-cardinal-quote-5',
                type: 'quote',
                locationId: 'rue-cardinal',
                text: 'You belong to me and all Paris belongs to me and I belong to this notebook and this pencil.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'rue-cardinal-music-1',
                type: 'music',
                locationId: 'rue-cardinal',
                musicTitle: 'Minor Swing',
                musicPreviewUrl: '/api/music/deezer/track/916405'
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
        photoUrl: '/hemingway/gertrude_stein.jpg',
        photoTitle: 'Gertrude Stein\'s salon',
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
                id: 'stein-quote-5',
                type: 'quote',
                locationId: 'stein',
                text: 'A rose is a rose is a rose is a rose.',
                speaker: 'Gertrude Stein',
                source: 'Sacred Emily'
            },
            {
                id: 'stein-quote-6',
                type: 'quote',
                locationId: 'stein',
                text: 'America is my country and Paris is my hometown.',
                speaker: 'Gertrude Stein',
                source: 'On expatriate life'
            },
            {
                id: 'stein-quote-7',
                type: 'quote',
                locationId: 'stein',
                text: 'Gertrude was always right. She had a clearness of vision that no one else had.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'stein-attendee-1',
                type: 'attendee',
                locationId: 'stein',
                text: 'Alice B. Toklas, Picasso, Matisse, Sherwood Anderson, Ezra Pound'
            },
            {
                id: 'stein-music-1',
                type: 'music',
                locationId: 'stein',
                musicTitle: 'Nuages',
                musicPreviewUrl: '/api/music/deezer/track/916407'
            }
        ]
    },
    {
        id: 'ezra-pound',
        name: 'Ezra Pound\'s Studio',
        lat: 48.8488,
        lng: 2.3421,
        date: '1922-1924',
        description: 'Ezra Pound lived at 70 bis rue Notre-Dame-des-Champs. He taught Hemingway about cutting, about precision, about making every word count. They boxed together in Pound\'s studio. Pound edited Hemingway\'s early work with a brutal red pencil, teaching him that less is more.',
        photoUrl: '/hemingway/hemingway_portrait.jpg',
        photoTitle: 'The young writer learning his craft',
        content: [
            {
                id: 'pound-quote-1',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'Ezra was the most generous writer I have ever known and the most disinterested. He helped poets, painters, sculptors and prose writers that he believed in and he would help anyone whether he believed in them or not if they were in trouble.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'pound-quote-2',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'Fundamental accuracy of statement is the ONE sole morality of writing.',
                speaker: 'Ezra Pound',
                source: 'ABC of Reading'
            },
            {
                id: 'pound-quote-3',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'Use no superfluous word, no adjective, which does not reveal something.',
                speaker: 'Ezra Pound',
                source: 'A Few Don\'ts by an Imagiste'
            },
            {
                id: 'pound-quote-4',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'Poetry must be as well written as prose.',
                speaker: 'Ezra Pound',
                source: 'Teaching principle'
            },
            {
                id: 'pound-quote-5',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'He taught me to distrust adjectives as I would later learn to distrust certain people.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'pound-quote-6',
                type: 'quote',
                locationId: 'ezra-pound',
                text: 'Literature is news that stays news.',
                speaker: 'Ezra Pound',
                source: 'ABC of Reading'
            },
            {
                id: 'pound-attendee-1',
                type: 'attendee',
                locationId: 'ezra-pound',
                text: 'Ezra Pound, Dorothy Pound, T.S. Eliot, Ford Madox Ford'
            },
            {
                id: 'pound-music-1',
                type: 'music',
                locationId: 'ezra-pound',
                musicTitle: 'Minor Blues',
                musicPreviewUrl: '/api/music/deezer/track/916411'
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
        photoUrl: '/hemingway/shakespeare_company.jpg',
        photoTitle: 'Shakespeare and Company bookshop',
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
                id: 'shakespeare-quote-4',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'No one that I ever knew was nicer to me.',
                speaker: 'Ernest Hemingway',
                source: 'On Sylvia Beach, A Moveable Feast'
            },
            {
                id: 'shakespeare-quote-5',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'The use of capitals, which Joyce has forbidden, is pedantic, old-fashioned, and out of date.',
                speaker: 'Ezra Pound',
                source: 'On editing Hemingway\'s early work'
            },
            {
                id: 'shakespeare-quote-6',
                type: 'quote',
                locationId: 'shakespeare',
                text: 'Ezra was right half the time, and when he was wrong, he was so wrong you were never in any doubt about it.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'shakespeare-attendee-1',
                type: 'attendee',
                locationId: 'shakespeare',
                text: 'Sylvia Beach, James Joyce, Ezra Pound, Gertrude Stein'
            },
            {
                id: 'shakespeare-music-1',
                type: 'music',
                locationId: 'shakespeare',
                musicTitle: 'Autumn Leaves (Les Feuilles Mortes)',
                musicPreviewUrl: '/api/music/deezer/track/916413'
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
        photoUrl: '/hemingway/closerie_des_lilas.jpg',
        photoTitle: 'La Closerie des Lilas café',
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
            },
            {
                id: 'closerie-quote-4',
                type: 'quote',
                locationId: 'closerie',
                text: 'When I am working on a book or a story I write every morning as soon after first light as possible. There is no one to disturb you and it is cool or cold and you come to your work and warm as you write.',
                speaker: 'Ernest Hemingway',
                source: 'Paris Review Interview'
            },
            {
                id: 'closerie-quote-5',
                type: 'quote',
                locationId: 'closerie',
                text: 'All good books are alike in that they are truer than if they had really happened.',
                speaker: 'Ernest Hemingway',
                source: 'On writing'
            },
            {
                id: 'closerie-quote-6',
                type: 'quote',
                locationId: 'closerie',
                text: 'The café was crowded. You could always find someone to talk to. But I did not want to talk to anyone. I wanted to write.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'closerie-music-1',
                type: 'music',
                locationId: 'closerie',
                musicTitle: 'Djangology',
                musicPreviewUrl: '/api/music/deezer/track/916401'
            }
        ]
    },
    {
        id: 'dingo-bar',
        name: 'Dingo Bar',
        lat: 48.8427,
        lng: 2.3330,
        date: '1925',
        description: 'At the Dingo American Bar on rue Delambre, Hemingway first met F. Scott Fitzgerald in April 1925. Fitzgerald had just published The Great Gatsby. The meeting was legendary - Fitzgerald was drunk, enthusiastic, and full of admiration. He would introduce Hemingway to Maxwell Perkins and change his life.',
        photoUrl: '/hemingway/closerie_des_lilas.jpg',
        photoTitle: 'Montparnasse café scene',
        content: [
            {
                id: 'dingo-quote-1',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'Scott was a man then who looked like a boy with a face between handsome and pretty.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'dingo-quote-2',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'You\'re the best writer in America.',
                speaker: 'F. Scott Fitzgerald',
                source: 'To Hemingway at their first meeting'
            },
            {
                id: 'dingo-quote-3',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'He wanted to be a serious writer and yet there was that Hollywood corrupting him.',
                speaker: 'Ernest Hemingway',
                source: 'On Fitzgerald\'s struggles'
            },
            {
                id: 'dingo-quote-4',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'Ernest would always give a helping hand to a man on a ledge a little higher up.',
                speaker: 'F. Scott Fitzgerald',
                source: 'Notebook entry'
            },
            {
                id: 'dingo-quote-5',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'I am too much in love with my wife.',
                speaker: 'F. Scott Fitzgerald',
                source: 'To Hemingway'
            },
            {
                id: 'dingo-quote-6',
                type: 'quote',
                locationId: 'dingo-bar',
                text: 'Zelda was jealous of Scott\'s work and as we got to know them, this fell into a regular pattern.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'dingo-attendee-1',
                type: 'attendee',
                locationId: 'dingo-bar',
                text: 'F. Scott Fitzgerald, Zelda Fitzgerald, Duncan Chaplin'
            },
            {
                id: 'dingo-music-1',
                type: 'music',
                locationId: 'dingo-bar',
                musicTitle: 'Sweet Georgia Brown',
                musicPreviewUrl: '/api/music/deezer/track/916403'
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
        photoUrl: '/hemingway/pamplona_bulls.jpg',
        photoTitle: 'Running of the bulls, Pamplona',
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
                id: 'pamplona-quote-4',
                type: 'quote',
                locationId: 'pamplona',
                text: 'You can\'t get away from yourself by moving from one place to another.',
                speaker: 'Ernest Hemingway',
                source: 'The Sun Also Rises'
            },
            {
                id: 'pamplona-quote-5',
                type: 'quote',
                locationId: 'pamplona',
                text: 'I mistrust all frank and simple people, especially when their stories hold together.',
                speaker: 'Ernest Hemingway',
                source: 'The Sun Also Rises'
            },
            {
                id: 'pamplona-attendee-1',
                type: 'attendee',
                locationId: 'pamplona',
                text: 'Lady Duff Twysden, Harold Loeb, Bill Smith, Donald Ogden Stewart'
            },
            {
                id: 'pamplona-music-1',
                type: 'music',
                locationId: 'pamplona',
                musicTitle: 'Manoir de Mes Rêves',
                musicPreviewUrl: '/api/music/deezer/track/916409'
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
        photoUrl: '/hemingway/hemingway_portrait.jpg',
        photoTitle: 'Hemingway, the published author',
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
            },
            {
                id: 'scribners-quote-4',
                type: 'quote',
                locationId: 'scribners',
                text: 'Ernest is a rummy. But he\'s also a genius.',
                speaker: 'F. Scott Fitzgerald',
                source: 'Letter to Maxwell Perkins'
            },
            {
                id: 'scribners-quote-5',
                type: 'quote',
                locationId: 'scribners',
                text: 'Scott was a man then who looked like a boy with a face between handsome and pretty. He had very fair wavy hair, a high forehead, excited and friendly eyes and a delicate long-lipped Irish mouth.',
                speaker: 'Ernest Hemingway',
                source: 'A Moveable Feast'
            },
            {
                id: 'scribners-quote-6',
                type: 'quote',
                locationId: 'scribners',
                text: 'His talent was as natural as the pattern that was made by the dust on a butterfly\'s wings. At one time he understood it no more than the butterfly did and he did not know when it was brushed or marred.',
                speaker: 'Ernest Hemingway',
                source: 'On F. Scott Fitzgerald, A Moveable Feast'
            },
            {
                id: 'scribners-quote-7',
                type: 'quote',
                locationId: 'scribners',
                text: 'The rich are different from you and me.',
                speaker: 'F. Scott Fitzgerald',
                source: 'The Rich Boy'
            },
            {
                id: 'scribners-music-1',
                type: 'music',
                locationId: 'scribners',
                musicTitle: 'La Petite Tonkinoise',
                musicPreviewUrl: '/api/music/deezer/track/128676784'
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
