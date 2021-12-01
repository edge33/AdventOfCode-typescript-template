import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 1
 * It will create a new folder under src/days/{dayNumber}
 * with the boilerplate code to build the solution, and an empty input .txt file.
 */

const args = process.argv.slice(2);
const day = args[0];
if (!day) {
  console.log('Please run with the day to bootstrap, i.e. npm run init-day 1');
}
console.log(`creating template for day ${2}`);
const basePath = 'src/days';

if (existsSync(`src/days/${day}`)) {
  console.log(`day ${day} already exists`);
  process.exit(0);
}
const newDayPath = `${basePath}/${day}`;
mkdirSync(newDayPath);
copyFileSync(`${__dirname}/Puzzle.ts.tpl`, `${newDayPath}/Puzzle.ts`);
writeFileSync(`${newDayPath}/input.txt`, '');
