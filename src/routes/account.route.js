import express from "express";
import { authenticateAccount } from "../middlewares/auth.js";
import * as accountController from "../controllers/account.controller.js";

const router = express.Router();

router.post("/signup", accountController.signupAccount);
// router.post("/login", accountController.loginAccount);
router.get("/", authenticateAccount, accountController.getAccounts);
router.get("/details", authenticateAccount, accountController.getAccountById);
router.put("/:id", authenticateAccount, accountController.updateAccount);
router.delete("/:id", authenticateAccount, accountController.deleteAccountById);

export default router;
