# Music API Setup Guide - Deezer Integration

This guide explains how to use the **Deezer API** to get music samples (30-second preview clips) for your documentary application.

> **Why Deezer?** Spotify deprecated their preview URLs in November 2024. Deezer provides reliable, working preview URLs for both classic and modern tracks, and doesn't require authentication for basic search!

## Quick Start

The Deezer API is already integrated and ready to use. No setup required!

### Test it now:

**Search for classic blues:**
```
http://localhost:3000/api/music/deezer/search?q=Howlin%20Wolf%20Smokestack%20Lightning
```

**Search for any artist:**
```
http://localhost:3000/api/music/deezer/search?q=YOUR_SEARCH_QUERY
```

## What You Get

Each track includes:
- ✅ **previewUrl**: 30-second MP3 preview (always present!)
- 🎨 **imageUrl**: Album artwork
- 📝 **Track metadata**: Name, artist, album, duration
- 🔗 **externalUrl**: Link to full track on Deezer

## API Response Example

```json
{
  "tracks": [
    {
      "id": "3158991",
      "name": "Smokestack Lightnin'",
      "artist": "Howlin' Wolf",
      "album": "Moanin' In The Moonlight",
      "previewUrl": "https://cdnt-preview.dzcdn.net/api/1/1/d/a/2/...",
      "imageUrl": "https://api.deezer.com/album/314888/image",
      "releaseDate": "1959-01-01",
      "duration": 176,
      "externalUrl": "https://www.deezer.com/track/3158991"
    }
  ]
}
```

## Usage in Your Code

### Search for tracks

```typescript
// In your component or API route
const response = await fetch(
  '/api/music/deezer/search?q=Muddy Waters Mannish Boy&limit=5'
);
const { tracks } = await response.json();

// Get the first track's preview
const previewUrl = tracks[0].previewUrl;
```

### Recommended Searches for Hendrix Documentary

```typescript
const documentaryMusic = [
  'Howlin Wolf Smokestack Lightning',
  'Muddy Waters Mannish Boy',
  'John Lee Hooker Boom Boom',
  'Albert King Born Under a Bad Sign',
  'Cream Spoonful',
  'John Mayall Hideaway',
  'BB King The Thrill Is Gone',
  'Jimi Hendrix Purple Haze',
];

// Search and get previews
for (const query of documentaryMusic) {
  const response = await fetch(
    `/api/music/deezer/search?q=${encodeURIComponent(query)}`
  );
  const { tracks } = await response.json();
  
  if (tracks.length > 0) {
    console.log(`${query}: ${tracks[0].previewUrl}`);
  }
}
```

## Integration with DocumentaryViewer

Update your `DocumentaryViewer.tsx` to use Deezer previews:

```tsx
// Example: Fetch preview for a specific track
async function getMusicForDocumentary(searchQuery: string) {
  const response = await fetch(
    `/api/music/deezer/search?q=${encodeURIComponent(searchQuery)}`
  );
  const { tracks } = await response.json();
  
  return tracks[0]?.previewUrl || null;
}

// Use in your component
const [musicUrl, setMusicUrl] = useState<string | null>(null);

useEffect(() => {
  getMusicForDocumentary('Howlin Wolf Smokestack Lightning')
    .then(setMusicUrl);
}, []);

// Then pass to DocumentaryViewer
<DocumentaryViewer
  slides={createCuratedHendrixDocumentary()}
  audioUrl={musicUrl}
  onClose={() => setDocumentaryMode(false)}
/>
```

## API Reference

### Search Endpoint

**URL:** `/api/music/deezer/search`

**Method:** `GET`

**Parameters:**
- `q` (required): Search query string
- `limit` (optional): Number of results (default: 5)

**Example:**
```
/api/music/deezer/search?q=BB%20King&limit=10
```

## Files Created

- [`lib/deezer.ts`](file:///Users/johndimm/projects/fieldnotes/lib/deezer.ts) - Deezer API helper functions
- [`app/api/music/deezer/search/route.ts`](file:///Users/johndimm/projects/fieldnotes/app/api/music/deezer/search/route.ts) - API search endpoint

## Advantages Over Spotify

✅ **Working preview URLs** - All tracks have 30-second previews  
✅ **No authentication** - Simpler setup, no API keys needed  
✅ **Classic blues coverage** - Great catalog of 1960s era music  
✅ **Reliable** - Currently maintained and not deprecated  
✅ **Free tier** - No costs for personal projects  

## Preview URL Details

- **Duration:** 30 seconds
- **Format:** MP3
- **Quality:** Good enough for background music
- **Expiration:** URLs expire but can be refreshed by searching again
- **CORS:** Fully supported for browser playback

## Next Steps

1. **Test the integration** - Try the URLs above in your browser
2. **Pick your tracks** - Search for blues/rock tracks for your documentary
3. **Integrate with UI** - Add music selection to your DocumentaryViewer
4. **Consider caching** - Store preview URLs temporarily to avoid repeated searches

## Pro Tips

- **Search variations:** Try different spellings and artist name variations
- **Remastered versions:** Often have better audio quality
- **Album vs single:** Search for album versions for more authentic sound
- **Fallback logic:** Always have a backup local file in case API is down

## Alternative: Local Files

For the most authentic experience with your Hendrix documentary, you can still use local audio files:

1. Place MP3 files in `/public/audio/`
2. Reference them as `/audio/your-track.mp3`
3. Use in DocumentaryViewer: `audioUrl="/audio/smokestack-lightning.mp3"`

This gives you full control and can use the actual period recordings rather than remastered versions.

## Troubleshooting

**No results returned:**
- Try simplifying the search query
- Search by artist name only, then filter results
- Check for typos in artist/track names

**Preview URL doesn't play:**
- URL may have expired (they're temporary)
- Re-fetch by searching again
- Check browser console for CORS errors (shouldn't happen)

**Low quality audio:**
- Previews are compressed MP3s
- For production, consider local high-quality files

## Resources

- [Deezer API Documentation](https://developers.deezer.com/api)
- [Deezer API Explorer](https://developers.deezer.com/api/explorer)
