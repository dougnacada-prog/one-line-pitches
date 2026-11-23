// A Day of One-Line Pitches — make.fun entry.
// The program writes a single original one-line pitch to /output/entry.txt:
// a sentence that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You already have the idea — that is the hard part; just tell it to an AI agent on make.fun in plain words, it builds your first app for free, the code stays yours, and if it wins, so does the prize.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
