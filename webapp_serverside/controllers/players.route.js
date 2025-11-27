import express from "express";
import { Repository } from "../utils/repository.js";
const router = express.Router();
const NAME = "players";

router.get("/", async (req, res) => {
  const data = await Repository.getAll(NAME);
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const item = await Repository.getOne(NAME, "ID_player", req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

// optional create / update / delete endpoints (for later)
router.post("/", async (req, res) => {
  const payload = req.body;
  await Repository.create(NAME, payload);
  res.json({ success: true });
});

router.put("/:id", async (req, res) => {
  const updated = await Repository.update(NAME, "ID_player", req.params.id, req.body);
  res.json(updated || { success: false });
});

router.delete("/:id", async (req, res) => {
  await Repository.delete(NAME, "ID_player", req.params.id);
  res.json({ success: true });
});

export default router;
