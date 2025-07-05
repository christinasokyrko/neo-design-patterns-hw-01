import { Author } from "./Author";

export abstract class AbstractBook {
  constructor(
    public title: string,
    public year: number,
    public author: Author
  ) {}

  abstract getDescription(): string;
}
