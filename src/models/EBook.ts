import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  constructor(
    title: string,
    year: number,
    author: Author,
    public link: string
  ) {
    super(title, year, author);
  }

  getDescription(): string {
    return `${this.title} (eBook, ${this.year}) by ${this.author.name}. Available at: ${this.link}`;
  }
}