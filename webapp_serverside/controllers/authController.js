import { AuthRepository } from '../repository/authRepository.js';
import bcrypt from 'bcrypt';

export const authController = {
  async register(req, res) {
    const { email, password } = req.body;

    try {
      const existing = await AuthRepository.getUserByEmail(email);
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'User already exists'
        });
      }

      await AuthRepository.registerUser(email, password);

      res.json({
        success: true,
        message: 'Registration successful'
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Registration failed. Try again.'
      });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await AuthRepository.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({
          success: false,
          message: 'Invalid password'
        });
      }

      res.json({
        success: true,
        user: { email: user.email, role: user.role }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Login failed. Try again.'
      });
    }
  }
};
