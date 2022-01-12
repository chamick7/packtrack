import { Request, Response, NextFunction } from "express";
import { UserResponse } from "../types/auth.type";
import { verifyJwt } from "../utils/jwt";

export const decodeUserToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s/, "");

  if (!accessToken) {
    return res.status(401).json({
      message: "missing access token.",
    });
  }

  const tokenStatus = verifyJwt(accessToken);
  if (tokenStatus.expired) {
    return res.status(401).json({
      message: "token expired.",
    });
  }

  if (tokenStatus.decoded) {
    const user = tokenStatus.decoded as UserResponse;
    req.user = user;
  }

  return next();
};
