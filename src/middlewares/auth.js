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
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(401).send({
          message: "Authentication failed.",
        });
      } else {
        req.params.accountId = decodedToken.id;
        next();
      }
    });
  } else {
    res.status(403).send({
      message: "No access.",
    });
  }
};

export { generateAccessToken, getAccountFromEmail, authenticateAccount };
