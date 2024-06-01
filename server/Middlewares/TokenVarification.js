import User from "../Models/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const tokenVarification = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "unauthorized!" });
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.status(403).json({ message: "token is not valid!" });
    const user = await User.findById(data.id);
    if (user) return res.json({ user: user.username });
    else return res.status(403).json({ status: false });
  });
};
