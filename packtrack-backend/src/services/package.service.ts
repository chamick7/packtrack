import Package from "../models/package.model";
import { QueryPackage, UpdatePackage } from "../types/package.type";
import { Op } from "sequelize";
import dayjs from "dayjs";

export const savePackages = async (packages: QueryPackage[]) => {
  return await Package.bulkCreate(packages);
};

export const upsertPackage = async (packageItem: QueryPackage) => {
  return await Package.upsert(packageItem, { returning: true });
};

export const updatePackages = async (
  packages: UpdatePackage[],
  officerExportId: number,
  status: string
) => {
  return await Package.update(
    {
      status: status,
      officerExportId: officerExportId,
      exportedAt: dayjs().toDate(),
    },
    {
      where: {
        trackingNumber: {
          [Op.in]: packages.map((item) => item.trackingNumber),
        },
      },
    }
  );
};
