import express from "express";
import { generateTransporter, getAllTransporter } from "../controllers/transporter.controller";
import { decodeAdminToken } from "../middleware/token-user.middleware";

const transporterRouter = express.Router();

transporterRouter.post("/generate", decodeAdminToken, generateTransporter);
transporterRouter.get("/all", getAllTransporter);

export default transporterRouter;
