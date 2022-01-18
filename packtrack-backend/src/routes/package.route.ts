import express from "express";
import { arrivePackage, assignPackage, exportPackage } from "../controllers/package.controller";
import { decodeOfficerToken, decodeUserToken } from "../middleware/token-user.middleware";
import validate from "../middleware/validate-resource.middleware";
import { arrivePackageSchema, assignPackageSchema, pendingPackageSchema } from "../schema/package.schema";

const packageRouter = express.Router();

packageRouter.post("/assign", validate(assignPackageSchema), decodeUserToken, assignPackage);
packageRouter.post("/arrive", validate(arrivePackageSchema), decodeOfficerToken, arrivePackage);
packageRouter.post("/export", validate(pendingPackageSchema), decodeOfficerToken, exportPackage);
packageRouter.post("/receive", decodeUserToken);

export default packageRouter;
