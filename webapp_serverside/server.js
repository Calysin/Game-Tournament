import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import playersRouter from "./controllers/players.route.js";
import gamesRouter from "./controllers/games.route.js";
import tournamentsRouter from "./controllers/tournaments.route.js";
import authRouter from "./controllers/auth.route.js";
import joinRouter from "./controllers/join.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API
app.use("/api/players", playersRouter);
app.use("/api/games", gamesRouter);
app.use("/api/tournaments", tournamentsRouter);
app.use("/api/auth", authRouter);
app.use("/api/join", joinRouter);

// health
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
