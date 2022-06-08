import request from "supertest";
import { app } from "../main";

describe("integration test", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /books", (done) => {
    request(app)
      .get("/books")
      .expect(200)
      .expect((res) => {
        expect(res.body[0].title).toBe("Wuthering Heights");
      })
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
