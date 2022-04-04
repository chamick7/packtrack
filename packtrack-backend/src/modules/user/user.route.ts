import express from "express";
import {
  decodeAdminToken,
  decodeOfficerToken,
  decodeUserToken,
} from "../../middleware/token-user.middleware";
import {
  getMembers,
  getOfficers,
  getSelfUser,
  sendInviteToken,
  validateInviteToken,
} from "./user.controller";
import validate from "../../middleware/validate-resource.middleware";
import { validateInviteTokenSchema } from "../../schema/token.schema";
import { registerWithTokenSchema } from "../../schema/auth.schema";
import { registerWithToken } from "../auth/auth.controller";

const userRouter = express.Router();

userRouter.get("/me", decodeUserToken, getSelfUser);
userRouter.get("/invite", decodeOfficerToken, sendInviteToken);
userRouter.post(
  "/invite/validate",
  validate(validateInviteTokenSchema),
  validateInviteToken
);
userRouter.post(
  "/invite/register",
  validate(registerWithTokenSchema),
  registerWithToken
);

userRouter.get("/members", decodeOfficerToken, getMembers);
userRouter.get("/officers", decodeAdminToken, getOfficers);

export default userRouter;
