import express from "express";
import { decodeUserToken } from "../middleware/token-user.middleware";
import { getSelfUser, sendInviteToken, validateInviteToken } from "../controllers/user.controller";
import validate from "../middleware/validate-resource.middleware";
import { validateInviteTokenSchema } from "../schema/token.schema";

const userRouter = express.Router();

userRouter.get("/me", decodeUserToken, getSelfUser);
userRouter.get("/invite", decodeUserToken, sendInviteToken);
userRouter.post("/invite/validate", validate(validateInviteTokenSchema), validateInviteToken);

export default userRouter;
