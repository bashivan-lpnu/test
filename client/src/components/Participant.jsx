import React from 'react';

const Participant = (props) => {
    return (
        <div className={'participant'}>
            <p>{props.participant.name}</p>
            <p>{props.participant.email}</p>
        </div>
    );
};

export default Participant;