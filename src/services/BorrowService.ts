import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): string {
    if (reader.borrowCopy(copy)) {
      return "Success";
    }
    return "Failed";
  }

  returnBook(reader: Reader, copy: Copy): void {
    reader.returnCopy(copy);
  }
}
