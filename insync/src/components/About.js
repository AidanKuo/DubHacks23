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
            <Navbar expand="lg" className='navbar' data-bs-theme="light">
            <Navbar.Brand className='margin' as={Link} to="/DubHacks23">
            <img
              src="https://cdn.discordapp.com/attachments/1162859852440289421/1162973763621634148/DUBHACK_LOGO_3.png?ex=653de2b8&is=652b6db8&hm=62045bf78626f440076852abc92ba338991f71ca1ecb599a2e98b2d196b77b28&"
              width="100"
              height="150"
              className="d-inline-block align-top"
              alt="bruh"
            />
          </Navbar.Brand>
          <Navbar.Brand className='left-text'as={Link} to="/DubHacks23">InSync</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link as={Link} to="/DubHacks23">Home</Nav.Link> 
                <Nav.Link as={Link} to="/about" className='margin-right-about'>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className='center-box'>
        <img
            src="https://cdn.discordapp.com/attachments/1162859852440289421/1163167759262306345/image.png?ex=653e9764&is=652c2264&hm=0e27e1908b25540dfd922579e6b2f2063512ca40eacf563e8bb804202bc44132&"
            className='center'
        >
        </img>
        </div>
        <div className='center-box'>
        <img
            src="https://cdn.discordapp.com/attachments/1162859852440289421/1163169508555501599/image.png?ex=653e9905&is=652c2405&hm=6f8408f3007983c27bc16ebbc30f8bfd7e477036ab97fd508bbaa6d81d0fee29&"
            className='center'
        >
        </img>
        </div>
        </div>
      );
  }
  
  export default About;
