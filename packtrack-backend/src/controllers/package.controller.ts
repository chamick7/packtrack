import dayjs from "dayjs";
import { Request, Response } from "express";
import Package from "../models/package.model";
import { savePackages, updatePackages, upsertPackage } from "../services/package.service";
import { QueryPackage, UpdatePackage } from "../types/package.type";
import { PACKAGE_STATUS } from "../utils/package.enum";

export const assignPackage = async (req: Request, res: Response): Promise<Response> => {
  const { packages }: { packages: Package[] } = req.body;

  const newPackages: QueryPackage[] = packages.map((item) => ({
    trackingNumber: item.trackingNumber!,
    transporterDigit: item.transporterDigit!,
    status: PACKAGE_STATUS.ASSIGNED,
    receiverId: req.user.id,
  }));

  try {
    const resPackages = await savePackages(newPackages);
    if (resPackages) {
      return res.status(201).json({
        message: "packages assigned successfully",
      });
    }
  } catch (error: any) {
    if (error.message === "Validation error") {
      return res.status(400).json({
        message: "package is already assigned",
      });
    }
  }

  return res.status(400).json({
    message: "packages assigned error",
  });
};

export const arrivePackage = async (req: Request, res: Response): Promise<Response> => {
  const { packages }: { packages: Package[] } = req.body;

  for (let i = 0; i < packages.length; i++) {
    let packageItem = {
      trackingNumber: packages[i].trackingNumber!,
      transporterDigit: packages[i].transporterDigit!,
      status: PACKAGE_STATUS.ARRIVED,
      officerImportId: req.user.id,
      receiverId: packages[i].receiverId,
      arrivedAt: dayjs().toDate(),
    } as QueryPackage;
    let resPackage = await upsertPackage(packageItem);
    if (!resPackage) {
      return res.status(400).json({
        message: `packages arrived error at ${packages[i].trackingNumber}`,
      });
    }
  }

  return res.status(200).json({
    message: "packages arrived successfully",
  });
};

export const exportPackage = async (req: Request, res: Response): Promise<Response> => {
  const { packages }: { packages: Package[] } = req.body;

  const newPackages: UpdatePackage[] = packages.map((item) => ({
    trackingNumber: item.trackingNumber!,
  }));
  const resPackages = await updatePackages(newPackages, req.user.id, PACKAGE_STATUS.PENDING);
  if (resPackages[0] === 0) {
    return res.status(400).json({
      message: "packages export 0 items",
    });
  }

  if (resPackages[0]) {
    return res.status(200).json({
      message: "packages export successfully",
    });
  }

  return res.status(400).json({
    message: "packages export error",
  });
};

export const receivePackage = async (req: Request, res: Response): Promise<Response> => {
  const { packages }: { packages: Package[] } = req.body;

  return res.status(400).json({
    message: "packages receive error",
  });
};
