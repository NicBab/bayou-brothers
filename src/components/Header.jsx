import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'
import logo from '../images/BB-color-title.png'
import { SocialIcons } from '../components'

const Header = () => {
    return (
      <>
        <div className="head">
          <img className="img" style={{height: "280px", width: "350px"}}
            src={logo} 
            alt="logo">
          </img>
        </div>
        
        <Nav className="d-flex, align-items-center justify-content-center" 
          activeKey="/home">
          <Nav.Item>
            <Nav.Link><Link to="/" className="ba-home">Home</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/events" className="ba-events">Events</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/about-us" className="ba-about">About Us</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/contact_us" className="ba-contact">Contact Us</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
}

export default Header