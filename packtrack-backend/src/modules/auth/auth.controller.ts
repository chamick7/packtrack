import { Request, Response } from "express";
import User from "../user/user.model";
import {
  changeStatusInviteToken,
  createAccessToken,
  createRefreshToken,
  verifyInviteToken,
} from "../token/token.service";
import {
  createUser,
  findByRefreshToken,
  findOneUserByEmail,
  updateRefreshToken,
  validateUserPassword,
} from "../user/user.service";
import { LoginDto, RegisterDto, toUserResponse, UserResponse } from "../../types/auth.type";
import { verifyJwt } from "../../utils/jwt";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const loginDto = req.body as LoginDto;

  const user = await findOneUserByEmail(loginDto.email);

  if (user && validateUserPassword(user, loginDto.password)) {
    const userResponse = toUserResponse(user);
    const accessToken = createAccessToken(userResponse);
    const refreshToken = createRefreshToken(userResponse);
    const result = await updateRefreshToken(user, refreshToken);
    if (result) {
      return res.status(200).json({
        user: userResponse,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }

    return res.status(500).json({
      message: "error sign refresh token",
    });
  }

  return res.status(401).json({
    message: "email or password is invalid",
  });
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;

  const { decoded, expired } = verifyJwt(refreshToken);
  if (expired) {
    return res.status(403).json({
      message: "token expired",
    });
  }

  if (decoded) {
    const user = await findByRefreshToken(refreshToken);
    if (user) {
      const userRes = toUserResponse(user);
      return res.status(200).json({
        accessToken: createAccessToken(userRes),
      });
    }
  }

  return res.status(401).json({
    message: "invalid token",
  });
};

export const registerWithToken = async (req: Request, res: Response): Promise<Response> => {
  const { inviteToken, user }: RegisterDto = req.body;

  const { valid, expired } = await verifyInviteToken(inviteToken);
  if (expired) {
    return res.status(403).json({
      message: "token expired",
    });
  }

  if (!valid) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }

  const newUser = new User();
  newUser.email = user.email.trim();
  newUser.password = bcrypt.hashSync(user.password.trim(), 12);
  newUser.firstName = user.firstName.trim();
  newUser.lastName = user.lastName.trim();
  newUser.mobile = user.mobile.trim();
  

  const userRes = await createUser(newUser);
  if (userRes) {
    const resInviteToken = await changeStatusInviteToken(inviteToken, userRes);
    if (resInviteToken[0]) {
      return res.status(201).json({
        message: "success",
      });
    }
  }

  return res.status(500).json({
    message: "error",
  });
};
