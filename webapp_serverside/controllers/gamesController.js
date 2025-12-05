import { GamesRepository } from "../repository/games.repository.js";

export const GamesController = {
  async list(req, res) {
    try {
      const games = await GamesRepository.getAll();
      res.json(games);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async get(req, res) {
    try {
      const game = await GamesRepository.getById(req.params.id);
      if (!game) return res.status(404).json({ message: "Not found" });
      res.json(game);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async create(req, res) {
    try {
      const newGame = await GamesRepository.create(req.body);
      res.json(newGame);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async update(req, res) {
    try {
      const updated = await GamesRepository.update(req.params.id, req.body);
      res.json(updated || { success: false });
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
