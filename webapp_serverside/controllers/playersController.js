
import { PlayersRepository } from "../repository/players.repository.js";

export const PlayersController = {
  async list(req, res) {
    try {
      const players = await PlayersRepository.getAll();
      res.json(players);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async get(req, res) {
    try {
      const p = await PlayersRepository.getById(req.params.id);
      if (!p) return res.status(404).json({ message: "Not found" });
      res.json(p);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async create(req, res) {
    try {
      const payload = req.body;
      await PlayersRepository.create(payload);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async update(req, res) {
    try {
      const updated = await PlayersRepository.update(req.params.id, req.body);
      res.json(updated || { success: false });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async remove(req, res) {
    try {
      await PlayersRepository.delete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};
