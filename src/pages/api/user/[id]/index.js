import { query } from "../../../../../lib/db";

const handler = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        const results = await query(`
            SELECT usr_voornaam, usr_naam, usr_email, usr_telefoon FROM user WHERE usr_id = ${req.query.id}
            `);

        res.status(200).json(results);
        break;
      }
      case "POST": {
        const results = await query(`
            INSERT INTO user (usr_voornaam, usr_naam, usr_email, usr_telefoon)
            VALUES (
            "${req.body.voornaam}",
            "${req.body.naam}", 
            "${req.body.email}",
             ${parseInt(req.body.telefoon)});
            `);
        res.status(201).json(results);
        break;
      }
      case "PUT": {
        const results = await query(`
            UPDATE user

            SET usr_voornaam = "${req.body.voornaam}",
            usr_naam = "${req.body.naam}",
            usr_email = "${req.body.email}",
            usr_telefoon = ${parseInt(req.body.telefoon)}

            WHERE usr_id = ${req.query.id}
          `);
        res.status(200).json(results);
        break;
      }
      case "DELETE": {
        const results = await query(`
            DELETE FROM user WHERE usr_id = ${req.query.id}
        `);
        res.status(200).json(results);
      }
      default:
        res.status(405).end("Method Not Allowed");
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
