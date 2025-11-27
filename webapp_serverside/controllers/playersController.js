import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/players.json", "utf-8"));

export function getPlayers(req, res) {
  res.json(data);
}
