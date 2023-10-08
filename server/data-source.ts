import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./entity/Task";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env["AZURE_MYSQL_HOST"],
  port: Number(process.env["AZURE_MYSQL_PORT"]),
  database: process.env["AZURE_MYSQL_DATABASE"],
  username: process.env["AZURE_MYSQL_USER"],
  password: process.env["AZURE_MYSQL_PASSWORD"],
  synchronize: true,
  logging: false,
  entities: [Task],
  migrations: [],
  subscribers: [],
});
