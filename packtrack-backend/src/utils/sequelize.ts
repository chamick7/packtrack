import { Sequelize } from "sequelize-typescript";
import InviteToken from "../modules/token/invite-token.model";
import Package from "../modules/package/package.model";
import Transporter from "../modules/transporter/transporter.model";
import User from "../modules/user/user.model";

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
