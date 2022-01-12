import jwt from "jsonwebtoken";

export interface TokenStatus {
  valid: boolean;
  expired: boolean;
  decoded: jwt.JwtPayload | null;
}
