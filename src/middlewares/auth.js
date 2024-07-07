import jwt from "jsonwebtoken";
import "dotenv/config";

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN, { expiresIn: "7d" });
};

const generateAccessToken = (accountInfo) => {
  return jwt.sign({ accountInfo }, process.env.ACCESS_TOKEN, {
    expiresIn: "10s",
  });
};

const authenticateAccount = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    console.log("Unauthorized");
    console.log(authHeader);
    return res.status(401).json({ message: "Unauthorized" });
  }
  const accessToken = authHeader.split(" ")[1];

  // check json web token exists & is verified
  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN,
    async (err, decodedToken) => {
      if (err) return res.status(403).json({ message: "Forbidden" });
      req.params.accountId = decodedToken.accountInfo._id;
      console.log("authorized");
      next();
    }
  );
};

export { generateAccessToken, generateRefreshToken, authenticateAccount };
