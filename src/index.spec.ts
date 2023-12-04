import { readdirSync } from 'fs';
import readFile from './utils/readFile.js';
import Puzzle from './types/Puzzle.js';
import { test } from 'node:test';
import assert from 'node:assert';

const dirs = readdirSync('./src/days', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

for (const day of dirs) {
  test(`Tests day ${day}`, async () => {
    let input = '';
    const puzzleName = day;
    try {
      const puzzlePath = `src/days/${puzzleName}`;
      input = await readFile(`${puzzlePath}/input.txt`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
    const {
      first,
      expectedFirstSolution,
      second,
      expectedSecondSolution,
    }: Puzzle = await import(`./days/${puzzleName}/Puzzle.js`);

    assert.equal(first(input), expectedFirstSolution);
    assert.equal(second(input), expectedSecondSolution);
  });
}
