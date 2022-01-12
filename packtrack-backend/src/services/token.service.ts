import { UserResponse } from "../types/auth.type";
import { signJwt } from "../utils/jwt";
import config from "config";

export const createAccessToken = (user: UserResponse) => {
  const accessToken = signJwt(user, { expiresIn: config.get("token.accessToken.expired") });

  return accessToken;
};

export const createRefreshToken = (user: UserResponse) => {
  const refreshToken = signJwt(user, { expiresIn: config.get("token.refreshToken.expired") });

  return refreshToken;
};
