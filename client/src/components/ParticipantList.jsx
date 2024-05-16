import React from 'react';
import Participant from "./Participant";

const ParticipantList = ({participants, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <div className={'participantList'}>
                {participants.map(participant => (
                    <Participant participant={participant} key={participant.id}/>
                ))}
            </div>
        </div>
    );
};

export default ParticipantList;