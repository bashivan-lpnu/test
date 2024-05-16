import axios from 'axios';

export default class ParticipantService {
    static async getParticipantByEvent(id) {
        try {
            const response = await axios.get('http://localhost:4000/api/participant?id=' + id);
            response.data.forEach(participant => {
                participant.birthdate = new Date(participant.birthdate).toLocaleDateString();
            });
            return response.data;
        }
        catch (e) {
            console.log(e)
        }
    }

    static async createParticipant(participant) {
        try {
            const response = await axios.post('http://localhost:4000/api/participant', participant);
            return response.data;
        }
        catch (e) {
            console.log(e)
        }
    }
}