import React from 'react';
import EventCard from './EventCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate  from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro'



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

    // This displays our 8 events per page
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

    // Used to determine the total pages used in <ReactPaginate>
    const pageCount = Math.ceil(events.length / eventsPerPage);

    // Used by <ReactPaginate> to do page magic
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    // Here, we map our events to the event card once "events" is loaded
    return (
        <div className="pt-10 flex flex-col justify-center content-center items-stretch md:flex-row md:flex-wrap">    
            {/* {events ? ( */}
                    {displayEvents}
                    
                    <ReactPaginate
                        previousLabel={<FontAwesomeIcon icon={light('angle-left')} />}
                        nextLabel={<FontAwesomeIcon icon={light('angle-right')} />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"flex flex-row justify-center items-center"}
                        previousClassName={"pr-2"}
                        nextClassName={"pr-2"}
                        previousLinkClassName={"px-4 py-2 rounded hover:bg-blue-600 hover:text-white"}
                        nextLinkClassName={"px-4 py-2 rounded hover:bg-blue-600 hover:text-white"}
                        activeClassName={"font-bold"}
                        activeLinkClassName={"text-blue-500"}
                        pageClassName={"px-2 hidden lg:block"}
                        pageLinkClassName={"px-4 py-2 text-black rounded hover:bg-blue-600 hover:text-white"}
                        breakClassName={"hidden lg:block"}
                        disabledClassName={"opacity-50 hover:bg-none cursor-default"}
                    />
            {/* ) : (
                // This is shown until 'events' is loaded
                <p>Loading...</p>
            )}     */}
        </div>
    );
}

export default Events