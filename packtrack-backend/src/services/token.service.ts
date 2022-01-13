import { UserResponse } from "../types/auth.type";
import { signJwt } from "../utils/jwt";
import config from "config";
import InviteToken from "../models/invite-token.model";
import dayjs from "dayjs";
import User from "../models/user.model";

export const createAccessToken = (user: UserResponse) => {
  const accessToken = signJwt(user, { expiresIn: config.get("token.accessToken.expired") });

  return accessToken;
};

export const createRefreshToken = (user: UserResponse) => {
  const refreshToken = signJwt(user, { expiresIn: config.get("token.refreshToken.expired") });

  return refreshToken;
};

export const createInviteToken = (inviter: UserResponse) => {
  const inviteToken = signJwt(
    { inviter: inviter.firstName },
    { expiresIn: config.get("token.inviteToken.expired") }
  );

  return inviteToken;
};

export const saveInviteToken = (inviterId: number, token: string) => {
  const inviteToken = new InviteToken();

  inviteToken.token = token;
  inviteToken.inviterId = inviterId;
  inviteToken.expiredDate = dayjs().add(2, "day").toDate();

  return inviteToken.save();
};

export const findInviteToken = async (inviteToken: string) => {
  const queryInviteToken = await InviteToken.findOne({
    where: { token: inviteToken },
    include: ["inviter"],
  });
  return queryInviteToken;
};
