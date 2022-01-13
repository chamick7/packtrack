import { Request, Response } from "express";
import { createInviteToken, findInviteToken, saveInviteToken } from "../services/token.service";
import { isOfficer } from "../services/user.service";
import { verifyJwt } from "../utils/jwt";

export const getSelfUser = async (req: Request, res: Response): Promise<Response> => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  }

  return res.status(400).send();
};

export const sendInviteToken = async (req: Request, res: Response): Promise<Response> => {
  if (req.user) {
    if (!isOfficer(req.user.role)) {
      return res.status(401).json({
        message: "missing authorization access",
      });
    }

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
  }
  return res.status(400).send();
};

export const validateInviteToken = async (req: Request, res: Response): Promise<Response> => {
  const { inviteToken } = req.body;

  const queryInviteToken = await findInviteToken(inviteToken);

  if (queryInviteToken && queryInviteToken.valid) {
    const { decoded, expired } = verifyJwt(queryInviteToken.token);
    if (expired) {
      return res.status(403).json({
        valid: false,
        message: "token expired",
      });
    }

    if (decoded) {
      return res.status(200).json({
        valid: true,
        inviter: queryInviteToken.inviter?.firstName,
      });
    }
  }

  return res.status(403).json({
    valid: false,
    message: "Invalid token",
  });
};
