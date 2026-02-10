#!/usr/bin/env node
// Download images from Wikimedia using the API to get direct original URLs
// Then use curl to download them (curl handles Wikimedia's requirements better)
import https from 'https';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function searchWikimediaCommons(query) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: query,
    gsrlimit: '5',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '800',
    format: 'json',
    origin: '*',
  });

  const url = `https://commons.wikimedia.org/w/api.php?${params}`;

  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'FieldNotesDocumentary/1.0 (https://github.com/fieldnotes; fieldnotes@example.com) node-https' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.query?.pages) { resolve(null); return; }
          const pages = Object.values(json.query.pages);
          for (const page of pages) {
            if (page.imageinfo?.[0]) {
              const info = page.imageinfo[0];
              if ((info.mime === 'image/jpeg' || info.mime === 'image/png') && info.width >= 400) {
                // Get the license info
                const license = info.extmetadata?.LicenseShortName?.value || 'Public domain';
                resolve({
                  title: page.title,
                  thumbUrl: info.thumburl,
                  originalUrl: info.url,
                  descUrl: info.descriptionurl,
                  width: info.width,
                  height: info.height,
                  license,
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

function downloadWithCurl(url, destPath) {
  try {
    execSync(`curl -sL -o "${destPath}" -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" "${url}"`, {
      timeout: 30000,
    });
    const stats = fs.statSync(destPath);
    if (stats.size < 1000) {
      // Probably an error page, not an image
      fs.unlinkSync(destPath);
      return false;
    }
    return true;
  } catch (e) {
    if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    return false;
  }
}

// Map of documentary -> [subdir, filename, search_query, display_title]
const SEARCHES = [
  // DARWIN
  ['darwin', 'hms_beagle.jpg', 'HMS Beagle ship Conrad Martens', 'HMS Beagle (Conrad Martens)'],
  ['darwin', 'brazilian_rainforest.jpg', 'Brazilian tropical rainforest Atlantic', 'Brazilian Rainforest'],
  ['darwin', 'megatherium_fossil.jpg', 'Megatherium fossil skeleton drawing', 'Megatherium Fossil'],
  ['darwin', 'tierra_del_fuego.jpg', 'Tierra del Fuego landscape mountain', 'Tierra del Fuego'],
  ['darwin', 'chile_valdivia.jpg', 'Valdivia Chile city', 'Valdivia, Chile'],
  ['darwin', 'falmouth_harbour.jpg', 'Falmouth harbour Cornwall', 'Falmouth Harbour'],
  // EINSTEIN
  ['einstein', 'ulm_munster.jpg', 'Ulm Minster cathedral exterior', 'Ulm Minster'],
  ['einstein', 'munich_marienplatz.jpg', 'Munich Marienplatz Neues Rathaus', 'Munich Marienplatz'],
  ['einstein', 'eth_zurich.jpg', 'ETH Zurich main building facade', 'ETH Zurich'],
  ['einstein', 'bern_patent_office.jpg', 'Bern Switzerland Federal building', 'Bern Patent Office'],
  ['einstein', 'kramgasse_bern.jpg', 'Kramgasse Bern old town clock', 'Kramgasse, Bern'],
  ['einstein', 'einstein_1905.jpg', 'Albert Einstein 1905', 'Albert Einstein, 1905'],
  ['einstein', 'annalen_der_physik.jpg', 'Annalen der Physik Einstein', 'Annalen der Physik'],
  // SHAKESPEARE
  ['shakespeare', 'stratford_birthplace.jpg', 'Shakespeare Birthplace house Stratford', "Shakespeare's Birthplace"],
  ['shakespeare', 'the_theatre_shoreditch.jpg', 'Swan Theatre sketch DeWitt', 'Elizabethan Theatre (de Witt sketch)'],
  ['shakespeare', 'christopher_marlowe.jpg', 'Christopher Marlowe portrait painting', 'Christopher Marlowe'],
  ['shakespeare', 'plague_bill.jpg', 'London plague mortality bill', 'London Plague Bill of Mortality'],
  ['shakespeare', 'globe_theatre.jpg', 'Shakespeare Globe Theatre London', "Shakespeare's Globe Theatre"],
  // BRONTE
  ['bronte', 'thornton_birthplace.jpg', 'Bronte birthplace Thornton Bradford', 'Bronte Birthplace, Thornton'],
  ['bronte', 'haworth_parsonage.jpg', 'Haworth Parsonage Bronte museum', 'Haworth Parsonage'],
  ['bronte', 'yorkshire_moors.jpg', 'Yorkshire moors heather landscape', 'Yorkshire Moors'],
  ['bronte', 'bronte_sisters_painting.jpg', 'Bronte sisters painting Branwell', 'The Bronte Sisters (Branwell Bronte)'],
  ['bronte', 'scarborough_yorkshire.jpg', 'Scarborough Yorkshire coast', 'Scarborough, Yorkshire'],
  // HEMINGWAY
  ['hemingway', 'hemingway_birthplace.jpg', 'Hemingway birthplace Oak Park', 'Hemingway Birthplace, Oak Park'],
  ['hemingway', 'piave_river_wwi.jpg', 'Piave River Italy WW1', 'Piave River, WWI'],
  ['hemingway', 'gare_de_lyon.jpg', 'Gare de Lyon Paris', 'Gare de Lyon, Paris'],
  ['hemingway', 'paris_latin_quarter.jpg', 'Paris Latin Quarter rue Mouffetard', 'Paris Latin Quarter'],
  ['hemingway', 'gertrude_stein.jpg', 'Gertrude Stein portrait photograph', 'Gertrude Stein'],
  ['hemingway', 'shakespeare_company.jpg', 'Shakespeare and Company bookshop Paris', 'Shakespeare and Company, Paris'],
  ['hemingway', 'closerie_des_lilas.jpg', 'Closerie des Lilas Paris cafe', 'La Closerie des Lilas'],
  ['hemingway', 'pamplona_bulls.jpg', 'Pamplona bullring Spain', 'Pamplona Bullring'],
  ['hemingway', 'hemingway_portrait.jpg', 'Ernest Hemingway photograph portrait', 'Ernest Hemingway'],
  // WELLES
  ['welles', 'gate_theatre_dublin.jpg', 'Gate Theatre Dublin Ireland', 'Gate Theatre, Dublin'],
  ['welles', 'mercury_theatre.jpg', 'Mercury Theatre Orson Welles 1937', 'Mercury Theatre Production'],
  ['welles', 'cbs_radio.jpg', 'CBS radio broadcasting 1938', 'CBS Radio Studio'],
  ['welles', 'hearst_castle.jpg', 'Hearst Castle San Simeon exterior', 'Hearst Castle'],
  ['welles', 'citizen_kane_poster.jpg', 'Citizen Kane movie poster 1941', 'Citizen Kane'],
  // BEATLES
  ['beatles', 'liverpool_cavern.jpg', 'Cavern Club Liverpool interior', 'The Cavern Club, Liverpool'],
  ['beatles', 'hamburg_reeperbahn.jpg', 'Hamburg Reeperbahn Grosse Freiheit', 'Reeperbahn, Hamburg'],
  ['beatles', 'star_club_hamburg.jpg', 'Star-Club Hamburg Beatles', 'Star-Club, Hamburg'],
  // DYLAN
  ['dylan', 'greenwich_village.jpg', 'Greenwich Village New York cafe', 'Greenwich Village, NYC'],
  ['dylan', 'newport_folk.jpg', 'Newport Folk Festival stage', 'Newport Folk Festival'],
  ['dylan', 'manchester_free_trade.jpg', 'Manchester Free Trade Hall exterior', 'Manchester Free Trade Hall'],
  // BEACH BOYS
  ['beachboys', 'capitol_records.jpg', 'Capitol Records building Hollywood tower', 'Capitol Records Tower'],
  ['beachboys', 'abbey_road_studios.jpg', 'Abbey Road Studios London EMI', 'Abbey Road Studios, London'],
];

async function main() {
  console.log('=== Downloading images via curl ===\n');
  const results = [];

  for (const [subdir, filename, query, title] of SEARCHES) {
    const dirPath = path.join('./public', subdir);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    // Check existing
    const baseName = filename.replace(/\.\w+$/, '');
    const existing = fs.readdirSync(dirPath).find(f => f.startsWith(baseName));
    if (existing) {
      console.log(`[SKIP] ${subdir}/${existing}`);
      results.push({ subdir, filename: existing, path: `/${subdir}/${existing}`, title, status: 'exists' });
      continue;
    }

    console.log(`[SEARCH] ${query}`);
    try {
      const result = await searchWikimediaCommons(query);
      if (!result) {
        console.log(`  -> No image found`);
        results.push({ subdir, filename, title, status: 'not_found' });
        await new Promise(r => setTimeout(r, 1000));
        continue;
      }

      const ext = result.originalUrl.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg';
      const finalFilename = filename.replace(/\.\w+$/, `.${ext.toLowerCase()}`);
      const destPath = path.join(dirPath, finalFilename);

      // Try thumbnail first (smaller, faster), fall back to original
      const thumbUrl = result.thumbUrl;
      const origUrl = result.originalUrl;

      console.log(`  -> Found: ${result.title}`);
      console.log(`  -> Trying thumb: ${thumbUrl?.substring(0, 80)}...`);

      let ok = false;
      if (thumbUrl) {
        ok = downloadWithCurl(thumbUrl, destPath);
      }
      if (!ok) {
        console.log(`  -> Trying original: ${origUrl.substring(0, 80)}...`);
        ok = downloadWithCurl(origUrl, destPath);
      }

      if (ok) {
        const stats = fs.statSync(destPath);
        console.log(`  -> OK! ${finalFilename} (${Math.round(stats.size/1024)}KB)`);
        results.push({
          subdir,
          filename: finalFilename,
          path: `/${subdir}/${finalFilename}`,
          title,
          credit: result.title.replace('File:', ''),
          license: result.license,
          sourceUrl: result.descUrl,
          status: 'downloaded'
        });
      } else {
        console.log(`  -> FAILED to download`);
        results.push({ subdir, filename, title, status: 'failed' });
      }

      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.log(`  -> ERROR: ${err.message}`);
      results.push({ subdir, filename, title, status: 'error', error: err.message });
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  fs.writeFileSync('image-results-v3.json', JSON.stringify(results, null, 2));

  // Summary
  const downloaded = results.filter(r => r.status === 'downloaded' || r.status === 'exists').length;
  const failed = results.filter(r => r.status !== 'downloaded' && r.status !== 'exists').length;
  console.log(`\n=== Done: ${downloaded} downloaded/existing, ${failed} failed ===`);
}

main().catch(console.error);
