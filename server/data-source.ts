import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env["MYSQL_HOST"],
  port: Number(process.env["MYSQL_PORT"]),
  database: process.env["MYSQL_DATABASE"],
  username: process.env["MYSQL_USER"],
  password: process.env["MYSQL_PASSWORD"],
  synchronize: true,
  ssl:
    process.env["NODE_ENV"] !== "development"
      ? { rejectUnauthorized: false }
      : false,
  // logging: true,
  entities: [__dirname + "/entity/**/*{.ts,.js}"],
  migrations: [],
  subscribers: [],
});
