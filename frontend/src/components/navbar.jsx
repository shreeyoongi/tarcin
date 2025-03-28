import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-text">TutorConnect</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <div className="dropdown">
          <button 
            className="dropdown-btn"
            onMouseEnter={() => setShowLoginDropdown(true)}
            onMouseLeave={() => setShowLoginDropdown(false)}
          >
            Login
            {showLoginDropdown && (
              <div className="dropdown-content">
                <Link to="/login">Student Login</Link>
                <Link to="/login/tutor">Tutor Login</Link>
              </div>
            )}
          </button>
        </div>
        <div className="dropdown">
          <button 
            className="dropdown-btn register-btn"
            onMouseEnter={() => setShowRegisterDropdown(true)}
            onMouseLeave={() => setShowRegisterDropdown(false)}
          >
            Register
            {showRegisterDropdown && (
              <div className="dropdown-content">
                <Link to="/register">Student Registration</Link>
                <Link to="/register/tutor">Tutor Registration</Link>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar