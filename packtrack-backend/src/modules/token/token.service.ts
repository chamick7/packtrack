import { UserResponse } from "../../types/auth.type";
import { signJwt, verifyJwt } from "../../utils/jwt";
import config from "config";
import InviteToken from "./invite-token.model";
import dayjs from "dayjs";
import User from "../user/user.model";

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

export const verifyInviteToken = async (inviteToken: string) => {
  const queryInviteToken = await findInviteToken(inviteToken);

  if (queryInviteToken && queryInviteToken.valid) {
    const { decoded, expired } = verifyJwt(queryInviteToken.token);
    if (expired) {
      return {
        data: null,
        valid: false,
        expired: true,
      };
    }

    if (decoded) {
      return {
        data: queryInviteToken,
        valid: true,
        expired: false,
      };
    }
  }

  return {
    data: null,
    valid: false,
    expired: false,
  };
};

export const changeStatusInviteToken = async (inviteToken: string, receiver: User) => {
  const resInviteToken = await InviteToken.update(
    { valid: false, receiverId: receiver.id },
    { where: { token: inviteToken } }
  );
  return resInviteToken;
};
