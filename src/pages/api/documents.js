import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const results = await query({
        query: "SELECT * FROM documents;",
      });
      res.status(200).json({ results: results });
    } catch (error) {
      res.status(500).json({ error: "Det uppstod ett fel vid databasfrågan." });
    }
  }
  if (req.method === "POST") {
    const { title, content, isDeleted } = req.body;
    try {
      const results = await query({
        query:
          "INSERT INTO documents (title, content, isDeleted) VALUES (?, ?, ?);",
        values: [title, content, isDeleted],
      });
      res.status(200).json({ results: results });
    } catch (error) {
      res.status(500).json({ error: "Ingen data kunde läggas in" });
    }
  }
  if (req.method === "PUT") {
    const { id, title, content, isDeleted } = req.body;
    try {
      const results = await query({
        query:
          "UPDATE documents SET title = ?, content = ?, isDeleted = ? WHERE id = ?;",
        values: [title, content, isDeleted, id],
      });
      res.status(200).json({ results: results });
    } catch (error) {
      res.status(500).json({ error: "Ingen data kunde uppdateras" });
    }
  }
}
