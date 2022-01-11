import express from "express";
import { sequelize } from "./utils/sequelize";
const port = 5000;

const app = express();



sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`packtrack backend started at port: ${port}`);
    });
  })
  .catch((err) => console.error(err));
