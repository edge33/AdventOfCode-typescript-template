import type Puzzle from './types/Puzzle';
import readFile from './utils/readFile';

const args = process.argv.slice(2);
const dayToSolve = args[0];

if (!dayToSolve) {
  console.error('No day specified run with npm run dev {day}');
  process.exit(1);
}
console.log(`Solving Day #${args[0]}`);
(async () => {
  let input = '';
  const puzzleName = args[0];
  try {
    const puzzlePath = `src/days/${puzzleName}`;
    input = await readFile(`${puzzlePath}/input.txt`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  const { first, second }: Puzzle = await import(`./days/${puzzleName}/Puzzle`);

  console.log(first(input));
  console.log(second(input));
})();
