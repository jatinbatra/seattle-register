/* The Seattle Register — data + rendering */

const closures = [
  { name: "Macy's Downtown Seattle Flagship", category: "Department Store", neighborhood: "Downtown", address: "1601 3rd Ave", closedYear: 2020, reason: "Restructuring / declining foot traffic", blurb: "The 864,000 sq ft former Bon Marché flagship that opened in 1929 closed in early 2020 as part of Macy's national 125-store closure plan." },
  { name: "Nordstrom Local Capitol Hill", category: "Apparel Services", neighborhood: "Capitol Hill", address: "434 Broadway E", closedYear: 2022, reason: "Pilot concept wind-down", blurb: "Nordstrom shuttered its Capitol Hill 'Local' alterations and pickup hub in 2022 as it consolidated the experimental small-format concept." },
  { name: "Ross Dress for Less Downtown", category: "Apparel", neighborhood: "Downtown", address: "1500 2nd Ave", closedYear: 2023, reason: "Citing safety, crime, and foot traffic", blurb: "Ross closed its 2nd Avenue downtown store in mid-2023, joining a wave of apparel retailers exiting the downtown core." },
  { name: "Old Navy Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2022, reason: "Lease expiration / declining downtown traffic", blurb: "Old Navy shut its long-running Pine Street store in 2022 amid Gap Inc.'s broader fleet review." },
  { name: "Gap Downtown Seattle", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", closedYear: 2021, reason: "Pandemic-driven retail consolidation", blurb: "The 5th Avenue Gap closed in 2021 as part of Gap Inc.'s pandemic-era shutdown of hundreds of mall and street locations." },
  { name: "Saks Off 5th Westlake Center", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2024, reason: "Mall vacancies / lease decision", blurb: "Saks Off 5th vacated its multi-floor Westlake Center space in July 2024, leaving a major hole in the mall's anchor lineup." },
  { name: "Forever 21 Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2025, reason: "National Forever 21 bankruptcy", blurb: "Forever 21 closed its 601 Pine flagship in 2025 as part of its second bankruptcy and full US liquidation; Nordstrom Rack later signed for the building." },
  { name: "Nordstrom Rack Westlake", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2025, reason: "Relocation announcement", blurb: "Nordstrom Rack announced in December 2025 it would close its lower-level Westlake Center space and relocate to the former Forever 21 building in 2027." },
  { name: "Bartell Drugs — 5th Avenue (Store #1)", category: "Drugstore", neighborhood: "Downtown", address: "1404 5th Ave", closedYear: 2023, reason: "Rite Aid bankruptcy / downtown viability", blurb: "The original Bartell store on 5th Ave closed in December 2023 after parent Rite Aid filed for bankruptcy." },
  { name: "Bartell Drugs — 3rd & Union", category: "Drugstore", neighborhood: "Downtown", address: "1404 3rd Ave", closedYear: 2023, reason: "Crime / theft / foot traffic", blurb: "The 3rd & Union Bartell closed in July 2023, one of six downtown locations Bartell shut that year." },
  { name: "Bartell Drugs — Lower Queen Anne", category: "Drugstore", neighborhood: "Lower Queen Anne", address: "600 1st Ave N", closedYear: 2023, reason: "Rite Aid restructuring", blurb: "Seattle's only 24-hour pharmacy closed in September 2023 amid Rite Aid's national wind-down." },
  { name: "Bartell Drugs — Chinatown-ID", category: "Drugstore", neighborhood: "Chinatown-ID", address: "623 S Jackson St", closedYear: 2023, reason: "Rite Aid restructuring", blurb: "The CID flagship Bartell closed in January 2023 in the first wave of Seattle Bartell shutdowns." },
  { name: "Bartell Drugs — University Village", category: "Drugstore", neighborhood: "U-Village", address: "2700 NE University Village St", closedYear: 2025, reason: "CVS acquisition wind-down", blurb: "The U-Village Bartell flagship closed January 23, 2025 as the last Bartell-branded stores were sold or shuttered." },
  { name: "Bartell Drugs — Magnolia", category: "Drugstore", neighborhood: "Magnolia", address: "2400 32nd Ave W", closedYear: 2025, reason: "CVS acquisition wind-down", blurb: "The Magnolia Village Bartell closed in July 2025 as the chain dissolved into CVS." },
  { name: "Bartell Drugs — U-District", category: "Drugstore", neighborhood: "U-District", address: "4344 University Way NE", closedYear: 2024, reason: "Rite Aid / CVS wind-down", blurb: "The U-District Bartell closed in 2024 as part of the Rite Aid/CVS Bartell dissolution." },
  { name: "Walgreens Capitol Hill", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", closedYear: 2024, reason: "Theft / shrink / underperformance", blurb: "Walgreens closed its Broadway store in 2024, citing organized retail theft and store performance." },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "300 Pine St", closedYear: 2022, reason: "Crime / shrink", blurb: "The 3rd & Pine Walgreens, long a flashpoint for downtown disorder, closed in 2022." },
  { name: "Rite Aid Pioneer Square", category: "Drugstore", neighborhood: "Pioneer Square", address: "319 3rd Ave S", closedYear: 2024, reason: "Rite Aid bankruptcy", blurb: "The Pioneer Square Rite Aid closed in 2024 during the company's second Chapter 11 filing." },
  { name: "REI Flagship Seattle", category: "Specialty Retail", neighborhood: "South Lake Union", address: "222 Yale Ave N", closedYear: 2024, reason: "Public safety concerns", blurb: "REI announced in late 2023 it would close its iconic 1996 flagship store, citing public safety. The building remains vacant and seeking tenants." },
  { name: "Bed Bath & Beyond Northgate", category: "Home Goods", neighborhood: "Northgate", address: "302 NE Northgate Way", closedYear: 2023, reason: "National bankruptcy / liquidation", blurb: "The Northgate BB&B closed in mid-2023 as part of the chain's full US liquidation." },
  { name: "Bed Bath & Beyond Interbay", category: "Home Goods", neighborhood: "Interbay", address: "1620 W Dravus St", closedYear: 2023, reason: "National liquidation", blurb: "The Interbay Bed Bath & Beyond closed in 2023 with the rest of the chain." },
  { name: "Tuesday Morning Ballard", category: "Home Goods", neighborhood: "Ballard", address: "1531 NW Market St", closedYear: 2023, reason: "National bankruptcy", blurb: "Tuesday Morning closed its Ballard location in early 2023 during its second and final bankruptcy." },
  { name: "Sur La Table Pike Place", category: "Specialty Retail", neighborhood: "Pike Place", address: "84 Pine St", closedYear: 2020, reason: "Bankruptcy", blurb: "The original Sur La Table at Pike Place closed in 2020 when the Seattle-founded chain filed for bankruptcy and was acquired." },
  { name: "Storyville Coffee Pike Place", category: "Coffee", neighborhood: "Pike Place", address: "94 Pike St #34", closedYear: 2024, reason: "Lease / operations", blurb: "Storyville's flagship coffee bar above Pike Place Market closed in 2024 after years as a tourist favorite." },
  { name: "Cherry Street Coffee House", category: "Coffee", neighborhood: "Downtown", address: "Multiple downtown locations", closedYear: 2023, reason: "Pandemic / remote work", blurb: "Local chain Cherry Street Coffee House closed several downtown cafes in 2022-2023 as office-worker traffic never recovered." },
  { name: "Cafe Hagen Capitol Hill", category: "Coffee", neighborhood: "Capitol Hill", address: "1612 Bellevue Ave", closedYear: 2024, reason: "Lease / economics", blurb: "The Scandinavian-inspired Cafe Hagen closed its Capitol Hill location in 2024." },
  { name: "Dahlia Lounge", category: "Restaurant", neighborhood: "Belltown", address: "2001 4th Ave", closedYear: 2020, reason: "Pandemic restructuring", blurb: "Tom Douglas's flagship Dahlia Lounge closed permanently during the 2020 pandemic shutdown after 30 years." },
  { name: "Palace Kitchen", category: "Restaurant", neighborhood: "Belltown", address: "2030 5th Ave", closedYear: 2024, reason: "Lease end / dining trends", blurb: "Tom Douglas's Palace Kitchen closed in 2024 after 28 years, marking another loss for downtown fine dining." },
  { name: "Wild Ginger Downtown", category: "Restaurant", neighborhood: "Downtown", address: "1401 3rd Ave", closedYear: 2023, reason: "Lease / downtown traffic", blurb: "The original Wild Ginger downtown flagship closed in 2023, though the Bellevue location remained open." },
  { name: "Rocco's Belltown", category: "Restaurant", neighborhood: "Belltown", address: "2228 2nd Ave", closedYear: 2023, reason: "Lease / Belltown turnover", blurb: "Belltown pizza-and-cocktails staple Rocco's closed in 2023 amid the neighborhood's nightlife contraction." },
  { name: "Shorty's Belltown", category: "Bar", neighborhood: "Belltown", address: "2222 2nd Ave", closedYear: 2024, reason: "Lease / building redevelopment", blurb: "The pinball-and-hot-dog dive bar Shorty's, a Belltown fixture for 27 years, closed in 2024." },
  { name: "Re-bar", category: "Bar", neighborhood: "South Lake Union", address: "1114 Howell St", closedYear: 2020, reason: "Building redevelopment", blurb: "The legendary 30-year-old LGBTQ+ club Re-bar lost its lease to redevelopment in 2020; it has been seeking a new home since." },
  { name: "R Place", category: "Bar", neighborhood: "Capitol Hill", address: "619 E Pine St", closedYear: 2022, reason: "Owner retirement / pandemic", blurb: "Capitol Hill gay bar R Place closed in 2022 after more than 35 years." },
  { name: "The Cuff Complex", category: "Bar", neighborhood: "Capitol Hill", address: "1533 13th Ave", closedYear: 2024, reason: "Operations / lease", blurb: "Long-running Capitol Hill leather bar The Cuff Complex announced its closure in 2024 after 30+ years." },
  { name: "Linda's Tavern (partial)", category: "Bar", neighborhood: "Capitol Hill", address: "707 E Pine St", closedYear: 2024, reason: "Staffing / economics", blurb: "Capitol Hill institution Linda's drastically reduced operations in 2024 amid post-pandemic bar industry pressures." },
  { name: "Glo's Cafe", category: "Restaurant", neighborhood: "Capitol Hill", address: "1621 E Olive Way", closedYear: 2023, reason: "Owner retirement", blurb: "Beloved Capitol Hill brunch spot Glo's closed in 2023 after 30+ years." },
  { name: "B&O Espresso", category: "Coffee", neighborhood: "Capitol Hill", address: "204 Belmont Ave E", closedYear: 2020, reason: "Pandemic / lease", blurb: "Capitol Hill dessert and espresso institution B&O closed permanently during the 2020 pandemic after 44 years." },
  { name: "Rusty Pelican Wallingford", category: "Restaurant", neighborhood: "Wallingford", address: "1924 N 45th St", closedYear: 2024, reason: "Lease / costs", blurb: "The Wallingford breakfast staple Rusty Pelican closed in 2024 after decades." },
  { name: "Asean StrEAT Food Hall", category: "Restaurant", neighborhood: "Downtown", address: "400 Pine St (Westlake)", closedYear: 2026, reason: "Eviction / unpaid rent", blurb: "The Westlake Center Southeast Asian food hall was evicted on February 13, 2026 over unpaid rent." },
  { name: "DSW Designer Shoe Warehouse", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2022, reason: "Lease / downtown traffic", blurb: "DSW closed its Westlake-area downtown store in 2022 as foot traffic remained well below pre-pandemic levels." },
  { name: "Uniqlo Westlake Center", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2021, reason: "Pandemic retail pullback", blurb: "Uniqlo closed its Westlake Center store in 2021 during pandemic-related US fleet reductions." },
  { name: "Disney Store Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "National Disney Store closure plan", blurb: "The Pacific Place Disney Store closed in 2021 when Disney shut nearly all of its US mall stores." },
  { name: "Paper Source Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "Bankruptcy", blurb: "Paper Source closed its Pacific Place location in 2021 during its national bankruptcy." },
  { name: "Barnes & Noble Pacific Place", category: "Bookstore", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2020, reason: "Lease / pandemic", blurb: "B&N's three-story Pacific Place store closed in 2020, leaving the mall without an anchor." },
  { name: "Twice Sold Tales Capitol Hill", category: "Bookstore", neighborhood: "Capitol Hill", address: "1833 Harvard Ave", closedYear: 2024, reason: "Owner retirement / lease", blurb: "Capitol Hill used-book staple Twice Sold Tales closed its Harvard Ave shop in 2024 after 35+ years." },
  { name: "Bulldog News U-District", category: "Specialty Retail", neighborhood: "U-District", address: "4208 University Way NE", closedYear: 2023, reason: "Print decline / economics", blurb: "The U-District newsstand and cafe Bulldog News closed in 2023 after 40 years on the Ave." },
  { name: "13 Coins Pioneer Square", category: "Restaurant", neighborhood: "Pioneer Square", address: "255 S King St", closedYear: 2024, reason: "Foot traffic / costs", blurb: "The iconic 24-hour diner shuttered its Pioneer Square location in 2024 citing post-pandemic foot traffic and rising costs." },
  { name: "FX McRory's", category: "Restaurant", neighborhood: "Pioneer Square", address: "419 Occidental Ave S", closedYear: 2024, reason: "Stadium-district decline", blurb: "Stadium-district institution FX McRory's closed after 47 years citing declining post-game and convention foot traffic." },
];

const watchList = [
  { name: "Target — 2nd & Pike", category: "Big Box", neighborhood: "Downtown", address: "1401 2nd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", blurb: "Target's CEO publicly cited Seattle as a shrink hotspot in 2023 earnings calls. Locked-case merchandising is now standard; closure status repeatedly rumored.", severity: "medium" },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "1531 3rd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", blurb: "Among the most theft-impacted stores in Seattle. Locked-up merchandise, reduced hours. Walgreens announced 1,200 nationwide closures in 2024.", severity: "high" },
  { name: "Walgreens Broadway", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", status: "announced", statusLabel: "Announced closure", expectedDate: "2024–2025", blurb: "Capitol Hill's Walgreens was included in the chain's national 1,200-store closure plan announced October 2024.", severity: "high" },
  { name: "Joann Fabrics", category: "Specialty Retail", neighborhood: "Northgate / Aurora", address: "Multiple Seattle-area locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Closing 2025", blurb: "Joann filed Chapter 11 a second time in January 2025 and announced full liquidation of all ~800 stores nationwide.", severity: "high" },
  { name: "Container Store", category: "Specialty Retail", neighborhood: "U-Village", address: "2675 NE University Village", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "TBD 2025", blurb: "Parent company filed Chapter 11 in December 2024. Seattle store remains open but on close-watch list as restructuring proceeds.", severity: "medium" },
  { name: "Big Lots", category: "Discount Retail", neighborhood: "Aurora / Rainier", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "2025", blurb: "Big Lots filed Chapter 11 in September 2024. Most Seattle-area stores closing through 2025 after a partial-rescue acquisition deal.", severity: "high" },
  { name: "Party City", category: "Specialty Retail", neighborhood: "Northgate / regional", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Closed Feb 2025", blurb: "Announced full liquidation December 2024. All ~700 stores closed by February 2025, including Seattle-area locations.", severity: "high" },
  { name: "Express", category: "Apparel", neighborhood: "Pacific Place / U-Village", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Mid-2024", blurb: "Filed Chapter 11 April 2024 and closed ~95 stores including Seattle-area locations. Remaining stores acquired by WHP Global.", severity: "high" },
  { name: "Lululemon — University Village", category: "Apparel", neighborhood: "U-Village", address: "2630 NE University Village", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", blurb: "Site of the high-profile 'Babbling Brook' organized retail crime case. Suspect federally indicted in 2024 for a multi-state PNW Lululemon ring.", severity: "medium" },
  { name: "Uwajimaya CID", category: "Grocery", neighborhood: "Chinatown-ID", address: "600 5th Ave S", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", blurb: "Repeated organized theft and break-in reports in 2024-25; not closing but operating with heightened security amid CID safety concerns.", severity: "low" },
  { name: "QFC Broadway Market", category: "Grocery", neighborhood: "Capitol Hill", address: "417 Broadway E", status: "theft", statusLabel: "Theft hotspot", expectedDate: "TBD", blurb: "Documented theft incidents and reduced hours in 2024. Kroger flagged underperforming Seattle stores after the blocked Albertsons merger.", severity: "medium" },
  { name: "Macy's site (former)", category: "Department Store", neighborhood: "Downtown", address: "300 Pine St", status: "rumored", statusLabel: "Stalled redevelopment", expectedDate: "Ongoing", blurb: "Amazon took several floors but the ground-floor retail space remains largely vacant. A continuing symbol of downtown's struggles.", severity: "medium" },
  { name: "Forever 21 Westlake Center", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "2025", blurb: "Forever 21's US operator filed Chapter 11 again in March 2025 and announced full US liquidation; Westlake Center store closing.", severity: "high" },
  { name: "Gap Downtown", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Gap Inc. announced 350 store closures nationally; the Seattle downtown location is on PSBJ analyst watch lists amid the corporate retrenchment.", severity: "medium" },
  { name: "Old Navy Westlake", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Reduced hours and signage; included in PSBJ lists of downtown retailers analysts are watching after surrounding closures.", severity: "low" },
  { name: "Starbucks Reserve Roastery", category: "Cafe", neighborhood: "Capitol Hill", address: "1124 Pike St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Niccol-era Starbucks restructuring (2024-25) flagged underperforming Reserve venues. The Capitol Hill flagship has been reported as on internal watch.", severity: "low" },
  { name: "Cinerama / SIFF Cinema", category: "Entertainment", neighborhood: "Belltown", address: "2100 4th Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Reopened by SIFF in 2023 after Vulcan's closure but operating with limited programming. Long-term financial sustainability questioned in 2024 reporting.", severity: "low" },
  { name: "Showbox SoDo", category: "Entertainment", neighborhood: "SoDo", address: "1700 1st Ave S", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "AEG-operated venue's lease and future programming repeatedly reported as uncertain amid SoDo development pressure.", severity: "low" },
  { name: "Il Bistro Pike Place", category: "Restaurant", neighborhood: "Pike Place", address: "93A Pike St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Long-standing Pike Place Italian restaurant reported in 2024-25 as struggling with reduced hours and ownership transition speculation.", severity: "low" },
  { name: "Nordstrom Rack — Westlake (current)", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", status: "announced", statusLabel: "Relocating", expectedDate: "By 2027", blurb: "Reduced hours and reports of repeated theft incidents. Confirmed in Dec 2025 to vacate Westlake Center and relocate by 2027.", severity: "medium" },
  { name: "Bartell Drugs (remaining downtown)", category: "Drugstore", neighborhood: "Downtown", address: "Various 3rd Ave locations", status: "announced", statusLabel: "Wind-down", expectedDate: "2024–2025", blurb: "Rite Aid-owned Bartell continued to close downtown locations through 2024 following Rite Aid's Chapter 11 bankruptcy.", severity: "high" },
  { name: "Macy's Westfield Southcenter (regional)", category: "Department Store", neighborhood: "Tukwila", address: "Westfield Southcenter", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Macy's announced 150 additional closures through 2026; PNW analysts flag remaining regional anchor stores as on the watch list.", severity: "low" },
  { name: "CVS Belltown", category: "Drugstore", neighborhood: "Belltown", address: "2400 2nd Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "CVS announced 900 nationwide closures over three years; multiple Seattle locations are reportedly on the corporate review list.", severity: "low" },
  { name: "Cost Plus World Market", category: "Specialty Retail", neighborhood: "U-Village", address: "2675 NE University Village", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "TBD", blurb: "Parent company World Market faces well-reported financial pressure; Seattle-area stores not yet announced but flagged in trade press.", severity: "low" },
  { name: "Capitol Hill Light Rail QFC", category: "Grocery", neighborhood: "Capitol Hill", address: "Broadway & John", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", blurb: "Documented incidents and reduced hours; included with Broadway Market in Kroger's Seattle store-portfolio review.", severity: "low" },
];

/* Stylised positions for the Seattle map (percent of frame). Hand-tuned to feel like a sketched survey, not a real GeoJSON. */
const mapAreas = [
  // Downtown sub-districts
  { name: "Westlake / Pine",     count: 11, type: "down",  x: 51, y: 56 },
  { name: "3rd Ave Corridor",    count: 9,  type: "down",  x: 47, y: 63 },
  { name: "Pacific Place",       count: 5,  type: "down",  x: 56, y: 53 },
  { name: "Pioneer Square",      count: 7,  type: "down",  x: 49, y: 73 },
  { name: "Belltown",            count: 5,  type: "down",  x: 42, y: 49 },
  { name: "Pike Place",          count: 3,  type: "down",  x: 42, y: 60 },
  { name: "Chinatown-ID",        count: 4,  type: "down",  x: 56, y: 78 },
  // Other neighbourhoods
  { name: "Capitol Hill",        count: 8,  type: "other", x: 66, y: 56 },
  { name: "South Lake Union",    count: 4,  type: "other", x: 55, y: 42 },
  { name: "Lower Queen Anne",    count: 2,  type: "other", x: 38, y: 38 },
  { name: "Ballard",             count: 3,  type: "other", x: 24, y: 28 },
  { name: "U-District",          count: 6,  type: "other", x: 70, y: 30 },
  { name: "Northgate",           count: 4,  type: "other", x: 70, y: 14 },
  { name: "Wallingford",         count: 1,  type: "other", x: 50, y: 26 },
  { name: "Magnolia",            count: 1,  type: "other", x: 16, y: 44 },
  { name: "SoDo",                count: 2,  type: "other", x: 49, y: 84 },
  { name: "West Seattle",        count: 3,  type: "other", x: 26, y: 78 },
  { name: "Rainier Valley",      count: 3,  type: "other", x: 76, y: 84 },
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const unique = (arr, key) => [...new Set(arr.map(x => x[key]))].sort((a, b) => typeof a === 'number' ? b - a : String(a).localeCompare(String(b)));

/* ---------- Filters ---------- */
const fSearch = $('search'), fYear = $('filter-year'), fHood = $('filter-neighborhood'), fCat = $('filter-category');

function fillSelect(el, values, allLabel) {
  el.innerHTML = `<option value="">${allLabel}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join('');
}
fillSelect(fYear, unique(closures, 'closedYear'), 'Any year');
fillSelect(fHood, unique(closures, 'neighborhood'), 'Anywhere');
fillSelect(fCat, unique(closures, 'category'), 'All kinds');

/* ---------- Index entries ---------- */
const entriesEl = $('entries'), countEl = $('count'), emptyEl = $('empty');

function renderEntries(items) {
  countEl.textContent = items.length;
  if (!items.length) { entriesEl.innerHTML = ''; emptyEl.hidden = false; return; }
  emptyEl.hidden = true;
  entriesEl.innerHTML = items.map((c, i) => `
    <li class="entry" style="animation-delay: ${Math.min(i * 18, 320)}ms">
      <div class="entry-year">${c.closedYear}</div>
      <div class="entry-body">
        <div class="entry-tags">
          <span class="neighborhood">${escapeHtml(c.neighborhood)}</span>
          <span class="sep">／</span>
          <span class="category">${escapeHtml(c.category)}</span>
        </div>
        <div class="entry-name">${escapeHtml(c.name)}</div>
        <p class="entry-blurb">${escapeHtml(c.blurb)}</p>
        <div class="entry-foot">
          <span><strong>at</strong>&nbsp; ${escapeHtml(c.address)}</span>
          <span><strong>cited</strong>&nbsp; ${escapeHtml(c.reason)}</span>
        </div>
      </div>
    </li>
  `).join('');
}

function applyFilters() {
  const q = fSearch.value.trim().toLowerCase();
  const filtered = closures.filter(c => {
    if (fCat.value && c.category !== fCat.value) return false;
    if (fHood.value && c.neighborhood !== fHood.value) return false;
    if (fYear.value && String(c.closedYear) !== fYear.value) return false;
    if (q) {
      const blob = `${c.name} ${c.address} ${c.blurb} ${c.reason} ${c.category} ${c.neighborhood}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => b.closedYear - a.closedYear || a.name.localeCompare(b.name));
  renderEntries(filtered);
}
[fSearch, fYear, fHood, fCat].forEach(el => el.addEventListener('input', applyFilters));
$('clear').addEventListener('click', () => {
  fSearch.value = ''; fYear.value = ''; fHood.value = ''; fCat.value = '';
  applyFilters();
});
applyFilters();

/* ---------- Watch list ---------- */
function renderWatch() {
  const order = { high: 0, medium: 1, low: 2 };
  const items = [...watchList].sort((a, b) => order[a.severity] - order[b.severity]);
  $('watch-list').innerHTML = items.map(w => `
    <article class="watch-entry">
      <div class="watch-mark s-${w.severity}"></div>
      <div>
        <div class="watch-status">
          <span class="label-${w.status}">${escapeHtml(w.statusLabel)}</span>
          <span class="expected">· expected: ${escapeHtml(w.expectedDate)}</span>
        </div>
        <div class="watch-name">${escapeHtml(w.name)}</div>
        <div class="watch-meta">${escapeHtml(w.neighborhood)} · ${escapeHtml(w.category)} · ${escapeHtml(w.address)}</div>
        <p class="watch-blurb">${escapeHtml(w.blurb)}</p>
      </div>
    </article>
  `).join('');
}
renderWatch();

/* ---------- Stylised Seattle map ---------- */
function renderMap() {
  const frame = $('seattle-map');

  // SVG: stylised coast, lake, downtown frame, route lines.
  const svg = `
    <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stylised map of Seattle">
      <!-- water masses -->
      <path d="M0,0 L0,700 L120,700 L130,640 L150,560 L130,460 L160,360 L140,260 L170,140 L140,40 L150,0 Z"
        fill="rgba(138,169,179,0.06)" stroke="rgba(138,169,179,0.18)" stroke-width="1"/>
      <path d="M1000,0 L850,0 L820,80 L830,160 L840,240 L820,320 L840,420 L820,520 L850,620 L840,700 L1000,700 Z"
        fill="rgba(138,169,179,0.04)" stroke="rgba(138,169,179,0.14)" stroke-width="1"/>
      <!-- Lake Union -->
      <ellipse cx="540" cy="220" rx="80" ry="50" fill="rgba(138,169,179,0.08)" stroke="rgba(138,169,179,0.18)" stroke-width="1"/>
      <text x="540" y="226" text-anchor="middle" fill="rgba(138,169,179,0.6)" font-family="serif" font-size="13" font-style="italic">Lake Union</text>
      <!-- compass / cross-hairs -->
      <g stroke="rgba(236,230,212,0.06)" stroke-width="0.6" fill="none">
        <line x1="0" y1="350" x2="1000" y2="350"/>
        <line x1="500" y1="0" x2="500" y2="700"/>
      </g>
      <!-- downtown bracket frame -->
      <rect x="370" y="320" width="240" height="240" fill="none" stroke="rgba(224,120,86,0.25)" stroke-width="1" stroke-dasharray="3 4"/>
      <text x="378" y="316" fill="rgba(224,120,86,0.55)" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="2">DOWNTOWN</text>
      <!-- water labels -->
      <text x="60" y="150" fill="rgba(138,169,179,0.45)" font-family="serif" font-size="13" font-style="italic">Puget Sound</text>
      <text x="900" y="120" fill="rgba(138,169,179,0.45)" font-family="serif" font-size="13" font-style="italic" text-anchor="end">Lake Washington</text>
      <!-- compass rose -->
      <g transform="translate(940, 60)" stroke="rgba(236,230,212,0.4)" fill="none">
        <line x1="0" y1="-22" x2="0" y2="22"/>
        <line x1="-22" y1="0" x2="22" y2="0"/>
        <text x="0" y="-26" text-anchor="middle" fill="rgba(236,230,212,0.55)" font-family="IBM Plex Mono, monospace" font-size="9">N</text>
      </g>
    </svg>
  `;
  frame.innerHTML = svg;

  // Position labelled markers on top
  const maxCount = Math.max(...mapAreas.map(a => a.count));
  mapAreas.forEach(a => {
    const size = 10 + (a.count / maxCount) * 22; // 10 -> 32 px
    const el = document.createElement('div');
    el.className = 'map-area' + (a.type === 'other' ? ' other' : '');
    el.style.left = a.x + '%';
    el.style.top  = a.y + '%';
    el.innerHTML = `
      <span class="map-dot" style="width:${size}px;height:${size}px"></span>
      <span class="map-label">${escapeHtml(a.name)}</span>
      <span class="map-count">${a.count}</span>
    `;
    el.title = `${a.name}: ${a.count} closures or watch-listed`;
    frame.appendChild(el);
  });
}
renderMap();
