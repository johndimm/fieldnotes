#!/usr/bin/env node
// Retry failed downloads with longer delays and smaller thumbnails
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const results = JSON.parse(fs.readFileSync('image-download-results.json', 'utf8'));

// Collect all search queries that need retry
const IMAGE_SEARCHES = {
  'picasso': [
    ['picasso', 'picasso_blue_period.jpg', 'Picasso old guitarist blue period'],
  ],
  'darwin': [
    ['darwin', 'hms_beagle.jpg', 'HMS Beagle Conrad Martens painting'],
    ['darwin', 'brazilian_rainforest.jpg', 'tropical rainforest Brazil'],
    ['darwin', 'punta_alta_argentina.jpg', 'Megatherium fossil illustration'],
    ['darwin', 'tierra_del_fuego.jpg', 'Tierra del Fuego Beagle Channel'],
    ['darwin', 'chile_valdivia.jpg', 'Valdivia Chile historical'],
    ['darwin', 'falmouth_harbour.jpg', 'Falmouth Cornwall harbour England'],
  ],
  'einstein': [
    ['einstein', 'ulm_germany.jpg', 'Ulm Minster Germany exterior'],
    ['einstein', 'munich_1890.jpg', 'Munich Marienplatz town hall'],
    ['einstein', 'eth_zurich.jpg', 'ETH Zurich polytechnic building'],
    ['einstein', 'patent_office_bern.jpg', 'Bern Switzerland government building'],
    ['einstein', 'kramgasse_bern.jpg', 'Kramgasse Bern street'],
    ['einstein', 'einstein_1905.jpg', 'Einstein young portrait 1905 patent clerk'],
    ['einstein', 'annalen_der_physik.jpg', 'Annalen Physik journal page'],
  ],
  'shakespeare': [
    ['shakespeare', 'stratford_upon_avon.jpg', 'Shakespeare Birthplace Stratford-upon-Avon'],
    ['shakespeare', 'the_theatre_shoreditch.jpg', 'Elizabethan theatre illustration woodcut'],
    ['shakespeare', 'christopher_marlowe.jpg', 'Marlowe portrait Corpus Christi'],
    ['shakespeare', 'plague_london.jpg', 'plague of London bill mortality'],
    ['shakespeare', 'globe_theatre.jpg', 'Globe Theatre reconstruction Bankside'],
    ['shakespeare', 'silver_street.jpg', 'Silver Street London Elizabethan'],
  ],
  'bronte': [
    ['bronte', 'thornton_bradford.jpg', 'Thornton village Bradford Yorkshire'],
    ['bronte', 'haworth_parsonage.jpg', 'Haworth Parsonage museum Bronte'],
    ['bronte', 'cowan_bridge_school.jpg', 'Cowan Bridge Lancashire school'],
    ['bronte', 'yorkshire_moors.jpg', 'Yorkshire moors Pennines landscape'],
    ['bronte', 'bronte_sisters.jpg', 'Bronte sisters Branwell painting portrait'],
    ['bronte', 'roe_head_school.jpg', 'Roe Head Mirfield school Yorkshire'],
    ['bronte', 'smith_elder_london.jpg', 'Cornhill London Victorian publishing street'],
    ['bronte', 'scarborough.jpg', 'Scarborough North Yorkshire spa town'],
  ],
  'hemingway': [
    ['hemingway', 'oak_park_illinois.jpg', 'Oak Park Illinois Hemingway birthplace'],
    ['hemingway', 'fossalta_di_piave.jpg', 'Piave River Italy World War I'],
    ['hemingway', 'gare_de_lyon.jpg', 'Gare de Lyon Paris train station'],
    ['hemingway', 'paris_latin_quarter.jpg', 'Paris Latin Quarter Pantheon 1920s'],
    ['hemingway', 'gertrude_stein.jpg', 'Gertrude Stein photograph portrait'],
    ['hemingway', 'shakespeare_and_co.jpg', 'Shakespeare Company bookshop Paris Sylvia Beach'],
    ['hemingway', 'closerie_des_lilas.jpg', 'La Closerie des Lilas café Paris Montparnasse'],
    ['hemingway', 'pamplona_spain.jpg', 'Pamplona Spain bullring plaza toros'],
    ['hemingway', 'hemingway_paris.jpg', 'Ernest Hemingway young photograph portrait 1920s'],
  ],
  'welles': [
    ['welles', 'kenosha_wisconsin.jpg', 'Kenosha Wisconsin downtown historical'],
    ['welles', 'gate_theatre_dublin.jpg', 'Gate Theatre Dublin Ireland Parnell'],
    ['welles', 'mercury_theatre_nyc.jpg', 'Mercury Theatre Julius Caesar 1937 Welles'],
    ['welles', 'cbs_radio_studio.jpg', 'radio broadcasting microphone studio 1930s'],
    ['welles', 'rko_pictures_hollywood.jpg', 'RKO studio Hollywood gate 1940s'],
    ['welles', 'rko_stage_set.jpg', 'Citizen Kane movie set Xanadu'],
    ['welles', 'hearst_castle.jpg', 'Hearst Castle San Simeon exterior'],
  ],
  'beatles': [
    ['beatles', 'liverpool_cavern.jpg', 'Cavern Club Liverpool Mathew Street'],
    ['beatles', 'indra_club_hamburg.jpg', 'Hamburg Grosse Freiheit nightclub'],
    ['beatles', 'kaiserkeller_hamburg.jpg', 'Hamburg St Pauli nightclub 1960s'],
    ['beatles', 'hamburg_reeperbahn.jpg', 'Hamburg Reeperbahn street night'],
    ['beatles', 'top_ten_club_hamburg.jpg', 'Beatles platz Hamburg memorial'],
    ['beatles', 'star_club_hamburg.jpg', 'Star Club Hamburg memorial stone'],
    ['beatles', 'astrid_kirchherr.jpg', 'Hamburg photography 1960s portrait'],
  ],
  'dylan': [
    ['dylan', 'hibbing_minnesota.jpg', 'Hibbing Minnesota town main street'],
    ['dylan', 'greenwich_village.jpg', 'Greenwich Village Washington Square Park'],
    ['dylan', 'newport_folk_1963.jpg', 'Newport Rhode Island folk festival stage'],
    ['dylan', 'columbia_studio_a.jpg', 'Columbia Records recording studio microphone'],
    ['dylan', 'newport_folk_1965.jpg', 'Bob Dylan Fender Stratocaster electric guitar'],
    ['dylan', 'manchester_free_trade.jpg', 'Free Trade Hall Manchester building exterior'],
  ],
  'beachboys': [
    ['beachboys', 'hawthorne_california.jpg', 'Hawthorne California neighborhood street'],
    ['beachboys', 'brian_wilson.jpg', 'Beach Boys band photograph 1960s'],
    ['beachboys', 'gold_star_studios.jpg', 'Gold Star recording studio Hollywood console'],
    ['beachboys', 'western_recorders.jpg', 'Western Recorders studio Hollywood building'],
    ['beachboys', 'capitol_records.jpg', 'Capitol Records tower building Hollywood'],
    ['beachboys', 'sunset_sound.jpg', 'Sunset Boulevard Hollywood recording'],
  ],
};

async function searchWikimediaCommons(query) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: query,
    gsrlimit: '5',
    prop: 'imageinfo',
    iiprop: 'url|size|mime',
    iiurlwidth: '800',  // Smaller thumbnails
    format: 'json',
    origin: '*',
  });

  const url = `https://commons.wikimedia.org/w/api.php?${params}`;

  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'FieldNotesBot/1.0 (documentary education project; contact: fieldnotes@example.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.query || !json.query.pages) { resolve(null); return; }
          const pages = Object.values(json.query.pages);
          for (const page of pages) {
            if (page.imageinfo && page.imageinfo[0]) {
              const info = page.imageinfo[0];
              if ((info.mime === 'image/jpeg' || info.mime === 'image/png') && info.width >= 400) {
                resolve({
                  title: page.title,
                  url: info.thumburl || info.url,
                  originalUrl: info.url,
                  width: info.thumbwidth || info.width,
                  height: info.thumbheight || info.height,
                });
                return;
              }
            }
          }
          resolve(null);
        } catch (e) { reject(e); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadFile(url, destPath, retries = 3) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'FieldNotesBot/1.0 (documentary education project; contact: fieldnotes@example.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadFile(res.headers.location, destPath, retries).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode === 429 && retries > 0) {
        console.log(`    [429] Rate limited, waiting 5s then retrying... (${retries} retries left)`);
        setTimeout(() => downloadFile(url, destPath, retries - 1).then(resolve).catch(reject), 5000);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => { fileStream.close(); resolve(destPath); });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('=== Retrying failed downloads with delays ===\n');

  const allResults = {};

  for (const [docName, searches] of Object.entries(IMAGE_SEARCHES)) {
    console.log(`\n--- ${docName.toUpperCase()} ---`);
    allResults[docName] = {};

    for (const [subdir, filename, query] of searches) {
      const dirPath = path.join('./public', subdir);
      if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

      // Check if already downloaded
      const existingFiles = fs.readdirSync(dirPath);
      const baseName = filename.replace(/\.\w+$/, '');
      const existing = existingFiles.find(f => f.startsWith(baseName));
      if (existing) {
        console.log(`  [SKIP] ${subdir}/${existing} already exists`);
        allResults[docName][existing] = { status: 'exists', path: `/${subdir}/${existing}` };
        continue;
      }

      console.log(`  [SEARCH] "${query}"`);
      try {
        const result = await searchWikimediaCommons(query);
        if (!result) {
          console.log(`  [MISS] No suitable image for "${query}"`);
          allResults[docName][filename] = { status: 'not_found' };
          // Wait 1.5s between searches
          await new Promise(r => setTimeout(r, 1500));
          continue;
        }

        console.log(`  [FOUND] ${result.title} (${result.width}x${result.height})`);

        const actualExt = result.url.match(/\.(jpg|jpeg|png)(\?|$)/i)?.[1] || 'jpg';
        const finalFilename = filename.replace(/\.\w+$/, `.${actualExt}`);
        const finalPath = path.join(dirPath, finalFilename);

        // Wait 2s before download to avoid rate limiting
        await new Promise(r => setTimeout(r, 2000));

        await downloadFile(result.url, finalPath);
        console.log(`  [OK] Downloaded to ${subdir}/${finalFilename}`);
        allResults[docName][finalFilename] = {
          status: 'downloaded',
          path: `/${subdir}/${finalFilename}`,
          credit: result.title.replace('File:', ''),
          originalUrl: result.originalUrl
        };

        // Wait 2s between downloads
        await new Promise(r => setTimeout(r, 2000));
      } catch (err) {
        console.log(`  [ERROR] ${err.message}`);
        allResults[docName][filename] = { status: 'error', error: err.message };
        await new Promise(r => setTimeout(r, 3000));
      }
    }
  }

  fs.writeFileSync('image-download-results-retry.json', JSON.stringify(allResults, null, 2));
  console.log('\n=== Done! Results saved to image-download-results-retry.json ===');
}

main().catch(console.error);
