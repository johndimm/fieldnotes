# Finding Historical Photos for Events

## Trusted Sources for 1960s London Music Scene

### Photo Archives

1. **Getty Images** - https://www.gettyimages.com
   - Professional historical music photography
   - Search: "1960s London music scene", "Soho nightlife 1966"
   - Licensing required for most images
   - High quality, authenticated photos

2. **Redferns Music Picture Library** - https://www.redferns.com
   - Specialized in music photography
   - Extensive 1960s British rock archives
   - Commercial licensing available

3. **British Library Images** - https://www.bl.uk/
   - Public domain and licensed historical photos
   - London street scenes, venues, culture
   - Some free downloads available

4. **Hulton Archive / Mirrorpix**
   - British newspapers and magazines
   - 1960s London social documentation
   - Via Getty Images platform

### Free/Creative Commons Options

1. **Wikimedia Commons** - https://commons.wikimedia.org
   - Search: "1960s London", "British rock 1966"
   - Public domain and CC-licensed photos
   - Quality varies but free to use

2. **Library of Congress** - https://www.loc.gov/pictures/
   - Some UK collections
   - Public domain historical photos

3. **Flickr Commons** - https://www.flickr.com/commons
   - Museums and archives sharing photos
   - Filter by 1960s date range
   - Check individual license requirements

### Specific Searches to Try

For the Hendrix/Polytechnic event:
- "Regent Street Polytechnic 1966"
- "Soho music clubs 1960s"
- "British blues scene 1966"
- "Eric Clapton Cream 1966"
- "Jimi Hendrix London 1966"
- "Marquee Club 1960s"

## Best Practices

1. **Verify dates**: Ensure photos are actually from the correct time period
2. **Check licenses**: Always verify usage rights before adding to database
3. **Save metadata**: Record photographer, source, and licensing info
4. **Quality matters**: Aim for high-resolution scans (300+ DPI)
5. **Attribution**: Credit photographers even when not legally required

## Recommended Workflow

1. Research the event (date, venue, performers)
2. Search archives using specific terms
3. Download high-res versions
4. Store in `/public/photos/` with descriptive filenames
5. Update database with proper credit attribution
6. Test in documentary viewer

## Example Database Entry

```sql
INSERT INTO media (media_type, url, title, description, credit, event_id) 
VALUES (
  'photo',
  '/photos/polytechnic_exterior_1966_getty.jpg',
  'Regent Street Polytechnic (1966)',
  'Exterior view of 309 Regent Street',
  'Getty Images / Hulton Archive',
  2
);
```

## AI-Generated vs. Historical Photos

**Use AI-generated when:**
- No historical photos available
- Need specific angles/compositions
- Placeholder for proof of concept

**Use historical photos when:**
- Available from archives
- Authenticity is important
- Event has documented photography
- Building user trust and credibility

For this project, prioritize real photos when possible, fall back to AI generation when necessary.
