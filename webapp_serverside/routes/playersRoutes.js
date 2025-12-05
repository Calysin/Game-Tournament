import express from "express";
import { PlayersController } from "../controllers/playersController.js";
import { authenticate } from "../middleware/authenticate.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.get("/", PlayersController.list);
router.get("/:id", PlayersController.get);
router.post("/", authenticate, requireRole("ADMIN"), PlayersController.create);
router.put("/:id", authenticate, requireRole("ADMIN"), PlayersController.update);
router.delete("/:id", authenticate, requireRole("ADMIN"), PlayersController.remove);

export default router;
