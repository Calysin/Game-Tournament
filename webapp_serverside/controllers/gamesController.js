
import { GamesRepository } from "../repositories/games.repository.js";

export const GamesController = {
  async list(req, res) {
    try {
      const rows = await GamesRepository.getAll();
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async get(req, res) {
    try {
      const g = await GamesRepository.getById(req.params.id);
      if (!g) return res.status(404).json({ message: "Not found" });
      res.json(g);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async create(req, res) {
    try {
      await GamesRepository.create(req.body);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async update(req, res) {
    try {
      const u = await GamesRepository.update(req.params.id, req.body);
      res.json(u || { success: false });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async remove(req, res) {
    try {
      await GamesRepository.delete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};
