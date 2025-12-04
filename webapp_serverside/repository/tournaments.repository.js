
import pool from "./db.include.js";

export const TournamentsRepository = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Tournament ORDER BY ID_tournament");
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Tournament WHERE ID_tournament = ?", [id]);
    return rows[0] || null;
  },

  async create(t) {
    const { ID_tournament, Name_tournament, Location, Date_start, Date_end, Reward } = t;
    await pool.query(
      "INSERT INTO Tournament (ID_tournament, Name_tournament, Location, Date_start, Date_end, Reward) VALUES (?, ?, ?, ?, ?, ?)",
      [ID_tournament, Name_tournament, Location, Date_start, Date_end, Reward]
    );
    return { success: true };
  },

  async update(id, patch) {
    const fields = [];
    const values = [];
    for (const [k, v] of Object.entries(patch)) {
      fields.push(`${k} = ?`);
      values.push(v);
    }
    values.push(id);
    await pool.query(`UPDATE Tournament SET ${fields.join(", ")} WHERE ID_tournament = ?`, values);
    return this.getById(id);
  },

  async delete(id) {
    await pool.query("DELETE FROM Tournament WHERE ID_tournament = ?", [id]);
    return { success: true };
  }
};
