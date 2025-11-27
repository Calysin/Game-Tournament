import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "../data");

async function readJSON(name) {
  const file = path.join(dataDir, name + ".json");
  const raw = await readFile(file, "utf8");
  return JSON.parse(raw);
}

async function writeJSON(name, data) {
  const file = path.join(dataDir, name + ".json");
  await writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

export const Repository = {
  async getAll(name) {
    return await readJSON(name);
  },

  async getOne(name, idKey, id) {
    const list = await readJSON(name);
    return list.find(x => String(x[idKey]) === String(id)) || null;
  },

  async create(name, obj) {
    const list = await readJSON(name);
    list.push(obj);
    await writeJSON(name, list);
    return obj;
  },

  async update(name, idKey, id, patch) {
    const list = await readJSON(name);
    const idx = list.findIndex(x => String(x[idKey]) === String(id));
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    await writeJSON(name, list);
    return list[idx];
  },

  async delete(name, idKey, id) {
    let list = await readJSON(name);
    list = list.filter(x => String(x[idKey]) !== String(id));
    await writeJSON(name, list);
    return true;
  }
};
