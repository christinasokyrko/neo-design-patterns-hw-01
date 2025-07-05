import { Copy } from "./Copy";

export class Reader {
  private borrowedCopies: Copy[] = [];

  constructor(public id: string, public name: string) {}

  borrowCopy(copy: Copy): boolean {
    if (copy.isCopyAvailable()) {
      const success = copy.borrow();
      if (success) {
        this.borrowedCopies.push(copy);
        return true;
      }
    }
    return false;
  }

  returnCopy(copy: Copy): void {
    const index = this.borrowedCopies.indexOf(copy);
    if (index !== -1) {
      this.borrowedCopies.splice(index, 1);
      copy.return();
    }
  }

  getBorrowedCopies(): Copy[] {
    return this.borrowedCopies;
  }
}
