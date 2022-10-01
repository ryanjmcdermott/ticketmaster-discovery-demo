import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'

const Event = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dm6Huu1R3l6vMc5lbGrcS4OR0MT3GgE&id=${id}`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data._embedded.events[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url])    

    console.log(data)

    // Only return our event page if data is not empty
    if (data.length !== 0) { 
        const name = data.name;
        const info = data.info;
        const link = data.url;
        const pleaseNote = data.pleaseNote;
        const venue = (data._embedded.venues[0].name ? data._embedded.venues[0].name : null);
        const time = data.dates.start.localTime;
        const date = data.dates.start.localDate;

        // Here, we return our Event page, passing in our event data
        return (
            <Container>
                    <div className="text-center" key={data.id}>
                        <div>
                            <h1 className="text-4xl pb-4 text-center font-bold sm:text-5xl">
                                {name}
                            </h1>

                            {date && time ? 
                                <p className="pt-4 font-bold">                                
                                    {date} at {time}
                                </p> : null                   
                            }
                            {venue ? 
                                <p className="pt-2 font-bold">                                
                                    {venue}
                                </p> : null                   
                            }
                            {info ? 
                                <p className="pt-4">
                                    <span className="font-bold">Info: </span>
                                    {info}
                                </p> : null                   
                            }
                            {pleaseNote ? 
                                <p className="pt-10">
                                    <span className="font-bold">Please Note: </span>
                                    {pleaseNote}
                                </p> : null                   
                            }
                            <p className="pt-4">
                                For more information, visit: <a className="text-blue-600 hover:underline" href={link}>Ticketmaster.com</a>. 
                            </p>
                        </div>
                    </div>
                
            </Container>
        )
    } else {
        return
    }

}

export default Event