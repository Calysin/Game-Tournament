import express from "express";
import { GamesController } from "../controllers/gamesController.js";
import { authenticate } from "../middleware/authenticate.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.get("/", GamesController.list);
router.get("/:id", GamesController.get);
router.post("/", authenticate, requireRole("ADMIN"), GamesController.create);
router.put("/:id", authenticate, requireRole("ADMIN"), GamesController.update);
router.delete("/:id", authenticate, requireRole("ADMIN"), GamesController.remove);

export default router;
