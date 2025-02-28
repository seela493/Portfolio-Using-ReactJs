import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
      <header className="site-header">
        <div className="container">
          <NavLink to="/home" style={{color:"white"}}><span className="logo">SHILA .</span></NavLink>
          <nav className="navlink">
            <ul className="navlist">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                {/* <a href="#portfolio">Portfolio</a> */}
                <NavLink to="/home#portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li>
                <a href="/home#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header
