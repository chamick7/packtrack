import { Request, Response, NextFunction } from "express";
import { UserResponse } from "../types/auth.type";
import { ROLE } from "../utils/role.enum";
import { verifyJwt } from "../utils/jwt";

export const decodeUserToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  } else {
    return res.status(401).json({
      message: "token error",
    });
  }

  return next();
};

export const decodeOfficerToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    if (!(user.role === ROLE.ADMIN || user.role === ROLE.OFFICER)) {
      return res.status(401).json({
        message: "missing permission to access",
      });
    }
    req.user = user;
  } else {
    return res.status(401).json({
      message: "token error",
    });
  }

  return next();
};

export const decodeAdminToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    if (!(user.role === ROLE.ADMIN)) {
      return res.status(401).json({
        message: "missing permission to access",
      });
    }
    req.user = user;
  } else {
    return res.status(401).json({
      message: "token error",
    });
  }

  return next();
};
