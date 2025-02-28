import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavLink = () => {
  return (
    <div>
        <NavLink to="/home" className="nav-link"></NavLink>
        <NavLink to="/about" className="nav-link"></NavLink>
        <NavLink to="/portfolio" className="nav-link"></NavLink>
        <NavLink to="/contact" className="nav-link"></NavLink>
      
    </div>
  )
}

export default MyNavLink
