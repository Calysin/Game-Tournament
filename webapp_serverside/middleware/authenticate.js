
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.JWT_SECRET || "dev_secret";

export function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ message: "Missing token" });
  const token = auth.split(" ")[1];
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload; // { sub, role, email }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
