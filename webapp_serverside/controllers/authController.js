
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UsersRepository } from "../repositories/users.repository.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || "1h";

export const AuthController = {
  async register(req, res) {
    try {
      const { email, password, username } = req.body;
      if (!email || !password) return res.status(400).json({ message: "Email and password required" });

      const existing = await UsersRepository.findByEmail(email);
      if (existing) return res.status(409).json({ message: "Email already used" });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await UsersRepository.createUser({ email, password_hash: hash, username });
      res.status(201).json({ success: true, user: { id: user.id, email: user.email, username: user.username } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: "Email and password required" });

      const user = await UsersRepository.findByEmail(email);
      if (!user) return res.status(401).json({ message: "Invalid credentials" });

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) return res.status(401).json({ message: "Invalid credentials" });

      const payload = { sub: user.id, role: user.role, email: user.email };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

      res.json({ success: true, token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};
