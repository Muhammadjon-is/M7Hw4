import React from 'react'
import {Nav, Navbar} from "react-bootstrap"
const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Browse">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default MyNavbar