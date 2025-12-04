export async function loadInputs(
  day: string,
  isTest: boolean = false
): Promise<string> {
  const basePath = "./inputs/";
  const fileName = isTest ? "test.txt" : "input.txt";
  const fullPath = `${basePath}${day}/${fileName}`;
  const file = Bun.file(fullPath);
  return await file.text();
}
