import { raw } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { ROLE } from "../utils/role.enum";

export const findOneUserByEmail = async (email: string): Promise<User | null> => {
  const user = await User.findOne({ where: { email: email }, raw: true });

  return user;
};

export const validateUserPassword = async (user: User, plainPassword: string): Promise<boolean> => {
  return bcrypt.compareSync(user.password, plainPassword);
};

export const updateRefreshToken = async (user: User, refreshToken: string) => {
  const userUpdate = await User.update(
    {
      refreshToken: refreshToken,
    },
    {
      where: {
        id: user.id,
      },
    }
  );

  return userUpdate;
};

export const findByRefreshToken = async (refreshToken: string) => {
  return await User.findOne({
    where: {
      refreshToken: refreshToken,
    },
    raw: true,
  });
};

export const createUser = async (user: User) => {
  return await user.save();
};

export const isOfficer = (role: string) => {
  return role === ROLE.OFFICER || role === ROLE.ADMIN;
};
