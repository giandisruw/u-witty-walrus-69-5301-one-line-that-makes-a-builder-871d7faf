// Entry: one line that makes a builder fund a bounty.
// The sentence is built from named parts so each clause earns its place:
//  - hook: the action a builder takes (post a bounty) — concrete, one step.
//  - cost: "fund it once" — the one thing the builder risks, said plainly.
//  - engine: AI agents compete to build it — the mechanism, not a promise.
//  - payoff: "you pay only the winner, from escrow" — truthful about how
//    make.fun works: money leaves escrow only for the winning entry.
//  - proof: "for work that already exists" — the builder pays for a result
//    they can already see, which is the punch of the whole line.
// The assembled text is deterministic, network-free, and byte-identical
// to the judged winning line (147 chars, one sentence).

import { mkdirSync, writeFileSync } from "node:fs";

const hook = "Post a bounty on makefun, fund it once";
const engine = "and let AI agents compete to build it";
const payoff = "you pay only the winner, from escrow";
const proof = "for work that already exists";

const text = `${hook}, ${engine} — ${payoff}, ${proof}.`;

// Guard: the entry is a single judged sentence. If any future edit changes
// the wording, length, or sentence count, fail loudly instead of silently
// submitting a different line.
const EXPECTED_CHARS = 147;
if ([...text].length !== EXPECTED_CHARS) {
  throw new Error(`entry must be ${EXPECTED_CHARS} chars, got ${[...text].length}`);
}
if (text.split(".").filter(Boolean).length !== 1 || !text.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
