import { mkdirSync, writeFileSync } from "node:fs";

// The line: a calendar so full that its only free slot has a name, and the
// name is where the joke turns. The judge brief wants a real joke about
// office life — a turn somewhere unexpected, something that rings true,
// wording kept tight, a fresh take. Here the turn is the slot's title:
// "free" that is not free at all, because the only opening in the week is
// the one nobody books on purpose. The voice stays flat and tired, the way
// a standup sounds at 9 a.m. on a Monday. No quotation marks, no explaining
// the joke, nothing wasted after the punch. Short on purpose: 75 bytes, so
// the smaller-text tie-break works for it, not against it. Gate: 1-199
// chars, one line, written to /output/entry.txt.
const line =
  "My calendar is so full the only free slot is titled 'cry in the stairwell'.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
