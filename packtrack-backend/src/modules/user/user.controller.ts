import { getUserFromRole } from "./user.service";
import { Request, Response } from "express";
import {
  createInviteToken,
  findInviteToken,
  saveInviteToken,
  verifyInviteToken,
} from "../token/token.service";
import { ROLE } from "../../utils/role.enum";

export const getSelfUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  }

  return res.status(400).send();
};

export const sendInviteToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const inviteToken = createInviteToken(req.user);

  if (!inviteToken) {
    return res.status(400).json({
      message: "error generate invite token",
    });
  }

  const responseInviteToken = await saveInviteToken(req.user.id, inviteToken);

  if (responseInviteToken) {
    return res.status(201).json({
      message: "success",
      inviteToken: responseInviteToken.token,
    });
  }

  return res.status(400).json({
    message: "error generate invite token",
  });
};

export const validateInviteToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { inviteToken } = req.body;

  const { data, valid, expired } = await verifyInviteToken(inviteToken);
  if (!valid && expired) {
    return res.status(403).json({
      valid: false,
      message: "token expired",
    });
  }

  if (valid && !expired && data) {
    return res.status(200).json({
      valid: true,
      inviter: data.inviter?.firstName,
    });
  }

  return res.status(403).json({
    valid: false,
    message: "Invalid token",
  });
};

export const getMembers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const members = await getUserFromRole([ROLE.MEMBER]);
  if (members) {
    return res.status(200).json({
      message: "success",
      members: members,
    });
  }

  return res.status(400).json({
    message: "get member error ",
  });
};

export const getOfficers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const officers = await getUserFromRole([ROLE.OFFICER]);
  if (officers) {
    return res.status(200).json({
      message: "success",
      officers: officers,
    });
  }

  return res.status(400).json({
    message: "get member error ",
  });
};
