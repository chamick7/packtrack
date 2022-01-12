import { Optional } from "sequelize/types";
import User from "../models/user.model";

export interface LoginDto {
  username: string;
  password: string;
}

export type UserResponse = Optional<User, "password">;

