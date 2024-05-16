import React, {useEffect, useRef, useState} from 'react';
import EventList from "../components/EventList";
import MySelect from "../components/UI/Select/MySelect";
import EventService from "../API/EventService";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [isEventsLoading, setIsEventsLoading] = useState(false);
    const [selectedSort, setSelectedSort] = useState('');
    const lastElement = useRef();

    useEffect(() => {
        fetchEvents();
    }, [page]);

    useObserver(lastElement, page < totalPages, isEventsLoading, page, () => {
        setPage(page + 1);
    });

    const sortEvents = (sort) => {
        setSelectedSort(sort);
        setEvents([...events].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    async function fetchEvents() {
        setIsEventsLoading(true);
        const response = await EventService.get(limit, page);
        setEvents(prevEvents => [...prevEvents, ...response.events]);
        const totalCount = response.totalCount;
        setTotalPages(getPageCount(totalCount, limit));
        setIsEventsLoading(false);
    }

    return (
        <div className="App">
            <MySelect defaultValue={"Сортування"} value={selectedSort} onChange={sortEvents}
            options={[
                {value: 'title', name: 'По назві'},
                {value: 'date', name: 'По даті'},
                {value: 'organizer', name: 'По організатору'}
            ]}/>
            <EventList events={events} title={"Events"}/>
            <div ref={lastElement} style={{height:20}}></div>
        </div>
    );
};

export default Events;