import { loadInputs } from "./load-inputs";

const input = await loadInputs("day5");

const fresh: number[][] = [];

let count = 0;

for (const line of input.split("\n")) {
  if (line.includes("-")) fresh.push(line.split("-").map(Number));
  else {
    const num = parseInt(line, 10);
    if (Number.isNaN(num)) continue;
    for (const [start, end] of fresh) {
      if (num >= start && num <= end) {
        count++;
        break;
      }
    }
  }
}

console.log(count);
