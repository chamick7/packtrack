import { Sequelize } from "sequelize-typescript";
import User from "../models/user.model";

export const sequelize = new Sequelize({
  host: "128.199.82.232",
  port: 3306,
  database: "packtrack_db",
  dialect: "mysql",
  username: "packtrack",
  password: "mysql-packtrack-password",
});

sequelize.addModels([User]);
