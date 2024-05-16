import React from 'react';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import ParticipantService from "../API/ParticipantService";
import {useParams, useNavigate} from "react-router-dom";

const Registration = () => {
    let { id, title } = useParams();
    const navigate = useNavigate();

    const onSubmit = async (participantData) => {
        const { name, email, birthdate, where_hear } = participantData;
        const participant = {name, email, birthdate, where_hear, event_id: id};
        let result = await ParticipantService.createParticipant(participant);
        console.log(result);
        if(result === "ok") {
            navigate(`/participants/${id}/${title}`);
        }
    }

    return (
        <div className="App"
             style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
            <h1>Register to event "{title}"</h1>
            <RegistrationForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Registration;