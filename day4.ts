import { loadInputs } from "./load-inputs";

type NeighborRolls = Map<string, number>;

function addNeighborRoll(
  rolls: NeighborRolls,
  x: number,
  y: number,
  maxX: number,
  maxY: number
): void {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      if (dx + x < 0 || dy + y < 0) continue;
      if (dy + y >= maxY || dx + x >= maxX) continue;
      const position = `${x + dx}-${y + dy}`;
      const count = rolls.get(position);
      if (count !== undefined) rolls.set(position, count + 1);
    }
  }
}

const input = await loadInputs("day4");

const rows = input.split("\n");
const rowsCount = rows.length;
const colsCount = rows[0].length;

const neighborRolls: NeighborRolls = new Map<string, number>();

for (let y = 0; y < rowsCount; y++) {
  for (let x = 0; x < colsCount; x++) {
    if (rows[y][x] === "@") {
      neighborRolls.set(`${x}-${y}`, 0);
    }
  }
}

for (let y = 0; y < rowsCount; y++) {
  for (let x = 0; x < colsCount; x++) {
    if (rows[y][x] === "@") {
      addNeighborRoll(neighborRolls, x, y, colsCount, rowsCount);
    }
  }
}

console.log(
  Array.from(neighborRolls.values()).filter((count) => count < 4).length
);
