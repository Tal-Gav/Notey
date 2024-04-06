import express from "express";
import { authenticateAccount } from "../middlewares/auth.js";
import * as accountController from "../controllers/account.controller.js";

const router = express.Router();

router.post("/signup", accountController.signupAccount);
router.post("/login", accountController.loginAccount);
router.get("/", accountController.getAccounts);
router.get("/details", authenticateAccount, accountController.getAccountById);
router.put("/:id", accountController.updateAccount);
router.delete("/:id", accountController.deleteAccountById);

export default router;
