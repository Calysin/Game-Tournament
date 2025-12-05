// utils/authRepository.js
import pool from "./db.include.js";

export const authRepository = {
  // Find user by email
  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0] || null;
  },

  // Insert a new user
  async createUser(email, passwordHash, role = "USER") {
    const result = await pool.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, passwordHash, role]
    );
    return { id: result[0].insertId, email, role };
  }
};
