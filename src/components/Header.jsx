import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'

const Header = () => {
    return (
      <>
      IMage Here
      <>
      </>
      <Nav className="d-flex, align-items-center justify-content-center" 
         activeKey="/home"
         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link><Link to="/about-us">About Us</Link></Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link><Link to="/events">Events</Link></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link><Link to="/contact_us">Contact Us</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      </>
    )
}

export default Header