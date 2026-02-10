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
            },
            {
                id: 'salzburg-quote-3',
                type: 'quote',
                locationId: 'salzburg',
                text: 'At three he was picking out chords on the harpsichord. At four he could learn a piece in half an hour. At five he was composing.',
                speaker: 'Nannerl Mozart',
                source: 'Recollection of her brother'
            },
            {
                id: 'salzburg-passage-1',
                type: 'passage',
                locationId: 'salzburg',
                passage: 'Leopold Mozart was a respected violinist and composer in the court of the Prince-Archbishop of Salzburg. But when he realized his son Wolfgang was a genuine prodigy - and his daughter Nannerl nearly as gifted - he made a fateful decision. He would take them on tour across Europe, performing before royalty and the wealthy. The gamble was enormous: the family would lose steady income, risk illness on dangerous roads, and depend entirely on the generosity of aristocratic patrons. But Leopold believed he was presenting "a miracle that God let be born in Salzburg," and it was his duty to show the world.',
                passageSource: 'Historical context'
            },
            {
                id: 'salzburg-passage-2',
                type: 'passage',
                locationId: 'salzburg',
                passage: 'The Mozart children were extraordinary even by prodigy standards. Wolfgang had perfect pitch and could identify any note or chord instantly. He could memorize entire pieces after hearing them once. At age four, he was composing little pieces. At five, he was performing in public. Nannerl, four years older, was herself a brilliant keyboard player - in any other family, she would have been the star. But together, they were Leopold\'s "miracle children," and on June 9, 1763, the family carriage departed Salzburg. The wheel broke at the city gates - an ominous start - but they pressed on. They would not return for three and a half years.',
                passageSource: 'Historical narrative'
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
            },
            {
                id: 'munich-quote-3',
                type: 'quote',
                locationId: 'munich',
                text: 'The Elector asked Wolfgang to play with a cloth covering the keyboard. He did so flawlessly, to general astonishment.',
                speaker: 'Court observer',
                source: 'Munich, 1763'
            },
            {
                id: 'munich-passage-1',
                type: 'passage',
                locationId: 'munich',
                passage: 'Munich was the first test of Leopold\'s grand plan. Would aristocrats pay to see his children perform? The answer was yes - but with conditions. Seven-year-old Wolfgang was required to demonstrate his abilities: sight-reading complex pieces, improvising fugues, playing with a cloth over the keys so he couldn\'t see. The performances were part concert, part circus act. Wolfgang passed every test. The Elector was impressed enough to give the family expensive gifts, though - to Leopold\'s frustration - not much actual money.',
                passageSource: 'Historical account'
            },
            {
                id: 'munich-attendee-1',
                type: 'attendee',
                locationId: 'munich',
                text: 'Elector Maximilian III Joseph of Bavaria'
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
            },
            {
                id: 'frankfurt-quote-3',
                type: 'quote',
                locationId: 'frankfurt',
                text: 'I was myself at the coronation of the Emperor and saw Herr Mozart there. He wore a lilac-coloured coat, and a sword at his side.',
                speaker: 'Contemporary witness',
                source: 'Frankfurt, 1763'
            },
            {
                id: 'frankfurt-passage-1',
                type: 'passage',
                locationId: 'frankfurt',
                passage: 'Frankfurt was packed with visitors for the coronation of Emperor Joseph II. Leopold seized the opportunity, booking the Scharff\'sches Haus for five public concerts. The admission price was high - this was not charity. Among the paying audience was a lanky 14-year-old named Johann Wolfgang von Goethe, who would remember the concert seven decades later. The young Goethe, who would become Germany\'s greatest writer, was struck by the image of the tiny boy in his wig and sword, confidently commanding the keyboard.',
                passageSource: 'Historical narrative'
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
        photoUrl: '/mozart/brussels_palace.jpg',
        photoTitle: 'Royal Palace of Brussels',
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
            },
            {
                id: 'brussels-quote-3',
                type: 'quote',
                locationId: 'brussels',
                text: 'Five weeks we have waited here! The Prince keeps promising but does nothing. This delay is costing us a fortune.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer, November 1763'
            },
            {
                id: 'brussels-music-1',
                type: 'music',
                locationId: 'brussels',
                musicTitle: 'Piano Sonata No. 16 in C Major, K.545',
                musicPreviewUrl: '/api/music/deezer/track/92314842'
            },
            {
                id: 'brussels-photo-1',
                type: 'photo',
                locationId: 'brussels',
                photoUrl: '/mozart/brussels_palace.jpg',
                photoTitle: 'Royal Palace of Brussels',
                credit: 'Historical archive'
            },
            {
                id: 'brussels-passage-1',
                type: 'passage',
                locationId: 'brussels',
                passage: 'Brussels proved to be a frustrating detour. Prince Charles of Lorraine, the governor of the Austrian Netherlands, kept the Mozart family waiting for weeks while he indulged in hunting and feasting. When they finally performed, the compensation was meager - far less than Leopold had hoped. The experience taught Leopold a hard lesson: royal patronage was unreliable, and their fortunes depended on the whims of aristocrats.',
                passageSource: 'Historical analysis'
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
            },
            {
                id: 'paris-music-2',
                type: 'music',
                locationId: 'paris',
                musicTitle: 'Violin Sonata in D Major, K.7',
                musicPreviewUrl: '/api/music/deezer/track/129400036'
            },
            {
                id: 'paris-passage-1',
                type: 'passage',
                locationId: 'paris',
                passage: 'Paris was Wolfgang\'s breakthrough as a composer, not just a performer. Baron Grimm, the influential critic and philosophe, championed the Mozarts, introducing them to the city\'s most prestigious salons. Wolfgang composed his first published works here: four violin sonatas (K.6-9) dedicated to Madame Victoire, daughter of Louis XV. The sonatas were engraved and sold - proof that at seven years old, Wolfgang was not just a curiosity but a composer taken seriously. The Paris sojourn also featured the famous incident with Madame de Pompadour, who refused Wolfgang\'s attempt to kiss her because she was too heavily made up. The boy was indignant: "The Empress kissed me!" he protested, referring to Maria Theresa in Vienna.',
                passageSource: 'Historical narrative'
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
            },
            {
                id: 'versailles-music-2',
                type: 'music',
                locationId: 'versailles',
                musicTitle: 'Violin Sonata in B-flat Major, K.8',
                musicPreviewUrl: '/api/music/deezer/track/129400038'
            },
            {
                id: 'versailles-passage-1',
                type: 'passage',
                locationId: 'versailles',
                passage: 'Versailles represented the pinnacle of royal acknowledgment. To be invited to the palace of Louis XV was an honor reserved for the most distinguished musicians and artists. For a seven-year-old commoner to stand beside the Queen at the Grand Couvert - the public royal dinner on New Year\'s Eve - was unprecedented. Wolfgang charmed the royal family completely. The King\'s daughters, Mesdames Victoire and Adélaïde, doted on the children. Wolfgang\'s sonatas K.6 and K.7 were dedicated to Madame Victoire, and the royal connection helped make the publications prestigious. Yet despite the lavish attention, Leopold noted with frustration that actual payment was often slow or inadequate - aristocrats preferred to give kisses and compliments rather than cash.',
                passageSource: 'Historical account'
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
            },
            {
                id: 'london-music-2',
                type: 'music',
                locationId: 'london',
                musicTitle: 'Symphony No. 25 in G Minor, K.183',
                musicPreviewUrl: '/api/music/deezer/track/2952685'
            },
            {
                id: 'london-passage-2',
                type: 'passage',
                locationId: 'london',
                passage: 'London marked a turning point in Wolfgang\'s development. While his father Leopold recovered from a throat illness in the suburb of Chelsea, Wolfgang - confined to quiet activities - wrote his first symphonies. The boy was eight years old. The influence of Johann Christian Bach and the robust English symphonic tradition shaped these early works. King George III, himself a music lover and competent musician, tested Wolfgang extensively, placing difficult pieces by Handel, Bach, and Wagenseil before him. Wolfgang sight-read them all perfectly. The King and Queen were so impressed they paid handsomely - unlike many aristocratic patrons, the English royals rewarded the Mozarts with actual money, not just compliments.',
                passageSource: 'Historical narrative'
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
            },
            {
                id: 'hague-music-2',
                type: 'music',
                locationId: 'thehague',
                musicTitle: 'Piano Concerto No. 23 in A Major, K.488 - Adagio',
                musicPreviewUrl: '/api/music/deezer/track/3033658661'
            },
            {
                id: 'hague-passage-1',
                type: 'passage',
                locationId: 'thehague',
                passage: 'The Hague nearly ended the Mozart story. First Nannerl collapsed with typhoid fever, lying unconscious for four weeks. She was given last rites. Just as she began to recover, Wolfgang fell ill with the same disease. For weeks he couldn\'t speak, barely moving his lips. Leopold, watching his son waste away, wrote desperate letters home preparing his family for the worst. But both children survived. The recovery was slow - Wolfgang had to relearn how to walk. The illness cost the family months of performing time and drained their finances. Yet when Wolfgang finally recovered, he performed for Prince William V of Orange with renewed vigor, as if determined to prove he was still the miracle child.',
                passageSource: 'Historical account'
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
            },
            {
                id: 'amsterdam-quote-3',
                type: 'quote',
                locationId: 'amsterdam',
                text: 'The Dutch are amazed by Wolfgang, but they are stingy with money. They prefer to watch than to pay.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'amsterdam-attendee-1',
                type: 'attendee',
                locationId: 'amsterdam',
                text: 'Prince William V of Orange'
            },
            {
                id: 'amsterdam-passage-1',
                type: 'passage',
                locationId: 'amsterdam',
                passage: 'Amsterdam represented a triumphant recovery after the near-death experience in The Hague. Wolfgang, now nine years old and having survived typhoid, performed with renewed confidence. The wealthy Dutch merchants and the Prince of Orange flocked to hear him. He played the organ at the Old Church, improvised complex fugues, and demonstrated his now-famous party tricks of playing with a cloth over the keyboard. Yet Leopold noted with frustration that the Dutch, though impressed, were reluctant to part with their guilders. The concerts were successful, but the financial rewards were modest compared to the effort.',
                passageSource: 'Historical summary'
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
        photoUrl: '/mozart/geneva_lake.jpg',
        photoTitle: 'Lake Geneva and Mont Blanc',
        content: [
            {
                id: 'geneva-quote-1',
                type: 'quote',
                locationId: 'geneva',
                text: 'I gave him a very difficult piece from a manuscript to play. He performed it, but he had substituted a number of passages for those I had written. The alterations were better than my own music.',
                speaker: 'André Grétry',
                source: 'Memoirs'
            },
            {
                id: 'geneva-quote-2',
                type: 'quote',
                locationId: 'geneva',
                text: 'Wolfgang is not the same child who left Salzburg three years ago. He has become a true composer.',
                speaker: 'Leopold Mozart',
                source: 'Letter on the return journey'
            },
            {
                id: 'geneva-quote-3',
                type: 'quote',
                locationId: 'geneva',
                text: 'The little Mozart improved my composition on the spot. It was astonishing and humbling.',
                speaker: 'André Grétry',
                source: 'Memoirs'
            },
            {
                id: 'geneva-music-1',
                type: 'music',
                locationId: 'geneva',
                musicTitle: 'Piano Concerto No. 21 in C Major, K.467 - Andante',
                musicPreviewUrl: '/api/music/deezer/track/66434390'
            },
            {
                id: 'geneva-photo-1',
                type: 'photo',
                locationId: 'geneva',
                photoUrl: '/mozart/geneva_lake.jpg',
                photoTitle: 'Lake Geneva and Mont Blanc',
                credit: 'Historical archive'
            },
            {
                id: 'geneva-attendee-1',
                type: 'attendee',
                locationId: 'geneva',
                text: 'André Grétry, Voltaire (resident of nearby Ferney)'
            },
            {
                id: 'geneva-passage-1',
                type: 'passage',
                locationId: 'geneva',
                passage: 'Geneva marked the final major stop of the Grand Tour. After three and a half years on the road, Wolfgang was no longer just a performing monkey who could play difficult pieces. He had absorbed the musical styles of every city - the Italian lyricism, the French elegance, the German counterpoint, the English symphonic tradition. The child prodigy was becoming an artist. When he sat at the keyboard now, he didn\'t just execute; he created.',
                passageSource: 'Historical analysis'
            }
        ]
    },
    {
        id: 'salzburg-return',
        name: 'Return to Salzburg',
        lat: 47.8095,
        lng: 13.0550,
        date: 'November 29, 1766',
        description: 'After three and a half years, the Mozart family returned home. Wolfgang was now ten years old. He had performed before kings and queens, composed published works, and absorbed the musical culture of Europe. But Salzburg\'s Archbishop would prove difficult.',
        photoUrl: '/mozart/mozart_boy.jpg',
        photoTitle: 'Wolfgang Amadeus Mozart after the Grand Tour',
        photoFocalPoint: '50% 30%',
        content: [
            {
                id: 'salzburg-return-quote-1',
                type: 'quote',
                locationId: 'salzburg-return',
                text: 'We have been absent three years and six weeks. The children are scarcely recognizable.',
                speaker: 'Leopold Mozart',
                source: 'Letter upon return'
            },
            {
                id: 'salzburg-return-quote-2',
                type: 'quote',
                locationId: 'salzburg-return',
                text: 'Wolfgang has grown, but more importantly, his music has grown. He is no longer a curiosity. He is a composer.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer'
            },
            {
                id: 'salzburg-return-quote-3',
                type: 'quote',
                locationId: 'salzburg-return',
                text: 'Salzburg feels too small now. After London and Paris, it is like a village.',
                speaker: 'Leopold Mozart',
                source: 'Private letter'
            },
            {
                id: 'salzburg-return-music-1',
                type: 'music',
                locationId: 'salzburg-return',
                musicTitle: 'Eine Kleine Nachtmusik, K.525',
                musicPreviewUrl: '/api/music/deezer/track/68301402'
            },
            {
                id: 'salzburg-return-photo-1',
                type: 'photo',
                locationId: 'salzburg-return',
                photoUrl: '/mozart/mozart_boy.jpg',
                photoTitle: 'Wolfgang Amadeus Mozart after the Grand Tour',
                credit: 'Later portrait'
            },
            {
                id: 'salzburg-return-passage-1',
                type: 'passage',
                locationId: 'salzburg-return',
                passage: 'The Grand Tour transformed Wolfgang Amadeus Mozart from a performing prodigy into a composer of substance. Over three and a half years, he had traveled over 3,500 miles by carriage, performed in dozens of cities, met the greatest musicians of the age, and composed constantly. The journey nearly killed both children - typhoid in The Hague came perilously close to ending the Mozart story before it began. But they survived, and Wolfgang returned with a musical vocabulary that spanned all of Europe. Within a decade, he would compose operas, symphonies, and concertos that would define classical music for centuries to come.',
                passageSource: 'Historical summary'
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
