import React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom' 
import './Header.css'

function Header(){
    // for mobile -> makes menu a hamburger
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen)
    }
  
    return (
      <nav className="navbar">
        <div className="logo">Sofia Katzman</div>
        <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
         
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contactme">contact me</Link>

        </div>
        <div className="burger" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    )
  }
  

export default Header