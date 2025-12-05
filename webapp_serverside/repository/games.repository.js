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
    const { Name_game, Type_game, Editor, Release_date, Age_requirement } = game;
    const [result] = await pool.query(
      "INSERT INTO Game (Name_game, Type_game, Editor, Release_date, Age_requirement) VALUES (?, ?, ?, ?, ?)",
      [Name_game, Type_game, Editor, Release_date, Age_requirement]
    );
    return { ID_game: result.insertId, Name_game, Type_game, Editor, Release_date, Age_requirement };
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
