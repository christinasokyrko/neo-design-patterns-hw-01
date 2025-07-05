import { Author } from "./Author";

export abstract class AbstractBook {
  constructor(
    protected title: string,
    protected year: number,
    public readonly author: Author
  ) {
    author.addBook(this);
  }

  abstract getDescription(): string;

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }
}
