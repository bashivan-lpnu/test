import React from 'react';
import Event from "./Event";

const EventList = ({events, title}) => {
    return (
        <div style={{margin: '15px'}}>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {events.map(event => (
                <Event event={event} key={event.id}/>
            ))}
        </div>
    );
};

export default EventList;