import { PuzzleInterface } from './PuzzleInterface';

export default abstract class Puzzle implements PuzzleInterface {
  protected input: string;

  public async setInput(input: string) {
    this.input = input;
  }

  public abstract solveFirst(): string;
  public abstract getFirstExpectedResult(): string;
  public abstract solveSecond(): string;
  public abstract getSecondExpectedResult(): string;
}
