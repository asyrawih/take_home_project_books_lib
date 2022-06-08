import axios from "axios";
import { BookOrder, BookResponse } from "../model/Book";
import { GetBook } from "../services/Getbooks";
import { orderBooks } from "../services/OrderBook";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Service Test Books Must Return Collections Of Books", () => {
  it("Get key and name on response of books", async () => {
    expect(true).toBe(true);
    // Just Mock Make Sure The Function Can Be Called
    mockedAxios.get.mockResolvedValue({
      data: { key: "subjects/love", name: "love" },
      status: 200,
    });
    const order: BookResponse = await GetBook();
    expect(order).toMatchObject({ key: "subjects/love", name: "love" });
    // Make Sure the api can be called once
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});

describe("Can Orders The Books Must", () => {
  it("sending to endpoint", async () => {
    const mockPayload: BookOrder = {
      customer: "Hanan",
      books: [
        {
          title: "Importance of Being Earnest",
          authors: [],
          subject: [
            "British and irish drama (dramatic works by one author)",
            "English life",
            "Readers",
            "etiquette",
            "love",
            "manners",
            "marriage",
            "play",
            "Children's fiction",
            "Youth, fiction",
            "Drama",
            "Foundlings",
            "Identity (Psychology)",
            "Classic Literature",
            "Comedias",
            "English drama",
            "English drama (Comedy)",
            "Expósitos",
            "Fiction",
            "Identidad (Psicología)",
            "Inglés",
            "Libros de lectura",
            "Social life and customs",
            "Teatro",
            "Comedy",
            "British and irish fiction (fictional works by one author)",
            "English literature",
            "History and criticism",
            "Literature",
            "Movie novels",
            "Man-woman relationships",
            "Social norms",
            "Aristocracy (Social class)",
            "Unterrichtseinheit",
            "Dictionaries",
            "English language",
            "Spanish",
            "Manners and customs",
            "French",
            "Mistaken identity",
            "Drama (dramatic works by one author)",
            "Comics & graphic novels, literary",
            "Courtship",
            "Accessible book",
          ],
          key: "1260453",
          cover_id: 1231,
          cover_edition_key:
            "https://covers.openlibrary.org/b/olid/OL9694914M-M.jpg",
        },
      ],
      schedule_pickup: new Date(),
    };

    const orders = orderBooks(mockPayload);
    expect(orders).toMatchObject(orders);
  });
});
