import express from "express";
import authRouter from "./modules/auth/auth.route";
import { sequelize } from "./utils/sequelize";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./modules/user/user.route";
import transporterRouter from "./modules/transporter/transporter.route";
import packageRouter from "./modules/package/package.route";
const port = 5000;

const app = express();

//apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//define routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/transporter", transporterRouter);
app.use("/api/package", packageRouter);

sequelize
  .sync({ alter: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`packtrack backend started at port: ${port}`);
    });
  })
  .catch((err) => console.error(err));
