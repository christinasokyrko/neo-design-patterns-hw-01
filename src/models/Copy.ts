import { AbstractBook } from "./AbstractBook";

export class Copy {
  private isAvailable: boolean = true;

  constructor(public book: AbstractBook) {}

  borrow(): boolean {
    if (this.isAvailable) {
      this.isAvailable = false;
      return true;
    }
    return false;
  }

  return(): void {
    this.isAvailable = true;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }
}
