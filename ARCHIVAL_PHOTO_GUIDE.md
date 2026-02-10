# Archival Photo Guide - 3 Act Documentary Enhancement

Quick reference for finding and adding authentic 1960s photos to enhance each act of the Hendrix documentary.

## Act 1: American Blues Roots

### Recommended Searches

**Wikimedia Commons:**
```
https://commons.wikimedia.org/wiki/Category:Muddy_Waters
https://commons.wikimedia.org/wiki/Category:Howlin%27_Wolf
https://commons.wikimedia.org/wiki/Category:B.B._King
```

**What to look for:**
- Performance photos from the 1960s
- Chess Records studio sessions
- Close-ups showing emotion and technique

### Adding Photos

1. Download high-res image to `/public/archival/`
2. Use descriptive filename: `muddy_waters_1960s.jpg`
3. Update `documentary.ts` line 94 to use new photo:
   ```typescript
   photoUrl: '/archival/muddy_waters_1960s.jpg',
   ```

---

## Act 2: London Scene (1966)

### Recommended Searches

**Wikimedia Commons:**
```
https://commons.wikimedia.org/wiki/Category:London_in_the_1960s
https://commons.wikimedia.org/wiki/Category:Soho,_London
https://commons.wikimedia.org/wiki/Category:Cream_(band)
```

**What to look for:**
- Soho street scenes at night
- Marquee Club or other music venues
- Cream publicity photos from 1966-1967
- British youth/mod culture

### Priority Additions

1. **Marquee Club** - The legendary Wardour Street venue
2. **Cream performing** - To match the "Spoonful" track
3. **More London streets** - Atmospheric 1966 scenes

---

## Act 3: Hendrix's Arrival

### Current Coverage
✅ Good variety of AI-generated performance photos
✅ Venue and audience scenes covered

### Potential Enhancements

**Wikimedia Commons:**
```
https://commons.wikimedia.org/wiki/Category:Jimi_Hendrix
```

**What to look for:**
- 1966-1967 London photos specifically
- Regent Street or Polytechnic building historical photos
- The Jimi Hendrix Experience band photos

> **Note:** Most authentic Hendrix performance photos are copyrighted. The AI-generated images we're using may be the best option for this act.

---

## Quick Add Workflow

### 1. Find Photo
Search Wikimedia Commons or other public domain sources

### 2. Check License
✅ Public domain
✅ CC0 (Creative Commons Zero)
✅ CC BY (with attribution)
❌ All Rights Reserved

### 3. Download
Save to `/public/archival/` with descriptive name

### 4. Update Code
Edit `lib/documentary.ts`, find the slide, update `photoUrl`:
```typescript
{
    photoUrl: '/archival/your_new_photo.jpg',
    photoTitle: 'Photo Description',
    animation: 'zoom-in',
    // ... rest of slide config
}
```

### 5. Test
Run `npm run dev` and watch the documentary

---

## Pro Tips

🎯 **Search by year:** Add "1966" or "1960s" to narrow results  
📸 **High resolution:** Aim for 1200px+ width for Ken Burns effect  
📝 **Keep notes:** Record source URL and photographer in a comment  
⚖️ **When in doubt:** AI-generated photos are legally safer than risky downloads

---

## Current Photo Inventory

**Act 1 (Blues Roots):**
- ✅ Howlin' Wolf (1970)
- ⚠️ Need: Muddy Waters, B.B. King

**Act 2 (London Scene):**
- ✅ Carnaby Street (1966)
- ✅ Piccadilly Circus (1962)
- ⚠️ Need: Marquee Club, Cream band

**Act 3 (Hendrix):**
- ✅ 9 AI-generated photos covering the narrative
- ℹ️ Optional: Replace with authentic photos if found

---

## Alternative: Generate More AI Images

If archival photos are hard to find, you can request more AI-generated images:

**Useful prompts for Acts 1 & 2:**
- "Muddy Waters performing on stage, 1960s, black and white photo"
- "Marquee Club London exterior, 1966, vintage photograph"
- "British blues band performing, 1960s London, documentary style"

Store generated images in `/public/photos/` and update `documentary.ts` accordingly.
