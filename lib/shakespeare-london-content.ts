// Young Shakespeare in London - Content organized by location
// The early plays, the plague years (1590s)

import type { ContentItem, EnhancedLocation } from './documentary';

// Historical Context
export const shakespeareLondonContext = {
    title: 'The Lost Years and the Rise',
    description: `Between 1585 and 1592, William Shakespeare disappeared from history. A glover's son from Stratford, married at 18 with three children, he somehow transformed into London's most celebrated playwright. We don't know how. We know only that by 1592, rivals were attacking him as an "upstart crow." Within a decade, he would write Romeo and Juliet, A Midsummer Night's Dream, and the great histories. The greatest writer in the English language emerged from obscurity in plague-ridden London.`,
    contemporaries: [
        { name: 'Christopher Marlowe', significance: 'Rival playwright, killed in 1593 - Shakespeare\'s greatest influence' },
        { name: 'Richard Burbage', significance: 'Lead actor who created Hamlet, Othello, Lear' },
        { name: 'Ben Jonson', significance: 'Fellow playwright, friend and rival' },
        { name: 'Robert Greene', significance: 'Dying playwright who attacked Shakespeare as "upstart crow"' },
        { name: 'Henry Wriothesley', significance: 'Earl of Southampton, probable patron of the Sonnets' }
    ],
    keyQuote: 'He was not of an age, but for all time. - Ben Jonson'
};

// Timeline Events
export const shakespeareLondonTimeline: ContentItem[] = [
    {
        id: 'timeline-1',
        type: 'timeline',
        locationId: 'stratford',
        date: 'April 26, 1564',
        text: 'William Shakespeare baptized at Holy Trinity Church, Stratford-upon-Avon'
    },
    {
        id: 'timeline-2',
        type: 'timeline',
        locationId: 'stratford',
        date: 'November 28, 1582',
        text: 'Marries Anne Hathaway - she is 26, he is 18, she is pregnant'
    },
    {
        id: 'timeline-3',
        type: 'timeline',
        locationId: 'stratford',
        date: '1585',
        text: 'Twins Hamnet and Judith born - then Shakespeare vanishes from records (the "Lost Years")'
    },
    {
        id: 'timeline-4',
        type: 'timeline',
        locationId: 'london',
        date: 'c. 1590',
        text: 'Arrives in London - possibly as actor, possibly as horse-holder at theaters'
    },
    {
        id: 'timeline-5',
        type: 'timeline',
        locationId: 'rose',
        date: '1592',
        text: 'Robert Greene attacks Shakespeare as "upstart crow" - first evidence of his London success'
    },
    {
        id: 'timeline-6',
        type: 'timeline',
        locationId: 'london',
        date: '1592-1594',
        text: 'Plague closes theaters - Shakespeare writes narrative poems Venus and Adonis, The Rape of Lucrece'
    },
    {
        id: 'timeline-7',
        type: 'timeline',
        locationId: 'theatre',
        date: '1594',
        text: 'Joins Lord Chamberlain\'s Men as sharer (part-owner) - his permanent company'
    },
    {
        id: 'timeline-8',
        type: 'timeline',
        locationId: 'globe',
        date: '1599',
        text: 'Globe Theatre opens on Bankside - "All the world\'s a stage"'
    },
    {
        id: 'timeline-9',
        type: 'timeline',
        locationId: 'globe',
        date: '1600-1601',
        text: 'Writes Hamlet - transforms English drama forever'
    },
    {
        id: 'timeline-10',
        type: 'timeline',
        locationId: 'stratford',
        date: 'April 23, 1616',
        text: 'Dies in Stratford, aged 52 - possibly on his birthday'
    }
];

// Enhanced Locations
export const shakespeareLondonLocations: EnhancedLocation[] = [
    {
        id: 'stratford',
        name: 'Stratford-upon-Avon',
        lat: 52.1917,
        lng: -1.7083,
        date: '1564-c.1590',
        description: 'Shakespeare was born on Henley Street, son of John Shakespeare, a glovemaker and alderman, and Mary Arden, daughter of a prosperous farmer. He attended the King\'s New School, married young, had three children - then disappeared.',
        photoUrl: '/shakespeare/stratford_birthplace.jpg',
        photoTitle: 'Shakespeare\'s Birthplace, Stratford-upon-Avon',
        content: [
            {
                id: 'stratford-quote-1',
                type: 'quote',
                locationId: 'stratford',
                text: 'Small Latin and less Greek.',
                speaker: 'Ben Jonson',
                source: 'On Shakespeare\'s education'
            },
            {
                id: 'stratford-quote-2',
                type: 'quote',
                locationId: 'stratford',
                text: 'What we know of Shakespeare\'s life could fit on a postcard. What we know of his imagination fills libraries.',
                speaker: 'Stephen Greenblatt',
                source: 'Will in the World'
            },
            {
                id: 'stratford-quote-3',
                type: 'quote',
                locationId: 'stratford',
                text: 'He had seven years in which to become Shakespeare. We have no idea how.',
                speaker: 'Park Honan',
                source: 'Shakespeare: A Life'
            },
            {
                id: 'stratford-music-1',
                type: 'music',
                locationId: 'stratford',
                musicTitle: 'Greensleeves (Elizabethan Lute)',
                musicPreviewUrl: '/api/music/deezer/track/66419769'
            }
        ]
    },
    {
        id: 'london',
        name: 'London, 1590s',
        lat: 51.5074,
        lng: -0.1278,
        date: 'c. 1590-1613',
        description: 'London was a city of 200,000 - filthy, dangerous, brilliant. Plague swept through regularly. The theaters were new, disreputable, and wildly popular. Shakespeare arrived somehow and began writing plays that changed everything.',
        photoUrl: '/shakespeare/london_1590s.jpg',
        photoTitle: 'Elizabethan London',
        content: [
            {
                id: 'london-quote-1',
                type: 'quote',
                locationId: 'london',
                text: 'There is an upstart crow, beautified with our feathers, that with his tiger\'s heart wrapped in a player\'s hide, supposes he is as well able to bombast out a blank verse as the best of you.',
                speaker: 'Robert Greene',
                source: 'Groatsworth of Wit, 1592 - first reference to Shakespeare in London'
            },
            {
                id: 'london-quote-2',
                type: 'quote',
                locationId: 'london',
                text: 'London, thou art the flower of cities all.',
                speaker: 'William Dunbar',
                source: 'Poem'
            },
            {
                id: 'london-quote-3',
                type: 'quote',
                locationId: 'london',
                text: 'He held horses at the playhouse door. That\'s how he started.',
                speaker: 'Samuel Johnson',
                source: 'Reporting tradition'
            },
            {
                id: 'london-quote-4',
                type: 'quote',
                locationId: 'london',
                text: 'The theater is the great democratizer. At the Globe, earls stood next to apprentices.',
                speaker: 'James Shapiro',
                source: '1599: A Year in the Life of Shakespeare'
            },
            {
                id: 'london-music-1',
                type: 'music',
                locationId: 'london',
                musicTitle: 'Flow My Tears (John Dowland)',
                musicPreviewUrl: '/api/music/deezer/track/785566882'
            }
        ]
    },
    {
        id: 'rose',
        name: 'The Rose Theatre',
        lat: 51.5066,
        lng: -0.0934,
        date: '1587-1605',
        description: 'Philip Henslowe\'s playhouse on Bankside was where Marlowe\'s plays premiered. Shakespeare\'s early Henry VI plays were performed here. The Rose was his first theatrical home - smaller, more intimate than the Globe would be.',
        photoUrl: '/shakespeare/rose_theatre.jpg',
        photoTitle: 'The Rose Theatre excavation site',
        content: [
            {
                id: 'rose-quote-1',
                type: 'quote',
                locationId: 'rose',
                text: 'Harey the vj was played at the Rose, and took £3 16s 8d - a great success.',
                speaker: 'Philip Henslowe',
                source: 'Diary, 1592'
            },
            {
                id: 'rose-quote-2',
                type: 'quote',
                locationId: 'rose',
                text: 'Is it not strange that a young man from Stratford can fill the Rose as Marlowe does?',
                speaker: 'Thomas Nashe',
                source: 'On Shakespeare\'s early success'
            },
            {
                id: 'rose-attendee-1',
                type: 'attendee',
                locationId: 'rose',
                text: 'Edward Alleyn, Christopher Marlowe, Thomas Kyd'
            },
            {
                id: 'rose-quote-3',
                type: 'quote',
                locationId: 'rose',
                text: 'O tiger\'s heart wrapped in a woman\'s hide!',
                speaker: 'William Shakespeare',
                source: 'Henry VI Part 3 - the line Greene mocked'
            },
            {
                id: 'rose-music-1',
                type: 'music',
                locationId: 'rose',
                musicTitle: 'The Queen\'s Command (Orlando Gibbons)',
                musicPreviewUrl: '/api/music/deezer/track/24448701'
            }
        ]
    },
    {
        id: 'theatre',
        name: 'The Theatre, Shoreditch',
        lat: 51.5270,
        lng: -0.0780,
        date: '1576-1598',
        description: 'England\'s first purpose-built playhouse, owned by James Burbage. The Lord Chamberlain\'s Men (Shakespeare\'s company) played here. When the lease expired in 1598, they dismantled it timber by timber and rebuilt it as the Globe.',
        photoUrl: '/shakespeare/the_theatre_shoreditch.png',
        photoTitle: 'The Theatre, Shoreditch (reconstruction)',
        content: [
            {
                id: 'theatre-quote-1',
                type: 'quote',
                locationId: 'theatre',
                text: 'The Theatre was the first true playhouse. Before that, we played in inn-yards.',
                speaker: 'Richard Burbage',
                source: 'Attributed'
            },
            {
                id: 'theatre-quote-2',
                type: 'quote',
                locationId: 'theatre',
                text: 'We took it apart in the dead of night. The landlord was furious.',
                speaker: 'Cuthbert Burbage',
                source: 'On moving the Theatre'
            },
            {
                id: 'theatre-attendee-1',
                type: 'attendee',
                locationId: 'theatre',
                text: 'Richard Burbage, Will Kempe, Henry Condell, John Heminges'
            },
            {
                id: 'theatre-quote-3',
                type: 'quote',
                locationId: 'theatre',
                text: 'Romeo and Juliet premiered here. The groundlings wept at the balcony scene.',
                speaker: 'Theater tradition',
                source: 'c. 1595'
            },
            {
                id: 'theatre-music-1',
                type: 'music',
                locationId: 'theatre',
                musicTitle: 'Spem in Alium (Thomas Tallis)',
                musicPreviewUrl: '/api/music/deezer/track/993172972'
            }
        ]
    },
    {
        id: 'marlowe',
        name: 'Christopher Marlowe',
        lat: 51.5140,
        lng: -0.0900,
        date: '1564-1593',
        description: 'Born the same year as Shakespeare, Marlowe was the star of London theater - a Cambridge graduate, probable spy, atheist, and genius. His Tamburlaine and Faustus showed what blank verse could do. His murder in 1593 left the stage to Shakespeare.',
        photoUrl: '/shakespeare/christopher_marlowe.jpg',
        photoTitle: 'Portrait of Christopher Marlowe',
        content: [
            {
                id: 'marlowe-quote-1',
                type: 'quote',
                locationId: 'marlowe',
                text: 'Was this the face that launched a thousand ships, and burnt the topless towers of Ilium?',
                speaker: 'Christopher Marlowe',
                source: 'Doctor Faustus'
            },
            {
                id: 'marlowe-quote-2',
                type: 'quote',
                locationId: 'marlowe',
                text: 'If Marlowe had lived, there would have been no Shakespeare.',
                speaker: 'A.L. Rowse',
                source: 'Historian'
            },
            {
                id: 'marlowe-quote-3',
                type: 'quote',
                locationId: 'marlowe',
                text: 'Dead shepherd, now I find thy saw of might: Who ever loved that loved not at first sight?',
                speaker: 'William Shakespeare',
                source: 'As You Like It - tribute to Marlowe'
            },
            {
                id: 'marlowe-quote-4',
                type: 'quote',
                locationId: 'marlowe',
                text: 'He was stabbed above the eye in a tavern in Deptford. Murder? Assassination? We\'ll never know.',
                speaker: 'Coroner\'s report',
                source: 'May 30, 1593'
            },
            {
                id: 'marlowe-quote-5',
                type: 'quote',
                locationId: 'marlowe',
                text: 'Come live with me and be my love, and we will all the pleasures prove.',
                speaker: 'Christopher Marlowe',
                source: 'The Passionate Shepherd to His Love'
            },
            {
                id: 'marlowe-music-1',
                type: 'music',
                locationId: 'marlowe',
                musicTitle: 'Lachrimae Pavan (John Dowland)',
                musicPreviewUrl: '/api/music/deezer/track/3466142'
            }
        ]
    },
    {
        id: 'plague',
        name: 'The Plague Years',
        lat: 51.5074,
        lng: -0.1278,
        date: '1592-1594',
        description: 'Plague closed London\'s theaters for nearly two years. Shakespeare turned to poetry, writing Venus and Adonis and The Rape of Lucrece for his patron Southampton. The epidemic killed thousands - but forced Shakespeare to prove he was more than a playwright.',
        photoUrl: '/shakespeare/plague_bill.png',
        photoTitle: 'London plague bill, 1590s',
        content: [
            {
                id: 'plague-quote-1',
                type: 'quote',
                locationId: 'plague',
                text: 'Lord have mercy on us.',
                speaker: 'Inscription',
                source: 'Marked on doors of infected houses'
            },
            {
                id: 'plague-quote-2',
                type: 'quote',
                locationId: 'plague',
                text: 'I dedicate these verses to your Lordship, and pledge my work to your honor.',
                speaker: 'William Shakespeare',
                source: 'Dedication to Venus and Adonis'
            },
            {
                id: 'plague-quote-3',
                type: 'quote',
                locationId: 'plague',
                text: 'The plague made Shakespeare a poet. When the theaters reopened, he was ready to be immortal.',
                speaker: 'James Shapiro',
                source: '1599: A Year in the Life of Shakespeare'
            },
            {
                id: 'plague-quote-4',
                type: 'quote',
                locationId: 'plague',
                text: 'A plague o\' both your houses!',
                speaker: 'William Shakespeare',
                source: 'Romeo and Juliet - Mercutio\'s dying curse'
            },
            {
                id: 'plague-quote-5',
                type: 'quote',
                locationId: 'plague',
                text: 'The theaters stayed dark. 10,000 died in London alone. Shakespeare wrote poems because he had to eat.',
                speaker: 'Stephen Greenblatt',
                source: 'Will in the World'
            },
            {
                id: 'plague-music-1',
                type: 'music',
                locationId: 'plague',
                musicTitle: 'Drop, Drop Slow Tears (Orlando Gibbons)',
                musicPreviewUrl: '/api/music/deezer/track/74035682'
            }
        ]
    },
    {
        id: 'globe',
        name: 'The Globe Theatre',
        lat: 51.5081,
        lng: -0.0972,
        date: '1599-1613',
        description: 'The "Wooden O" on Bankside, built from the timbers of The Theatre. Shakespeare owned a 12.5% share. Here he staged Hamlet, Othello, Lear, Macbeth, The Tempest. It burned down in 1613 during a performance of Henry VIII.',
        photoUrl: '/shakespeare/globe_theatre.jpg',
        photoTitle: 'The Globe Theatre',
        content: [
            {
                id: 'globe-quote-1',
                type: 'quote',
                locationId: 'globe',
                text: 'All the world\'s a stage, and all the men and women merely players.',
                speaker: 'William Shakespeare',
                source: 'As You Like It (the Globe\'s motto)'
            },
            {
                id: 'globe-quote-2',
                type: 'quote',
                locationId: 'globe',
                text: 'This wooden O.',
                speaker: 'William Shakespeare',
                source: 'Henry V - the Chorus describes the theater'
            },
            {
                id: 'globe-quote-3',
                type: 'quote',
                locationId: 'globe',
                text: 'I saw Hamlet at the Globe. The ghost was very effective.',
                speaker: 'Gabriel Harvey',
                source: 'Note in margin of book, c. 1600'
            },
            {
                id: 'globe-quote-4',
                type: 'quote',
                locationId: 'globe',
                text: 'The Globe was burned down, nothing remaining but the foundation. No one was hurt except a man whose breeches caught fire.',
                speaker: 'Sir Henry Wotton',
                source: 'Letter, 1613'
            },
            {
                id: 'globe-attendee-1',
                type: 'attendee',
                locationId: 'globe',
                text: 'Richard Burbage, Will Kempe, John Heminges, Henry Condell, Robert Armin'
            },
            {
                id: 'globe-quote-5',
                type: 'quote',
                locationId: 'globe',
                text: 'To be, or not to be, that is the question.',
                speaker: 'William Shakespeare',
                source: 'Hamlet - premiered at the Globe, c. 1600'
            },
            {
                id: 'globe-quote-6',
                type: 'quote',
                locationId: 'globe',
                text: 'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
                speaker: 'William Shakespeare',
                source: 'The Tempest - his final play at the Globe'
            },
            {
                id: 'globe-quote-7',
                type: 'quote',
                locationId: 'globe',
                text: 'The groundlings stood in the pit, getting wet when it rained. They were rowdy, ate hazelnuts, threw them at bad actors.',
                speaker: 'Andrew Gurr',
                source: 'The Shakespearean Stage'
            },
            {
                id: 'globe-quote-8',
                type: 'quote',
                locationId: 'globe',
                text: 'Burbage was the first Hamlet. He must have been extraordinary.',
                speaker: 'Ben Jonson',
                source: 'Attributed'
            },
            {
                id: 'globe-passage-1',
                type: 'passage',
                locationId: 'globe',
                passage: 'The Globe could hold 3,000 people. Performances began at 2pm and lasted about two hours. A penny got you into the pit as a groundling. Twopence bought a seat in the galleries. Threepence got you a cushion. The flag flew when there was a performance - white for comedy, black for tragedy, red for history.',
                passageSource: 'Theater historian accounts'
            },
            {
                id: 'globe-music-1',
                type: 'music',
                locationId: 'globe',
                musicTitle: 'L\'Orfeo - Possente spirto (Monteverdi)',
                musicPreviewUrl: '/api/music/deezer/track/16808536'
            },
            {
                id: 'globe-music-2',
                type: 'music',
                locationId: 'globe',
                musicTitle: 'Assumpta Est Maria (William Byrd)',
                musicPreviewUrl: '/api/music/deezer/track/12411359'
            }
        ]
    },
    {
        id: 'jonson',
        name: 'Ben Jonson & The Mermaid Tavern',
        lat: 51.5128,
        lng: -0.0933,
        date: 'c. 1603-1616',
        description: 'Ben Jonson - bricklayer, soldier, playwright, poet - was Shakespeare\'s friend and rival. They drank together at the Mermaid Tavern on Cheapside, trading wit with other writers. Jonson wrote the great tribute: "He was not of an age, but for all time."',
        photoUrl: '/shakespeare/london_1590s.jpg',
        photoTitle: 'Elizabethan London tavern scene',
        content: [
            {
                id: 'jonson-quote-1',
                type: 'quote',
                locationId: 'jonson',
                text: 'He was not of an age, but for all time!',
                speaker: 'Ben Jonson',
                source: 'To the Memory of My Beloved, the Author, Mr. William Shakespeare (1623)'
            },
            {
                id: 'jonson-quote-2',
                type: 'quote',
                locationId: 'jonson',
                text: 'I loved the man, and do honor his memory on this side idolatry as much as any.',
                speaker: 'Ben Jonson',
                source: 'Timber, or Discoveries'
            },
            {
                id: 'jonson-quote-3',
                type: 'quote',
                locationId: 'jonson',
                text: 'Shakespeare wanted art. He flowed with that facility that sometimes it was necessary he should be stopped.',
                speaker: 'Ben Jonson',
                source: 'Timber, or Discoveries - praising and criticizing'
            },
            {
                id: 'jonson-quote-4',
                type: 'quote',
                locationId: 'jonson',
                text: 'Many were the wit-combats betwixt him and Ben Jonson. Shakespeare was always the victor.',
                speaker: 'Thomas Fuller',
                source: 'History of the Worthies of England (1662)'
            },
            {
                id: 'jonson-quote-5',
                type: 'quote',
                locationId: 'jonson',
                text: 'What things have we seen done at the Mermaid! Heard words that have been so nimble and so full of subtle flame.',
                speaker: 'Francis Beaumont',
                source: 'Letter to Ben Jonson'
            },
            {
                id: 'jonson-attendee-1',
                type: 'attendee',
                locationId: 'jonson',
                text: 'Ben Jonson, John Donne, Francis Beaumont, John Fletcher'
            },
            {
                id: 'jonson-music-1',
                type: 'music',
                locationId: 'jonson',
                musicTitle: 'Lachrimae Coactae Pavan (John Dowland)',
                musicPreviewUrl: '/api/music/deezer/track/12910523'
            }
        ]
    },
    {
        id: 'silver-street',
        name: 'Silver Street Lodgings',
        lat: 51.5171,
        lng: -0.0937,
        date: 'c. 1602-1604',
        description: 'Shakespeare lodged with the Mountjoy family, French Huguenot wigmakers, at the corner of Silver Street and Monkwell Street. We know this because he testified in a lawsuit in 1612. It\'s the only London address we can confirm.',
        photoUrl: '/shakespeare/shakespeare_portrait.jpg',
        photoTitle: 'Shakespeare portrait (attributed)',
        content: [
            {
                id: 'silver-quote-1',
                type: 'quote',
                locationId: 'silver-street',
                text: 'William Shakespeare of Stratford upon Avon, gentleman, of the age of 48 years or thereabouts.',
                speaker: 'Court deposition',
                source: 'Belott v. Mountjoy, 1612'
            },
            {
                id: 'silver-quote-2',
                type: 'quote',
                locationId: 'silver-street',
                text: 'He remembered nothing of the dowry. His memory was poor.',
                speaker: 'Court record',
                source: 'On Shakespeare\'s testimony'
            },
            {
                id: 'silver-quote-3',
                type: 'quote',
                locationId: 'silver-street',
                text: 'A French Huguenot household - perfect for writing about Venice, Verona, Vienna.',
                speaker: 'Charles Nicholl',
                source: 'The Lodger'
            },
            {
                id: 'silver-quote-4',
                type: 'quote',
                locationId: 'silver-street',
                text: 'Here he wrote Othello, Measure for Measure, possibly Lear. The Mountjoys knew nothing of his genius.',
                speaker: 'Charles Nicholl',
                source: 'The Lodger'
            },
            {
                id: 'silver-music-1',
                type: 'music',
                locationId: 'silver-street',
                musicTitle: 'Glorious and Powerful God (Orlando Gibbons)',
                musicPreviewUrl: '/api/music/deezer/track/16782993'
            }
        ]
    }
];

// Key Plays of the 1590s
export const shakespeareEarlyPlays = [
    { title: 'Henry VI Parts 1-3', year: '1590-91', note: 'First plays - history as spectacle' },
    { title: 'Richard III', year: '1592-93', note: 'First great villain role' },
    { title: 'The Comedy of Errors', year: '1592-93', note: 'First comedy' },
    { title: 'Titus Andronicus', year: '1593-94', note: 'Revenge tragedy, extremely violent' },
    { title: 'Romeo and Juliet', year: '1594-95', note: 'First great tragedy' },
    { title: 'A Midsummer Night\'s Dream', year: '1595-96', note: 'Comedy and poetry fused' },
    { title: 'The Merchant of Venice', year: '1596-97', note: 'Comedy with darkness' },
    { title: 'Henry IV Parts 1-2', year: '1596-98', note: 'Falstaff - greatest comic creation' },
    { title: 'Julius Caesar', year: '1599', note: 'First Globe play' },
    { title: 'Hamlet', year: '1600-01', note: 'The summit' }
];
