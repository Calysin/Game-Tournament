
import pool from "../utils/db.include.js";

export const GamesRepository = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM Game ORDER BY ID_game");
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM Game WHERE ID_game = ?", [id]);
    return rows[0] || null;
  },

  async create(game) {
    const { ID_game, Name_game, Type_game, Editor, Release_date, Age_requirement } = game;
    await pool.query(
      "INSERT INTO Game (ID_game, Name_game, Type_game, Editor, Release_date, Age_requirement) VALUES (?, ?, ?, ?, ?, ?)",
      [ID_game, Name_game, Type_game, Editor, Release_date, Age_requirement]
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
    await pool.query(`UPDATE Game SET ${fields.join(", ")} WHERE ID_game = ?`, values);
    return this.getById(id);
  },

  async delete(id) {
    await pool.query("DELETE FROM Game WHERE ID_game = ?", [id]);
    return { success: true };
  }
};
