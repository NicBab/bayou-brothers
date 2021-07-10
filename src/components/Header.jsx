import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Header = () => {
    return (
      <Nav
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
      </Nav>
    )
}

export default Header