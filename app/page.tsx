'use client';

// Documentary data organized by category
const documentaries = {
  music: [
    {
      id: 'hendrix-soho-1966',
      title: 'Jimi Hendrix in London',
      subtitle: 'September 1966 · London',
      description: 'Six days after arriving, an unknown guitarist played "Killing Floor" at the Polytechnic. Eric Clapton walked off stage, shaken.',
      image: '/photos/jimi_hendrix_1967.png',
      imagePosition: 'top',
      accentColor: 'purple',
      locations: 8,
      ready: true,
    },
    {
      id: 'mozart-grand-tour-1763',
      title: "Mozart's Grand Tour",
      subtitle: '1763-1766 · Across Europe',
      description: 'The seven-year-old prodigy performed for kings and queens across 88 cities, composing his first symphonies.',
      image: '/mozart/mozart_boy.jpg',
      imagePosition: '50% 30%',
      accentColor: 'amber',
      locations: 10,
      ready: true,
    },
    {
      id: 'beatles-hamburg-1960',
      title: 'The Beatles in Hamburg',
      subtitle: '1960-1962 · Hamburg',
      description: 'Before they were famous, playing 8-hour sets at the Star-Club, developing their sound in the crucible of the Reeperbahn.',
      image: null,
      placeholder: { icon: '🎸', gradient: 'from-red-900 to-red-700' },
      imagePosition: 'center',
      accentColor: 'red',
      locations: 6,
      ready: true,
    },
    {
      id: 'dylan-electric-1965',
      title: 'Dylan Goes Electric',
      subtitle: 'July 1965 · Newport',
      description: 'Newport Folk Festival. Pete Seeger wanted to cut the cables. The crowd booed. Folk music died. Rock was born.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/400px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg',
      imagePosition: 'top',
      accentColor: 'blue',
      locations: 6,
      ready: true,
    },
    {
      id: 'beach-boys-pet-sounds-1966',
      title: "Pet Sounds",
      subtitle: '1965-1966 · Los Angeles',
      description: 'Brian Wilson heard "Rubber Soul" and said "I\'m gonna make the greatest album ever." Then he did.',
      image: null,
      placeholder: { icon: '🎹', gradient: 'from-cyan-900 to-cyan-700' },
      imagePosition: 'top',
      accentColor: 'cyan',
      locations: 8,
      ready: true,
    },
  ],
  artScience: [
    {
      id: 'picasso-paris-1900',
      title: 'Young Picasso in Paris',
      subtitle: '1900-1904 · Paris',
      description: 'The Blue Period. Starving artist days at Bateau-Lavoir. His best friend shot himself. From grief came genius.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/400px-Pablo_picasso_1.jpg',
      imagePosition: 'top',
      accentColor: 'blue',
      locations: 8,
      ready: true,
    },
    {
      id: 'einstein-miracle-year-1905',
      title: "Einstein's Miracle Year",
      subtitle: '1905 · Bern',
      description: 'A patent clerk published four papers that changed physics. Relativity. E=mc². He was 26 years old.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/400px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      imagePosition: 'top',
      accentColor: 'emerald',
      locations: 7,
      ready: true,
    },
    {
      id: 'darwin-beagle-1831',
      title: 'Darwin on the Beagle',
      subtitle: '1831-1836 · Around the World',
      description: 'Five years. The Galápagos finches. Giant fossils. The voyage that shaped evolutionary theory.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg',
      imagePosition: 'top',
      accentColor: 'green',
      locations: 9,
      ready: true,
    },
  ],
  literature: [
    {
      id: 'bronte-sisters-haworth',
      title: 'The Brontë Sisters',
      subtitle: '1820-1849 · Yorkshire',
      description: 'Three sisters in a parsonage on the moors. Jane Eyre. Wuthering Heights. All dead before 40.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/The_Bront%C3%AB_Sisters_by_Patrick_Branwell_Bront%C3%AB_restored.jpg/500px-The_Bront%C3%AB_Sisters_by_Patrick_Branwell_Bront%C3%AB_restored.jpg',
      imagePosition: 'top',
      accentColor: 'violet',
      locations: 8,
      ready: true,
    },
    {
      id: 'hemingway-paris-1921',
      title: 'Hemingway in Paris',
      subtitle: '1921-1926 · Paris',
      description: '"A Moveable Feast." Gertrude Stein\'s salon. Shakespeare and Company. The Sun Also Rises.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/400px-ErnestHemingway.jpg',
      imagePosition: 'top',
      accentColor: 'orange',
      locations: 9,
      ready: true,
    },
    {
      id: 'shakespeare-london-1590',
      title: 'Young Shakespeare',
      subtitle: '1590s · London',
      description: 'The lost years. The plague. The Globe. How a glover\'s son became the greatest writer in English.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/400px-Shakespeare.jpg',
      imagePosition: 'top',
      accentColor: 'yellow',
      locations: 8,
      ready: true,
    },
  ],
  filmTheater: [
    {
      id: 'orson-welles-citizen-kane-1941',
      title: 'Citizen Kane',
      subtitle: '1940-1941 · Hollywood',
      description: 'A 25-year-old made the greatest film ever. Hearst tried to destroy it. He failed.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Orson_Welles_1937.jpg/400px-Orson_Welles_1937.jpg',
      imagePosition: 'top',
      accentColor: 'rose',
      locations: 9,
      ready: true,
    },
  ],
};

const accentColors: Record<string, { text: string; hover: string }> = {
  purple: { text: 'text-purple-400', hover: 'group-hover:text-purple-300' },
  amber: { text: 'text-amber-400', hover: 'group-hover:text-amber-300' },
  red: { text: 'text-red-400', hover: 'group-hover:text-red-300' },
  blue: { text: 'text-blue-400', hover: 'group-hover:text-blue-300' },
  cyan: { text: 'text-cyan-400', hover: 'group-hover:text-cyan-300' },
  emerald: { text: 'text-emerald-400', hover: 'group-hover:text-emerald-300' },
  green: { text: 'text-green-400', hover: 'group-hover:text-green-300' },
  violet: { text: 'text-violet-400', hover: 'group-hover:text-violet-300' },
  orange: { text: 'text-orange-400', hover: 'group-hover:text-orange-300' },
  yellow: { text: 'text-yellow-400', hover: 'group-hover:text-yellow-300' },
  rose: { text: 'text-rose-400', hover: 'group-hover:text-rose-300' },
};

interface Documentary {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string | null;
  placeholder?: { icon: string; gradient: string };
  imagePosition: string;
  accentColor: string;
  locations: number;
  ready: boolean;
}

function DocumentaryCard({ doc }: { doc: Documentary }) {
  const colors = accentColors[doc.accentColor] || accentColors.purple;

  const CardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        {doc.image ? (
          <img
            src={doc.image}
            alt={doc.title}
            className={`w-full h-full object-cover transition-all duration-500 ${doc.ready ? 'grayscale group-hover:grayscale-0' : 'grayscale opacity-60'}`}
            style={{ objectPosition: doc.imagePosition }}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${doc.placeholder?.gradient} flex items-center justify-center ${!doc.ready ? 'opacity-60' : ''}`}>
            <span className={`text-8xl transition-opacity duration-500 ${doc.ready ? 'opacity-30 group-hover:opacity-50' : 'opacity-20'}`}>
              {doc.placeholder?.icon}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        {!doc.ready && (
          <div className="absolute top-3 right-3 bg-stone-800/80 text-stone-400 text-xs px-2 py-1 rounded">
            Coming Soon
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className={`${colors.text} text-xs font-medium mb-1 ${!doc.ready ? 'opacity-70' : ''}`}>
            {doc.subtitle}
          </p>
          <h3 className={`text-xl font-bold text-white mb-1 ${!doc.ready ? 'opacity-80' : ''}`}>
            {doc.title}
          </h3>
          <p className={`text-stone-300 text-sm leading-snug line-clamp-2 ${!doc.ready ? 'opacity-70' : ''}`}>
            {doc.description}
          </p>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-stone-700 flex items-center justify-between">
        <span className="text-xs text-stone-400">
          {doc.locations} locations
        </span>
        {doc.ready ? (
          <span className={`${colors.text} text-sm font-medium group-hover:translate-x-1 transition-transform inline-block`}>
            Explore →
          </span>
        ) : (
          <span className="text-stone-500 text-sm">
            In development
          </span>
        )}
      </div>
    </>
  );

  if (doc.ready) {
    return (
      <a
        href={`/events/${doc.id}`}
        className="group block bg-stone-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden hover:scale-[1.02] duration-300"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="block bg-stone-800 rounded-xl shadow-lg overflow-hidden cursor-not-allowed">
      {CardContent}
    </div>
  );
}

function CategorySection({ title, icon, docs }: { title: string; icon: string; docs: Documentary[] }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex-1 h-px bg-stone-700 ml-4" />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <DocumentaryCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">Fieldnotes</h1>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-2">
            Early Days of Genius
          </p>
          <p className="text-sm text-stone-400 max-w-xl mx-auto">
            Interactive documentaries exploring the formative moments when extraordinary talents first emerged
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <CategorySection
          title="Music"
          icon="🎵"
          docs={documentaries.music}
        />

        <CategorySection
          title="Art & Science"
          icon="🔬"
          docs={documentaries.artScience}
        />

        <CategorySection
          title="Literature"
          icon="📚"
          docs={documentaries.literature}
        />

        <CategorySection
          title="Film & Theater"
          icon="🎬"
          docs={documentaries.filmTheater}
        />

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700">
            <div className="text-2xl mb-3">🗺️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Interactive Maps</h3>
            <p className="text-stone-400 text-sm">
              Follow the journey location by location with detailed narratives and period music.
            </p>
          </div>
          <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700">
            <div className="text-2xl mb-3">🎬</div>
            <h3 className="text-lg font-semibold text-white mb-2">Ken Burns Documentaries</h3>
            <p className="text-stone-400 text-sm">
              Watch cinematic presentations with archival photos, quotes, and curated soundtracks.
            </p>
          </div>
          <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-700">
            <div className="text-2xl mb-3">📜</div>
            <h3 className="text-lg font-semibold text-white mb-2">Primary Sources</h3>
            <p className="text-stone-400 text-sm">
              Every quote attributed. Every claim sourced. Ambiguity preserved, not papered over.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center border-t border-stone-800">
        <p className="text-stone-500 text-sm">
          Evidence-first research · Ambiguity preserved · Sources tracked
        </p>
      </footer>
    </div>
  );
}
