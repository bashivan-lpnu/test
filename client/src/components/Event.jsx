import React from 'react';
import {Link} from "react-router-dom";


const Event = (props) => {
    return (
        <div className="event">
            <div className="event_content">
                <h3>{props.event.id}. {props.event.title}</h3>
                <p>Organizer: {props.event.organizer}, Date: {props.event.date}</p>
                <p>{props.event.body}</p>
            </div>
            <div className="event_btns">
                <Link to={`/registration/${props.event.id}/${props.event.title}`}>Register</Link>
                <Link to={`/participants/${props.event.id}/${props.event.title}`}>View</Link>
            </div>
        </div>
    );
};

export default Event;