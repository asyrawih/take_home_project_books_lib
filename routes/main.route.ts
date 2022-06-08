import { Request, Response } from "express";

export const main = (req: Request, res: Response) => {
  res.send("Hello World!");
};
