import { Request, Response } from "express";

export const getSelfUser = async (req: Request, res: Response): Promise<Response> => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  }

  return res.status(400).send();
};
