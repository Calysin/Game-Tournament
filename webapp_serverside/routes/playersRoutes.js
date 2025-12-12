import express from "express";
import { PlayersController } from "../controllers/playersController.js";

const router = express.Router();

router.get("/", PlayersController.list);
router.get("/:id", PlayersController.get);
router.post("/", PlayersController.create);
router.put("/:id", PlayersController.update);
router.delete("/:id", PlayersController.remove);

export default router;
