# The Seattle Register of Lost & Threatened Storefronts

A quiet broadsheet-style archive of Seattle businesses that have permanently closed since 2020,
plus a watch list of those reported as struggling, in bankruptcy, or hit by repeated theft.

**Live:** https://closed-in-seattle-1779905300.netlify.app

## What's in it

- **45 closures** — chronologically indexed, filterable by year, neighbourhood, category
- **25 watch-listed stores** — with severity stripes and status (announced, bankruptcy, theft, rumoured)
- **Stylised Seattle map** — markers sized by the number of recorded closures + watch-list entries
- **Five field notes** on the patterns the data keeps repeating

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies.
Hosted on Netlify.

- `index.html` — structure
- `styles.css` — broadsheet design system (Newsreader serif + IBM Plex Mono, evergreen + Pike Place salmon)
- `app.js` — data + rendering
- `netlify.toml` — deploy config + security headers

## Sources

Seattle Times, Puget Sound Business Journal, Capitol Hill Seattle Blog, GeekWire,
KING 5, KIRO 7, Axios Seattle, the Downtown Seattle Association *State of Downtown 2024*,
SPD CompStat, and local Reddit threads.

Watch-list status reflects public reporting and analyst speculation, not confirmed closure.
Some addresses are approximate. Spotted a closure that's missing or wrong? Open an issue.
