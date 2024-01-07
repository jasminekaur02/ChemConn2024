// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" style={{ fontSize: '1.8em' }}>ChemCon 2024</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontSize: '1.2em' }}>
          <Nav.Link href="#about" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px 20px' }}>About</Nav.Link>
          <Nav.Link href="#speakers" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px 20px' }}>Speakers</Nav.Link>
          <Nav.Link href="#schedule" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px 20px' }}>Schedule</Nav.Link>
          {/* Add more links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
