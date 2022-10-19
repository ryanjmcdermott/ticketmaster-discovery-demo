import React from 'react'
import Events from '../components/Events'
import Container from '../components/Container'

function Home() {
  return (
      <Container>
        <div className="text-center">
          <h1 className="text-4xl pb-4 font-bold sm:text-5xl">
            Event Finder
          </h1>
          <p className="text-base">
            Browse events using the <span className="font-semibold">Ticketmaster Discovery API</span>.
          </p>
          <Events />
        </div>
      </Container>
  )
}

export default Home