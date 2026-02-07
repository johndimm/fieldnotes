# Adding Background Music to the Documentary

**Note**: Since this is for personal/private use, you can use ANY music you like, including authentic period recordings!

## Recommended: Authentic 1960s Blues/Rock Tracks

For the Hendrix at Polytechnic event, consider these period-appropriate options:

### Perfect Fits (Slow, Atmospheric Blues)
1. **Howlin' Wolf - "Smokestack Lightning"** (instrumental version if available)
   - The song Hendrix covered that night
   - Dark, hypnotic groove
   - Perfect atmosphere

2. **Muddy Waters - "Mannish Boy"**
   - Slow, brooding blues
   - Classic Chicago sound
   - Great for documentary mood

3. **John Lee Hooker - "Boom Boom"**
   - Mid-tempo blues groove
   - Atmospheric and moody
   - Works great on loop

4. **Albert King - "Born Under a Bad Sign"** (instrumental sections)
   - Soulful guitar work
   - 1960s production
   - Perfect vintage vibe

### British Blues (More Contextual)
1. **Cream - "Spoonful"** (instrumental sections)
   - The band Hendrix sat in with
   - Psychedelic blues jam
   - Very appropriate for the story

2. **John Mayall & The Bluesbreakers - "Hideaway"**
   - British blues instrumental
   - Eric Clapton era
   - Perfect 1966 London vibe

3. **Fleetwood Mac - "Albatross"** (later, but atmospheric)
   - Beautiful instrumental
   - Dreamy, cinematic quality

## Installation Steps

1. **Get the music file**:
   - Rip from your own CD/vinyl collection
   - Download from iTunes/Amazon Music you own
   - Use YouTube to MP3 converter for songs in your library

2. **Convert to MP3** (if needed):
   - Use iTunes, VLC, or online converter
   - Aim for 192kbps or higher quality

3. **Place the file**:
   ```bash
   cp ~/Downloads/your_blues_track.mp3 /Users/johndimm/projects/fieldnotes/public/audio/documentary_music.mp3
   ```

4. **Update the code** in `app/events/[id]/page.tsx`:
   ```tsx
   <DocumentaryViewer
     slides={createCuratedHendrixDocumentary()}
     audioUrl="/audio/documentary_music.mp3"
     onClose={() => setDocumentaryMode(false)}
   />
   ```

## Testing

1. Refresh http://localhost:3000/events/2
2. Click "Watch Documentary Segment"
3. Music should start automatically at 30% volume
4. Adjust volume in `DocumentaryViewer.tsx` if needed:
   ```tsx
   audioRef.current.volume = 0.3;  // Change to 0.2 (quieter) or 0.4 (louder)
   ```

## Pro Tips

- **Match the mood**: Slow, atmospheric tracks work best
- **Instrumental preferred**: No vocals competing with quotes
- **Loop-friendly**: Pick something that sounds good repeating
- **Volume balance**: Music should enhance, not overpower the quotes
- **Authenticity**: Using actual 1960s recordings makes it feel more real

## Best Choice for Hendrix Event

**"Smokestack Lightning" by Howlin' Wolf** would be perfect - it's literally the song that influenced "Killing Floor" which Hendrix played that night. Creates a perfect thematic connection!
