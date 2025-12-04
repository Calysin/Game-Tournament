
import express from "express";
import { PlayersController } from "../controllers/playersController.js";
import { authenticate } from "../middleware/authenticate.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.get("/", PlayersController.list);                // public list
router.get("/:id", PlayersController.get);              // public get
router.post("/", authenticate, PlayersController.create); // only logged-in users can create
router.put("/:id", authenticate, PlayersController.update); // require owner/admin check could be added
router.delete("/:id", authenticate, requireRole("ADMIN"), PlayersController.remove); // admin only delete

export default router;
