import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'

const Header = () => {
    return (
      <>
        <div className="d-flex, align-items-center justify-content-center">
          <img 
            src="/img/bayou-bros-logo.png" 
            alt="logo">
          </img>
        </div>

        <Nav className="d-flex, align-items-center justify-content-center" 
          activeKey="/home">
          <Nav.Item>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/events">Events</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/contact_us">Contact Us</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
}

export default Header