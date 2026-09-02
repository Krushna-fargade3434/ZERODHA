const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

const authCookieName = "zerodha_token";

const requireAuth = async (req, res, next) => {
  const token = req.cookies[authCookieName];

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(payload.sub).select("_id name email");

    if (!user) {
      return res.status(401).json({ message: "User account not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired session" });
  }
};

module.exports = { authCookieName, requireAuth };
