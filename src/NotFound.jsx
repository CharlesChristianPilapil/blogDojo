import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2> Sorry </h2>
        <p> That page cannot be found </p>
        <NavLink to='/'> Go back to the homepage... </NavLink>
    </div>
  )
}

export default NotFound