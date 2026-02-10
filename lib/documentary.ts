import type { EventWithRelations } from './db';
import type { DocumentarySlide } from '@/components/DocumentaryViewer';

// Content Types for the unified content system
export interface ContentItem {
    id: string;
    type: 'quote' | 'photo' | 'music' | 'passage' | 'timeline' | 'attendee';
    locationId: string;
    date?: string;

    // Quote-specific
    text?: string;
    speaker?: string;
    source?: string;

    // Photo-specific
    photoUrl?: string;
    photoTitle?: string;
    credit?: string;

    // Music-specific
    musicTitle?: string;
    musicPreviewUrl?: string;

    // Passage-specific (longer text)
    passage?: string;
    passageSource?: string;
}

// Enhanced location with all content
export interface EnhancedLocation {
    id: string;
    name: string;
    lat: number;
    lng: number;
    date: string;
    description: string;
    content: ContentItem[];
    photoUrl?: string;
    photoTitle?: string;
    photoFocalPoint?: string;
}

// Generate a placeholder image URL with location name
function getPlaceholderImage(locationName: string, index: number): string {
    // Use different gradient colors based on index
    const colors = [
        ['1e3a5f', '2d5a87'], // dark blue
        ['3d1e5f', '5a2d87'], // purple
        ['1e5f3d', '2d8754'], // green
        ['5f1e1e', '872d2d'], // dark red
        ['4a3d1e', '6b5a2d'], // brown
        ['1e4a5f', '2d6b87'], // teal
    ];
    const [color1, color2] = colors[index % colors.length];
    const encodedName = encodeURIComponent(locationName);
    return `https://placehold.co/800x600/${color1}/${color2}?text=${encodedName}`;
}

/**
 * Generate documentary slides from enhanced location content
 */
export function generateDocumentaryFromContent(locations: EnhancedLocation[]): DocumentarySlide[] {
    const animations: Array<DocumentarySlide['animation']> = [
        'zoom-in', 'pan-right', 'diagonal-up', 'pan-left', 'zoom-out', 'diagonal-down'
    ];

    const slides: DocumentarySlide[] = [];

    locations.forEach((location, locIndex) => {
        const quotes = location.content.filter(c => c.type === 'quote');
        const photos = location.content.filter(c => c.type === 'photo');

        // Use location photo, content photo, or generate placeholder
        const photoUrl = location.photoUrl || photos[0]?.photoUrl || getPlaceholderImage(location.name, locIndex);

        const animation = animations[locIndex % animations.length];
        const duration = 10 + (locIndex % 3) * 2;

        // Create slide with quotes for this location
        const slideQuotes = quotes.slice(0, 2).map((quote, qIdx) => ({
            text: quote.text || '',
            speaker: quote.speaker || '',
            source: quote.source || '',
            startTime: 2 + qIdx * 4,
            duration: 5
        }));

        slides.push({
            photoUrl,
            photoTitle: location.photoTitle || location.name,
            photoFocalPoint: location.photoFocalPoint,
            animation,
            duration,
            quotes: slideQuotes.length > 0 ? slideQuotes : [{
                text: location.description.substring(0, 150) + '...',
                speaker: '',
                source: '',
                startTime: 2,
                duration: 6
            }]
        });
    });

    return slides;
}

/**
 * Generates a Ken Burns documentary sequence from event data
 */
export function generateDocumentarySlides(event: EventWithRelations): DocumentarySlide[] {
    const photos = event.media.filter(m => m.media_type === 'photo');
    const quotes = event.excerpts;

    if (photos.length === 0) {
        return [];
    }

    // Animation patterns to cycle through
    const animations: Array<DocumentarySlide['animation']> = [
        'zoom-in', 'pan-right', 'diagonal-up', 'pan-left', 'zoom-out', 'diagonal-down'
    ];

    // Create slides with distributed quotes
    const slides: DocumentarySlide[] = photos.map((photo, index) => {
        const animation = animations[index % animations.length];
        const duration = 8 + (index % 3) * 2; // Vary between 8-12 seconds

        // Assign quotes to this slide (distribute evenly)
        const quotesPerSlide = Math.ceil(quotes.length / photos.length);
        const slideQuotes = quotes
            .slice(index * quotesPerSlide, (index + 1) * quotesPerSlide)
            .map((excerpt, quoteIndex) => ({
                text: excerpt.excerpt_text,
                speaker: excerpt.speaker || 'Anonymous',
                source: excerpt.source_title,
                startTime: 2 + (quoteIndex * 0.5), // Stagger quotes
                duration: Math.min(duration - 4, 5) // Show for max 5 seconds
            }));

        return {
            photoUrl: photo.url,
            photoTitle: photo.title || 'Historical photo',
            animation,
            duration,
            quotes: slideQuotes
        };
    });

    // Add opening slide if we have event description
    if (event.description) {
        slides.unshift({
            photoUrl: photos[0].url, // Use first photo
            photoTitle: event.title,
            animation: 'zoom-in',
            duration: 6,
            quotes: [{
                text: event.description.substring(0, 200), // First 200 chars
                speaker: '',
                source: '',
                startTime: 1,
                duration: 4
            }]
        });
    }

    // Add closing slide
    const lastPhoto = photos[photos.length - 1];
    slides.push({
        photoUrl: lastPhoto.url,
        photoTitle: 'The End',
        animation: 'zoom-out',
        duration: 8,
        quotes: [{
            text: `${event.title}\n${new Date(event.date_earliest || event.date_latest || '').toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}`,
            speaker: '',
            source: '',
            startTime: 3,
            duration: 4
        }]
    });

    return slides;
}

/**
 * Fetch music tracks for the documentary from Deezer API
 * Returns tracks for each slide section
 */
export async function getDocumentaryMusicTracks() {
    const searches = [
        // Track 0: Hendrix arrival
        'Jimi Hendrix Hey Joe',
        // Track 1: Polytechnic
        'Jimi Hendrix Purple Haze',
        // Track 2: Scotch/Bag O'Nails
        'Jimi Hendrix Foxy Lady',
        // Track 3: Reviews/Impact
        'Jimi Hendrix Fire',
        // Track 4: Hendrix vision
        'Jimi Hendrix Wind Cries Mary',
        // Track 5: Finale
        'Jimi Hendrix Voodoo Child'
    ];

    try {
        const tracks = await Promise.all(
            searches.map(async (query) => {
                const response = await fetch(
                    `/api/music/deezer/search?q=${encodeURIComponent(query)}&limit=1`
                );
                const data = await response.json();
                return data.tracks[0] || null;
            })
        );

        return tracks.filter(track => track !== null);
    } catch (error) {
        console.error('Failed to fetch documentary music:', error);
        return [];
    }
}

/**
 * Fetch specific Mozart music tracks for the Grand Tour documentary
 * More tracks to cover all slides
 */
export async function getMozartDocumentaryMusicTracks() {
    const searches = [
        // Track 0: Opening/Salzburg
        'Mozart Minuet K 1',
        // Track 1: Munich/Frankfurt
        'Mozart Minuet K 2',
        // Track 2: Paris
        'Mozart Violin Sonata K 6',
        // Track 3: Versailles
        'Mozart Violin Sonata K 7',
        // Track 4: London
        'Mozart Symphony No 1 K 16',
        // Track 5: The Hague/Amsterdam
        'Mozart Symphony K 19',
        // Track 6: Return/Finale
        'Mozart Symphony K 22',
    ];

    try {
        const tracks = await Promise.all(
            searches.map(async (query) => {
                const response = await fetch(
                    `/api/music/deezer/search?q=${encodeURIComponent(query)}&limit=1`
                );
                const data = await response.json();
                return data.tracks[0] || null;
            })
        );
        return tracks.filter(track => track !== null);
    } catch (error) {
        console.error('Failed to fetch Mozart music:', error);
        return [];
    }
}

/**
 * Hendrix in London - Complete Journey Documentary
 * Based on all gathered content from enhanced locations
 */
export function createCuratedHendrixDocumentary(): DocumentarySlide[] {
    return [
        // 1. Heathrow - The Arrival
        {
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jimi_Hendrix_1967.png/600px-Jimi_Hendrix_1967.png',
            photoTitle: 'September 24, 1966',
            animation: 'zoom-in',
            duration: 12,
            musicTrackIndex: 0,
            quotes: [
                {
                    text: 'I\'d never been to England before. I thought they\'d just turn me back at the airport.',
                    speaker: 'Jimi Hendrix',
                    source: 'Interview, 1967',
                    startTime: 3,
                    duration: 5
                },
                {
                    text: 'When Chas brought him through customs, they almost didn\'t let him in. He had no money, no work permit, nothing.',
                    speaker: 'Noel Redding',
                    source: '',
                    startTime: 9,
                    duration: 4
                }
            ]
        },

        // 2. Regent Street Polytechnic - The Moment
        {
            photoUrl: '/photos/regent_street_polytechnic.png',
            photoTitle: 'Regent Street Polytechnic, October 1, 1966',
            animation: 'pan-right',
            duration: 14,
            musicTrackIndex: 1,
            quotes: [
                {
                    text: 'He asked if he could play... I had a funny feeling about him.',
                    speaker: 'Eric Clapton',
                    source: 'The Autobiography',
                    startTime: 3,
                    duration: 4
                },
                {
                    text: 'He played just about every style you could think of, and not in a flashy way.',
                    speaker: 'Eric Clapton',
                    source: '',
                    startTime: 8,
                    duration: 5
                }
            ]
        },

        // 3. The Reaction
        {
            photoUrl: '/archival/marquee_club_london_ext_1967.png',
            photoTitle: 'The Aftermath',
            animation: 'zoom-in',
            duration: 12,
            musicTrackIndex: 1,
            quotes: [
                {
                    text: 'You never told me he was that good!',
                    speaker: 'Eric Clapton',
                    source: 'To Chas Chandler',
                    startTime: 3,
                    duration: 3
                },
                {
                    text: 'The look of absolute shock on Clapton\'s face.',
                    speaker: 'Neil Slaven',
                    source: 'Record producer',
                    startTime: 7,
                    duration: 4
                }
            ]
        },

        // 4. Scotch of St James
        {
            photoUrl: '/archival/scotch_st_james_exterior_1966.png',
            photoTitle: 'Scotch of St James, Mayfair',
            animation: 'diagonal-up',
            duration: 12,
            musicTrackIndex: 2,
            quotes: [
                {
                    text: 'The Scotch was where everyone went after gigs. Beatles, Stones, everyone. And suddenly there was this guy from America playing guitar like no one had ever heard.',
                    speaker: 'Record producer',
                    source: '',
                    startTime: 3,
                    duration: 6
                },
                {
                    text: 'John Lennon came over and said "You\'re pretty good." I nearly died.',
                    speaker: 'Jimi Hendrix',
                    source: '',
                    startTime: 10,
                    duration: 4
                }
            ]
        },

        // 5. Bag O'Nails
        {
            photoUrl: '/archival/bag_o_nails_soho_1966.png',
            photoTitle: 'Bag O\'Nails, Soho',
            animation: 'pan-left',
            duration: 14,
            musicTrackIndex: 2,
            quotes: [
                {
                    text: 'I was blown away. He was playing the guitar with his teeth, behind his back, making sounds no one had ever heard.',
                    speaker: 'Paul McCartney',
                    source: '',
                    startTime: 3,
                    duration: 5
                },
                {
                    text: 'All the stars were there. Every time he played, the words going around were "shit", "Jesus", "damn".',
                    speaker: 'Kevin Ayers',
                    source: '',
                    startTime: 9,
                    duration: 4
                }
            ]
        },

        // 6. The Reviews
        {
            photoUrl: '/archival/marquee_club_london_ext_1967.png',
            photoTitle: 'The Critics Respond',
            animation: 'diagonal-down',
            duration: 12,
            musicTrackIndex: 3,
            quotes: [
                {
                    text: 'Mr. Phenomenon... whirl around the business like a tornado.',
                    speaker: 'Record Mirror',
                    source: 'January 1967',
                    startTime: 3,
                    duration: 4
                },
                {
                    text: 'Is that full, big, swinging sound really being created by only three people?',
                    speaker: 'Bill Harry',
                    source: 'Music journalist',
                    startTime: 8,
                    duration: 4
                }
            ]
        },

        // 7. Townshend's Verdict
        {
            photoUrl: '/archival/bag_o_nails_soho_1966.png',
            photoTitle: 'The Impact',
            animation: 'zoom-out',
            duration: 10,
            musicTrackIndex: 3,
            quotes: [{
                text: 'Hendrix destroyed me... He took back black music.',
                speaker: 'Pete Townshend',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // 8. Hendrix's Vision
        {
            photoUrl: '/archival/scotch_st_james_exterior_1966.png',
            photoTitle: 'Free Feeling',
            animation: 'pan-right',
            duration: 10,
            musicTrackIndex: 4,
            quotes: [{
                text: 'We don\'t want to be classed in any category... "Free Feeling" is what we\'re trying to create.',
                speaker: 'Jimi Hendrix',
                source: 'Interview, 1967',
                startTime: 3,
                duration: 5
            }]
        },

        // 9. Finale - The Legacy
        {
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jimi_Hendrix_1967.png/600px-Jimi_Hendrix_1967.png',
            photoTitle: 'Jimi Hendrix, 1967',
            photoFocalPoint: 'top',
            animation: 'zoom-in',
            duration: 14,
            musicTrackIndex: 5,
            quotes: [
                {
                    text: 'He walked off, and my life was never the same again.',
                    speaker: 'Eric Clapton',
                    source: 'The Autobiography',
                    startTime: 3,
                    duration: 5
                },
                {
                    text: 'His technique was like John Lee Hooker and Beethoven.',
                    speaker: 'Billy Cox',
                    source: 'Hendrix\'s bassist',
                    startTime: 9,
                    duration: 4
                }
            ]
        }
    ];
}

/**
 * Manually create a curated documentary sequence (for Mozart)
 */
export function createCuratedMozartDocumentary(): DocumentarySlide[] {
    return [
        // Opening - The Grand Tour
        {
            photoUrl: '/mozart/grand_tour_map.jpg',
            photoTitle: 'The Grand Tour 1763-1766',
            animation: 'zoom-in',
            duration: 15,
            musicTrackIndex: 0,
            quotes: [{
                text: 'The miracle which God let be born in Salzburg.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 4,
                duration: 5
            },
            {
                text: 'In June 1763, the Mozart family set out on what would become a legendary three-year journey across Europe.',
                speaker: '',
                source: '',
                startTime: 10,
                duration: 4
            }]
        },

        // Wolfgang portrait
        {
            photoUrl: '/mozart/mozart_boy.jpg',
            photoTitle: 'Wolfgang Amadeus Mozart, age 7',
            animation: 'zoom-in',
            duration: 12,
            photoFocalPoint: '50% 30%',
            quotes: [{
                text: 'My boy knows more in his eighth year than one would expect from a man of forty.',
                speaker: 'Leopold Mozart',
                source: 'Letter to Hagenauer',
                startTime: 3,
                duration: 6
            }]
        },

        // Munich
        {
            photoUrl: '/mozart/nymphenburg.jpg',
            photoTitle: 'Nymphenburg Palace, Munich',
            animation: 'pan-right',
            duration: 14,
            musicTrackIndex: 1,
            quotes: [{
                text: 'Wolfgang amazed everyone with his pedal work and improvisation. The Elector could not believe his eyes.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 3,
                duration: 5
            },
            {
                text: 'He played everything put before him at sight, and improvised for an hour in the finest manner.',
                speaker: 'Court report',
                source: '',
                startTime: 9,
                duration: 4
            }]
        },

        // Frankfurt - Goethe
        {
            photoUrl: '/mozart/frankfurt.png',
            photoTitle: 'Frankfurt Römerberg',
            animation: 'diagonal-up',
            duration: 14,
            musicTrackIndex: 1,
            quotes: [{
                text: 'I saw him as a seven-year-old boy. I remember the little man in his wig and with his sword very clearly.',
                speaker: 'Johann Wolfgang von Goethe',
                source: 'Recollection, 70 years later',
                startTime: 3,
                duration: 6
            },
            {
                text: 'The boy will cover the keyboard with a cloth and play as well as if he could see the keys.',
                speaker: 'Concert advertisement',
                source: '',
                startTime: 10,
                duration: 4
            }]
        },

        // Paris - Baron Grimm
        {
            photoUrl: '/mozart/mozart_family_paris.jpg',
            photoTitle: 'The Mozart Family in Paris',
            animation: 'zoom-in',
            duration: 16,
            musicTrackIndex: 2,
            photoFocalPoint: '50% 70%',
            quotes: [{
                text: 'Now for once in my life I have seen a miracle.',
                speaker: 'Baron Grimm',
                source: '',
                startTime: 3,
                duration: 4
            },
            {
                text: 'The most consummate Kapellmeister could not be more profound in the science of harmony.',
                speaker: 'Baron Grimm',
                source: '',
                startTime: 8,
                duration: 4
            },
            {
                text: 'If these children live... Monarchs will soon be disputing for them.',
                speaker: 'Baron Grimm',
                source: '',
                startTime: 13,
                duration: 3
            }]
        },

        // Versailles
        {
            photoUrl: '/mozart/versailles.png',
            photoTitle: 'Palace of Versailles',
            animation: 'pan-right',
            duration: 14,
            musicTrackIndex: 3,
            quotes: [{
                text: 'Wolfgang stood beside the Queen at the Grand Couvert on New Year\'s Eve, and was fed tidbits by her throughout the meal.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 3,
                duration: 6
            },
            {
                text: 'The Princesses kissed my children numerous times!',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 10,
                duration: 3
            }]
        },

        // London - King George III
        {
            photoUrl: '/mozart/westminster_bridge.jpg',
            photoTitle: 'Westminster Bridge, London',
            animation: 'diagonal-down',
            duration: 15,
            musicTrackIndex: 4,
            quotes: [{
                text: 'The King placed before him pieces by Wagenseil, Bach, Abel, and Handel, all of which he played off at sight.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 4,
                duration: 5
            },
            {
                text: 'Queen Charlotte sang while Wolfgang accompanied her on harpsichord, sight-reading her music.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 10,
                duration: 4
            }]
        },

        // London - J.C. Bach
        {
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Allan_Ramsay_-_King_George_III_in_coronation_robes_-_Google_Art_Project.jpg',
            photoTitle: 'King George III',
            animation: 'zoom-in',
            duration: 14,
            musicTrackIndex: 4,
            quotes: [{
                text: 'Wolfgang and Johann Christian Bach are inseparable! They sit together at the keyboard, taking turns bar by bar.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 3,
                duration: 5
            },
            {
                text: 'Anyone not watching would have thought it was played by one person.',
                speaker: 'Nannerl Mozart',
                source: '',
                startTime: 9,
                duration: 4
            }]
        },

        // The Hague - Illness
        {
            photoUrl: '/mozart/the_hague.png',
            photoTitle: 'The Hague, Netherlands',
            animation: 'pan-left',
            duration: 16,
            musicTrackIndex: 5,
            quotes: [{
                text: 'Prepare your heart to hear one of the saddest events.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 3,
                duration: 4
            },
            {
                text: 'Wolfgang was so ill that he could not speak, and being weak, could only move his lips.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 8,
                duration: 4
            },
            {
                text: 'After his recovery, Wolfgang had to learn to walk again.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 13,
                duration: 3
            }]
        },

        // Geneva - Grétry
        {
            photoUrl: '/mozart/amsterdam.png',
            photoTitle: 'The Return Journey',
            animation: 'diagonal-up',
            duration: 14,
            musicTrackIndex: 6,
            quotes: [{
                text: 'I gave him a very difficult piece to play. He performed it, but he had substituted a number of passages for those I had written.',
                speaker: 'André Grétry',
                source: '',
                startTime: 3,
                duration: 5
            },
            {
                text: 'The alterations were better than my own music.',
                speaker: 'André Grétry',
                source: 'Memoirs',
                startTime: 9,
                duration: 4
            }]
        },

        // Finale - Return to Salzburg
        {
            photoUrl: '/mozart/mozart_boy.jpg',
            photoTitle: 'Wolfgang Amadeus Mozart',
            animation: 'zoom-out',
            duration: 14,
            musicTrackIndex: 6,
            photoFocalPoint: '50% 30%',
            quotes: [{
                text: 'November 1766. After three years, five months, and twenty days. Wolfgang was no longer just a prodigy.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            },
            {
                text: 'He was an artist.',
                speaker: '',
                source: '',
                startTime: 9,
                duration: 4
            }]
        }
    ];
}

/**
 * "Killing Floor" - The night that changed everything
 * Focused mini-documentary on the pivotal Polytechnic performance
 */
export function createKillingFloorDocumentary(): DocumentarySlide[] {
    return [
        // Opening - The Song
        {
            photoUrl: '/archival/howlin_wolf_1970.jpg',
            photoTitle: 'Howlin\' Wolf',
            photoFocalPoint: '50% 20%',
            animation: 'zoom-in',
            duration: 12,
            musicTrackIndex: 0,
            quotes: [{
                text: '"Killing Floor" - written by Howlin\' Wolf in Chicago, 1964. One of the defining classics of electric blues.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 6
            }]
        },

        // The British guitarists knew it
        {
            photoUrl: '/archival/carnaby_street_1966.jpg',
            photoTitle: 'London\'s Blues Scene',
            animation: 'pan-right',
            duration: 10,
            musicTrackIndex: 0,
            quotes: [{
                text: 'Every guitarist in London knew this song note for note. It was sacred material.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // October 1, 1966
        {
            photoUrl: '/photos/regent_street_polytechnic.png',
            photoTitle: 'Regent Street Polytechnic',
            animation: 'zoom-in',
            duration: 10,
            musicTrackIndex: 1,
            quotes: [{
                text: 'October 1st, 1966. Cream was headlining at the Polytechnic. An unknown American asked to sit in.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // Clapton's premonition
        {
            photoUrl: '/archival/piccadilly_1962.jpg',
            photoTitle: 'A Funny Feeling',
            animation: 'diagonal-up',
            duration: 10,
            musicTrackIndex: 1,
            quotes: [{
                text: 'He asked if he could play... I had a funny feeling about him.',
                speaker: 'Eric Clapton',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // The performance
        {
            photoUrl: '/archival/saville_theatre_hendrix_1967.png',
            photoTitle: 'Killing Floor',
            animation: 'zoom-in',
            duration: 14,
            musicTrackIndex: 2,
            quotes: [
                {
                    text: 'He played "Killing Floor" - a song everyone knew. But he played it faster, different rhythm. He transformed it.',
                    speaker: '',
                    source: '',
                    startTime: 2,
                    duration: 5
                },
                {
                    text: 'He played just about every style you could think of, and not in a flashy way.',
                    speaker: 'Eric Clapton',
                    source: '',
                    startTime: 8,
                    duration: 4
                }
            ]
        },

        // The reaction
        {
            photoUrl: '/archival/marquee_club_london_ext_1967.png',
            photoTitle: 'The Aftermath',
            animation: 'pan-left',
            duration: 12,
            musicTrackIndex: 2,
            quotes: [
                {
                    text: 'You never told me he was that good!',
                    speaker: 'Eric Clapton',
                    source: 'To Chas Chandler',
                    startTime: 3,
                    duration: 4
                },
                {
                    text: 'The look of absolute shock on Clapton\'s face.',
                    speaker: 'Neil Slaven',
                    source: 'Record producer',
                    startTime: 8,
                    duration: 3
                }
            ]
        },

        // Finale
        {
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jimi_Hendrix_1967.png/600px-Jimi_Hendrix_1967.png',
            photoTitle: 'Jimi Hendrix',
            animation: 'zoom-in',
            duration: 12,
            quotes: [{
                text: 'He walked off, and my life was never the same again.',
                speaker: 'Eric Clapton',
                source: 'The Autobiography',
                startTime: 4,
                duration: 6
            }]
        }
    ];
}

/**
 * British Blues Boom - The scene before Hendrix
 * Sets up the context for why Hendrix's arrival was so explosive
 */
export function createBritishBluesContextDocumentary(): DocumentarySlide[] {
    return [
        // Opening - American Blues
        {
            photoUrl: '/archival/howlin_wolf_1970.jpg',
            photoTitle: 'The American Masters',
            photoFocalPoint: '50% 20%',
            animation: 'zoom-in',
            duration: 12,
            musicTrackIndex: 0,
            quotes: [{
                text: 'Howlin\' Wolf. Muddy Waters. B.B. King. Their records crossed the Atlantic and transformed British youth.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 6
            }]
        },

        // The students
        {
            photoUrl: '/archival/carnaby_street_1966.jpg',
            photoTitle: 'The British Students',
            animation: 'pan-right',
            duration: 12,
            musicTrackIndex: 1,
            quotes: [{
                text: 'I spent most of my teens and early twenties studying the blues.',
                speaker: 'Eric Clapton',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // The scene
        {
            photoUrl: '/archival/piccadilly_1962.jpg',
            photoTitle: 'Blues Incorporated',
            animation: 'diagonal-up',
            duration: 12,
            musicTrackIndex: 1,
            quotes: [{
                text: 'Alexis Korner\'s Blues Incorporated was the clearing house. Future Rolling Stones, future Cream - they all sat in.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 6
            }]
        },

        // The reverence
        {
            photoUrl: '/archival/marquee_club_london_ext_1967.png',
            photoTitle: 'The Marquee Club',
            animation: 'pan-left',
            duration: 12,
            musicTrackIndex: 2,
            quotes: [{
                text: 'John Mayall\'s Bluesbreakers was the university of British blues. They learned from records. Reverent, scholarly imitation.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 6
            }]
        },

        // The key point
        {
            photoUrl: '/archival/scotch_st_james_exterior_1966.png',
            photoTitle: 'September 1966',
            animation: 'zoom-in',
            duration: 14,
            musicTrackIndex: 2,
            quotes: [
                {
                    text: 'They had never seen these songs performed by someone from the source.',
                    speaker: '',
                    source: '',
                    startTime: 3,
                    duration: 4
                },
                {
                    text: 'Then an American arrived who had toured the Chitlin\' Circuit, backed Little Richard, learned from the masters themselves.',
                    speaker: '',
                    source: '',
                    startTime: 8,
                    duration: 5
                }
            ]
        },

        // Finale
        {
            photoUrl: '/archival/bag_o_nails_soho_1966.png',
            photoTitle: 'The Real Thing',
            animation: 'diagonal-down',
            duration: 10,
            quotes: [{
                text: 'He wasn\'t imitating. He was the real thing. And he was reinventing it.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        }
    ];
}

/**
 * The Hague Crisis - Mozart's near-death experience
 * Dramatic segment about the illness that almost ended everything
 */
export function createMozartIllnessDocumentary(): DocumentarySlide[] {
    return [
        // Opening - The Hague
        {
            photoUrl: '/mozart/the_hague.png',
            photoTitle: 'The Hague, September 1765',
            animation: 'zoom-in',
            duration: 12,
            musicTrackIndex: 0,
            quotes: [{
                text: 'The Mozart family arrived in the Netherlands in triumph. But disaster was waiting.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // Nannerl falls ill
        {
            photoUrl: '/mozart/amsterdam.png',
            photoTitle: 'Nannerl',
            animation: 'pan-left',
            duration: 12,
            musicTrackIndex: 0,
            quotes: [{
                text: 'For four weeks Nannerl lay unconscious, given the last rites.',
                speaker: 'Leopold Mozart',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // Wolfgang falls ill
        {
            photoUrl: '/mozart/mozart_boy.jpg',
            photoTitle: 'Wolfgang',
            animation: 'zoom-in',
            duration: 14,
            photoFocalPoint: '50% 30%',
            quotes: [
                {
                    text: 'Prepare your heart to hear one of the saddest events.',
                    speaker: 'Leopold Mozart',
                    source: '',
                    startTime: 2,
                    duration: 4
                },
                {
                    text: 'Now she recovers, but Wolfgang has fallen ill. I fear we may lose him.',
                    speaker: 'Leopold Mozart',
                    source: '',
                    startTime: 7,
                    duration: 5
                }
            ]
        },

        // The depths
        {
            photoUrl: '/mozart/the_hague.png',
            photoTitle: 'Two Months',
            animation: 'pan-right',
            duration: 14,
            musicTrackIndex: 1,
            quotes: [
                {
                    text: 'Wolfgang was so ill that he could not speak, and being weak, could only move his lips.',
                    speaker: 'Leopold Mozart',
                    source: '',
                    startTime: 3,
                    duration: 5
                },
                {
                    text: 'After his recovery, Wolfgang had to learn to walk again, and could not stand for many weeks.',
                    speaker: 'Leopold Mozart',
                    source: '',
                    startTime: 9,
                    duration: 4
                }
            ]
        },

        // Recovery and return
        {
            photoUrl: '/mozart/mozart_boy.jpg',
            photoTitle: 'Recovery',
            animation: 'zoom-out',
            duration: 12,
            photoFocalPoint: '50% 30%',
            musicTrackIndex: 2,
            quotes: [{
                text: 'Both children survived. The tour would continue. But Leopold never forgot how close they came to losing everything.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 6
            }]
        }
    ];
}
