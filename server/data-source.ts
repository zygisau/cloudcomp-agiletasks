import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env["AZURE_MYSQL_HOST"],
  port: Number(process.env["AZURE_MYSQL_PORT"]),
  database: process.env["AZURE_MYSQL_DATABASE"],
  username: process.env["AZURE_MYSQL_USER"],
  password: process.env["AZURE_MYSQL_PASSWORD"],
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
