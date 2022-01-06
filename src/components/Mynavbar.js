import React from 'react'
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Mynavbar() {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="/">imhannaho</Navbar.Brand>
          <Nav className="nav justify-content-end fw-light">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Mynavbar
