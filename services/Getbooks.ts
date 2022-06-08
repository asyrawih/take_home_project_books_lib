import axios from "axios";
import { Request, Response } from "express";
import { Book, BookResponse } from "../model/Book";

export const GetBook = async (
  _: Request,
  res: Response
): Promise<BookResponse> => {
  const request = await axios.get<BookResponse>(
    "https://openlibrary.org/subjects/love.json?details=true"
  );
  const result = request.data;
  return result;
};
