import axios from "axios";
import { Request, Response } from "express";
import { GetBook } from "../services/Getbooks";

/**
 *  Get Books
 */
export const book = async (req: Request, res: Response) => {
  const getBooks = await GetBook(req, res);
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
  const mockOrderData = [];
  return res.json(req.body);
};
