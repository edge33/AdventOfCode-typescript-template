export interface PuzzleInterface {
  solveFirst: () => string;
  solveSecond: () => string;
  getFirstExpectedResult: () => string;
  getSecondExpectedResult: () => string;
}
