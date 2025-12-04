import db from './db.include.js';
import bcrypt from 'bcrypt';

export const AuthRepository = {
  async registerUser(email, password, role = 'USER') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
      [email, hashedPassword, role]
    );
    return result;
  },

  async getUserByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }
};
