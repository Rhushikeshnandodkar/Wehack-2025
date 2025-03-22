import React from 'react'
import { NavbarStyle } from './molecules.style'
function Navbar() {
  return (
    <>
    <NavbarStyle>
      <nav className="navbar">
        <div className="logo">Saraswati AI</div>
        <div className="nav-links">
          <a href="index.html">Home</a>
          <a href="classroom.html">Create Class</a>
          <a href="dashboard.html">Dashboard</a>
          <a href="live-class.html">Live Class</a>
        </div>
      </nav>

    </NavbarStyle>
    </>

  )
}

export default Navbar