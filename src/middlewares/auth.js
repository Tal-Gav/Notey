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
        res.json("Authentication failed.");
      } else {
        req.params.id = decodedToken.id;
        next();
      }
    });
  } else {
    res.json("Authentication failed.");
  }
};

export { generateAccessToken, getAccountFromEmail, authenticateAccount };
