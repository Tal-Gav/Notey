import jwt from "jsonwebtoken";
import { Account } from "../models/accountModel.js";

const generateAccessToken = (email) => {
  return jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: "3600s" });
};

const getAccountFromEmail = async (email) => {
  return await Account.find({ email });
};

const authenticateAccount = (req, res, next) => {
  console.log(req.headers.authorization);

  const token = req.headers["authorization"];
  console.log("token", token);
};

export { generateAccessToken, getAccountFromEmail, authenticateAccount };
