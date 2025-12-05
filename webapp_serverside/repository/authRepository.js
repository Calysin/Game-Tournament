import pool from "../utils/db.include.js"; 
export const authRepository = {
  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0] || null;
  },

  async createUser(email, passwordHash, role = "USER") {
    const [result] = await pool.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, passwordHash, role]
    );
    return { id: result.insertId, email, role };
  }
};
