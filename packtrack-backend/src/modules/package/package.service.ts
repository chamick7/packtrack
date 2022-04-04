import { receivePackage } from "./package.controller";
import { PACKAGE_STATUS } from "../../utils/package.enum";
import Package from "./package.model";
import {
  GroupPackage,
  MailingPackage,
  QueryPackage,
  UpdatePackage,
} from "../../types/package.type";
import _ from "lodash";
import { FindOptions, Op, WhereOptions } from "sequelize";
import User from "../user/user.model";
import Transporter from "../transporter/transporter.model";

export const insertNewPackage = async (
  packages: QueryPackage[],
  receiverId: number
) => {
  const preparePackages = packages.map((item) => ({ ...item, receiverId }));

  try {
    return await Package.bulkCreate(preparePackages);
  } catch (error) {
    return null;
  }
};

export const insertArriveNoAssign = async (
  packages: QueryPackage[],
  officerId: number
): Promise<Package[] | null> => {
  const preparePackages = packages.map((item) => ({
    ...item,
    officerImportId: officerId,
    arrivedAt: Date.now(),
  }));

  try {
    return await Package.bulkCreate(preparePackages);
  } catch (error) {
    return null;
  }
};

export const updatePackageFromTo = async (
  packages: UpdatePackage[],
  officerId: number,
  statusFrom: PACKAGE_STATUS,
  statusTo: PACKAGE_STATUS
): Promise<Package[] | null> => {
  const packagesId = getIdFromPackages(packages);
  const queryPackages = await findPackageWithId(
    packagesId,
    {
      status: statusFrom,
    },
    { attributes: ["id", "receiverId", "transporterDigit"] }
  );

  const updateOptions = () => {
    switch (statusTo) {
      case PACKAGE_STATUS.ARRIVED:
        return {
          status: statusTo,
          officerImportId: officerId,
          arrivedAt: Date.now(),
        };
      case PACKAGE_STATUS.PENDING:
        return {
          status: statusTo,
          officerExportId: officerId,
          exportedAt: Date.now(),
        };
    }
  };

  try {
    if (queryPackages) {
      const queryResult = await Package.update(
        { ...updateOptions() },
        {
          where: {
            id: {
              [Op.in]: queryPackages.map((item) => item.id!),
            },
          },
        }
      );
      if (queryResult[0]) {
        return queryPackages;
      }
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const updateReceivePackage = async (
  packages: UpdatePackage[],
  userId: number
) => {
  const packagesId = getIdFromPackages(packages);
  const queryPackages = await findPackageWithId(
    packagesId,
    {
      status: PACKAGE_STATUS.PENDING,
      receiverId: userId,
    },
    { attributes: ["id", "receiverId", "transporterDigit"] }
  );
  try {
    if (queryPackages) {
      const queryResult = await Package.update(
        { status: PACKAGE_STATUS.RECEIVED, receivedAt: Date.now() },
        {
          where: {
            id: {
              [Op.in]: queryPackages.map((item) => item.id!),
            },
            receiverId: userId,
          },
        }
      );
      if (queryResult[0]) {
        return queryPackages;
      }
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const findPackageWithId = async (
  ids: number[],
  where?: WhereOptions<Package>,
  options?: FindOptions<Package>
) => {
  try {
    const queryResult = await Package.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
        ...where,
      },
      raw: true,
      ...options,
    });
    return queryResult;
  } catch (error) {
    return null;
  }
};

export const splitPackageByReceiver = (packages: MailingPackage[]) => {
  const lodashPackages = _.groupBy(packages, "receiverId");
  const groupPackages = Object.keys(lodashPackages).map((key) => {
    const eachGroup: GroupPackage = {
      receiverId: parseInt(key),
      packages: lodashPackages[key],
    };
    return eachGroup;
  });

  return groupPackages;
};

const getIdFromPackages = (packages: { id: number }[]): number[] => {
  return packages.map((item) => item.id);
};

export const getPackageByUserId = async (
  userId: number,
  whereOption?: WhereOptions<Package>
) => {
  try {
    const queryResult = await Package.findAll({
      where: {
        receiverId: userId,

        ...whereOption,
      },
      include: [
        {
          model: User,
          as: "receiver",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "officerImport",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "officerExport",
          attributes: ["firstName", "lastName"],
        },
        {
          model: Transporter,
          as: "transporter",
          attributes: ["name"],
        },
      ],
      attributes: [
        "id",
        "trackingNumber",
        "arrivedAt",
        "exportedAt",
        "receivedAt",
        "createdAt",
        "status",
      ],
      order: [["status", "ASC"]],
    });
    return queryResult;
  } catch (error) {
    return null;
  }
};

export const getAllPackages = async (whereOption?: WhereOptions<Package>) => {
  try {
    const queryResult = await Package.findAll({
      where: {
        ...whereOption,
      },
      include: [
        {
          model: User,
          as: "receiver",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "officerImport",
          attributes: ["firstName", "lastName"],
        },
        {
          model: User,
          as: "officerExport",
          attributes: ["firstName", "lastName"],
        },
        {
          model: Transporter,
          as: "transporter",
          attributes: ["name"],
        },
      ],
      attributes: [
        "id",
        "trackingNumber",
        "arrivedAt",
        "exportedAt",
        "receivedAt",
        "createdAt",
        "status",
      ],
      order: [["status", "ASC"]],
    });
    return queryResult;
  } catch (error) {
    return null;
  }
};
