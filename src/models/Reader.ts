import { Copy } from "./Copy";

export class Reader {
  private borrowedCopies: Copy[] = [];

  constructor(private id: string, private name: string) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBorrowedCopies(): Copy[] {
    return this.borrowedCopies;
  }

  borrowCopy(copy: Copy): boolean {
    if (copy.isAvailable()) {
      if (copy.borrow()) {
        this.borrowedCopies.push(copy);
        return true;
      }
    }
    return false;
  }

  returnCopy(copy: Copy): void {
    const index = this.borrowedCopies.indexOf(copy);
    if (index !== -1) {
      copy.return();
      this.borrowedCopies.splice(index, 1);
    }
  }
}
