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
    const { Pseudo, Name, Surname, Age, Gender } = player;
    const [result] = await pool.query(
      "INSERT INTO Player (Pseudo, Name, Surname, Age, Gender) VALUES (?, ?, ?, ?, ?)",
      [Pseudo, Name, Surname, Age || null, Gender]
    );
    // return the newly inserted player with ID
    return { ID_player: result.insertId, Pseudo, Name, Surname, Age, Gender };
  },

  async update(id, patch) {
    const fields = [];
    const values = [];
    for (const [k, v] of Object.entries(patch)) {
      fields.push(`${k} = ?`);
      values.push(v);
    }
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
