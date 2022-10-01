import React from 'react';
// import GetEvents from '../scripts/GetEvents';
import EventCard from './EventCard'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Return our Events page
function Events() {

    // This fetches our 8 events
    function GetEvents() {
        
        let page = 0;
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&size=8&page=${page}`;
        const [events, setEvents] = useState([]);
     
        useEffect(() => { 
            axios.get(url)
                .then(res => {
                    setEvents(res.data._embedded.events);
                })
                .catch(err => {
                    console.log(err)
                })
        }, [url])
    
        return events;
    }

    let events = GetEvents();

    // Here, we map our events to the event card once "events" is loaded
    return (
        <div className="pt-10 flex flex-col justify-center items-stretch md:flex-row md:flex-wrap">    
            {events ? (
                events.map((event) => {
                    return (
                        <EventCard
                            name={event.name}
                            key={event.id}
                            url={event.id}                            
                        />
                    );
                })
            ) : (
                // This is shown until events is loaded
                <div>
                    Loading...
                </div>
            )}    
        </div>
    );
}

export default Events