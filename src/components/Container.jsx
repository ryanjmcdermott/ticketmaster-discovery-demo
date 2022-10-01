import React from 'react'

function Container({ children }) {
  return (
    <main className="flex-1 mx-auto py-20 px-5">
        {children}
    </main>
  )
}

export default Container