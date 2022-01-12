import jwt from "jsonwebtoken";
import { TokenStatus } from "../types/token.type";
require("dotenv").config();

export const signJwt = (payload: Object, options: jwt.SignOptions) => {
  const secretKey = process.env.JWT_TOKEN_SECRET!;

  return jwt.sign(payload, secretKey, { ...options, algorithm: "HS256" });
};

export const verifyJwt = (token: string): TokenStatus => {
  const secretKey = process.env.JWT_SECRET_KEY!;
  try {
    const decoded = jwt.verify(token, secretKey) as jwt.JwtPayload;
    const tokenStatus: TokenStatus = {
      valid: true,
      expired: false,
      decoded: decoded,
    };
    return tokenStatus;
  } catch (error: any) {
    const tokenStatus: TokenStatus = {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
    return tokenStatus;
  }
};
