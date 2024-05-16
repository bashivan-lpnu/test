import axios from 'axios';

export default class EventService {
    static async get(limit = 5, page = 1) {
        try {
            const response = await axios.get('http://localhost:4000/api/event', {
                params: {
                    limit: limit,
                    page: page
                }}
            );
            response.data.events.forEach(event => {
                event.date = new Date(event.date).toLocaleDateString();
            });
            return response.data;
        }
        catch (e) {
            console.log(e)
        }
    }
}