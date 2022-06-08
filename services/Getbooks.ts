import axios from "axios";
import { BookResponse } from "../model/Book";

export const GetBook = async (): Promise<BookResponse> => {
  const request = await axios.get<BookResponse>(
    "https://openlibrary.org/subjects/love.json?details=true"
  );
  const result = request.data;
  return result;
};
