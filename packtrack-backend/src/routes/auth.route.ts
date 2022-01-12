import express from "express";
import { login } from "../controllers/auth.controller";
import validate from "../middleware/validate-resource.middleware";
import { loginSchema } from "../schema/auth.schema";

//  /api/auth
const authRouter = express.Router();

authRouter.post("/login", validate(loginSchema), login);

export default authRouter;
