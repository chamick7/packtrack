import express from "express";
import { login, refreshAccessToken } from "./auth.controller";
import validate from "../../middleware/validate-resource.middleware";
import { loginSchema } from "../../schema/auth.schema";

//  /api/auth
const authRouter = express.Router();

authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/refresh", refreshAccessToken);

export default authRouter;
