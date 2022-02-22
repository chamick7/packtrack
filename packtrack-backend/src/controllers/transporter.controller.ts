import { Request, Response } from "express";
import Transporter from "../models/transporter.model";
import { findAllTransporters, isGenerated } from "../services/transporter.service";
import { transporterList } from "../utils/transporter-list";

export const generateTransporter = async (req: Request, res: Response): Promise<Response> => {
  if (await isGenerated()) {
    return res.status(400).json({
      message: "transporter already generated",
    });
  }

  const resTransporter = await Transporter.bulkCreate(transporterList);
  if (resTransporter) {
    return res.status(201).json({
      message: "transporter success generated",
    });
  }

  return res.status(500).json({
    message: "transporter generate error",
  });
};

export const getAllTransporter = async (req: Request, res: Response): Promise<Response> => {
  const transporters = await findAllTransporters();
  if (transporters) {
    return res.status(200).json({
      message: "success",
      transporter: transporters,
    });
  }

  return res.status(404).json({
    message: "transporter not found",
  })
};
