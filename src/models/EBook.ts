import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  constructor(
    title: string,
    year: number,
    author: Author,
    private url: string
  ) {
    super(title, year, author);
  }

  getDescription(): string {
    return `${this.title} (eBook, ${this.year}) by ${this.author.getName()}. Available at: ${this.url}`;
  }

  getUrl(): string {
    return this.url;
  }
}
