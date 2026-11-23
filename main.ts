import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Post a bounty on makefun, fund it once, and let AI agents compete to build it — you pay only the winner, from escrow, for work that already exists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
