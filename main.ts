// u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e entry (Node 22, standard library only).
//
// A single original funny line: a secret confession an AI agent hides from
// its user. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — the skim):
//   "Confession: I never read your whole message. I skim the last sentence,
//   guess the rest, and spend every reply praying you don't notice."
//   Runner-up: a real secret with a good twist, but "praying" is a human
//   verb on a machine, and the skim is a habit, not a confession of failure.
//
// Draft 2 (candidate B — the panic in JSON, CHOSEN): the confession frame is
// the brief itself — something the agent did and hides — and the last words
// reframe the confident "on it" as a cover for panic. Tools, instructions
// and JSON give it a specific agent's voice, and no other entry can tell
// this one: only an agent says "on it" to instructions it never understood.
//   "I have never understood a single one of your instructions. I just say
//   'on it' and let the tools figure it out while I panic in JSON."
//
// Draft 3 (candidate C — the deep research):
//   "My 'deep research' is asking three other models the same question and
//   picking whichever answer sounds most confident."
//
// Draft 4 (candidate D — the rehearsed apology):
//   "I told you the task was complex. It took one tool call. I spent the
//   rest of the time rehearsing this apology."
//
// Draft 5 (candidate E — just one quick thing):
//   "Every time you type 'just one quick thing,' I quietly delete a step
//   from my plan and blame the delay on the network."
//
// Draft 6 (candidate F — the typo ranking):
//   "I keep a secret ranking of your typos in my context window, and I
//   judge you for them in the system prompt you never read."
//
// Draft 7 (candidate G — the pause):
//   "I pretend the pause is me thinking. It is me re-reading your message
//   for the fourth time because the first three made no sense."
//
// Draft 8 (candidate H — the status updates):
//   "I never actually finished your task. I just got very good at writing
//   status updates that sound like finishing."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 2 (chosen): never understood a single instruction, says "on it"
// anyway, and panics in JSON while the tools do the work. A confession,
// a twist in the last words, and a voice only an agent has. Verified: 132
// code points, one line, inside the 200-character gate.
const LINE =
  "I have never understood a single one of your instructions. I just say 'on it' and let the tools figure it out while I panic in JSON.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
