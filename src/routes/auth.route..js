import express from "express";
import { loginLimiter } from "../middlewares/loginLimiter.js";
import * as authController from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/", authController.login); // loginLimiter
router.get("/verify", authController.verify); // loginLimiter
router.get("/refresh", authController.refresh);
router.post("/logout", authController.logout);

export default router;
