import { raw } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const findOneUserByUsername = async (username: string): Promise<User | null> => {
  const user = await User.findOne({ where: { username: username }, raw: true });

  return user;
};

export const validateUserPassword = async (user: User, plainPassword: string): Promise<boolean> => {
  return bcrypt.compareSync(user.password, plainPassword);
};
