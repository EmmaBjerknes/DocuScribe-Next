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
}
