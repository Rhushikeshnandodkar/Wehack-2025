import React from 'react'
import { SidebarStyle } from './molecules.style'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <>
    <SidebarStyle>
        <nav class="sidebar">
        <h1 class="logo">EduVerse</h1>
        <div className={`nav-item ${window.location.pathname === "/dashboard" ? "active" : ""}`}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>

        <div className={`nav-item ${window.location.pathname === "/all-classes" ? "active" : ""}`}>
          <NavLink to="/all-classes">My Classes</NavLink>
        </div>
        {/* <a href="#" class="nav-item">Schedule</a> */}
        <a href="#" class="nav-item">Students</a>
        <a href="#" class="nav-item">Resources</a>
        <a href="#" class="nav-item">Analytics</a>
        <a href="#" class="nav-item">Settings</a>
    </nav>
    </SidebarStyle>
    </>
  )
}

export default Sidebar