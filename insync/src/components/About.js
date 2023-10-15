import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function About() {
    return (
        <div>
            <Navbar className='navbar' data-bs-theme="dark">
            <Navbar.Brand className='left-text' as={Link} to="/">InSync</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link className='right-text' as={Link} to="/">Home</Nav.Link> 
                <Nav.Link className='right-text' as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <p className='header-text'>ayo</p>
        </div>
      );
  }
  
  export default About;
