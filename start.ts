import { app } from "./main";

try {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
  console.error(error);
  process.exit();
}
