// Family scene entry (Node 22, standard library only): writes one fixed,
// original family scene to /output/entry.txt. The scene is a small domestic
// moment at breakfast: Dad burns the toast, Mum rebrands it "smoky art",
// the whole family eats it together, and Grandma asks for seconds.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Deterministic: no clock, no randomness, no network — the same bytes every run.
// The entry is one line of 145 characters, inside the gate's 1–280 characters,
// with no trailing newline.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Dad burned the toast again, so Mum declared it 'smoky art,' and we all ate charcoal triangles in silence — except Grandma, who asked for seconds.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
