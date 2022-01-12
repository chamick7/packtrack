import express from "express";
import { decodeUserToken } from "../middleware/token-user.middleware";
import { getSelfUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/me", decodeUserToken, getSelfUser);

export default userRouter;
