import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);


import playersRoutes from "./routes/playersRoutes.js";
import gamesRoutes from "./routes/gamesRoutes.js";
import tournamentsRoutes from "./routes/tournamentsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/players", playersRoutes);
app.use("/games", gamesRoutes);
app.use("/tournaments", tournamentsRoutes);
app.use("/auth", authRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
