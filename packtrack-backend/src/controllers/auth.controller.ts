import { Request, Response } from "express";
import { createAccessToken, createRefreshToken } from "../services/token.service";
import { findOneUserByUsername, validateUserPassword } from "../services/user.service";
import { LoginDto, UserResponse } from "../types/auth.type";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const loginDto = req.body as LoginDto;

  const user = await findOneUserByUsername(loginDto.username);

  if (user && validateUserPassword(user, loginDto.password)) {
    const userResponse = user as UserResponse;
    delete userResponse.password;
    return res.status(200).json({
      user: userResponse,
      accessToken: createAccessToken(userResponse),
      refreshToken: createRefreshToken(userResponse),
    });
  }

  return res.status(401).json({
    message: "username or password is invalid",
  });
};
