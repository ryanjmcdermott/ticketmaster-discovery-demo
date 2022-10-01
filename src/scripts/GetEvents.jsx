import { useState, useEffect } from 'react';
import axios from 'axios';

let page = 0;

// Get 8 events
function GetEvents() {

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&size=8&page=${page}`;
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

export default GetEvents