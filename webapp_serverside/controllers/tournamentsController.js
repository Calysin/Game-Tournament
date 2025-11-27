import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/tournaments.json", "utf-8"));

export function getTournaments(req, res) {
  res.json(data);
}
