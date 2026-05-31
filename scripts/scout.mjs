// Weekly r/Seattle scout — pulls closure-related posts and proposes new entries.
// Free: uses Reddit's public JSON API (no auth, no key).
// Output: writes ./scout-report.md and exits non-zero only on hard errors.

import fs from 'node:fs/promises';

const QUERIES = [
  'closing', 'closes', 'shut down', 'shuttered', 'permanently closed',
  'going out of business', 'final day', 'last day',
];

const SUBREDDITS = ['Seattle', 'SeattleWA', 'CapitolHill', 'Ballard'];

const KNOWN_NAMES = new Set();
try {
  const app = await fs.readFile('app.js', 'utf8');
  const matches = app.matchAll(/name:\s*"([^"]+)"/g);
  for (const m of matches) KNOWN_NAMES.add(m[1].toLowerCase());
} catch {}

const headers = {
  'User-Agent': 'gone-dark-seattle-scout/1.0 (github.com/jatinbatra/seattle-register)',
};

const seen = new Set();
const candidates = [];

for (const sub of SUBREDDITS) {
  for (const q of QUERIES) {
    const url = `https://www.reddit.com/r/${sub}/search.json?q=${encodeURIComponent(q)}&restrict_sr=1&sort=new&t=month&limit=25`;
    try {
      const res = await fetch(url, { headers });
      if (!res.ok) {
        console.warn(`Skip ${sub}/${q}: HTTP ${res.status}`);
        continue;
      }
      const json = await res.json();
      const posts = json?.data?.children ?? [];
      for (const p of posts) {
        const d = p.data;
        if (!d || seen.has(d.id)) continue;
        seen.add(d.id);
        const text = `${d.title} ${d.selftext ?? ''}`;
        const lc = text.toLowerCase();
        // Crude relevance: needs a closure word + a likely business indicator
        const hasClosure = QUERIES.some(k => lc.includes(k));
        const looksRetail = /\b(restaurant|bar|cafe|coffee|store|shop|market|pharmacy|drugs?|grocery|bakery|venue|theatre|theater|club|brewery|tavern|pub|location|business)\b/.test(lc);
        if (!hasClosure || !looksRetail) continue;
        // Skip if any known business name appears in the post — likely already in the archive
        let alreadyKnown = false;
        for (const known of KNOWN_NAMES) {
          if (known.length > 4 && lc.includes(known)) { alreadyKnown = true; break; }
        }
        if (alreadyKnown) continue;

        candidates.push({
          id: d.id,
          subreddit: d.subreddit,
          title: d.title,
          url: `https://www.reddit.com${d.permalink}`,
          score: d.score,
          comments: d.num_comments,
          created: new Date(d.created_utc * 1000).toISOString().slice(0, 10),
          excerpt: (d.selftext || '').slice(0, 220).replace(/\s+/g, ' ').trim(),
        });
      }
    } catch (err) {
      console.warn(`Skip ${sub}/${q}:`, err.message);
    }
    // Be polite
    await new Promise(r => setTimeout(r, 800));
  }
}

candidates.sort((a, b) => b.score - a.score);
const top = candidates.slice(0, 30);

const today = new Date().toISOString().slice(0, 10);
const lines = [
  `# Closure scout — ${today}`,
  ``,
  `Scanned r/${SUBREDDITS.join(', r/')} for closure mentions in the last month. ${candidates.length} candidate posts (${top.length} shown).`,
  ``,
  `Posts that mention any business name already in the archive are filtered out automatically. Review each entry below — if it looks like a real new closure, add it to \`app.js\`.`,
  ``,
  `---`,
  ``,
];

if (!top.length) {
  lines.push(`_No new candidates this week._`);
} else {
  for (const c of top) {
    lines.push(`### [${c.title}](${c.url})`);
    lines.push(``);
    lines.push(`r/${c.subreddit} · ${c.created} · ↑ ${c.score} · 💬 ${c.comments}`);
    lines.push(``);
    if (c.excerpt) lines.push(`> ${c.excerpt}`);
    lines.push(``);
    lines.push(`---`);
    lines.push(``);
  }
}

await fs.writeFile('scout-report.md', lines.join('\n'));
console.log(`Wrote scout-report.md (${top.length} candidates of ${candidates.length} total).`);
