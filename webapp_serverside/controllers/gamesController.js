import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/games.json", "utf-8"));

export function getGames(req, res) {
  res.json(data);
}
