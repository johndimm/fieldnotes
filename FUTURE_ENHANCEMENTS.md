# Future Documentary Enhancements

## Spotify API Integration (Tomorrow)

### Concept
Use Spotify Web API to fetch 30-second preview samples of authentic period tracks.

### Implementation Ideas

```typescript
// Example: Fetch Spotify preview for a track
async function getSpotifyPreview(trackId: string): Promise<string | null> {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  const data = await response.json();
  return data.preview_url; // 30-second MP3 preview
}

// Suggested tracks for Hendrix documentary:
const authentidBluesTracks = [
  { artist: 'Howlin\' Wolf', track: 'Smokestack Lightning', spotifyId: '...' },
  { artist: 'Muddy Waters', track: 'Mannish Boy', spotifyId: '...' },
  { artist: 'John Lee Hooker', track: 'Boom Boom', spotifyId: '...' }
];
```

### Benefits
- Authentic 1960s blues sound
- Legal 30-second samples from Spotify
- No file hosting/storage needed
- Search by artist/track name

### Documentation
- [Spotify Web API - Get Track](https://developer.spotify.com/documentation/web-api/reference/get-track)
- [Spotify Web API - Authorization](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)

---

## Ending Improvements

### Current Issue
Documentary ends on black screen after final slide completes.

### Proposed Solutions

1. **Auto-close** (simplest)
   ```typescript
   // In DocumentaryViewer, detect last slide completion
   if (currentSlideIndex === slides.length - 1 && !isPlaying) {
     setTimeout(() => onClose(), 2000); // Close 2s after last slide ends
   }
   ```

2. **Replay Screen** (better UX)
   - Show "Replay" and "Exit" buttons after completion
   - Fade in over the last photo
   - Allow seamless restart

3. **Loop Mode** (seamless)
   - Fade back to first slide
   - Continuous playback option
   - Good for demo/exhibition mode

### Recommendation
Implement option #2 (Replay Screen) for best user experience.

---

## Music Crossfade

For longer documentaries with multiple music tracks:

```typescript
interface DocumentarySlide {
  // ... existing fields
  audioUrl?: string;  // Per-slide audio
  audioFadeIn?: number;  // Fade duration in ms
  audioFadeOut?: number;
}
```

This would allow transitioning between tracks smoothly.
