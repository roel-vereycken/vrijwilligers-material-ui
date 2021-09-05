import { query } from "../../../lib/db";

const handler = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const results = await query(`
            SELECT usr_voornaam, usr_naam, usr_email, usr_telefoon FROM user WHERE usr_id = 1
            `);

        res.status(200).json(results);
        break;
      }
      default:
        res.status(405).end("Method Not Allowed");
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
