/* Gone Dark — single-page atlas */

const closures = [
  { name: "Macy's Downtown Flagship", category: "Department Store", neighborhood: "Downtown", address: "1601 3rd Ave", closedYear: 2020, reason: "Restructuring / declining foot traffic", lat: 47.6098, lng: -122.3380, blurb: "The 864,000 sq ft former Bon Marché flagship that opened in 1929 closed in early 2020 as part of Macy's national 125-store closure plan." },
  { name: "Nordstrom Local Capitol Hill", category: "Apparel Services", neighborhood: "Capitol Hill", address: "434 Broadway E", closedYear: 2022, reason: "Pilot concept wind-down", lat: 47.6228, lng: -122.3208, blurb: "Nordstrom shuttered its Capitol Hill 'Local' alterations and pickup hub in 2022 as it consolidated the experimental small-format concept." },
  { name: "Ross Dress for Less Downtown", category: "Apparel", neighborhood: "Downtown", address: "1500 2nd Ave", closedYear: 2023, reason: "Citing safety, crime, and foot traffic", lat: 47.6088, lng: -122.3402, blurb: "Ross closed its 2nd Avenue downtown store in mid-2023, joining a wave of apparel retailers exiting the downtown core." },
  { name: "Old Navy Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2022, reason: "Lease / declining downtown traffic", lat: 47.6121, lng: -122.3354, blurb: "Old Navy shut its long-running Pine Street store in 2022 amid Gap Inc.'s broader fleet review." },
  { name: "Gap Downtown", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", closedYear: 2021, reason: "Pandemic-driven retail consolidation", lat: 47.6113, lng: -122.3361, blurb: "The 5th Avenue Gap closed in 2021 as part of Gap Inc.'s pandemic-era shutdown of hundreds of mall and street locations." },
  { name: "Saks Off 5th Westlake", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2024, reason: "Mall vacancies / lease decision", lat: 47.6118, lng: -122.3372, blurb: "Saks Off 5th vacated its multi-floor Westlake Center space in July 2024, leaving a major hole in the mall's anchor lineup." },
  { name: "Forever 21 Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2025, reason: "National Forever 21 bankruptcy", lat: 47.6122, lng: -122.3355, blurb: "Forever 21 closed its 601 Pine flagship in 2025 as part of its second bankruptcy and full US liquidation." },
  { name: "Nordstrom Rack Westlake", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2025, reason: "Relocation announcement", lat: 47.6116, lng: -122.3371, blurb: "Nordstrom Rack announced in December 2025 it would close its lower-level Westlake Center space and relocate by 2027." },
  { name: "Bartell #1 — 5th Ave", category: "Drugstore", neighborhood: "Downtown", address: "1404 5th Ave", closedYear: 2023, reason: "Rite Aid bankruptcy", lat: 47.6101, lng: -122.3358, blurb: "The original Bartell store on 5th Ave closed in December 2023 after parent Rite Aid filed for bankruptcy." },
  { name: "Bartell — 3rd & Union", category: "Drugstore", neighborhood: "Downtown", address: "1404 3rd Ave", closedYear: 2023, reason: "Crime / theft", lat: 47.6093, lng: -122.3387, blurb: "The 3rd & Union Bartell closed in July 2023, one of six downtown locations Bartell shut that year." },
  { name: "Bartell — Lower Queen Anne", category: "Drugstore", neighborhood: "Lower Queen Anne", address: "600 1st Ave N", closedYear: 2023, reason: "Rite Aid restructuring", lat: 47.6243, lng: -122.3556, blurb: "Seattle's only 24-hour pharmacy closed in September 2023 amid Rite Aid's national wind-down." },
  { name: "Bartell — Chinatown-ID", category: "Drugstore", neighborhood: "Chinatown-ID", address: "623 S Jackson St", closedYear: 2023, reason: "Rite Aid restructuring", lat: 47.5993, lng: -122.3252, blurb: "The CID flagship Bartell closed in January 2023 in the first wave of Seattle Bartell shutdowns." },
  { name: "Bartell — University Village", category: "Drugstore", neighborhood: "U-Village", address: "2700 NE University Village St", closedYear: 2025, reason: "CVS acquisition wind-down", lat: 47.6646, lng: -122.2992, blurb: "The U-Village Bartell flagship closed January 23, 2025 as the last Bartell-branded stores were sold or shuttered." },
  { name: "Bartell — Magnolia", category: "Drugstore", neighborhood: "Magnolia", address: "2400 32nd Ave W", closedYear: 2025, reason: "CVS acquisition wind-down", lat: 47.6428, lng: -122.3970, blurb: "The Magnolia Village Bartell closed in July 2025 as the chain dissolved into CVS." },
  { name: "Bartell — U-District", category: "Drugstore", neighborhood: "U-District", address: "4344 University Way NE", closedYear: 2024, reason: "Rite Aid / CVS wind-down", lat: 47.6606, lng: -122.3133, blurb: "The U-District Bartell closed in 2024 as part of the Rite Aid/CVS Bartell dissolution." },
  { name: "Walgreens Capitol Hill", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", closedYear: 2024, reason: "Theft / shrink", lat: 47.6213, lng: -122.3211, blurb: "Walgreens closed its Broadway store in 2024, citing organized retail theft and store performance." },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "300 Pine St", closedYear: 2022, reason: "Crime / shrink", lat: 47.6113, lng: -122.3392, blurb: "The 3rd & Pine Walgreens, long a flashpoint for downtown disorder, closed in 2022." },
  { name: "Rite Aid Pioneer Square", category: "Drugstore", neighborhood: "Pioneer Square", address: "319 3rd Ave S", closedYear: 2024, reason: "Rite Aid bankruptcy", lat: 47.5996, lng: -122.3304, blurb: "The Pioneer Square Rite Aid closed in 2024 during the company's second Chapter 11 filing." },
  { name: "REI Flagship Seattle", category: "Specialty Retail", neighborhood: "South Lake Union", address: "222 Yale Ave N", closedYear: 2024, reason: "Public safety concerns", lat: 47.6195, lng: -122.3279, blurb: "REI announced in late 2023 it would close its iconic 1996 flagship store, citing public safety. The building remains vacant." },
  { name: "Bed Bath & Beyond Northgate", category: "Home Goods", neighborhood: "Northgate", address: "302 NE Northgate Way", closedYear: 2023, reason: "National liquidation", lat: 47.7065, lng: -122.3239, blurb: "The Northgate BB&B closed in mid-2023 as part of the chain's full US liquidation." },
  { name: "Bed Bath & Beyond Interbay", category: "Home Goods", neighborhood: "Interbay", address: "1620 W Dravus St", closedYear: 2023, reason: "National liquidation", lat: 47.6516, lng: -122.3852, blurb: "The Interbay Bed Bath & Beyond closed in 2023 with the rest of the chain." },
  { name: "Tuesday Morning Ballard", category: "Home Goods", neighborhood: "Ballard", address: "1531 NW Market St", closedYear: 2023, reason: "National bankruptcy", lat: 47.6685, lng: -122.3792, blurb: "Tuesday Morning closed its Ballard location in early 2023 during its second and final bankruptcy." },
  { name: "Sur La Table Pike Place", category: "Specialty Retail", neighborhood: "Pike Place", address: "84 Pine St", closedYear: 2020, reason: "Bankruptcy", lat: 47.6101, lng: -122.3413, blurb: "The original Sur La Table at Pike Place closed in 2020 when the Seattle-founded chain filed for bankruptcy." },
  { name: "Storyville Coffee Pike Place", category: "Coffee", neighborhood: "Pike Place", address: "94 Pike St", closedYear: 2024, reason: "Lease / operations", lat: 47.6093, lng: -122.3416, blurb: "Storyville's flagship coffee bar above Pike Place Market closed in 2024 after years as a tourist favorite." },
  { name: "Cherry Street Coffee", category: "Coffee", neighborhood: "Downtown", address: "Multiple downtown", closedYear: 2023, reason: "Pandemic / remote work", lat: 47.6075, lng: -122.3330, blurb: "Local chain Cherry Street Coffee House closed several downtown cafes in 2022-2023 as office-worker traffic never recovered." },
  { name: "Cafe Hagen Capitol Hill", category: "Coffee", neighborhood: "Capitol Hill", address: "1612 Bellevue Ave", closedYear: 2024, reason: "Lease / economics", lat: 47.6172, lng: -122.3258, blurb: "The Scandinavian-inspired Cafe Hagen closed its Capitol Hill location in 2024." },
  { name: "Dahlia Lounge", category: "Restaurant", neighborhood: "Belltown", address: "2001 4th Ave", closedYear: 2020, reason: "Pandemic restructuring", lat: 47.6135, lng: -122.3413, blurb: "Tom Douglas's flagship Dahlia Lounge closed permanently during the 2020 pandemic shutdown after 30 years." },
  { name: "Palace Kitchen", category: "Restaurant", neighborhood: "Belltown", address: "2030 5th Ave", closedYear: 2024, reason: "Lease end / dining trends", lat: 47.6149, lng: -122.3402, blurb: "Tom Douglas's Palace Kitchen closed in 2024 after 28 years, marking another loss for downtown fine dining." },
  { name: "Wild Ginger Downtown", category: "Restaurant", neighborhood: "Downtown", address: "1401 3rd Ave", closedYear: 2023, reason: "Lease / downtown traffic", lat: 47.6092, lng: -122.3389, blurb: "The original Wild Ginger downtown flagship closed in 2023, though the Bellevue location remained open." },
  { name: "Rocco's Belltown", category: "Restaurant", neighborhood: "Belltown", address: "2228 2nd Ave", closedYear: 2023, reason: "Lease / Belltown turnover", lat: 47.6149, lng: -122.3441, blurb: "Belltown pizza-and-cocktails staple Rocco's closed in 2023 amid the neighborhood's nightlife contraction." },
  { name: "Shorty's Belltown", category: "Bar", neighborhood: "Belltown", address: "2222 2nd Ave", closedYear: 2024, reason: "Lease / building redevelopment", lat: 47.6147, lng: -122.3438, blurb: "The pinball-and-hot-dog dive bar Shorty's, a Belltown fixture for 27 years, closed in 2024." },
  { name: "Re-bar", category: "Bar", neighborhood: "South Lake Union", address: "1114 Howell St", closedYear: 2020, reason: "Building redevelopment", lat: 47.6173, lng: -122.3334, blurb: "The legendary 30-year-old LGBTQ+ club Re-bar lost its lease to redevelopment in 2020." },
  { name: "R Place", category: "Bar", neighborhood: "Capitol Hill", address: "619 E Pine St", closedYear: 2022, reason: "Owner retirement / pandemic", lat: 47.6151, lng: -122.3217, blurb: "Capitol Hill gay bar R Place closed in 2022 after more than 35 years." },
  { name: "The Cuff Complex", category: "Bar", neighborhood: "Capitol Hill", address: "1533 13th Ave", closedYear: 2024, reason: "Operations / lease", lat: 47.6147, lng: -122.3170, blurb: "Long-running Capitol Hill leather bar The Cuff Complex announced its closure in 2024 after 30+ years." },
  { name: "Linda's Tavern (partial)", category: "Bar", neighborhood: "Capitol Hill", address: "707 E Pine St", closedYear: 2024, reason: "Staffing / economics", lat: 47.6151, lng: -122.3199, blurb: "Capitol Hill institution Linda's drastically reduced operations in 2024 amid post-pandemic bar industry pressures." },
  { name: "Glo's Cafe", category: "Restaurant", neighborhood: "Capitol Hill", address: "1621 E Olive Way", closedYear: 2023, reason: "Owner retirement", lat: 47.6196, lng: -122.3230, blurb: "Beloved Capitol Hill brunch spot Glo's closed in 2023 after 30+ years." },
  { name: "B&O Espresso", category: "Coffee", neighborhood: "Capitol Hill", address: "204 Belmont Ave E", closedYear: 2020, reason: "Pandemic / lease", lat: 47.6188, lng: -122.3258, blurb: "Capitol Hill dessert and espresso institution B&O closed permanently during the 2020 pandemic after 44 years." },
  { name: "Rusty Pelican Wallingford", category: "Restaurant", neighborhood: "Wallingford", address: "1924 N 45th St", closedYear: 2024, reason: "Lease / costs", lat: 47.6608, lng: -122.3358, blurb: "The Wallingford breakfast staple Rusty Pelican closed in 2024 after decades." },
  { name: "Asean StrEAT Food Hall", category: "Restaurant", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2026, reason: "Eviction / unpaid rent", lat: 47.6116, lng: -122.3372, blurb: "The Westlake Center Southeast Asian food hall was evicted on February 13, 2026 over unpaid rent." },
  { name: "DSW Designer Shoe Warehouse", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2022, reason: "Lease / downtown traffic", lat: 47.6117, lng: -122.3373, blurb: "DSW closed its Westlake-area downtown store in 2022 as foot traffic remained well below pre-pandemic levels." },
  { name: "Uniqlo Westlake", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2021, reason: "Pandemic retail pullback", lat: 47.6118, lng: -122.3374, blurb: "Uniqlo closed its Westlake Center store in 2021 during pandemic-related US fleet reductions." },
  { name: "Disney Store Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "National Disney Store closure plan", lat: 47.6125, lng: -122.3358, blurb: "The Pacific Place Disney Store closed in 2021 when Disney shut nearly all of its US mall stores." },
  { name: "Paper Source Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "Bankruptcy", lat: 47.6126, lng: -122.3358, blurb: "Paper Source closed its Pacific Place location in 2021 during its national bankruptcy." },
  { name: "Barnes & Noble Pacific Place", category: "Bookstore", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2020, reason: "Lease / pandemic", lat: 47.6127, lng: -122.3358, blurb: "B&N's three-story Pacific Place store closed in 2020, leaving the mall without an anchor." },
  { name: "Twice Sold Tales", category: "Bookstore", neighborhood: "Capitol Hill", address: "1833 Harvard Ave", closedYear: 2024, reason: "Owner retirement / lease", lat: 47.6203, lng: -122.3219, blurb: "Capitol Hill used-book staple Twice Sold Tales closed its Harvard Ave shop in 2024 after 35+ years." },
  { name: "Bulldog News", category: "Specialty Retail", neighborhood: "U-District", address: "4208 University Way NE", closedYear: 2023, reason: "Print decline / economics", lat: 47.6589, lng: -122.3132, blurb: "The U-District newsstand and cafe Bulldog News closed in 2023 after 40 years on the Ave." },
  { name: "13 Coins Pioneer Square", category: "Restaurant", neighborhood: "Pioneer Square", address: "255 S King St", closedYear: 2024, reason: "Foot traffic / costs", lat: 47.5985, lng: -122.3290, blurb: "The iconic 24-hour diner shuttered its Pioneer Square location in 2024 citing post-pandemic foot traffic and rising costs." },
  { name: "FX McRory's", category: "Restaurant", neighborhood: "Pioneer Square", address: "419 Occidental Ave S", closedYear: 2024, reason: "Stadium-district decline", lat: 47.5961, lng: -122.3328, blurb: "Stadium-district institution FX McRory's closed after 47 years citing declining post-game and convention foot traffic." },
];

const watchList = [
  { name: "Target — 2nd & Pike", category: "Big Box", neighborhood: "Downtown", address: "1401 2nd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", lat: 47.6094, lng: -122.3403, blurb: "Target's CEO publicly cited Seattle as a shrink hotspot. Locked-case merchandising is now standard; closure status repeatedly rumored." },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "1531 3rd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", lat: 47.6113, lng: -122.3389, blurb: "Among the most theft-impacted stores in Seattle. Walgreens announced 1,200 nationwide closures in 2024." },
  { name: "Walgreens Broadway", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", status: "announced", statusLabel: "Announced", expectedDate: "2024–2025", lat: 47.6212, lng: -122.3210, blurb: "Capitol Hill's Walgreens was included in the chain's national 1,200-store closure plan announced October 2024." },
  { name: "Joann Fabrics", category: "Specialty Retail", neighborhood: "Northgate", address: "Multiple Seattle-area", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "Closing 2025", lat: 47.7060, lng: -122.3245, blurb: "Joann filed Chapter 11 again in January 2025 and announced full liquidation of all ~800 stores nationwide." },
  { name: "Container Store", category: "Specialty Retail", neighborhood: "U-Village", address: "2675 NE University Village", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "TBD 2025", lat: 47.6649, lng: -122.2989, blurb: "Parent company filed Chapter 11 in December 2024. Seattle store remains open but on close-watch list." },
  { name: "Big Lots", category: "Discount Retail", neighborhood: "Aurora", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "2025", lat: 47.6979, lng: -122.3441, blurb: "Big Lots filed Chapter 11 in September 2024. Most Seattle-area stores closing through 2025." },
  { name: "Party City", category: "Specialty Retail", neighborhood: "Northgate", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "Closed Feb 2025", lat: 47.7050, lng: -122.3260, blurb: "Announced full liquidation December 2024. All ~700 stores closed by February 2025." },
  { name: "Express", category: "Apparel", neighborhood: "U-Village", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "Mid-2024", lat: 47.6644, lng: -122.2990, blurb: "Filed Chapter 11 April 2024 and closed ~95 stores including Seattle-area locations." },
  { name: "Lululemon U-Village", category: "Apparel", neighborhood: "U-Village", address: "2630 NE University Village", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", lat: 47.6645, lng: -122.2992, blurb: "Site of the high-profile 'Babbling Brook' organized retail crime case. Suspect federally indicted in 2024." },
  { name: "Uwajimaya CID", category: "Grocery", neighborhood: "Chinatown-ID", address: "600 5th Ave S", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", lat: 47.5984, lng: -122.3253, blurb: "Repeated organized theft and break-in reports in 2024-25; not closing but operating with heightened security." },
  { name: "QFC Broadway Market", category: "Grocery", neighborhood: "Capitol Hill", address: "417 Broadway E", status: "theft", statusLabel: "Theft hotspot", expectedDate: "TBD", lat: 47.6231, lng: -122.3209, blurb: "Documented theft incidents and reduced hours in 2024. Kroger flagged underperforming Seattle stores." },
  { name: "Macy's site (former)", category: "Department Store", neighborhood: "Downtown", address: "300 Pine St", status: "rumored", statusLabel: "Stalled", expectedDate: "Ongoing", lat: 47.6112, lng: -122.3392, blurb: "Amazon took several floors but the ground-floor retail space remains largely vacant." },
  { name: "Forever 21 Westlake", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", status: "bankruptcy", statusLabel: "Bankruptcy", expectedDate: "2025", lat: 47.6119, lng: -122.3373, blurb: "Forever 21's US operator filed Chapter 11 again in March 2025 and announced full US liquidation." },
  { name: "Gap Downtown", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6113, lng: -122.3361, blurb: "Gap Inc. announced 350 store closures nationally; the Seattle downtown location is on PSBJ analyst watch lists." },
  { name: "Old Navy Westlake", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6122, lng: -122.3354, blurb: "Reduced hours and signage; included in PSBJ lists of downtown retailers analysts are watching." },
  { name: "Starbucks Reserve Roastery", category: "Cafe", neighborhood: "Capitol Hill", address: "1124 Pike St", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6142, lng: -122.3267, blurb: "Niccol-era Starbucks restructuring (2024-25) flagged underperforming Reserve venues." },
  { name: "Cinerama / SIFF Cinema", category: "Entertainment", neighborhood: "Belltown", address: "2100 4th Ave", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6142, lng: -122.3401, blurb: "Reopened by SIFF in 2023 but operating with limited programming. Long-term sustainability questioned." },
  { name: "Showbox SoDo", category: "Entertainment", neighborhood: "SoDo", address: "1700 1st Ave S", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.5882, lng: -122.3355, blurb: "AEG-operated venue's lease and future programming repeatedly reported as uncertain." },
  { name: "Il Bistro", category: "Restaurant", neighborhood: "Pike Place", address: "93A Pike St", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6094, lng: -122.3416, blurb: "Long-standing Pike Place Italian restaurant reported as struggling with reduced hours." },
  { name: "Nordstrom Rack — Westlake", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", status: "announced", statusLabel: "Relocating", expectedDate: "By 2027", lat: 47.6116, lng: -122.3371, blurb: "Confirmed in Dec 2025 to vacate Westlake Center and relocate by 2027." },
  { name: "CVS Belltown", category: "Drugstore", neighborhood: "Belltown", address: "2400 2nd Ave", status: "rumored", statusLabel: "Rumoured", expectedDate: "TBD", lat: 47.6157, lng: -122.3457, blurb: "CVS announced 900 nationwide closures over three years; multiple Seattle locations are on the corporate review list." },
];

// Unify into one stream
const all = [
  ...closures.map(c => ({ ...c, kind: 'closed', sortKey: c.closedYear })),
  ...watchList.map(w => ({ ...w, kind: 'watch', sortKey: 9999 })),
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Map ---------- */
const map = L.map('map', {
  zoomControl: true,
  scrollWheelZoom: true,
  zoomSnap: 0.5,
}).setView([47.6206, -122.3320], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '© <a href="https://carto.com/">CARTO</a> · © OpenStreetMap',
  subdomains: 'abcd',
}).addTo(map);

const markers = new Map(); // id -> marker
let heatLayer = null;

function pinHtml(item) {
  const cls = item.kind === 'closed' ? 'closed' : item.status;
  return `<div class="pin ${cls}"></div>`;
}
function popupHtml(item) {
  if (item.kind === 'closed') {
    return `
      <div class="pop-tag">${escapeHtml(item.category)} · closed ${item.closedYear}</div>
      <div class="pop-name">${escapeHtml(item.name)}</div>
      <div class="pop-meta">${escapeHtml(item.neighborhood)} · ${escapeHtml(item.address)}</div>
      <p class="pop-blurb">${escapeHtml(item.blurb)}</p>
    `;
  }
  return `
    <div class="pop-tag watch">${escapeHtml(item.statusLabel)} · ${escapeHtml(item.category)}</div>
    <div class="pop-name">${escapeHtml(item.name)}</div>
    <div class="pop-meta">${escapeHtml(item.neighborhood)} · ${escapeHtml(item.address)}</div>
    <p class="pop-blurb">${escapeHtml(item.blurb)}</p>
  `;
}

function id(item) {
  return `${item.kind}-${item.name}-${item.lat}-${item.lng}`;
}

/* ---------- Filters ---------- */
function fillSelect(el, values, allLabel) {
  el.innerHTML = `<option value="">${allLabel}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join('');
}

const years = [...new Set(closures.map(c => c.closedYear))].sort((a, b) => b - a);
const hoods = [...new Set(all.map(x => x.neighborhood))].sort();
fillSelect($('f-year'), years, 'Any year');
fillSelect($('f-hood'), hoods, 'Anywhere');

const fType = $('f-type'), fYear = $('f-year'), fHood = $('f-hood'), q = $('q');

function getFiltered() {
  const text = q.value.trim().toLowerCase();
  const type = fType.value;
  const year = fYear.value;
  const hood = fHood.value;
  return all.filter(x => {
    if (type === 'closed' && x.kind !== 'closed') return false;
    if (type === 'watch' && x.kind !== 'watch') return false;
    if (year && (x.kind !== 'closed' || String(x.closedYear) !== year)) return false;
    if (hood && x.neighborhood !== hood) return false;
    if (text) {
      const blob = `${x.name} ${x.address} ${x.blurb} ${x.category} ${x.neighborhood} ${x.kind === 'closed' ? x.reason : x.statusLabel}`.toLowerCase();
      if (!blob.includes(text)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === 'watch' ? -1 : 1; // watch first
    if (a.kind === 'closed') return b.closedYear - a.closedYear || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name);
  });
}

let activeId = null;

/* ---------- Render markers + heat ---------- */
function renderMap(items) {
  // Clear
  markers.forEach(m => m.remove());
  markers.clear();
  if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }

  // Markers
  items.forEach(x => {
    if (typeof x.lat !== 'number' || typeof x.lng !== 'number') return;
    const m = L.marker([x.lat, x.lng], {
      icon: L.divIcon({
        className: '',
        html: pinHtml(x),
        iconSize: [12, 12],
        iconAnchor: [6, 6],
        popupAnchor: [0, -6],
      }),
    }).bindPopup(popupHtml(x));
    m.on('click', () => {
      setActive(id(x));
    });
    m.addTo(map);
    markers.set(id(x), m);
  });

  // Heat
  const points = items.map(x => [x.lat, x.lng, x.kind === 'closed' ? 1.0 : 0.6]);
  if (points.length) {
    heatLayer = L.heatLayer(points, {
      radius: 28,
      blur: 24,
      maxZoom: 14,
      minOpacity: 0.2,
      gradient: {
        0.0: 'rgba(138,169,179,0)',
        0.35: 'rgba(138,169,179,0.4)',
        0.6: 'rgba(217,163,96,0.6)',
        0.8: 'rgba(224,120,86,0.85)',
        1.0: 'rgba(179,90,61,0.95)',
      },
    }).addTo(map);
  }
}

/* ---------- Render list ---------- */
function renderList(items) {
  const list = $('list');
  if (!items.length) {
    list.innerHTML = '<div class="empty-list">No matches.</div>';
    return;
  }
  list.innerHTML = items.map(x => {
    const dotClass = x.kind === 'closed' ? 'closed' : x.status;
    const yearLabel = x.kind === 'closed' ? x.closedYear : (x.expectedDate || x.statusLabel);
    const meta = x.kind === 'closed'
      ? `${x.neighborhood} · ${x.category}`
      : `${x.statusLabel} · ${x.neighborhood}`;
    return `
      <li class="row-item ${activeId === id(x) ? 'is-active' : ''}" data-id="${escapeHtml(id(x))}">
        <span class="row-dot ${dotClass}"></span>
        <div class="row-body">
          <div class="row-name">${escapeHtml(x.name)}</div>
          <div class="row-meta">${escapeHtml(meta)}</div>
        </div>
        <span class="row-year">${escapeHtml(String(yearLabel))}</span>
      </li>
    `;
  }).join('');

  list.querySelectorAll('.row-item').forEach(el => {
    el.addEventListener('click', () => {
      const rowId = el.dataset.id;
      const item = items.find(x => id(x) === rowId);
      if (!item) return;
      setActive(rowId);
      map.flyTo([item.lat, item.lng], 16, { duration: 0.6 });
      const m = markers.get(rowId);
      if (m) setTimeout(() => m.openPopup(), 600);
    });
  });
}

function setActive(rowId) {
  // Deactivate previous pin
  if (activeId && markers.has(activeId)) {
    const prev = markers.get(activeId);
    const el = prev.getElement();
    if (el) el.querySelector('.pin')?.classList.remove('is-active');
  }
  activeId = rowId;
  if (markers.has(rowId)) {
    const cur = markers.get(rowId);
    const el = cur.getElement();
    if (el) el.querySelector('.pin')?.classList.add('is-active');
  }
  // Toggle list highlight
  document.querySelectorAll('.row-item.is-active').forEach(el => el.classList.remove('is-active'));
  const row = document.querySelector(`.row-item[data-id="${CSS.escape(rowId)}"]`);
  if (row) {
    row.classList.add('is-active');
    row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

/* ---------- KPIs ---------- */
function renderKPIs(items) {
  const closed = items.filter(x => x.kind === 'closed').length;
  const watch  = items.filter(x => x.kind === 'watch').length;

  const counts = {};
  items.forEach(x => counts[x.neighborhood] = (counts[x.neighborhood] || 0) + 1);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const hottest = sorted.length ? `${sorted[0][0]} (${sorted[0][1]})` : '—';

  $('k-closed').textContent = closed;
  $('k-watch').textContent = watch;
  $('k-area').textContent = hottest;
  $('bar-count').innerHTML = `<strong>${items.length}</strong> entries`;
}

/* ---------- Apply ---------- */
function applyAll() {
  const items = getFiltered();
  renderMap(items);
  renderList(items);
  renderKPIs(items);
}

[q, fType, fYear, fHood].forEach(el => el.addEventListener('input', applyAll));
$('reset').addEventListener('click', () => {
  q.value = ''; fType.value = ''; fYear.value = ''; fHood.value = '';
  activeId = null;
  map.flyTo([47.6206, -122.3320], 12, { duration: 0.6 });
  applyAll();
});

applyAll();
