// Mozart's Grand Tour - Content organized by location
// Includes quotes, photos, music, passages, timeline events, and attendees

import type { ContentItem, EnhancedLocation } from './documentary';

// Timeline Events
export const mozartTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'salzburg',
        date: 'July 9, 1763',
        text: 'Departure from Salzburg - the carriage wheel broke at the city gates!'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'munich',
        date: 'June 12-22, 1763',
        text: 'First major performances for Elector Maximilian III Joseph at Nymphenburg Palace'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'frankfurt',
        date: 'August 18-30, 1763',
        text: 'Five public concerts at Scharff\'sches Haus - 14-year-old Goethe in attendance'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'brussels',
        date: 'October 5, 1763',
        text: 'Arrival in Brussels - Prince Charles keeps them waiting'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'paris',
        date: 'February 1764',
        text: 'Paris sonatas published (K.6-9) - Wolfgang\'s first published works'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'versailles',
        date: 'December 24, 1763',
        text: 'Wolfgang stands beside Queen Marie at the Grand Couvert on New Year\'s Eve'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'london',
        date: 'April 27, 1764',
        text: 'First performance for King George III and Queen Charlotte'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'london',
        date: 'Summer 1764',
        text: 'Chelsea - Wolfgang composes his first symphonies while Leopold recovers from illness'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'thehague',
        date: 'October 21, 1765',
        text: 'Nannerl given last rites - both children gravely ill with typhoid'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'amsterdam',
        date: 'March 11, 1766',
        text: 'Prince of Orange concert - triumphant recovery'
    },
    {
        id: 'timeline-11',
        type: 'timeline',
        locationId: 'salzburg-return',
        date: 'November 29, 1766',
        text: 'Return to Salzburg - Wolfgang is no longer just a prodigy'
    }
];

// Enhanced Locations with all content
export const mozartLocations: EnhancedLocation[] = [
    {
        id: 'salzburg',
        name: 'Salzburg',
        lat: 47.8095,
        lng: 13.0550,
        date: 'June 9, 1763',
        description: 'The Mozart family departed their hometown to embark on the most ambitious concert tour ever undertaken. Leopold had carefully planned the route to maximize exposure to Europe\'s royal courts and wealthy patrons.',
        photoUrl: '/mozart/mozart_boy.jpg',
        photoTitle: 'Wolfgang Amadeus Mozart, age 7 (Lorenzoni, 1763)',
        photoFocalPoint: '50% 30%',
        content: [
            {
                id: 'salzburg-quote-1',
                type: 'quote',
                locationId: 'salzburg',
                text: 'The miracle which God let be born in Salzburg.',
                speaker: 'Leopold Mozart',
                source: 'Letter, 1763'
            },
            {
                id: 'salzburg-quote-2',
                type: 'quote',
                locationId: 'salzburg',
                text: 'My boy knows more in his eighth year than one would expect from a man of forty.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'salzburg-music-1',
                type: 'music',
                locationId: 'salzburg',
                musicTitle: "Mozart's Minuet in G (K.1)",
                musicPreviewUrl: '/api/music/deezer/track/1495964172'
            },
            {
                id: 'salzburg-photo-1',
                type: 'photo',
                locationId: 'salzburg',
                photoUrl: '/mozart/mozart_boy.jpg',
                photoTitle: 'Wolfgang Amadeus Mozart, age 7',
                credit: 'Lorenzoni, 1763'
            }
        ]
    },
    {
        id: 'munich',
        name: 'Munich',
        lat: 48.1351,
        lng: 11.5820,
        date: 'June 12-22, 1763',
        description: 'The first major stop. Wolfgang and Nannerl performed for Elector Maximilian III Joseph at Nymphenburg Palace on successive evenings. The Elector was so impressed he gave them expensive gifts.',
        photoUrl: '/mozart/nymphenburg.jpg',
        photoTitle: 'Nymphenburg Palace, Munich',
        content: [
            {
                id: 'munich-quote-1',
                type: 'quote',
                locationId: 'munich',
                text: 'Wolfgang amazed everyone with his pedal work and improvisation. The Elector could not believe his eyes.',
                speaker: 'Leopold Mozart',
                source: 'Letter from Munich'
            },
            {
                id: 'munich-quote-2',
                type: 'quote',
                locationId: 'munich',
                text: 'He played everything put before him at sight, and improvised for an hour in the finest manner.',
                speaker: 'Court report',
                source: 'Munich, 1763'
            },
            {
                id: 'munich-music-1',
                type: 'music',
                locationId: 'munich',
                musicTitle: "Mozart's Minuet in F (K.2)",
                musicPreviewUrl: '/api/music/deezer/track/1495964162'
            },
            {
                id: 'munich-photo-1',
                type: 'photo',
                locationId: 'munich',
                photoUrl: '/mozart/nymphenburg.jpg',
                photoTitle: 'Nymphenburg Palace, Munich',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'frankfurt',
        name: 'Frankfurt',
        lat: 50.1109,
        lng: 8.6821,
        date: 'August 18-30, 1763',
        description: 'Five public concerts at the Scharff\'sches Haus. Among the audience on August 25th was 14-year-old Johann Wolfgang von Goethe, who would become Germany\'s greatest writer.',
        photoUrl: '/mozart/frankfurt.png',
        photoTitle: 'Frankfurt Römerberg Square, 1763',
        content: [
            {
                id: 'frankfurt-quote-1',
                type: 'quote',
                locationId: 'frankfurt',
                text: 'I saw him as a seven-year-old boy when he gave a concert here. I remember the little man in his wig and with his sword very clearly.',
                speaker: 'Johann Wolfgang von Goethe',
                source: 'Recollection, 70 years later'
            },
            {
                id: 'frankfurt-quote-2',
                type: 'quote',
                locationId: 'frankfurt',
                text: 'A girl of 12 and a boy of 7 will play concertos on the harpsichord, the boy also on the violin. The boy will cover the keyboard with a cloth and play as well as if he could see the keys. He will improvise in all keys.',
                speaker: 'Concert advertisement',
                source: 'Frankfurt, August 1763'
            },
            {
                id: 'frankfurt-attendee-1',
                type: 'attendee',
                locationId: 'frankfurt',
                text: 'Johann Wolfgang von Goethe (age 14)'
            },
            {
                id: 'frankfurt-music-1',
                type: 'music',
                locationId: 'frankfurt',
                musicTitle: 'Mozart: Minuet in F, K.5',
                musicPreviewUrl: '/api/music/deezer/track/1998719487'
            },
            {
                id: 'frankfurt-photo-1',
                type: 'photo',
                locationId: 'frankfurt',
                photoUrl: '/mozart/frankfurt.png',
                photoTitle: 'Frankfurt Römerberg Square, 1763',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'brussels',
        name: 'Brussels',
        lat: 50.8503,
        lng: 4.3517,
        date: 'October 5 - November 15, 1763',
        description: 'The Mozarts arrived hoping to perform for Prince Charles of Lorraine, but were kept waiting for weeks. Leopold grew increasingly frustrated at the delay and expense.',
        content: [
            {
                id: 'brussels-quote-1',
                type: 'quote',
                locationId: 'brussels',
                text: 'Prince Charles does nothing but hunt, gobble and swill.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'brussels-quote-2',
                type: 'quote',
                locationId: 'brussels',
                text: 'She has no money... neither mine host nor the postmaster can be paid with kisses and compliments.',
                speaker: 'Leopold Mozart',
                source: 'On Princess Amalia\'s financial difficulties'
            }
        ]
    },
    {
        id: 'paris',
        name: 'Paris',
        lat: 48.8566,
        lng: 2.3522,
        date: 'November 18, 1763 - April 10, 1764',
        description: 'A five-month triumph. The Mozarts performed at Versailles and in the grandest Parisian salons. Here Wolfgang composed and published his first works: the Violin Sonatas K.6-K.9, dedicated to Madame Victoire, daughter of Louis XV.',
        photoUrl: '/mozart/mozart_family_paris.jpg',
        photoTitle: 'The Mozart Family Performing in Paris (Carmontelle, 1763)',
        photoFocalPoint: '50% 70%',
        content: [
            {
                id: 'paris-quote-1',
                type: 'quote',
                locationId: 'paris',
                text: 'Now for once in my life I have seen a miracle.',
                speaker: 'Baron Grimm',
                source: 'Letter about Wolfgang'
            },
            {
                id: 'paris-quote-2',
                type: 'quote',
                locationId: 'paris',
                text: 'The most consummate Kapellmeister could not be more profound in the science of harmony and modulation.',
                speaker: 'Baron Grimm',
                source: 'On Wolfgang\'s compositions'
            },
            {
                id: 'paris-quote-3',
                type: 'quote',
                locationId: 'paris',
                text: 'If these children live... Monarchs will soon be disputing for them.',
                speaker: 'Baron Grimm',
                source: 'Prediction about the Mozart children'
            },
            {
                id: 'paris-quote-4',
                type: 'quote',
                locationId: 'paris',
                text: 'We are the talk of the town! Everyone is amazed, especially at the boy.',
                speaker: 'Leopold Mozart',
                source: 'Letter from Paris'
            },
            {
                id: 'paris-quote-5',
                type: 'quote',
                locationId: 'paris',
                text: 'After Wolfgang performed, Madame de Pompadour refused his kiss because she was too heavily made-up. The little boy was quite offended and asked "Who is this that does not want to kiss me? The Empress herself kissed me!"',
                speaker: 'Leopold Mozart',
                source: 'Letter describing the incident'
            },
            {
                id: 'paris-quote-6',
                type: 'quote',
                locationId: 'paris',
                text: 'Baron Grimm has taken us under his wing. Without his help we would not have survived Paris.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'paris-attendee-1',
                type: 'attendee',
                locationId: 'paris',
                text: 'Madame de Pompadour, Baron Grimm, The Duchess of Bourbon'
            },
            {
                id: 'paris-music-1',
                type: 'music',
                locationId: 'paris',
                musicTitle: 'Violin Sonata in C Major, K.6',
                musicPreviewUrl: '/api/music/deezer/track/129400032'
            },
            {
                id: 'paris-photo-1',
                type: 'photo',
                locationId: 'paris',
                photoUrl: '/mozart/mozart_family_paris.jpg',
                photoTitle: 'The Mozart Family Performing in Paris',
                credit: 'Carmontelle, 1763'
            }
        ]
    },
    {
        id: 'versailles',
        name: 'Versailles',
        lat: 48.8049,
        lng: 2.1204,
        date: 'December 24, 1763 - January 8, 1764',
        description: 'Two weeks at the palace of Louis XV. Wolfgang stood beside Queen Marie Leszczyńska at the royal dinner (Grand Couvert) on New Year\'s Eve 1763 - an unprecedented honor for a commoner.',
        photoUrl: '/mozart/versailles.png',
        photoTitle: 'Palace of Versailles',
        content: [
            {
                id: 'versailles-quote-1',
                type: 'quote',
                locationId: 'versailles',
                text: 'Wolfgang stood beside the Queen at the Grand Couvert on New Year\'s Eve, and was fed tidbits by her throughout the meal.',
                speaker: 'Leopold Mozart',
                source: 'Letter describing the honor'
            },
            {
                id: 'versailles-quote-2',
                type: 'quote',
                locationId: 'versailles',
                text: 'The Princesses kissed my children numerous times!',
                speaker: 'Leopold Mozart',
                source: 'Letter from Versailles'
            },
            {
                id: 'versailles-quote-3',
                type: 'quote',
                locationId: 'versailles',
                text: 'The King\'s daughters, Mesdames, have taken my children into their hearts. We are at court every day.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'versailles-attendee-1',
                type: 'attendee',
                locationId: 'versailles',
                text: 'King Louis XV, Queen Marie Leszczyńska, Madame Victoire, Madame Adélaïde'
            },
            {
                id: 'versailles-music-1',
                type: 'music',
                locationId: 'versailles',
                musicTitle: 'Violin Sonata in D Major, K.7',
                musicPreviewUrl: '/api/music/deezer/track/129400036'
            },
            {
                id: 'versailles-photo-1',
                type: 'photo',
                locationId: 'versailles',
                photoUrl: '/mozart/versailles.png',
                photoTitle: 'Palace of Versailles',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'london',
        name: 'London',
        lat: 51.5074,
        lng: -0.1278,
        date: 'April 23, 1764 - July 24, 1765',
        description: 'Fifteen months in London - the longest stop of the tour. Wolfgang composed his first symphonies and was profoundly influenced by Johann Christian Bach. The family lodged at 180 Ebury Street (now marked with a plaque).',
        photoUrl: '/mozart/westminster_bridge.jpg',
        photoTitle: 'Westminster Bridge, London (Canaletto)',
        content: [
            {
                id: 'london-quote-1',
                type: 'quote',
                locationId: 'london',
                text: 'Queen Charlotte sang while Wolfgang accompanied her on harpsichord, sight-reading her music.',
                speaker: 'Leopold Mozart',
                source: 'Letter from London'
            },
            {
                id: 'london-quote-2',
                type: 'quote',
                locationId: 'london',
                text: 'Wolfgang and Johann Christian Bach are inseparable! They sit together at the keyboard, playing entire sonatas, taking turns bar by bar, with such precision that one would think a single person was playing.',
                speaker: 'Leopold Mozart',
                source: 'Letter describing their friendship'
            },
            {
                id: 'london-quote-3',
                type: 'quote',
                locationId: 'london',
                text: 'Anyone not watching would have thought it was played by one person.',
                speaker: 'Nannerl Mozart',
                source: 'On J.C. Bach and Wolfgang playing together'
            },
            {
                id: 'london-quote-4',
                type: 'quote',
                locationId: 'london',
                text: 'The King placed before him pieces by Wagenseil, Bach, Abel, and Handel, all of which he played off at sight.',
                speaker: 'Leopold Mozart',
                source: 'Letter from London'
            },
            {
                id: 'london-quote-5',
                type: 'quote',
                locationId: 'london',
                text: 'He writes the most beautiful melody in such a manner that even when he cannot use the pedals, which with his short legs he cannot reach, it still sounds as beautiful as when an adult plays.',
                speaker: 'Leopold Mozart',
                source: 'On Wolfgang\'s keyboard mastery'
            },
            {
                id: 'london-attendee-1',
                type: 'attendee',
                locationId: 'london',
                text: 'King George III, Queen Charlotte, Johann Christian Bach, Carl Friedrich Abel'
            },
            {
                id: 'london-music-1',
                type: 'music',
                locationId: 'london',
                musicTitle: 'Symphony No. 1 in E-flat Major, K.16',
                musicPreviewUrl: '/api/music/deezer/track/66610704'
            },
            {
                id: 'london-photo-1',
                type: 'photo',
                locationId: 'london',
                photoUrl: '/mozart/westminster_bridge.jpg',
                photoTitle: 'Westminster Bridge, London',
                credit: 'Canaletto'
            },
            {
                id: 'london-passage-1',
                type: 'passage',
                locationId: 'london',
                passage: 'The meeting with Johann Christian Bach was transformative. Bach, the youngest son of Johann Sebastian Bach, had settled in London and become a star. He took the eight-year-old Wolfgang under his wing. Their four-hand performances became legendary - they would alternate phrases so seamlessly that audiences couldn\'t tell where one player ended and the other began. Bach\'s elegant, galant style would influence Mozart for the rest of his life.',
                passageSource: 'Historical analysis'
            }
        ]
    },
    {
        id: 'thehague',
        name: 'The Hague',
        lat: 52.0705,
        lng: 4.3007,
        date: 'September 1765 - March 1766',
        description: 'Disaster struck in the Netherlands. First Nannerl, then Wolfgang fell gravely ill with typhoid fever. Both nearly died. Wolfgang\'s illness lasted two months. The family stayed through winter 1765-66.',
        photoUrl: '/mozart/the_hague.png',
        photoTitle: 'The Binnenhof and Hofvijver, The Hague',
        content: [
            {
                id: 'hague-quote-1',
                type: 'quote',
                locationId: 'thehague',
                text: 'For four weeks Nannerl lay unconscious, given the last rites. Now she recovers, but Wolfgang has fallen ill. I fear we may lose him.',
                speaker: 'Leopold Mozart',
                source: 'Letter filled with despair'
            },
            {
                id: 'hague-quote-2',
                type: 'quote',
                locationId: 'thehague',
                text: 'Wolfgang was so ill that he could not speak, and being weak, could only move his lips.',
                speaker: 'Leopold Mozart',
                source: 'Letter describing the illness'
            },
            {
                id: 'hague-quote-3',
                type: 'quote',
                locationId: 'thehague',
                text: 'After his recovery, Wolfgang had to learn to walk again, and could not stand for many weeks.',
                speaker: 'Leopold Mozart',
                source: 'Letter on Wolfgang\'s recovery'
            },
            {
                id: 'hague-quote-4',
                type: 'quote',
                locationId: 'thehague',
                text: 'Prepare your heart to hear one of the saddest events.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer when children fell ill'
            },
            {
                id: 'hague-attendee-1',
                type: 'attendee',
                locationId: 'thehague',
                text: 'Princess Caroline of Nassau-Weilburg, Prince William V of Orange'
            },
            {
                id: 'hague-music-1',
                type: 'music',
                locationId: 'thehague',
                musicTitle: 'Symphony No. 4 in D Major, K.19',
                musicPreviewUrl: '/api/music/deezer/track/66610707'
            },
            {
                id: 'hague-photo-1',
                type: 'photo',
                locationId: 'thehague',
                photoUrl: '/mozart/the_hague.png',
                photoTitle: 'The Binnenhof and Hofvijver, The Hague',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'amsterdam',
        name: 'Amsterdam',
        lat: 52.3676,
        lng: 4.9041,
        date: 'January - March 1766',
        description: 'After recovering from illness, Wolfgang gave several public concerts in Amsterdam to great acclaim. The Dutch were particularly impressed by his improvisations and his ability to play any piece at sight.',
        photoUrl: '/mozart/amsterdam.png',
        photoTitle: 'Amsterdam Canal Scene, 1765',
        content: [
            {
                id: 'amsterdam-quote-1',
                type: 'quote',
                locationId: 'amsterdam',
                text: 'The concerts here have been very successful. The Dutch have never seen anything like our Wolfgang.',
                speaker: 'Leopold Mozart',
                source: 'Letter from Amsterdam'
            },
            {
                id: 'amsterdam-quote-2',
                type: 'quote',
                locationId: 'amsterdam',
                text: 'He played the organ at the Old Church to general amazement.',
                speaker: 'Concert report',
                source: 'Amsterdam, 1766'
            },
            {
                id: 'amsterdam-music-1',
                type: 'music',
                locationId: 'amsterdam',
                musicTitle: 'Symphony No. 5 in B-flat Major, K.22',
                musicPreviewUrl: '/api/music/deezer/track/66610713'
            },
            {
                id: 'amsterdam-photo-1',
                type: 'photo',
                locationId: 'amsterdam',
                photoUrl: '/mozart/amsterdam.png',
                photoTitle: 'Amsterdam Canal Scene, 1765',
                credit: 'Historical archive'
            }
        ]
    },
    {
        id: 'geneva',
        name: 'Geneva',
        lat: 46.2044,
        lng: 6.1432,
        date: 'August 1766',
        description: 'On the return journey, the Mozarts stopped in Geneva where Wolfgang met the composer André Grétry, who would later recall the encounter.',
        content: [
            {
                id: 'geneva-quote-1',
                type: 'quote',
                locationId: 'geneva',
                text: 'I gave him a very difficult piece from a manuscript to play. He performed it, but he had substituted a number of passages for those I had written. The alterations were better than my own music.',
                speaker: 'André Grétry',
                source: 'Memoirs'
            }
        ]
    }
];

// All quotes extracted for filtered view
export const allMozartQuotes: ContentItem[] = mozartLocations.flatMap(
    location => location.content.filter(item => item.type === 'quote')
);

// All photos extracted for filtered view
export const allMozartPhotos: ContentItem[] = mozartLocations.flatMap(
    location => location.content.filter(item => item.type === 'photo')
);

// All music tracks extracted for filtered view
export const allMozartMusic: ContentItem[] = mozartLocations.flatMap(
    location => location.content.filter(item => item.type === 'music')
);
