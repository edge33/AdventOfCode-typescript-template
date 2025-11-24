type Puzzle = {
  first: (input: string) => string;
  expectedFirstSolution: string;
  second: (input: string) => string;
  expectedSecondSolution: string;
};

export type { Puzzle };
