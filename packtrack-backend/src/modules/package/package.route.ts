import {
  getAllPackage,
  getMyPackage,
  receivePackage,
} from "./package.controller";
import express from "express";
import {
  arrivePackageNoAssign,
  arrivePackageWithAssign,
  assignPackage,
  exportPackage,
} from "./package.controller";
import {
  decodeOfficerToken,
  decodeUserToken,
} from "../../middleware/token-user.middleware";
import validate from "../../middleware/validate-resource.middleware";
import {
  arriveNoAssignSchema,
  PackageWithIdSchema,
  assignPackageSchema,
} from "../../schema/package.schema";

const packageRouter = express.Router();

packageRouter.post(
  "/assign",
  decodeUserToken,
  validate(assignPackageSchema),
  assignPackage
);

packageRouter.post(
  "/arrive/non-assign",
  decodeOfficerToken,
  validate(arriveNoAssignSchema),
  arrivePackageNoAssign
);

packageRouter.post(
  "/arrive/with-assign",
  decodeOfficerToken,
  validate(PackageWithIdSchema),
  arrivePackageWithAssign
);

packageRouter.post(
  "/export",
  decodeOfficerToken,
  validate(PackageWithIdSchema),
  exportPackage
);

packageRouter.post(
  "/receive",
  decodeUserToken,
  validate(PackageWithIdSchema),
  receivePackage
);

packageRouter.get("/list/me", decodeUserToken, getMyPackage);

packageRouter.get("/list/all", decodeOfficerToken, getAllPackage)

export default packageRouter;
