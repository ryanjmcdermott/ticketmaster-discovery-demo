import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative flex items-center justify-between py-3 px-5 lg:px-8 mb-5">
      <div className="flex-1 flex items-center">        
        <Link className="inline-block px-5 w-max border-4 border-blue-900 focus:ring-4 focus:outline-none focus:border-sky-800 focus:bg-blue-700 focus:shadow-lg py-2 bg-blue-600 text-white font-medium text-base leading-normal uppercase shadow-md hover:bg-blue-700 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center" to="/">Home</Link>
      </div>
    </header>
  )
}
export default Header