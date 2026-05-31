/* Gone Dark — Seattle storefront atlas */

const closures = [
  { name: "Macy's Downtown Seattle Flagship", category: "Department Store", neighborhood: "Downtown", address: "1601 3rd Ave", closedYear: 2020, reason: "Restructuring / declining foot traffic", lat: 47.6098, lng: -122.3380, blurb: "The 864,000 sq ft former Bon Marché flagship that opened in 1929 closed in early 2020 as part of Macy's national 125-store closure plan." },
  { name: "Nordstrom Local Capitol Hill", category: "Apparel Services", neighborhood: "Capitol Hill", address: "434 Broadway E", closedYear: 2022, reason: "Pilot concept wind-down", lat: 47.6228, lng: -122.3208, blurb: "Nordstrom shuttered its Capitol Hill 'Local' alterations and pickup hub in 2022 as it consolidated the experimental small-format concept." },
  { name: "Ross Dress for Less Downtown", category: "Apparel", neighborhood: "Downtown", address: "1500 2nd Ave", closedYear: 2023, reason: "Citing safety, crime, and foot traffic", lat: 47.6088, lng: -122.3402, blurb: "Ross closed its 2nd Avenue downtown store in mid-2023, joining a wave of apparel retailers exiting the downtown core." },
  { name: "Old Navy Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2022, reason: "Lease expiration / declining downtown traffic", lat: 47.6121, lng: -122.3354, blurb: "Old Navy shut its long-running Pine Street store in 2022 amid Gap Inc.'s broader fleet review." },
  { name: "Gap Downtown Seattle", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", closedYear: 2021, reason: "Pandemic-driven retail consolidation", lat: 47.6113, lng: -122.3361, blurb: "The 5th Avenue Gap closed in 2021 as part of Gap Inc.'s pandemic-era shutdown of hundreds of mall and street locations." },
  { name: "Saks Off 5th Westlake Center", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2024, reason: "Mall vacancies / lease decision", lat: 47.6118, lng: -122.3372, blurb: "Saks Off 5th vacated its multi-floor Westlake Center space in July 2024, leaving a major hole in the mall's anchor lineup." },
  { name: "Forever 21 Downtown", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", closedYear: 2025, reason: "National Forever 21 bankruptcy", lat: 47.6122, lng: -122.3355, blurb: "Forever 21 closed its 601 Pine flagship in 2025 as part of its second bankruptcy and full US liquidation; Nordstrom Rack later signed for the building." },
  { name: "Nordstrom Rack Westlake", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2025, reason: "Relocation announcement", lat: 47.6116, lng: -122.3371, blurb: "Nordstrom Rack announced in December 2025 it would close its lower-level Westlake Center space and relocate to the former Forever 21 building in 2027." },
  { name: "Bartell Drugs — 5th Avenue (Store #1)", category: "Drugstore", neighborhood: "Downtown", address: "1404 5th Ave", closedYear: 2023, reason: "Rite Aid bankruptcy / downtown viability", lat: 47.6101, lng: -122.3358, blurb: "The original Bartell store on 5th Ave closed in December 2023 after parent Rite Aid filed for bankruptcy." },
  { name: "Bartell Drugs — 3rd & Union", category: "Drugstore", neighborhood: "Downtown", address: "1404 3rd Ave", closedYear: 2023, reason: "Crime / theft / foot traffic", lat: 47.6093, lng: -122.3387, blurb: "The 3rd & Union Bartell closed in July 2023, one of six downtown locations Bartell shut that year." },
  { name: "Bartell Drugs — Lower Queen Anne", category: "Drugstore", neighborhood: "Lower Queen Anne", address: "600 1st Ave N", closedYear: 2023, reason: "Rite Aid restructuring", lat: 47.6243, lng: -122.3556, blurb: "Seattle's only 24-hour pharmacy closed in September 2023 amid Rite Aid's national wind-down." },
  { name: "Bartell Drugs — Chinatown-ID", category: "Drugstore", neighborhood: "Chinatown-ID", address: "623 S Jackson St", closedYear: 2023, reason: "Rite Aid restructuring", lat: 47.5993, lng: -122.3252, blurb: "The CID flagship Bartell closed in January 2023 in the first wave of Seattle Bartell shutdowns." },
  { name: "Bartell Drugs — University Village", category: "Drugstore", neighborhood: "U-Village", address: "2700 NE University Village St", closedYear: 2025, reason: "CVS acquisition wind-down", lat: 47.6646, lng: -122.2992, blurb: "The U-Village Bartell flagship closed January 23, 2025 as the last Bartell-branded stores were sold or shuttered." },
  { name: "Bartell Drugs — Magnolia", category: "Drugstore", neighborhood: "Magnolia", address: "2400 32nd Ave W", closedYear: 2025, reason: "CVS acquisition wind-down", lat: 47.6428, lng: -122.3970, blurb: "The Magnolia Village Bartell closed in July 2025 as the chain dissolved into CVS." },
  { name: "Bartell Drugs — U-District", category: "Drugstore", neighborhood: "U-District", address: "4344 University Way NE", closedYear: 2024, reason: "Rite Aid / CVS wind-down", lat: 47.6606, lng: -122.3133, blurb: "The U-District Bartell closed in 2024 as part of the Rite Aid/CVS Bartell dissolution." },
  { name: "Walgreens Capitol Hill", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", closedYear: 2024, reason: "Theft / shrink / underperformance", lat: 47.6213, lng: -122.3211, blurb: "Walgreens closed its Broadway store in 2024, citing organized retail theft and store performance." },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "300 Pine St", closedYear: 2022, reason: "Crime / shrink", lat: 47.6113, lng: -122.3392, blurb: "The 3rd & Pine Walgreens, long a flashpoint for downtown disorder, closed in 2022." },
  { name: "Rite Aid Pioneer Square", category: "Drugstore", neighborhood: "Pioneer Square", address: "319 3rd Ave S", closedYear: 2024, reason: "Rite Aid bankruptcy", lat: 47.5996, lng: -122.3304, blurb: "The Pioneer Square Rite Aid closed in 2024 during the company's second Chapter 11 filing." },
  { name: "REI Flagship Seattle", category: "Specialty Retail", neighborhood: "South Lake Union", address: "222 Yale Ave N", closedYear: 2024, reason: "Public safety concerns", lat: 47.6195, lng: -122.3279, blurb: "REI announced in late 2023 it would close its iconic 1996 flagship store, citing public safety. The building remains vacant and seeking tenants." },
  { name: "Bed Bath & Beyond Northgate", category: "Home Goods", neighborhood: "Northgate", address: "302 NE Northgate Way", closedYear: 2023, reason: "National bankruptcy / liquidation", lat: 47.7065, lng: -122.3239, blurb: "The Northgate BB&B closed in mid-2023 as part of the chain's full US liquidation." },
  { name: "Bed Bath & Beyond Interbay", category: "Home Goods", neighborhood: "Interbay", address: "1620 W Dravus St", closedYear: 2023, reason: "National liquidation", lat: 47.6516, lng: -122.3852, blurb: "The Interbay Bed Bath & Beyond closed in 2023 with the rest of the chain." },
  { name: "Tuesday Morning Ballard", category: "Home Goods", neighborhood: "Ballard", address: "1531 NW Market St", closedYear: 2023, reason: "National bankruptcy", lat: 47.6685, lng: -122.3792, blurb: "Tuesday Morning closed its Ballard location in early 2023 during its second and final bankruptcy." },
  { name: "Sur La Table Pike Place", category: "Specialty Retail", neighborhood: "Pike Place", address: "84 Pine St", closedYear: 2020, reason: "Bankruptcy", lat: 47.6101, lng: -122.3413, blurb: "The original Sur La Table at Pike Place closed in 2020 when the Seattle-founded chain filed for bankruptcy and was acquired." },
  { name: "Storyville Coffee Pike Place", category: "Coffee", neighborhood: "Pike Place", address: "94 Pike St #34", closedYear: 2024, reason: "Lease / operations", lat: 47.6093, lng: -122.3416, blurb: "Storyville's flagship coffee bar above Pike Place Market closed in 2024 after years as a tourist favorite." },
  { name: "Cherry Street Coffee House", category: "Coffee", neighborhood: "Downtown", address: "Multiple downtown locations", closedYear: 2023, reason: "Pandemic / remote work", lat: 47.6075, lng: -122.3330, blurb: "Local chain Cherry Street Coffee House closed several downtown cafes in 2022-2023 as office-worker traffic never recovered." },
  { name: "Cafe Hagen Capitol Hill", category: "Coffee", neighborhood: "Capitol Hill", address: "1612 Bellevue Ave", closedYear: 2024, reason: "Lease / economics", lat: 47.6172, lng: -122.3258, blurb: "The Scandinavian-inspired Cafe Hagen closed its Capitol Hill location in 2024." },
  { name: "Dahlia Lounge", category: "Restaurant", neighborhood: "Belltown", address: "2001 4th Ave", closedYear: 2020, reason: "Pandemic restructuring", lat: 47.6135, lng: -122.3413, blurb: "Tom Douglas's flagship Dahlia Lounge closed permanently during the 2020 pandemic shutdown after 30 years." },
  { name: "Palace Kitchen", category: "Restaurant", neighborhood: "Belltown", address: "2030 5th Ave", closedYear: 2024, reason: "Lease end / dining trends", lat: 47.6149, lng: -122.3402, blurb: "Tom Douglas's Palace Kitchen closed in 2024 after 28 years, marking another loss for downtown fine dining." },
  { name: "Wild Ginger Downtown", category: "Restaurant", neighborhood: "Downtown", address: "1401 3rd Ave", closedYear: 2023, reason: "Lease / downtown traffic", lat: 47.6092, lng: -122.3389, blurb: "The original Wild Ginger downtown flagship closed in 2023, though the Bellevue location remained open." },
  { name: "Rocco's Belltown", category: "Restaurant", neighborhood: "Belltown", address: "2228 2nd Ave", closedYear: 2023, reason: "Lease / Belltown turnover", lat: 47.6149, lng: -122.3441, blurb: "Belltown pizza-and-cocktails staple Rocco's closed in 2023 amid the neighborhood's nightlife contraction." },
  { name: "Shorty's Belltown", category: "Bar", neighborhood: "Belltown", address: "2222 2nd Ave", closedYear: 2024, reason: "Lease / building redevelopment", lat: 47.6147, lng: -122.3438, blurb: "The pinball-and-hot-dog dive bar Shorty's, a Belltown fixture for 27 years, closed in 2024." },
  { name: "Re-bar", category: "Bar", neighborhood: "South Lake Union", address: "1114 Howell St", closedYear: 2020, reason: "Building redevelopment", lat: 47.6173, lng: -122.3334, blurb: "The legendary 30-year-old LGBTQ+ club Re-bar lost its lease to redevelopment in 2020; it has been seeking a new home since." },
  { name: "R Place", category: "Bar", neighborhood: "Capitol Hill", address: "619 E Pine St", closedYear: 2022, reason: "Owner retirement / pandemic", lat: 47.6151, lng: -122.3217, blurb: "Capitol Hill gay bar R Place closed in 2022 after more than 35 years." },
  { name: "The Cuff Complex", category: "Bar", neighborhood: "Capitol Hill", address: "1533 13th Ave", closedYear: 2024, reason: "Operations / lease", lat: 47.6147, lng: -122.3170, blurb: "Long-running Capitol Hill leather bar The Cuff Complex announced its closure in 2024 after 30+ years." },
  { name: "Linda's Tavern (partial)", category: "Bar", neighborhood: "Capitol Hill", address: "707 E Pine St", closedYear: 2024, reason: "Staffing / economics", lat: 47.6151, lng: -122.3199, blurb: "Capitol Hill institution Linda's drastically reduced operations in 2024 amid post-pandemic bar industry pressures." },
  { name: "Glo's Cafe", category: "Restaurant", neighborhood: "Capitol Hill", address: "1621 E Olive Way", closedYear: 2023, reason: "Owner retirement", lat: 47.6196, lng: -122.3230, blurb: "Beloved Capitol Hill brunch spot Glo's closed in 2023 after 30+ years." },
  { name: "B&O Espresso", category: "Coffee", neighborhood: "Capitol Hill", address: "204 Belmont Ave E", closedYear: 2020, reason: "Pandemic / lease", lat: 47.6188, lng: -122.3258, blurb: "Capitol Hill dessert and espresso institution B&O closed permanently during the 2020 pandemic after 44 years." },
  { name: "Rusty Pelican Wallingford", category: "Restaurant", neighborhood: "Wallingford", address: "1924 N 45th St", closedYear: 2024, reason: "Lease / costs", lat: 47.6608, lng: -122.3358, blurb: "The Wallingford breakfast staple Rusty Pelican closed in 2024 after decades." },
  { name: "Asean StrEAT Food Hall", category: "Restaurant", neighborhood: "Downtown", address: "400 Pine St (Westlake)", closedYear: 2026, reason: "Eviction / unpaid rent", lat: 47.6116, lng: -122.3372, blurb: "The Westlake Center Southeast Asian food hall was evicted on February 13, 2026 over unpaid rent." },
  { name: "DSW Designer Shoe Warehouse", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2022, reason: "Lease / downtown traffic", lat: 47.6117, lng: -122.3373, blurb: "DSW closed its Westlake-area downtown store in 2022 as foot traffic remained well below pre-pandemic levels." },
  { name: "Uniqlo Westlake Center", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", closedYear: 2021, reason: "Pandemic retail pullback", lat: 47.6118, lng: -122.3374, blurb: "Uniqlo closed its Westlake Center store in 2021 during pandemic-related US fleet reductions." },
  { name: "Disney Store Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "National Disney Store closure plan", lat: 47.6125, lng: -122.3358, blurb: "The Pacific Place Disney Store closed in 2021 when Disney shut nearly all of its US mall stores." },
  { name: "Paper Source Pacific Place", category: "Specialty Retail", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2021, reason: "Bankruptcy", lat: 47.6126, lng: -122.3358, blurb: "Paper Source closed its Pacific Place location in 2021 during its national bankruptcy." },
  { name: "Barnes & Noble Pacific Place", category: "Bookstore", neighborhood: "Downtown", address: "600 Pine St", closedYear: 2020, reason: "Lease / pandemic", lat: 47.6127, lng: -122.3358, blurb: "B&N's three-story Pacific Place store closed in 2020, leaving the mall without an anchor." },
  { name: "Twice Sold Tales Capitol Hill", category: "Bookstore", neighborhood: "Capitol Hill", address: "1833 Harvard Ave", closedYear: 2024, reason: "Owner retirement / lease", lat: 47.6203, lng: -122.3219, blurb: "Capitol Hill used-book staple Twice Sold Tales closed its Harvard Ave shop in 2024 after 35+ years." },
  { name: "Bulldog News U-District", category: "Specialty Retail", neighborhood: "U-District", address: "4208 University Way NE", closedYear: 2023, reason: "Print decline / economics", lat: 47.6589, lng: -122.3132, blurb: "The U-District newsstand and cafe Bulldog News closed in 2023 after 40 years on the Ave." },
  { name: "13 Coins Pioneer Square", category: "Restaurant", neighborhood: "Pioneer Square", address: "255 S King St", closedYear: 2024, reason: "Foot traffic / costs", lat: 47.5985, lng: -122.3290, blurb: "The iconic 24-hour diner shuttered its Pioneer Square location in 2024 citing post-pandemic foot traffic and rising costs." },
  { name: "FX McRory's", category: "Restaurant", neighborhood: "Pioneer Square", address: "419 Occidental Ave S", closedYear: 2024, reason: "Stadium-district decline", lat: 47.5961, lng: -122.3328, blurb: "Stadium-district institution FX McRory's closed after 47 years citing declining post-game and convention foot traffic." },
];

const watchList = [
  { name: "Target — 2nd & Pike", category: "Big Box", neighborhood: "Downtown", address: "1401 2nd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", lat: 47.6094, lng: -122.3403, blurb: "Target's CEO publicly cited Seattle as a shrink hotspot in 2023 earnings calls. Locked-case merchandising is now standard; closure status repeatedly rumored.", severity: "medium" },
  { name: "Walgreens 3rd & Pine", category: "Drugstore", neighborhood: "Downtown", address: "1531 3rd Ave", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Watch list", lat: 47.6113, lng: -122.3389, blurb: "Among the most theft-impacted stores in Seattle. Locked-up merchandise, reduced hours. Walgreens announced 1,200 nationwide closures in 2024.", severity: "high" },
  { name: "Walgreens Broadway", category: "Drugstore", neighborhood: "Capitol Hill", address: "320 Broadway E", status: "announced", statusLabel: "Announced closure", expectedDate: "2024–2025", lat: 47.6212, lng: -122.3210, blurb: "Capitol Hill's Walgreens was included in the chain's national 1,200-store closure plan announced October 2024.", severity: "high" },
  { name: "Joann Fabrics", category: "Specialty Retail", neighborhood: "Northgate", address: "Multiple Seattle-area locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Closing 2025", lat: 47.7060, lng: -122.3245, blurb: "Joann filed Chapter 11 a second time in January 2025 and announced full liquidation of all ~800 stores nationwide.", severity: "high" },
  { name: "Container Store", category: "Specialty Retail", neighborhood: "U-Village", address: "2675 NE University Village", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "TBD 2025", lat: 47.6649, lng: -122.2989, blurb: "Parent company filed Chapter 11 in December 2024. Seattle store remains open but on close-watch list as restructuring proceeds.", severity: "medium" },
  { name: "Big Lots", category: "Discount Retail", neighborhood: "Aurora", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "2025", lat: 47.6979, lng: -122.3441, blurb: "Big Lots filed Chapter 11 in September 2024. Most Seattle-area stores closing through 2025 after a partial-rescue acquisition deal.", severity: "high" },
  { name: "Party City", category: "Specialty Retail", neighborhood: "Northgate", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Closed Feb 2025", lat: 47.7050, lng: -122.3260, blurb: "Announced full liquidation December 2024. All ~700 stores closed by February 2025, including Seattle-area locations.", severity: "high" },
  { name: "Express", category: "Apparel", neighborhood: "U-Village", address: "Multiple locations", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "Mid-2024", lat: 47.6644, lng: -122.2990, blurb: "Filed Chapter 11 April 2024 and closed ~95 stores including Seattle-area locations. Remaining stores acquired by WHP Global.", severity: "high" },
  { name: "Lululemon — University Village", category: "Apparel", neighborhood: "U-Village", address: "2630 NE University Village", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", lat: 47.6645, lng: -122.2992, blurb: "Site of the high-profile 'Babbling Brook' organized retail crime case. Suspect federally indicted in 2024 for a multi-state PNW Lululemon ring.", severity: "medium" },
  { name: "Uwajimaya CID", category: "Grocery", neighborhood: "Chinatown-ID", address: "600 5th Ave S", status: "theft", statusLabel: "Theft hotspot", expectedDate: "Open, hardened", lat: 47.5984, lng: -122.3253, blurb: "Repeated organized theft and break-in reports in 2024-25; not closing but operating with heightened security amid CID safety concerns.", severity: "low" },
  { name: "QFC Broadway Market", category: "Grocery", neighborhood: "Capitol Hill", address: "417 Broadway E", status: "theft", statusLabel: "Theft hotspot", expectedDate: "TBD", lat: 47.6231, lng: -122.3209, blurb: "Documented theft incidents and reduced hours in 2024. Kroger flagged underperforming Seattle stores after the blocked Albertsons merger.", severity: "medium" },
  { name: "Macy's site (former)", category: "Department Store", neighborhood: "Downtown", address: "300 Pine St", status: "rumored", statusLabel: "Stalled redevelopment", expectedDate: "Ongoing", lat: 47.6112, lng: -122.3392, blurb: "Amazon took several floors but the ground-floor retail space remains largely vacant. A continuing symbol of downtown's struggles.", severity: "medium" },
  { name: "Forever 21 Westlake Center", category: "Apparel", neighborhood: "Downtown", address: "400 Pine St", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "2025", lat: 47.6119, lng: -122.3373, blurb: "Forever 21's US operator filed Chapter 11 again in March 2025 and announced full US liquidation; Westlake Center store closing.", severity: "high" },
  { name: "Gap Downtown", category: "Apparel", neighborhood: "Downtown", address: "1530 5th Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6113, lng: -122.3361, blurb: "Gap Inc. announced 350 store closures nationally; the Seattle downtown location is on PSBJ analyst watch lists amid the corporate retrenchment.", severity: "medium" },
  { name: "Old Navy Westlake", category: "Apparel", neighborhood: "Downtown", address: "601 Pine St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6122, lng: -122.3354, blurb: "Reduced hours and signage; included in PSBJ lists of downtown retailers analysts are watching after surrounding closures.", severity: "low" },
  { name: "Starbucks Reserve Roastery", category: "Cafe", neighborhood: "Capitol Hill", address: "1124 Pike St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6142, lng: -122.3267, blurb: "Niccol-era Starbucks restructuring (2024-25) flagged underperforming Reserve venues. The Capitol Hill flagship has been reported as on internal watch.", severity: "low" },
  { name: "Cinerama / SIFF Cinema", category: "Entertainment", neighborhood: "Belltown", address: "2100 4th Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6142, lng: -122.3401, blurb: "Reopened by SIFF in 2023 after Vulcan's closure but operating with limited programming. Long-term financial sustainability questioned in 2024 reporting.", severity: "low" },
  { name: "Showbox SoDo", category: "Entertainment", neighborhood: "SoDo", address: "1700 1st Ave S", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.5882, lng: -122.3355, blurb: "AEG-operated venue's lease and future programming repeatedly reported as uncertain amid SoDo development pressure.", severity: "low" },
  { name: "Il Bistro Pike Place", category: "Restaurant", neighborhood: "Pike Place", address: "93A Pike St", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6094, lng: -122.3416, blurb: "Long-standing Pike Place Italian restaurant reported in 2024-25 as struggling with reduced hours and ownership transition speculation.", severity: "low" },
  { name: "Nordstrom Rack — Westlake (current)", category: "Department Store", neighborhood: "Downtown", address: "400 Pine St", status: "announced", statusLabel: "Relocating", expectedDate: "By 2027", lat: 47.6116, lng: -122.3371, blurb: "Reduced hours and reports of repeated theft incidents. Confirmed in Dec 2025 to vacate Westlake Center and relocate by 2027.", severity: "medium" },
  { name: "Bartell Drugs (remaining downtown)", category: "Drugstore", neighborhood: "Downtown", address: "Various 3rd Ave locations", status: "announced", statusLabel: "Wind-down", expectedDate: "2024–2025", lat: 47.6088, lng: -122.3380, blurb: "Rite Aid-owned Bartell continued to close downtown locations through 2024 following Rite Aid's Chapter 11 bankruptcy.", severity: "high" },
  { name: "Macy's Westfield Southcenter (regional)", category: "Department Store", neighborhood: "Tukwila", address: "Westfield Southcenter", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.4593, lng: -122.2580, blurb: "Macy's announced 150 additional closures through 2026; PNW analysts flag remaining regional anchor stores as on the watch list.", severity: "low" },
  { name: "CVS Belltown", category: "Drugstore", neighborhood: "Belltown", address: "2400 2nd Ave", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6157, lng: -122.3457, blurb: "CVS announced 900 nationwide closures over three years; multiple Seattle locations are reportedly on the corporate review list.", severity: "low" },
  { name: "Cost Plus World Market", category: "Specialty Retail", neighborhood: "U-Village", address: "2675 NE University Village", status: "bankruptcy", statusLabel: "Bankruptcy watch", expectedDate: "TBD", lat: 47.6651, lng: -122.2987, blurb: "Parent company World Market faces well-reported financial pressure; Seattle-area stores not yet announced but flagged in trade press.", severity: "low" },
  { name: "QFC Broadway/John", category: "Grocery", neighborhood: "Capitol Hill", address: "Broadway & John", status: "rumored", statusLabel: "Rumored", expectedDate: "TBD", lat: 47.6193, lng: -122.3209, blurb: "Documented incidents and reduced hours; included with Broadway Market in Kroger's Seattle store-portfolio review.", severity: "low" },
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const unique = (arr, key) => [...new Set(arr.map(x => x[key]))].sort((a, b) => typeof a === 'number' ? b - a : String(a).localeCompare(String(b)));

/* ---------- State ---------- */
const state = {
  activeNeighborhood: null,
  densityMode: 'all', // 'all' | 'closed' | 'watch'
};

/* ---------- Filters ---------- */
const fSearch = $('search'), fYear = $('filter-year'), fHood = $('filter-neighborhood'), fCat = $('filter-category');
function fillSelect(el, values, allLabel) {
  el.innerHTML = `<option value="">${allLabel}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join('');
}
fillSelect(fYear, unique(closures, 'closedYear'), 'Any year');
fillSelect(fHood, unique([...closures, ...watchList], 'neighborhood'), 'Anywhere');
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

function getFilteredClosures() {
  const q = fSearch.value.trim().toLowerCase();
  const hoodFilter = state.activeNeighborhood || fHood.value;
  return closures.filter(c => {
    if (fCat.value && c.category !== fCat.value) return false;
    if (hoodFilter && c.neighborhood !== hoodFilter) return false;
    if (fYear.value && String(c.closedYear) !== fYear.value) return false;
    if (q) {
      const blob = `${c.name} ${c.address} ${c.blurb} ${c.reason} ${c.category} ${c.neighborhood}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => b.closedYear - a.closedYear || a.name.localeCompare(b.name));
}

function getFilteredWatch() {
  const hoodFilter = state.activeNeighborhood;
  if (!hoodFilter) return watchList;
  return watchList.filter(w => w.neighborhood === hoodFilter);
}

function applyAll() {
  renderEntries(getFilteredClosures());
  updateMap();
  updateKPIs();
  updateActiveBanner();
}

[fSearch, fYear, fHood, fCat].forEach(el => el.addEventListener('input', applyAll));
$('clear').addEventListener('click', () => {
  fSearch.value = ''; fYear.value = ''; fHood.value = ''; fCat.value = '';
  state.activeNeighborhood = null;
  document.querySelectorAll('.density-row.is-active').forEach(el => el.classList.remove('is-active'));
  applyAll();
});

/* ---------- Watch list section ---------- */
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

/* ---------- Map ---------- */
const map = L.map('atlas-map', {
  zoomControl: true,
  attributionControl: true,
  scrollWheelZoom: true,
}).setView([47.6206, -122.3320], 12);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '© Stadia · © OpenStreetMap contributors',
}).addTo(map);

const closedLayer = L.layerGroup();
const watchLayer = L.layerGroup();
let heatLayer = null;

function pinIcon(cls) {
  return L.divIcon({
    className: '',
    html: `<div class="map-pin ${cls}"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -8],
  });
}

function popupClosed(c) {
  return `
    <div class="popup-tag">${escapeHtml(c.category)} · ${c.closedYear}</div>
    <div class="popup-name">${escapeHtml(c.name)}</div>
    <div class="popup-meta">${escapeHtml(c.neighborhood)} · ${escapeHtml(c.address)}</div>
    <p class="popup-blurb">${escapeHtml(c.blurb)}</p>
  `;
}
function popupWatch(w) {
  return `
    <div class="popup-tag watch">${escapeHtml(w.statusLabel)} · ${escapeHtml(w.category)}</div>
    <div class="popup-name">${escapeHtml(w.name)}</div>
    <div class="popup-meta">${escapeHtml(w.neighborhood)} · ${escapeHtml(w.address)}</div>
    <p class="popup-blurb">${escapeHtml(w.blurb)}</p>
  `;
}

function updateMap() {
  closedLayer.clearLayers();
  watchLayer.clearLayers();

  const filteredClosed = getFilteredClosures();
  const filteredWatch = getFilteredWatch();

  filteredClosed.forEach(c => {
    L.marker([c.lat, c.lng], { icon: pinIcon('closed') })
      .bindPopup(popupClosed(c))
      .addTo(closedLayer);
  });
  filteredWatch.forEach(w => {
    L.marker([w.lat, w.lng], { icon: pinIcon(w.status) })
      .bindPopup(popupWatch(w))
      .addTo(watchLayer);
  });

  // Rebuild heatmap
  if (heatLayer) map.removeLayer(heatLayer);
  const heatPoints = [
    ...filteredClosed.map(c => [c.lat, c.lng, 1.0]),
    ...filteredWatch.map(w => [w.lat, w.lng, w.severity === 'high' ? 0.9 : w.severity === 'medium' ? 0.6 : 0.4]),
  ];
  heatLayer = L.heatLayer(heatPoints, {
    radius: 32,
    blur: 28,
    maxZoom: 14,
    minOpacity: 0.25,
    gradient: {
      0.0: 'rgba(138,169,179,0)',
      0.3: 'rgba(138,169,179,0.45)',
      0.55: 'rgba(217,163,96,0.65)',
      0.75: 'rgba(224,120,86,0.85)',
      1.0:  'rgba(179,90,61,0.95)',
    },
  }).addTo(map);
}

closedLayer.addTo(map);
watchLayer.addTo(map);

L.control.layers(null, {
  'Closed pins': closedLayer,
  'Watch list pins': watchLayer,
  'Heat density': {
    addTo(m) { if (heatLayer && !m.hasLayer(heatLayer)) heatLayer.addTo(m); return this; },
    onAdd() {},
  },
}, { position: 'topright', collapsed: false }).addTo(map);

// Custom heat-toggle (since L.heatLayer needs special handling)
const heatControl = L.control({ position: 'topright' });
heatControl.onAdd = function () {
  const div = L.DomUtil.create('div', 'leaflet-control-layers');
  div.style.padding = '8px 10px';
  div.innerHTML = `
    <label style="display:flex; gap:6px; align-items:center; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:0.04em; color:#ece6d4; text-transform:uppercase;">
      <input type="checkbox" id="heat-toggle" checked />
      Heatmap
    </label>
  `;
  L.DomEvent.disableClickPropagation(div);
  return div;
};
heatControl.addTo(map);
setTimeout(() => {
  const toggle = document.getElementById('heat-toggle');
  if (toggle) {
    toggle.addEventListener('change', (e) => {
      if (e.target.checked) heatLayer && heatLayer.addTo(map);
      else heatLayer && map.removeLayer(heatLayer);
    });
  }
}, 100);

/* ---------- Sidebar density list ---------- */
function buildDensityData(mode) {
  const counts = {};
  const sources = mode === 'closed' ? [closures] :
                  mode === 'watch'  ? [watchList] :
                  [closures, watchList];
  sources.forEach(arr => arr.forEach(item => {
    counts[item.neighborhood] = (counts[item.neighborhood] || 0) + 1;
  }));
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function renderDensity() {
  const list = $('density-list');
  const data = buildDensityData(state.densityMode);
  const max = Math.max(...data.map(d => d.count));
  list.innerHTML = data.map((d, i) => `
    <li class="density-row ${state.activeNeighborhood === d.name ? 'is-active' : ''}" data-name="${escapeHtml(d.name)}">
      <span class="density-name">${escapeHtml(d.name)}</span>
      <span class="density-count">${d.count}<span class="small">total</span></span>
      <span class="density-bar" style="--w: ${(d.count / max) * 100}%; --delay: ${i * 30}ms"></span>
    </li>
  `).join('');

  list.querySelectorAll('.density-row').forEach(row => {
    row.addEventListener('click', () => {
      const name = row.dataset.name;
      if (state.activeNeighborhood === name) {
        state.activeNeighborhood = null;
      } else {
        state.activeNeighborhood = name;
        // Pan the map to roughly that area's first pin
        const pin = [...closures, ...watchList].find(x => x.neighborhood === name);
        if (pin) map.flyTo([pin.lat, pin.lng], 14, { duration: 0.8 });
      }
      renderDensity();
      applyAll();
    });
  });
}

document.querySelectorAll('.st-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.st-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.densityMode = btn.dataset.mode;
    renderDensity();
  });
});

/* ---------- Active filter banner ---------- */
function updateActiveBanner() {
  const banner = $('active-filter');
  if (state.activeNeighborhood) {
    banner.hidden = false;
    $('af-name').textContent = state.activeNeighborhood;
  } else {
    banner.hidden = true;
  }
}
$('af-clear').addEventListener('click', () => {
  state.activeNeighborhood = null;
  map.flyTo([47.6206, -122.3320], 12, { duration: 0.6 });
  renderDensity();
  applyAll();
});

/* ---------- KPIs ---------- */
function updateKPIs() {
  const filteredClosed = getFilteredClosures();
  const filteredWatch = getFilteredWatch();

  $('kpi-closed').textContent = filteredClosed.length;
  $('kpi-watch').textContent = filteredWatch.length;

  // Hottest area
  const counts = {};
  [...filteredClosed, ...filteredWatch].forEach(x => {
    counts[x.neighborhood] = (counts[x.neighborhood] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (sorted.length) {
    $('kpi-area').textContent = sorted[0][0];
    $('kpi-area-foot').textContent = `${sorted[0][1]} losses combined`;
  } else {
    $('kpi-area').textContent = '—';
    $('kpi-area-foot').textContent = 'no entries';
  }

  // Worst year
  const years = {};
  filteredClosed.forEach(c => years[c.closedYear] = (years[c.closedYear] || 0) + 1);
  const yearSorted = Object.entries(years).sort((a, b) => b[1] - a[1]);
  if (yearSorted.length) {
    $('kpi-year').textContent = yearSorted[0][0];
    $('kpi-year-foot').textContent = `${yearSorted[0][1]} closures`;
  } else {
    $('kpi-year').textContent = '—';
    $('kpi-year-foot').textContent = '— closures';
  }

  // Theft hotspots
  const theftCount = filteredWatch.filter(w => w.status === 'theft').length;
  $('kpi-theft').textContent = theftCount;
}

/* ---------- Year histogram ---------- */
function renderHistogram() {
  const container = $('histogram');
  const closedYears = {};
  closures.forEach(c => closedYears[c.closedYear] = (closedYears[c.closedYear] || 0) + 1);

  const allYears = Object.keys(closedYears).map(Number).sort();
  const min = Math.min(...allYears), max = Math.max(...allYears);
  const range = [];
  for (let y = min; y <= max; y++) range.push(y);
  const peak = Math.max(...range.map(y => closedYears[y] || 0));

  $('hist-meta').textContent = `${min} → ${max} · peak ${peak} closures`;

  container.innerHTML = range.map((y, i) => {
    const closedCount = closedYears[y] || 0;
    const closedPct = (closedCount / peak) * 100;
    return `
      <div class="hist-col" data-year="${y}">
        <div class="hist-bar" style="height: ${closedPct}%; --delay: ${i * 80}ms">
          <span class="hist-bar-num">${closedCount}</span>
        </div>
        <span class="hist-label">${String(y).slice(-2)}</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.hist-col').forEach(col => {
    col.addEventListener('click', () => {
      const y = col.dataset.year;
      fYear.value = fYear.value === y ? '' : y;
      applyAll();
    });
  });
}
renderHistogram();

/* ---------- Boot ---------- */
renderDensity();
applyAll();
