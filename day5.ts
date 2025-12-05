import { loadInputs } from "./load-inputs";

const input = await loadInputs("day5");

const fresh: number[][] = [];

for (const line of input.split("\n")) {
  if (line.includes("-")) {
    fresh.push(line.split("-").map(Number));
  } else break;
}

fresh.sort((a, b) => a[0] - b[0]);

const merged: number[][] = [fresh[0]];

for (let i = 1; i < fresh.length; i++) {
  const [_, lastMax] = merged[merged.length - 1];
  const [currentMin, currentMax] = fresh[i];
  if (currentMin <= lastMax + 1) {
    merged[merged.length - 1][1] = Math.max(lastMax, currentMax);
  } else {
    merged.push([currentMin, currentMax]);
  }
}
console.log(merged.reduce((acc, curr) => acc + (curr[1] - curr[0] + 1), 0));
