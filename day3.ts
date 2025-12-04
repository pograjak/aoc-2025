import { loadInputs } from "./load-inputs";

const input = await loadInputs("day3");
let total = 0;

for (const bank of input.split("\n")) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < bank.length; i++) {
    const digit = parseInt(bank[i], 10);
    if (digit > first && i < bank.length - 1) {
      first = digit;
      second = 0;
    } else if (digit > second) {
      second = digit;
    }
  }
  console.log([bank, first, second]);
  total += 10 * first + second;
}

console.log(total);
