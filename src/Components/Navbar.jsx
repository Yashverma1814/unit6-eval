import React from 'react'
import "../Styles/navbar.css"

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className='home'>
            <a href="">Home</a>        
        </div>
        <div className='booking'>
            <a href="">Booking</a>
            <a href="">Login</a>
        </div>
    </div>
  )
}

