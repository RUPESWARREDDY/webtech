import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to='/parent'>parent</Link>
      <Link to='/child'>child</Link>
    </div>
  )
}

export default Home
