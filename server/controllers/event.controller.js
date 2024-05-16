const pool = require('../db');
class EventController {

    async create(req, res) {
        try {
            const {title, description, date, organizer} = req.body;
            const newEvent = await pool.query(
                "INSERT INTO event (title, description, date, organizer) VALUES($1, $2, $3, $4) RETURNING *",
                [title, description, date, organizer]
            );
            res.json(newEvent.rows[0]);
        }
        catch (e) {
            console.error(e.message);
        }
    }

    async get(req, res) {
        try {
            const {page, limit} = req.query;
            const offset = page * limit - limit;
            const events = await pool.query("SELECT * FROM event LIMIT $1 OFFSET $2", [limit, offset]);
            const totalCount = await pool.query("SELECT COUNT(*) FROM event");
            res.json({events: events.rows, totalCount: totalCount.rows[0].count});
        }
        catch (e) {
            console.error(e.message);
        }

    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const event = await pool.query("SELECT * FROM event WHERE id = $1", [id]);
            res.json(event.rows[0]);
        }
        catch (e) {
            console.error(e.message);
        }
    }
}

module.exports = new EventController();