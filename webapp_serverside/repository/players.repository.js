
import pool from "../utils/db.include.js";

export const PlayersRepository = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Player ORDER BY ID_player");
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Player WHERE ID_player = ?", [id]);
    return rows[0] || null;
  },

  async create(player) {
    const { Surname, Name, Pseudo, Age, Gender } = player;
    const [result] = await pool.query(
      "INSERT INTO Player (Surname, Name, Pseudo, Age, Gender, ID_player) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Surname,
        Name,
        Pseudo,
        Age || null,
        Gender,
        player.ID_player ?? null // If you want to preserve ID_player, else null -> may fail if PK null; ideally use auto-increment but current schema isn't auto-incremented
      ]
    );
    // If ID_player isn't auto-incremented in your SQL, consider updating schema to AUTO_INCREMENT.
    return { success: true };
  },

  async update(id, patch) {
    // create dynamic update query
    const fields = [];
    const values = [];
    for (const [k, v] of Object.entries(patch)) {
      fields.push(`${k} = ?`);
      values.push(v);
    }
    if (fields.length === 0) return null;
    values.push(id);
    const sql = `UPDATE Player SET ${fields.join(", ")} WHERE ID_player = ?`;
    await pool.query(sql, values);
    return this.getById(id);
  },

  async delete(id) {
    await pool.query("DELETE FROM Player WHERE ID_player = ?", [id]);
    return { success: true };
  }
};
