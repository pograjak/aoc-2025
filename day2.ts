import { loadInputs } from "./load-inputs";

const input = await loadInputs("day2", true);
let total = 0;

for (const range of input.split(",")) {
  const [start, end] = range.split("-").map((num) => parseInt(num, 10));

  for (let i = start; i <= end; i++) {
    if (/^(.+)\1+$/.test(i.toString())) total += i;
  }
}

console.log(total);
