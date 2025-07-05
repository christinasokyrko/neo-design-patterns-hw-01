import { AbstractBook } from "./AbstractBook";

export class Copy {
  private available: boolean = true;

  constructor(private book: AbstractBook) {}

  borrow(): boolean {
    if (!this.available) return false;
    this.available = false;
    return true;
  }

  return(): void {
    this.available = true;
  }

  isAvailable(): boolean {
    return this.available;
  }

  getBook(): AbstractBook {
    return this.book;
  }
}
