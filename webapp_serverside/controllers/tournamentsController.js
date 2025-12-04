
import { TournamentsRepository } from "../repository/tournaments.repository.js";

export const TournamentsController = {
  async list(req, res) {
    try {
      const rows = await TournamentsRepository.getAll();
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async get(req, res) {
    try {
      const t = await TournamentsRepository.getById(req.params.id);
      if (!t) return res.status(404).json({ message: "Not found" });
      res.json(t);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async create(req, res) {
    try {
      await TournamentsRepository.create(req.body);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async update(req, res) {
    try {
      const u = await TournamentsRepository.update(req.params.id, req.body);
      res.json(u || { success: false });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async remove(req, res) {
    try {
      await TournamentsRepository.delete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};
