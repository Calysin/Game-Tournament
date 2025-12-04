
import pool from "./db.include.js";

export const UsersRepository = {
  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0] || null;
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT id, email, username, role, created_at FROM users WHERE id = ?", [id]);
    return rows[0] || null;
  },

  async createUser({ email, password_hash, username, role = "USER" }) {
    const [result] = await pool.query(
      "INSERT INTO users (email, password_hash, username, role) VALUES (?, ?, ?, ?)",
      [email, password_hash, username, role]
    );
    return { id: result.insertId, email, username, role };
  },

  async updateRole(id, role) {
    await pool.query("UPDATE users SET role = ? WHERE id = ?", [role, id]);
    return this.findById(id);
  },

  async listAll() {
    const [rows] = await pool.query("SELECT id, email, username, role, created_at FROM users");
    return rows;
  }
};
