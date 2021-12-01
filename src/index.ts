import PuzzleFactory from './utils/PuzzleFactory';

const args = process.argv.slice(2);
const dayToSolve = args[0];

if (!dayToSolve) {
  console.error('No day specified run with npm run dev {day}');
  process.exit(1);
}
console.log(`Solving Day #${args[0]}`);
(async () => {
  const puzzle = await PuzzleFactory.getPuzzle(args[0]);
  console.log(puzzle.solveFirst());
  console.log(puzzle.solveSecond());
})();
