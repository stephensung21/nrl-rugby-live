// Turns a real player's name into a near-miss "sound-alike": same first name, surname changed by one small
// spelling tweak, so it's obvious who the player is meant to be without using the real name.
const VOWEL = { a: 'e', e: 'a', i: 'y', o: 'u', u: 'o', y: 'i' };
const RULES = [
  [/ck/, 'k'], [/ph/, 'f'], [/([bdfglmnprst])\1/, '$1'], [/k(?!$)/, 'c'], [/c(?![hk])/, 'k'], [/s(?!$)/, 'z'], [/z/, 's'],
  [/ie$/, 'y'], [/([^aeiou])y$/, '$1ie'], [/ey$/, 'ie'], [/v/, 'w'], [/w(?!h)/, 'v'],
];
function hash(s) { let h = 2166136261; for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; }
// copy the original's capitals across (McInnes -> McInes, not Mcines)
function cap(s, like) {
  const caps = new Set([...like].map((ch, i) => (ch !== ch.toLowerCase() ? i : -1)));
  return [...s.toLowerCase()].map((ch, i) => (caps.has(i) ? ch.toUpperCase() : ch)).join('');
}
// spellings that read as typos rather than names
const AWKWARD = /uu|ii|yi|iy|eie|'y|[aeiou]y[aeiou]|[aeiou]y[^aeiou]|zs|sz/;

// all one-tweak variants of a single word, keeping its first letter
function variants(word) {
  // leave a Mc / Mac prefix and the letter after it alone
  const hl = /^Mac[A-Z]/.test(word) ? 4 : /^Mc[A-Z]/.test(word) ? 3 : 1;
  const head = word.slice(0, hl), body = word.slice(hl), lo = body.toLowerCase(), out = new Set();
  for (const [re, to] of RULES) if (re.test(lo)) out.add(head + lo.replace(re, to));
  for (let i = 0; i < lo.length; i++) {
    const v = VOWEL[lo[i]];
    if (!v || (lo[i] === 'y' && i < lo.length - 1)) continue;
    out.add(head + lo.slice(0, i) + v + lo.slice(i + 1));
  }
  // double a single consonant after a vowel (Cleary -> Clleary is ugly, so only mid-word l/n/r/t/s)
  const m = lo.match(/[aeiou]([lnrts])[aeiou]/);
  if (m) out.add(head + lo.slice(0, m.index + 1) + m[1] + lo.slice(m.index + 1));
  // reject new typo-looking letter clusters (ones the real name already has are fine: Papali'i)
  const awkward = (w) => { const m = w.toLowerCase().match(new RegExp(AWKWARD.source, 'g')) || []; return m.some((x) => !word.toLowerCase().includes(x)); };
  return [...out].filter((w) => w.toLowerCase() !== word.toLowerCase() && w.length > 2 && !awkward(w));
}

// realSurnames: lower-case set of every real surname (so the result never lands on another real player)
export function nearName(realName, realSurnames = new Set()) {
  const parts = realName.trim().split(/\s+/);
  const first = parts[0], last = parts.slice(1).join(' ') || parts[0];
  // tweak the longest piece of a double-barrelled / multi-word surname, keep the rest
  const pieces = last.split(/([\s-])/);
  let idx = 0;
  pieces.forEach((p, i) => { if (/^[A-Za-z']+$/.test(p) && p.length > (pieces[idx] || '').length) idx = i; });
  const word = pieces[idx];
  const opts = variants(word).filter((w) => {
    const cand = pieces.map((p, i) => (i === idx ? w : p)).join('').toLowerCase();
    return !realSurnames.has(cand);
  });
  // prefer changes late in the word so the start (what people recognise) stays intact
  opts.sort((a, b) => firstDiff(b, word) - firstDiff(a, word) || a.localeCompare(b));
  const top = opts.slice(0, Math.max(1, Math.ceil(opts.length / 2)));
  const pick = top.length ? top[hash(realName) % top.length] : word + 'e';
  pieces[idx] = cap(pick, word);
  return { first, last: pieces.join('') };
}
function firstDiff(a, b) { a = a.toLowerCase(); b = b.toLowerCase(); let i = 0; while (i < a.length && a[i] === b[i]) i++; return i; }
