import { Book, BookOrder } from "../model/Book";

// Take The Book
export const orderBooks = (book: BookOrder): Book[] => {
  // Process Order in here
  // In Case Just Return The Data And Adding into Array
  return book.books;
};
