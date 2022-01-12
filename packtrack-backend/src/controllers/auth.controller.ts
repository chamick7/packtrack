import { Request, Response } from "express";
import { createAccessToken, createRefreshToken } from "../services/token.service";
import {
  findByRefreshToken,
  findOneUserByUsername,
  updateRefreshToken,
  validateUserPassword,
} from "../services/user.service";
import { LoginDto, toUserResponse, UserResponse } from "../types/auth.type";
import { verifyJwt } from "../utils/jwt";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const loginDto = req.body as LoginDto;

  const user = await findOneUserByUsername(loginDto.username);

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
    message: "username or password is invalid",
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
