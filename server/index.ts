require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
import app from "./app";
import { AppDataSource } from "./data-source";

const server = AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    return app();
  })
  .catch((error) => console.log(error));

module.exports = Promise.resolve(app());
