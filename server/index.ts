require("dotenv").config({ path: `.env.${process.env.NODE_ENV}.local` });
import app from "./app";
import { AppDataSource } from "./data-source";

const server = AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");
    return app();
  })
  .catch((error) => console.log(error));

module.exports = server;
