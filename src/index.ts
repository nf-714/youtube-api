import dotenv from "dotenv";
import { app } from "./app";
import connectDB from "./db";

const port = process.env.PORT || 4000;
dotenv.config({ path: "./.env" });

//connecting database with mongoose
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("[mongodb]: MONGO db connection failed !!! \n", err);
  });
