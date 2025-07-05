import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
  getDescription(): string {
    return `${this.title} (${this.year}) by ${this.author.name}`;
  }
}
