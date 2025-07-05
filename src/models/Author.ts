import { AbstractBook } from "./AbstractBook";

export class Author {
  private books: AbstractBook[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  getBooks(): AbstractBook[] {
    return this.books;
  }
}
