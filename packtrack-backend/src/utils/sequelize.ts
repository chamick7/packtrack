import { Sequelize } from "sequelize-typescript";
import InviteToken from "../models/invite-token.model";
import Package from "../models/package.model";
import Transporter from "../models/transporter.model";
import User from "../models/user.model";

const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

export const sequelize = new Sequelize({
  host: DB_HOST,
  port: 3306,
  database: DB_DATABASE,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  timezone: "Asia/Bangkok",
  // logging: false,
});

sequelize.addModels([User, InviteToken, Transporter, Package]);
