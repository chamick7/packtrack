import {
  insertArriveNoAssign,
  insertNewPackage,
  splitPackageByReceiver,
  updatePackageFromTo,
  updateReceivePackage,
} from "./../services/package.service";
import {
  GroupPackage,
  MailingPackage,
  QueryPackage,
  UpdatePackage,
} from "./../types/package.type";
import { Request, Response } from "express";
import { PACKAGE_STATUS } from "../utils/package.enum";

//assign by user
export const assignPackage = async (req: Request, res: Response) => {
  const reqPackages = req.body.packages;

  const refactorPackage: QueryPackage[] = reqPackages.map((item: any) => ({
    ...item,
    status: PACKAGE_STATUS.ASSIGNED,
  }));

  const queryResult = await insertNewPackage(refactorPackage, req.user.id);
  if (queryResult) {
    return res.status(201).json({
      message: "Assign packages successfully",
    });
  }
};

//arrive no assign
export const arrivePackageNoAssign = async (req: Request, res: Response) => {
  const officerId = req.user.id;
  const reqPackages = req.body.packages;

  const refactorPackage: QueryPackage[] = reqPackages.map((item: any) => ({
    ...item,
    status: PACKAGE_STATUS.ARRIVED,
  }));
  const queryResult = await insertArriveNoAssign(refactorPackage, officerId);
  if (queryResult) {
    const reformPackages: MailingPackage[] = queryResult.map((item) => ({
      receiverId: item.receiverId!,
      transporterDigit: item.transporterDigit!,
      trackingNumber: item.trackingNumber,
    }));
    const groupPackages = splitPackageByReceiver(reformPackages);

    return res.status(201).json({
      message: "Arrive packages successfully",
    });
  }

  return res.status(400).json({
    message: "Error to arrive packages",
  });
};

//arrive with assign
export const arrivePackageWithAssign = async (req: Request, res: Response) => {
  const officerId = req.user.id;
  const reqPackages = req.body.packages;

  const refactorPackage: UpdatePackage[] = reqPackages.map((item: any) => ({
    id: item.id,
  }));

  const queryResult = await updatePackageFromTo(
    refactorPackage,
    officerId,
    PACKAGE_STATUS.ASSIGNED,
    PACKAGE_STATUS.ARRIVED
  );
  if (queryResult) {
    const reformPackages: MailingPackage[] = queryResult.map((item) => ({
      receiverId: item.receiverId!,
      transporterDigit: item.transporterDigit!,
      trackingNumber: item.trackingNumber,
    }));
    const groupPackages = splitPackageByReceiver(reformPackages);

    return res.status(201).json({
      message: "Arrive packages successfully",
    });
  }

  return res.status(400).json({
    message: "Error to arrive packages",
  });
};

//export
export const exportPackage = async (req: Request, res: Response) => {
  const officerId = req.user.id;
  const reqPackages = req.body.packages;

  const refactorPackage: UpdatePackage[] = reqPackages.map((item: any) => ({
    id: item.id,
  }));
  const queryResult = await updatePackageFromTo(
    refactorPackage,
    officerId,
    PACKAGE_STATUS.ARRIVED,
    PACKAGE_STATUS.PENDING
  );
  if (queryResult) {
    const reformPackages: MailingPackage[] = queryResult.map((item) => ({
      receiverId: item.receiverId!,
      transporterDigit: item.transporterDigit!,
      trackingNumber: item.trackingNumber,
    }));
    const groupPackages = splitPackageByReceiver(reformPackages);

    return res.status(201).json({
      message: "Export packages successfully",
    });
  }

  return res.status(400).json({
    message: "Error to export packages",
  });
};

export const receivePackage = async (req: Request, res: Response) => {
  const userId: number = req.user.id;
  const reqPackages = req.body.packages;

  const refactorPackage: UpdatePackage[] = reqPackages.map((item: any) => ({
    id: item.id,
  }));
  const queryResult = await updateReceivePackage(refactorPackage, userId);
  if (queryResult) {
    const reformPackages: MailingPackage[] = queryResult.map((item) => ({
      receiverId: item.receiverId!,
      transporterDigit: item.transporterDigit!,
      trackingNumber: item.trackingNumber,
    }));
    const groupPackages = splitPackageByReceiver(reformPackages);

    return res.status(201).json({
      message: "Receive packages successfully",
    });
  }

  return res.status(400).json({
    message: "Error to receive packages",
  });
};
