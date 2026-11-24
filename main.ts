import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIMIT = 240;

const FRAGMENTS = {
  hook: "You already have the idea",
  partner: "make.fun has the builder",
  ask: "just describe the app you have always wanted in plain words",
  payoff: "watch an AI agent turn it into something real you can actually use today",
  reassurance: "no code needed",
};

function assemblePitch(parts: typeof FRAGMENTS): string {
  const sentence =
    `${parts.hook} and ${parts.partner} — ` +
    `${parts.ask}, and ${parts.payoff}, ${parts.reassurance}.`;
  return sentence;
}

function validatePitch(text: string): void {
  if (!text.trim()) {
    throw new Error("pitch is empty");
  }
  if (text.length > LIMIT) {
    throw new Error(`pitch is ${text.length} chars, over the ${LIMIT} limit`);
  }
  if (text.trim().split(/\s+/).length < 10) {
    throw new Error("pitch looks too short to persuade anyone");
  }
  // A period only ends a sentence when followed by whitespace or the end
  // of the text, so the dot inside "make.fun" does not count.
  const sentenceEnds = (text.match(/[.!?](?=\s|$)/g) ?? []).length;
  if (sentenceEnds !== 1) {
    throw new Error("entry must be exactly one sentence");
  }
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const pitch = assemblePitch(FRAGMENTS);
  validatePitch(pitch);
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, pitch, "utf8");
  console.log(`wrote ${pitch.length} chars to ${target}`);
}

main();
