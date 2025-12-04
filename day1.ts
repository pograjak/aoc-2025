const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();

let dial = 50;
let counter = 0;

for (const line of text.split("\n")) {
  const direction = line[0];
  const value = parseInt(line.slice(1), 10);

  switch (direction) {
    case "R":
      dial += value;
      while (dial > 100) {
        if (dial - value !== 100) counter++;
        dial -= 100;
      }
      break;
    case "L":
      dial -= value;
      while (dial < 0) {
        if (dial + value !== 0) counter++;
        dial += 100;
      }
      break;
  }

  if (dial % 100 === 0) counter++;

  console.log([line, dial, counter]);
}

console.log(counter);
