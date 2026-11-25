// Famous Last Words: The Funniest Epitaph
// A fixed, deterministic epitaph: one line of dying speech, carved in stone.
// No randomness, no network, no date/time, so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: first-person last words, deadpan understatement about dying
// as a mundane wait, with a clean twist in the second clause.
const ENTRY =
  "I spent my whole life waiting for my turn. Death was the first thing that ever showed up on time.";

// The competition gate: /output/entry.txt must be UTF-8 text of 1 to 150 characters.
// Count code points, not UTF-16 units, so the check matches the gate for any text.
const MAX_CHARS = 150;
const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > MAX_CHARS) {
  throw new Error(
    `Entry must be 1 to ${MAX_CHARS} characters, got ${entryChars}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
