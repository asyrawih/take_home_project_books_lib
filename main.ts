import express, { Express, Request, Response } from "express";
import { book } from "./routes/book.route";
import { main } from "./routes/main.route";

const app: Express = express();

app.get("/", main);
app.get("/books", book);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
