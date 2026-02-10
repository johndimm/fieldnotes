// Documentary Registry - Maps event IDs to their content and configuration

import type { EnhancedLocation, ContentItem } from './documentary';

// Import all content modules
import { hendrixLocations, hendrixTimeline } from './hendrix-content';
import { mozartLocations, mozartTimeline } from './mozart-content';
import { beatlesHamburgLocations, beatlesHamburgTimeline } from './beatles-hamburg-content';
import { dylanElectricLocations, dylanElectricTimeline } from './dylan-electric-content';
import { petSoundsLocations, petSoundsTimeline } from './beach-boys-pet-sounds-content';
import { picassoParisLocations, picassoParisTimeline } from './picasso-paris-content';
import { einsteinMiracleLocations, einsteinMiracleTimeline } from './einstein-miracle-year-content';
import { darwinBeagleLocations, darwinBeagleTimeline } from './darwin-beagle-content';
import { bronteSistersLocations, bronteSistersTimeline } from './bronte-sisters-content';
import { hemingwayParisLocations, hemingwayParisTimeline } from './hemingway-paris-content';
import { orsonWellesCitizenKaneLocations, orsonWellesCitizenKaneTimeline } from './orson-welles-citizen-kane-content';
import { shakespeareLondonLocations, shakespeareLondonTimeline } from './shakespeare-london-content';

export interface DocumentaryConfig {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    dateRange: string;
    locationName: string;
    locations: EnhancedLocation[];
    timeline: ContentItem[];
    accentColor: string;
    heroImage?: string;
}

export const documentaryRegistry: Record<string, DocumentaryConfig> = {
    'hendrix-soho-1966': {
        id: 'hendrix-soho-1966',
        title: 'Hendrix in London',
        subtitle: 'The Week That Changed Rock',
        description: 'Six days after arriving, an unknown guitarist played "Killing Floor" at the Polytechnic. Eric Clapton walked off stage, shaken.',
        dateRange: 'September 1966 - June 1967',
        locationName: 'London',
        locations: hendrixLocations,
        timeline: hendrixTimeline,
        accentColor: 'purple',
        heroImage: '/photos/jimi_hendrix_1967.png',
    },
    'mozart-grand-tour-1763': {
        id: 'mozart-grand-tour-1763',
        title: "Mozart's Grand Tour",
        subtitle: 'The Prodigy Takes Europe',
        description: 'The seven-year-old prodigy performed for kings and queens across 88 cities, composing his first symphonies.',
        dateRange: '1763-1766',
        locationName: 'Europe',
        locations: mozartLocations,
        timeline: mozartTimeline,
        accentColor: 'amber',
        heroImage: '/mozart/mozart_boy.jpg',
    },
    'beatles-hamburg-1960': {
        id: 'beatles-hamburg-1960',
        title: 'The Beatles in Hamburg',
        subtitle: 'The Crucible',
        description: 'Before they were famous, playing 8-hour sets at the Star-Club, developing their sound in the crucible of the Reeperbahn.',
        dateRange: '1960-1962',
        locationName: 'Hamburg',
        locations: beatlesHamburgLocations,
        timeline: beatlesHamburgTimeline,
        accentColor: 'red',
    },
    'dylan-electric-1965': {
        id: 'dylan-electric-1965',
        title: 'Dylan Goes Electric',
        subtitle: 'The Night Folk Died',
        description: 'Newport Folk Festival. Pete Seeger wanted to cut the cables. The crowd booed. Folk music died. Rock was born.',
        dateRange: 'July 1965',
        locationName: 'Newport',
        locations: dylanElectricLocations,
        timeline: dylanElectricTimeline,
        accentColor: 'blue',
    },
    'beach-boys-pet-sounds-1966': {
        id: 'beach-boys-pet-sounds-1966',
        title: 'Pet Sounds',
        subtitle: "Brian Wilson's Masterpiece",
        description: 'Brian Wilson heard "Rubber Soul" and said "I\'m gonna make the greatest album ever." Then he did.',
        dateRange: '1965-1966',
        locationName: 'Los Angeles',
        locations: petSoundsLocations,
        timeline: petSoundsTimeline,
        accentColor: 'cyan',
    },
    'picasso-paris-1900': {
        id: 'picasso-paris-1900',
        title: 'Young Picasso in Paris',
        subtitle: 'The Blue Period',
        description: 'The Blue Period. Starving artist days at Bateau-Lavoir. His best friend shot himself. From grief came genius.',
        dateRange: '1900-1904',
        locationName: 'Paris',
        locations: picassoParisLocations,
        timeline: picassoParisTimeline,
        accentColor: 'blue',
    },
    'einstein-miracle-year-1905': {
        id: 'einstein-miracle-year-1905',
        title: "Einstein's Miracle Year",
        subtitle: 'Four Papers That Changed Physics',
        description: 'A patent clerk published four papers that changed physics. Relativity. E=mc². He was 26 years old.',
        dateRange: '1905',
        locationName: 'Bern',
        locations: einsteinMiracleLocations,
        timeline: einsteinMiracleTimeline,
        accentColor: 'emerald',
    },
    'darwin-beagle-1831': {
        id: 'darwin-beagle-1831',
        title: 'Darwin on the Beagle',
        subtitle: 'The Voyage That Changed Biology',
        description: 'Five years. The Galápagos finches. Giant fossils. The voyage that shaped evolutionary theory.',
        dateRange: '1831-1836',
        locationName: 'Around the World',
        locations: darwinBeagleLocations,
        timeline: darwinBeagleTimeline,
        accentColor: 'green',
    },
    'bronte-sisters-haworth': {
        id: 'bronte-sisters-haworth',
        title: 'The Brontë Sisters',
        subtitle: 'Genius in the Parsonage',
        description: 'Three sisters in a parsonage on the moors. Jane Eyre. Wuthering Heights. All dead before 40.',
        dateRange: '1820-1849',
        locationName: 'Yorkshire',
        locations: bronteSistersLocations,
        timeline: bronteSistersTimeline,
        accentColor: 'violet',
    },
    'hemingway-paris-1921': {
        id: 'hemingway-paris-1921',
        title: 'Hemingway in Paris',
        subtitle: 'A Moveable Feast',
        description: '"A Moveable Feast." Gertrude Stein\'s salon. Shakespeare and Company. The Sun Also Rises.',
        dateRange: '1921-1926',
        locationName: 'Paris',
        locations: hemingwayParisLocations,
        timeline: hemingwayParisTimeline,
        accentColor: 'orange',
    },
    'orson-welles-citizen-kane-1941': {
        id: 'orson-welles-citizen-kane-1941',
        title: 'Citizen Kane',
        subtitle: 'The Boy Genius',
        description: 'A 25-year-old made the greatest film ever. Hearst tried to destroy it. He failed.',
        dateRange: '1940-1941',
        locationName: 'Hollywood',
        locations: orsonWellesCitizenKaneLocations,
        timeline: orsonWellesCitizenKaneTimeline,
        accentColor: 'rose',
    },
    'shakespeare-london-1590': {
        id: 'shakespeare-london-1590',
        title: 'Young Shakespeare',
        subtitle: 'The Lost Years',
        description: 'The lost years. The plague. The Globe. How a glover\'s son became the greatest writer in English.',
        dateRange: '1590s',
        locationName: 'London',
        locations: shakespeareLondonLocations,
        timeline: shakespeareLondonTimeline,
        accentColor: 'yellow',
    },
};

export function getDocumentaryConfig(id: string): DocumentaryConfig | null {
    return documentaryRegistry[id] || null;
}

export function getAllDocumentaryIds(): string[] {
    return Object.keys(documentaryRegistry);
}
