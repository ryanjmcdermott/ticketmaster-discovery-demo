import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = (props) => {
  return (
    <div className="flex justify-center flex-col mb-10 min-w-full md:min-w-0 md:p-2 md:basis-1/2 2xl:basis-1/4" key={props.url}>
        <div className="flex flex-col items-center justify-center h-full align-center p-6 rounded-lg shadow-lg bg-white">
            <h2 className="block text-gray-900 text-xl leading-tight font-medium mb-4">
                {props.name}
            </h2>
            <Link to={`/event/${props.url}`} className="w-fit inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Learn more...
            </Link>
        </div>
    </div>
  )
}

export default EventCard