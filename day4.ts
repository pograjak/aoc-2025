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

const input = await loadInputs("day4", true);

const map = input.split("\n").map((line) => line.split(""));
const rowsCount = map.length;
const colsCount = map[0].length;

function remove(): number {
  const neighborRolls: NeighborRolls = new Map<string, number>();

  for (let y = 0; y < rowsCount; y++) {
    for (let x = 0; x < colsCount; x++) {
      if (map[y][x] === "@") {
        neighborRolls.set(`${x}-${y}`, 0);
      }
    }
  }

  for (let y = 0; y < rowsCount; y++) {
    for (let x = 0; x < colsCount; x++) {
      if (map[y][x] === "@") {
        addNeighborRoll(neighborRolls, x, y, colsCount, rowsCount);
      }
    }
  }

  let removed = 0;
  for (const [position, rolls] of neighborRolls) {
    if (rolls < 4) {
      removed++;
      const [xStr, yStr] = position.split("-");
      const x = parseInt(xStr, 10);
      const y = parseInt(yStr, 10);
      map[y][x] = ".";
    }
  }
  return removed;
}

let total = 0;
while (true) {
  const removed = remove();
  if (removed === 0) break;
  total += removed;
}

console.log(total);
