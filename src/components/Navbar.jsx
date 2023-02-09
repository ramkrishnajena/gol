import React from 'react'
import golLogo from "../assets/gol-logo 1.png"
import downarrow from '../assets/Vector.svg'

const Navbar = () => {
  return (
    <div className='navbar--container'>
        <div className="navbar__logo"><img src={golLogo} alt="logo"/></div>
        <div className="navbar__menu">
          <ul>
          <li><a href="">Find Reservation</a></li>
          <li><a href="">Packages</a><span><img src={downarrow}alt="arrow"/></span></li>
          <li><a href="">About Lakshadweep</a><span><img src={downarrow}alt="arrow"/></span></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Gol</a></li>
          <li><a href="">Support</a></li>
          </ul></div>
        <div className="navbar__button">
          <div className='login__btn'><a href="" >Login</a></div>
          <div className='signup__btn'><a href="">Sign Up</a></div>
        </div>
    </div>
  )
}

export default Navbar