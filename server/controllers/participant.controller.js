const pool = require('../db');
class ParticipantController {
    async create(req, res) {
        const {name, email, birthdate, where_hear, event_id} = req.body;
        const newEvent = await pool.query(
            "INSERT INTO participant (name, email, birthdate, where_hear, event_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, email, birthdate, where_hear, event_id]
        );
        if(newEvent.rows.length === 0) {
            return res.json("error");
        }
        res.json("ok");
    }

    async getParticipantsByEvent(req, res) {
        const id = req.query.id;
        const participants = await pool.query("SELECT * FROM participant WHERE event_id = $1", [id]);
        res.json(participants.rows);
    }
}

module.exports = new ParticipantController();