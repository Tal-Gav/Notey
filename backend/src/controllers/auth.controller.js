import { Account } from "../models/account.model.js";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../middlewares/auth.js";

export const login = async (req, res) => {
  const { email, password } = req.body.account;
  console.log(req.body.account);

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const account = await Account.login(email, password);
    const accountInfo = {
      _id: account._id,
      email: account.email,
      firstName: account.firstName,
      lastName: account.lastName,
    };

    const refreshToken = generateRefreshToken(account._id);
    const accessToken = generateAccessToken(accountInfo);

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //change true for https
      sameSite: "None", //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });
    res.status(200);
    // Send accessToken containing username and roles
    console.log("Account logged in.");
    res.json({ message: "Account logged in.", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const refresh = async (req, res) => {
  console.log("need a new aT");
  const refreshToken = req.cookies.jwt;

  try {
    // check json web token exists & is verified
    console.log(req.cookies);
    if (refreshToken) {
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            return res.status(401).json({
              message: "Authentication failed.",
            });
          }

          const account = await Account.findById(decodedToken.id).select(
            "firstName lastName email _id"
          );
          if (!account) {
            console.log("Unauthorized");
            return res.status(401).json({ message: "Unauthorized" });
          }

          const accountInfo = {
            _id: account._id,
            email: account.email,
            firstName: account.firstName,
            lastName: account.lastName,
          };
          const accessToken = generateAccessToken(accountInfo);

          res.json({ accessToken });
        }
      );
    } else {
      res.status(403).json({
        message: "No access.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "No access.",
    });
  }
};

export const logout = async (req, res) => {
  console.log("logout");
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};
