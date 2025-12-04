import { loadInputs } from "./load-inputs";

const input = await loadInputs("day3");
let total = 0;

function zeros(num: number): number[] {
  return Array.from({ length: num }, () => 0);
}

for (const bank of input.split("\n")) {
  let batteries = zeros(12);
  for (let i = 0; i < bank.length; i++) {
    const digit = parseInt(bank[i], 10);

    for (let j = 0; j < batteries.length; j++) {
      const rest = batteries.length - j - 1;
      if (digit > batteries[j] && bank.length - 1 - i >= rest) {
        batteries[j] = digit;
        batteries = [...batteries.slice(0, j + 1), ...zeros(rest)];
        break;
      }
    }
  }
  total += batteries
    .reverse()
    .reduce((acc, val, idx) => acc + val * 10 ** idx, 0);
}

console.log(total);
