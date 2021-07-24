import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'
import logo from '../images/bayou-bros-logo.png'

const Header = () => {
    return (
      <>
        <div className="head">
          <img className="img" style={{height: "250px", width: "350px"}}
            src={logo} 
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