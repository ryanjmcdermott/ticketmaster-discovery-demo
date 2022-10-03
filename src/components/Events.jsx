import React from 'react';
import EventCard from './EventCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate  from 'react-paginate';

// Return our Events page
function Events() {

    // This fetches our events from the Ticketmaster Discovery API
    function GetEvents() {
        
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&size=80`;
        const [events, setEvents] = useState([]);
     
        useEffect(() => { 
            axios.get(url)
                .then(res => {
                    setEvents(res.data._embedded.events);
                })
                .catch(err => {
                    console.log('error from catch')
                    console.log(err)
                })
        }, [url])
    
        return events;
    }

    //Setting variables to be used in our page's return statement
    let events = GetEvents();
    const [pageNumber, setPageNumber] = useState(0);
    const eventsPerPage = 8;
    const pagesVisited = pageNumber * eventsPerPage;

    const displayEvents = events
        .slice(pagesVisited, pagesVisited + eventsPerPage)
        .map(event => {
            return (
                <EventCard
                    name={event.name}
                    key={event.id}
                    url={event.id}                            
                />
            );
        });

    const pageCount = Math.ceil(events.length / eventsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    // Here, we map our events to the event card once "events" is loaded
    return (
        <div className="pt-10 flex flex-col justify-center content-center items-stretch md:flex-row md:flex-wrap">    
            {/* {events ? ( */}
                    {displayEvents}
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"flex flex-row justify-center font-bold"}
                        previousLinkClassName={"pr-4"}
                        nextLinkClassName={"pl-4"}
                        disabledClassName={"font-normal"}
                        activeClassName={"font-normal"}
                        pageClassName={"px-4 hidden sm:block"}
                        pageLinkClassName={""}
                    />
            {/* ) : (
                // This is shown until 'events' is loaded
                <p>Loading...</p>
            )}     */}
        </div>
    );
}

export default Events