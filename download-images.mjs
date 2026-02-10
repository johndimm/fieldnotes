#!/usr/bin/env node
// Script to download images from Wikimedia Commons for each documentary
// Uses the Wikimedia Commons API to search for images and download them

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const OUTDIR = './public';

// Search queries mapped to: [subdirectory, filename, search terms]
// For each documentary location, we provide a good search query
const IMAGE_SEARCHES = {
  // === PICASSO ===
  'picasso': [
    ['picasso', 'malaga_birthplace.jpg', 'Picasso birthplace Malaga'],
    ['picasso', 'quatre_gats_barcelona.jpg', 'Els Quatre Gats Barcelona'],
    ['picasso', 'gare_orsay_paris.jpg', "Musée d'Orsay Paris"],
    ['picasso', 'montmartre_1900.jpg', 'Montmartre Paris 1900'],
    ['picasso', 'galerie_vollard.jpg', 'Ambroise Vollard portrait'],
    ['picasso', 'picasso_blue_period.jpg', 'Picasso Blue Period painting'],
    ['picasso', 'bateau_lavoir.jpg', 'Bateau-Lavoir Montmartre'],
    ['picasso', 'lapin_agile.jpg', 'Lapin Agile Montmartre'],
  ],
  // === DARWIN ===
  'darwin': [
    ['darwin', 'the_mount_shrewsbury.jpg', 'The Mount Shrewsbury Darwin'],
    ['darwin', 'cambridge_university.jpg', 'Cambridge University 1830'],
    ['darwin', 'hms_beagle.jpg', 'HMS Beagle ship painting'],
    ['darwin', 'brazilian_rainforest.jpg', 'Brazilian Atlantic Forest'],
    ['darwin', 'punta_alta_argentina.jpg', 'Megatherium fossil skeleton'],
    ['darwin', 'tierra_del_fuego.jpg', 'Tierra del Fuego landscape'],
    ['darwin', 'chile_earthquake.jpg', 'Chile Valdivia coast'],
    ['darwin', 'galapagos_finches.jpg', "Darwin's finches illustration"],
    ['darwin', 'falmouth_harbour.jpg', 'Falmouth harbour Cornwall'],
  ],
  // === EINSTEIN ===
  'einstein': [
    ['einstein', 'ulm_germany.jpg', 'Ulm Münster cathedral'],
    ['einstein', 'munich_1890.jpg', 'Munich Marienplatz historical'],
    ['einstein', 'eth_zurich.jpg', 'ETH Zurich building historical'],
    ['einstein', 'patent_office_bern.jpg', 'Swiss Federal Patent Office Bern'],
    ['einstein', 'kramgasse_bern.jpg', 'Kramgasse Bern old town'],
    ['einstein', 'einstein_1905.jpg', 'Albert Einstein 1905 portrait'],
    ['einstein', 'annalen_der_physik.jpg', 'Annalen der Physik journal'],
  ],
  // === SHAKESPEARE ===
  'shakespeare': [
    ['shakespeare', 'stratford_upon_avon.jpg', "Shakespeare's Birthplace Stratford"],
    ['shakespeare', 'london_1590s.jpg', 'London Elizabethan 16th century'],
    ['shakespeare', 'rose_theatre.jpg', 'Rose Theatre London archaeological'],
    ['shakespeare', 'the_theatre_shoreditch.jpg', 'Elizabethan playhouse illustration'],
    ['shakespeare', 'christopher_marlowe.jpg', 'Christopher Marlowe portrait'],
    ['shakespeare', 'plague_london.jpg', 'London plague broadsheet 1592'],
    ['shakespeare', 'globe_theatre.jpg', 'Globe Theatre London reconstruction'],
    ['shakespeare', 'shakespeare_portrait.jpg', 'William Shakespeare Chandos portrait'],
  ],
  // === BRONTE ===
  'bronte': [
    ['bronte', 'thornton_bradford.jpg', 'Thornton Bradford birthplace'],
    ['bronte', 'haworth_parsonage.jpg', 'Haworth Parsonage Bronte'],
    ['bronte', 'cowan_bridge_school.jpg', 'Clergy Daughters School Cowan Bridge'],
    ['bronte', 'yorkshire_moors.jpg', 'Yorkshire Moors Haworth landscape'],
    ['bronte', 'bronte_sisters.jpg', 'Bronte sisters painting Branwell'],
    ['bronte', 'roe_head_school.jpg', 'Roe Head School Mirfield'],
    ['bronte', 'smith_elder_london.jpg', 'Victorian London publishing Cornhill'],
    ['bronte', 'scarborough.jpg', 'Scarborough Yorkshire Victorian'],
  ],
  // === HEMINGWAY ===
  'hemingway': [
    ['hemingway', 'oak_park_illinois.jpg', 'Oak Park Illinois historical'],
    ['hemingway', 'fossalta_di_piave.jpg', 'Fossalta di Piave Italy WWI'],
    ['hemingway', 'gare_de_lyon.jpg', 'Gare de Lyon Paris historical'],
    ['hemingway', 'paris_latin_quarter.jpg', 'Paris Latin Quarter 1920s'],
    ['hemingway', 'gertrude_stein.jpg', 'Gertrude Stein portrait'],
    ['hemingway', 'shakespeare_and_co.jpg', 'Shakespeare and Company Paris bookstore'],
    ['hemingway', 'closerie_des_lilas.jpg', 'Closerie des Lilas Paris cafe'],
    ['hemingway', 'pamplona_spain.jpg', 'Pamplona San Fermin running bulls'],
    ['hemingway', 'hemingway_paris.jpg', 'Ernest Hemingway Paris 1920s passport'],
  ],
  // === ORSON WELLES ===
  'welles': [
    ['welles', 'kenosha_wisconsin.jpg', 'Kenosha Wisconsin historical'],
    ['welles', 'gate_theatre_dublin.jpg', 'Gate Theatre Dublin'],
    ['welles', 'mercury_theatre_nyc.jpg', 'Mercury Theatre New York 1937'],
    ['welles', 'cbs_radio_studio.jpg', 'CBS Radio broadcasting studio 1930s'],
    ['welles', 'rko_pictures_hollywood.jpg', 'RKO Pictures Hollywood studio lot'],
    ['welles', 'citizen_kane_filming.jpg', 'Citizen Kane filming camera'],
    ['welles', 'rko_stage_set.jpg', 'Citizen Kane Xanadu set design'],
    ['welles', 'hearst_castle.jpg', 'Hearst Castle San Simeon'],
    ['welles', 'citizen_kane_premiere.jpg', 'Orson Welles Citizen Kane 1941'],
  ],
  // === BEATLES HAMBURG ===
  'beatles': [
    ['beatles', 'liverpool_cavern.jpg', 'Cavern Club Liverpool Beatles'],
    ['beatles', 'indra_club_hamburg.jpg', 'Indra Club Hamburg Reeperbahn'],
    ['beatles', 'kaiserkeller_hamburg.jpg', 'Kaiserkeller Hamburg Reeperbahn'],
    ['beatles', 'hamburg_reeperbahn.jpg', 'Hamburg Reeperbahn 1960s'],
    ['beatles', 'top_ten_club_hamburg.jpg', 'Top Ten Club Hamburg'],
    ['beatles', 'star_club_hamburg.jpg', 'Star Club Hamburg'],
    ['beatles', 'astrid_kirchherr.jpg', 'Astrid Kirchherr photography'],
  ],
  // === DYLAN ELECTRIC ===
  'dylan': [
    ['dylan', 'hibbing_minnesota.jpg', 'Hibbing Minnesota iron range'],
    ['dylan', 'greenwich_village.jpg', 'Greenwich Village New York 1960s folk'],
    ['dylan', 'newport_folk_1963.jpg', 'Newport Folk Festival 1963'],
    ['dylan', 'columbia_studio_a.jpg', 'Columbia Records Studio New York'],
    ['dylan', 'newport_folk_1965.jpg', 'Newport Folk Festival 1965 electric'],
    ['dylan', 'manchester_free_trade.jpg', 'Manchester Free Trade Hall'],
  ],
  // === BEACH BOYS PET SOUNDS ===
  'beachboys': [
    ['beachboys', 'hawthorne_california.jpg', 'Hawthorne California 1960s'],
    ['beachboys', 'brian_wilson.jpg', 'Brian Wilson Beach Boys studio'],
    ['beachboys', 'gold_star_studios.jpg', 'Gold Star Studios Hollywood'],
    ['beachboys', 'western_recorders.jpg', 'Western Recorders Hollywood studio'],
    ['beachboys', 'capitol_records.jpg', 'Capitol Records building Hollywood'],
    ['beachboys', 'emi_studios_london.jpg', 'EMI Studios Abbey Road London'],
    ['beachboys', 'sunset_sound.jpg', 'Sunset Sound Studios Hollywood'],
  ],
};

async function searchWikimediaCommons(query) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrnamespace: '6', // File namespace
    gsrsearch: query,
    gsrlimit: '5',
    prop: 'imageinfo',
    iiprop: 'url|size|mime',
    iiurlwidth: '1200',
    format: 'json',
    origin: '*',
  });

  const url = `https://commons.wikimedia.org/w/api.php?${params}`;

  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'FieldNotesBot/1.0 (documentary project)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.query || !json.query.pages) {
            resolve(null);
            return;
          }
          const pages = Object.values(json.query.pages);
          // Find the first JPEG or PNG image that's large enough
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
        } catch (e) {
          reject(e);
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'FieldNotesBot/1.0 (documentary project)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(destPath);
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function processDocumentary(docName, searches) {
  const results = {};
  for (const [subdir, filename, query] of searches) {
    const dirPath = path.join(OUTDIR, subdir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const destPath = path.join(dirPath, filename);
    if (fs.existsSync(destPath)) {
      console.log(`  [SKIP] ${subdir}/${filename} already exists`);
      results[filename] = { status: 'exists', path: `/${subdir}/${filename}` };
      continue;
    }

    console.log(`  [SEARCH] "${query}"`);
    try {
      const result = await searchWikimediaCommons(query);
      if (!result) {
        console.log(`  [MISS] No suitable image found for "${query}"`);
        results[filename] = { status: 'not_found' };
        continue;
      }

      console.log(`  [FOUND] ${result.title} (${result.width}x${result.height})`);

      // Adjust extension based on actual file type
      const actualExt = result.url.match(/\.(jpg|jpeg|png)(\?|$)/i)?.[1] || 'jpg';
      const finalFilename = filename.replace(/\.\w+$/, `.${actualExt}`);
      const finalPath = path.join(dirPath, finalFilename);

      await downloadFile(result.url, finalPath);
      console.log(`  [OK] Downloaded to ${subdir}/${finalFilename}`);
      results[finalFilename] = {
        status: 'downloaded',
        path: `/${subdir}/${finalFilename}`,
        credit: result.title.replace('File:', ''),
        originalUrl: result.originalUrl
      };

      // Small delay to be polite to the API
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.log(`  [ERROR] ${err.message}`);
      results[filename] = { status: 'error', error: err.message };
    }
  }
  return results;
}

async function main() {
  console.log('=== Downloading Wikimedia Commons images for documentaries ===\n');

  const allResults = {};

  for (const [docName, searches] of Object.entries(IMAGE_SEARCHES)) {
    console.log(`\n--- ${docName.toUpperCase()} ---`);
    allResults[docName] = await processDocumentary(docName, searches);
  }

  // Write results to a JSON file for reference
  fs.writeFileSync('image-download-results.json', JSON.stringify(allResults, null, 2));
  console.log('\n=== Done! Results saved to image-download-results.json ===');
}

main().catch(console.error);
