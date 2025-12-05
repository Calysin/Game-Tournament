
import express from "express";
import { TournamentsController } from "../controllers/tournamentsController.js";
import { authenticate } from "../middleware/authenticate.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.get("/", TournamentsController.list);
router.get("/:id", TournamentsController.get);
router.post("/", authenticate, requireRole("ADMIN"), TournamentsController.create);
router.put("/:id", authenticate, requireRole("ADMIN"), TournamentsController.update);
router.delete("/:id", authenticate, requireRole("ADMIN"), TournamentsController.remove);

export default router;
