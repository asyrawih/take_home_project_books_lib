import { Request, Response } from "express";
import { BookOrder } from "../model/Book";
import { GetBook } from "../services/Getbooks";
import { orderBooks } from "../services/OrderBook";

/**
 *  Get Books
 */
export const book = async (req: Request, res: Response) => {
  const getBooks = await GetBook();
  // Remap Books
  const books = getBooks.works.map((book) => {
    return {
      id: book.key,
      title: book.title,
      subject: book.subject,
      cover_id: book.cover_id,
      cover_key: book.cover_edition_key,
      cover_image: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
      author: book.author,
    };
  });

  return res.json(books);
};

/**
 *  Order The books
 */
export const orderBook = async (req: Request, res: Response) => {
  // Will Be Contain Mocking order Book
  const orderBook: BookOrder = {
    customer: req.body.customer,
    books: [],
    schedule_pickup: new Date(),
  };

  const orders = orderBooks(req.body);

  orders.forEach((order) => {
    orderBook.books.push({
      key: order.key,
      title: order.title,
      cover_id: order.cover_id,
      author: order.author,
      subject: order.subject,
      cover_edition_key: order.cover_edition_key,
    });
  });

  return res.json(orderBook);
};
