# How to Add a New Reel

Open the file `src/data/reels.json` and add a new entry like this:

```json
{
  "url": "https://www.instagram.com/reel/PASTE_YOUR_LINK_HERE/",
  "title": "What you want to call it",
  "label": "Category (e.g. Beauty & Skincare)"
}
```

### Steps:
1. Copy your Instagram reel link (e.g. `https://www.instagram.com/reel/ABC123/`)
2. Open `src/data/reels.json`
3. Add a new `{ }` block at the end of the list (don't forget the comma after the previous one)
4. Save the file
5. Push to Git — the site updates automatically!

### Example file with 2 reels:
```json
[
  {
    "url": "https://www.instagram.com/reel/DGCy7EzoAM1/",
    "title": "Campaign Reel",
    "label": "Finance & Investing"
  },
  {
    "url": "https://www.instagram.com/reel/NEW_REEL_ID/",
    "title": "My New Reel",
    "label": "Fashion"
  }
]
```
