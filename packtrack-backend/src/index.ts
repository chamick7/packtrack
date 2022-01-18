import express from "express";
import authRouter from "./routes/auth.route";
import { sequelize } from "./utils/sequelize";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.route";
import transporterRouter from "./routes/transporter.route";
import packageRouter from "./routes/package.route";
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
