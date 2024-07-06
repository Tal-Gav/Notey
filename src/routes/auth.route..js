import express from "express";
import { loginLimiter } from "../middlewares/loginLimiter.js";
import * as authController from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/", loginLimiter, authController.login);
router.get("/refresh", authController.refresh);
router.post("/logout", authController.logout);

export default router;
