import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Link to="/" style={{textDecoration: 'none'}}><Navbar.Brand>Genre Finder</Navbar.Brand></Link>
        <Link as={Nav.Link} to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register Now
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
