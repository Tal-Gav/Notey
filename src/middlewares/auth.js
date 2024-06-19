import jwt from "jsonwebtoken";
import "dotenv/config";
import { Account } from "../models/account.model.js";

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "3600s" });
};

const getAccountFromEmail = async (email) => {
  return await Account.find({ email });
};

const authenticateAccount = (req, res, next) => {
  const token = req.cookies._auth;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(401).json({
          message: "Authentication failed.",
        });
      } else {
        const account = await Account.findById(decodedToken.id).select(
          "firstName lastName email _id"
        );
        if (account) {
          req.params.accountId = decodedToken.id;
          next();
        } else {
          res
            .status(403)
            .clearCookie("_auth")
            .clearCookie("_auth_state")
            .clearCookie("_auth_type")
            .json({
              message: "No access.",
            });
        }
      }
    });
  } else {
    res.status(403).json({
      message: "No access.",
    });
  }
};

export { generateAccessToken, getAccountFromEmail, authenticateAccount };
