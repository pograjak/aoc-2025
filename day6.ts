import { loadInputs } from "./load-inputs";

const input = await loadInputs("day6");

const accumulators: number[][] = [];
let total = 0;

for (const line of input.split("\n")) {
  const columns = line.trim().split(/\s+/);
  console.log(columns.length);
  for (let i = 0; i < columns.length; i++) {
    if (!line.includes("+")) {
      const num = Number(columns[i]);
      const acc = accumulators[i];
      if (acc) {
        accumulators[i] = [(acc[0] ?? 0) + num, (acc[1] ?? 1) * num];
      } else {
        accumulators.push([num, num]);
      }
    } else {
      total += columns[i] === "+" ? accumulators[i][0] : accumulators[i][1];
    }
  }
}

console.log(total);
