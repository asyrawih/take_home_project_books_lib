import axios from "axios";
import { Request, Response } from "express";

export const book = async (req: Request, res: Response) => {
  const request = await axios.get("https://openlibrary.org/subjects/love.json?details=true");
  const result = request.data
  return res.json(result)
};
