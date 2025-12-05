
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../repository/authRepository.js";

export const authController = {
  async register(req, res) {
    try {
      const { email, password } = req.body;

      const existing = await authRepository.findByEmail(email);
      if (existing) return res.status(400).json({ message: "Email already exists" });

      const hash = await bcrypt.hash(password, 10);
      const user = await authRepository.createUser(email, hash);

      res.json({ message: "Registration successful", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await authRepository.findByEmail(email);
      if (!user) return res.status(400).json({ message: "Invalid email or password" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ message: "Invalid email or password" });

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );

      res.json({
        message: "Login successful",
        token,
        user: { id: user.id, email: user.email, role: user.role }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
};
