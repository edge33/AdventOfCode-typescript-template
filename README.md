# 🎄 AdventOfCode-typescript-template 🎄

This is a TypeScript boilerplate for Advent of Code.

## 👷‍♂️ Project structure

the project has the following structure:

```
src
- days: contains the solutions for the puzzles
- scripts: utility scripts for development lifecycle
- types: types and interfaces
- utils: utility scripts used for development and problem solving (i.e read an input file)
```

## 🚀 Getting started

install all required dependencies with `npm i`

## 🎄 Adding a new puzzle

when the new AoC puzzle is available run `npm run init-day {day}`

replace `{day}` with the number of the advent day, i.e. `npm run init-day 2`.

This command will create a new directory in the `days` folder with the following content

- `Puzzle.ts`: the boilerplate class with the placeholder methods for solving both daily puzzles
- `index.txt`: the input file where to add the puzzle input

The structure of the boilerplate class is the following:

```typescript
import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    /*
     *
     * HERE GOES THE SOLUTION FOR THE FIRST PUZZLE
     *
     */
    return 'day 1 solution 1';
  }

  public getFirstExpectedResult(): string {
    /*
     *
     * RETURN THE EXPECTED SOLUTION FOR THE FIRST TEST INPUT
     * USEFULL FOR TEST RUNNING
     *
     */
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    /*
     *
     * HERE GOES THE SOLUTION FOR THE SECOND PUZZLE
     *
     */
    return 'day 1 solution 2';
  }

  public getSecondExpectedResult(): string {
    /*
     *
     * RETURN THE EXPECTED SOLUTION FOR THE SECOND TEST INPUT
     * USEFULL FOR TEST RUNNING
     *
     */
    return 'day 1 solution 2';
  }
}
```

in each method of the class you can access the test input with `this.input`

## 🔧 Development

When your solution is ready, or when you want to start developing incrementally run `npm run dev {day}` where {day} is the day you are working on, i.e. `npm run dev 1` will run the puzzle class for day 1.

## 🧪 Testing

You can ran test for all puzzles agains their expected output with `npm t` this will test all the solutions in the `days` folder

## 🛫 Contributing

Every contribution is welcome. Just fork this repo and open a MR with your changes, and don't forget to add your name to the contributors section of this README.

## 👨👩 Contributors

[Francesco Maida](https://edge33.github.io)
