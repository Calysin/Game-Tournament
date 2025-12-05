// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export function authRequired(req, res, next) {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ message: "Missing token" });

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

export function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admins only" });
  }
  next();
}
