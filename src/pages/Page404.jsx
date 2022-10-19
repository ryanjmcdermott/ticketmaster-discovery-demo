import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

function Page404() {
  return (
      <Container>
        <div className="text-center">
          <h1 className="text-5xl pb-4 font-bold">
            Page Not Found
          </h1>
          <p className="text-base">
            You look lost... Maybe you could try starting over at the <Link className="underline text-blue-600 hover:text-blue-700" to="/">Home Page</Link>? 
          </p>
        </div>
      </Container>
  )
}

export default Page404