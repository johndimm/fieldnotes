import type { EventWithRelations } from './db';
import type { DocumentarySlide } from '@/components/DocumentaryViewer';

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
 * Manually create a curated documentary sequence (for special events)
 * Extended version with more Jimi Hendrix content
 */
export function createCuratedHendrixDocumentary(): DocumentarySlide[] {
    return [
        // Opening: Setting the scene
        {
            photoUrl: '/photos/soho_street_night_1966.png',
            photoTitle: 'Soho at Night',
            animation: 'zoom-in',
            duration: 10,
            quotes: [{
                text: 'London, 1966. The vibrant heart of the music revolution.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // Establish the venue
        {
            photoUrl: '/photos/regent_street_view_1960s.png',
            photoTitle: 'Regent Street',
            animation: 'pan-right',
            duration: 12,
            quotes: [{
                text: 'At 309 Regent Street, something extraordinary was about to happen.',
                speaker: '',
                source: '',
                startTime: 4,
                duration: 6
            }]
        },

        // The venue exterior
        {
            photoUrl: '/photos/regent_street_polytechnic.png',
            photoTitle: 'Regent Street Polytechnic',
            animation: 'zoom-in',
            duration: 10,
            quotes: [{
                text: 'Cream was headlining. But an unknown guitarist was about to steal the show.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // The audience gathering
        {
            photoUrl: '/photos/polytechnic_audience_1966.png',
            photoTitle: 'The Audience',
            animation: 'diagonal-up',
            duration: 12,
            quotes: [{
                text: 'When Hendrix took the stage, it tipped right over the edge.',
                speaker: 'Nick Mason',
                source: 'Pink Floyd drummer',
                startTime: 4,
                duration: 6
            }]
        },

        // Jimi performing - MAIN MOMENT
        {
            photoUrl: '/photos/jimi_hendrix_performing_1966.png',
            photoTitle: 'Jimi Hendrix Unleashed',
            animation: 'zoom-in',
            duration: 15,
            quotes: [
                {
                    text: 'He played "Killing Floor" like I\'d never heard it before.',
                    speaker: '',
                    source: '',
                    startTime: 4,
                    duration: 5
                },
                {
                    text: 'The look of absolute shock on Clapton\'s face.',
                    speaker: 'Neil Slaven',
                    source: 'Record producer',
                    startTime: 10,
                    duration: 4
                }
            ]
        },

        // Guitar technique close-up
        {
            photoUrl: '/photos/jimi_hendrix_guitar_closeup.png',
            photoTitle: 'The Technique',
            animation: 'diagonal-down',
            duration: 14,
            quotes: [{
                text: 'He plugged into my bass amp and just blew us all away.',
                speaker: 'Jack Bruce',
                source: 'Cream bassist',
                startTime: 5,
                duration: 7
            }]
        },

        // The equipment
        {
            photoUrl: '/photos/backstage_guitars_1966.png',
            photoTitle: 'The Tools',
            animation: 'pan-left',
            duration: 10,
            quotes: [{
                text: 'That Stratocaster in his hands became something magical.',
                speaker: '',
                source: '',
                startTime: 3,
                duration: 5
            }]
        },

        // Cream's reaction
        {
            photoUrl: '/photos/cream_band_1966.png',
            photoTitle: 'Cream',
            animation: 'zoom-in',
            duration: 14,
            quotes: [{
                text: 'You never told me he was that fucking good.',
                speaker: 'Eric Clapton',
                source: 'to Chas Chandler',
                startTime: 5,
                duration: 7
            }]
        },

        // Jimi portrait - the legend
        {
            photoUrl: '/photos/jimi_hendrix_1967.png',
            photoTitle: 'Jimi Hendrix',
            animation: 'zoom-in',
            duration: 16,
            quotes: [{
                text: 'He played it exactly like it ought to be played, and he totally blew me away.',
                speaker: 'Eric Clapton',
                source: 'Eric Clapton: The Autobiography',
                startTime: 6,
                duration: 8
            }]
        },

        // Closing: The legacy
        {
            photoUrl: '/photos/polytechnic_entrance_1960s.png',
            photoTitle: 'The Legacy',
            animation: 'zoom-out',
            duration: 12,
            quotes: [{
                text: 'October 1, 1966\nThe Night That Changed Rock History',
                speaker: '',
                source: '',
                startTime: 5,
                duration: 6
            }]
        }
    ];
}
