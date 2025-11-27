import express from "express";
import { addPlayer, getPlayers } from "../controllers/playersController.js";

const router = express.Router();

router.get("/", getPlayers);
router.post("/", addPlayer);

export default router;
