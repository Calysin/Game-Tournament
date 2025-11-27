import fs from "fs";
import path from "path";

const dataPath = path.resolve("./data/players.json");

export const getPlayers = (req, res) => {
  try {
    const players = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to read players data" });
  }
};

export const addPlayer = (req, res) => {
  try {
    const players = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    const newPlayer = req.body;

    // Optional: add ID
    newPlayer.ID_player = players.length + 1;

    players.push(newPlayer);
    fs.writeFileSync(dataPath, JSON.stringify(players, null, 2));

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to add player" });
  }
};
