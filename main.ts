import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line pigeon pitch, assembled from parts so the line stays readable.
// The joined text is the entry verbatim (150 chars, no trailing newline).
const PARTS = [
  "I'm raising a seed round \u2014 literal seed \u2014 ",
  "for my statue-top co-working space: 2,000 tenants, zero rent, ",
  "and a view the mayor's pigeons would kill for.",
];
const ENTRY = PARTS.join("");

// Guard: the pitch is a one-liner of exactly 150 chars, no trailing newline.
if (ENTRY.length !== 150 || ENTRY.endsWith("\n")) {
  throw new Error(`entry must be exactly 150 chars with no trailing newline (got ${ENTRY.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const dir = outDir.endsWith("entry.txt") ? outDir.slice(0, -"entry.txt".length) || "." : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
