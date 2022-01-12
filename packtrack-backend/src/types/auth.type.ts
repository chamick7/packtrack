import { Optional } from "sequelize/types";
import User from "../models/user.model";

export interface LoginDto {
  username: string;
  password: string;
}

export type UserResponse = Optional<User, "password" | "refreshToken">;

export const toUserResponse = (user: User): UserResponse => {
  const userRes = user as UserResponse;
  delete userRes.password;
  delete userRes.refreshToken;
  return userRes;
};
