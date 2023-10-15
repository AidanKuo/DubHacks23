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
            <Navbar.Brand className='margin' as={Link} to="/DubHacks23">
            <img
              src="https://cdn.discordapp.com/attachments/1162859852440289421/1162973763621634148/DUBHACK_LOGO_3.png?ex=653de2b8&is=652b6db8&hm=62045bf78626f440076852abc92ba338991f71ca1ecb599a2e98b2d196b77b28&"
              width="25"
              height="30"
              className="d-inline-block align-top"
              alt="bruh"
            />
          </Navbar.Brand>
            <Navbar.Brand className='left-text' as={Link} to="/DubHacks23">InSync</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link className='right-text' as={Link} to="/DubHacks23">Home</Nav.Link> 
                <Nav.Link className='right-text' as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <p className='header-text'>ayo</p>
        </div>
      );
  }
  
  export default About;
