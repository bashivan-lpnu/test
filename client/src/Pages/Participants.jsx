import React, {useEffect, useMemo, useState} from 'react';
import ParticipantList from "../components/ParticipantList";
import MySelect from "../components/UI/Select/MySelect";
import MyInput from "../components/UI/input/MyInput";
import ParticipantService from "../API/ParticipantService";
import {useParams} from "react-router-dom";

const Participants = () => {
    let { id, title } = useParams();
    const [participants, setParticipants] = useState([]);
    const [selectedSearch, setSelectedSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    async function fetchParticipants() {
        setParticipants(await ParticipantService.getParticipantByEvent(id));
    }

    useEffect(() => {
        fetchParticipants();
    }, [id]);

    const filteredParticipants = useMemo( () => {
        if(selectedSearch === 'email') {
            return participants.filter(participant => participant.email.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return participants.filter(participant => participant.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, selectedSearch, participants]);

    return (
        <div className="App">
            <div className="searchBar">
                <MySelect defaultValue={"Find"} value={selectedSearch}
                          onChange={ (search) => setSelectedSearch(search)}
                          options={[
                              {value: 'name', name: 'By name'},
                              {value: 'email', name: 'By email'},
                          ]}/>
                <MyInput style={{width: "80%", marginTop: '15px'}} placeholder={"Search"} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <ParticipantList participants={filteredParticipants} title={title} />
        </div>
    );
};

export default Participants;