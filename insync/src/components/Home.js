import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
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
              <Nav.Link as={Link} to="/DubHacks23" className='right-text'>Home</Nav.Link> 
                <Nav.Link as={Link} to="/about" className='margin-right'>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className='graphic-container'>
            <p className='desc-title-text'>InSync</p>
            <p className='desc-text'>Share with care.</p>
        </div>
        <div className='desc-container'>
            <img
             src='https://cdn.discordapp.com/attachments/1162859852440289421/1162977565603012738/Untitled_design__1_-removebg-preview.png?ex=653de642&is=652b7142&hm=d6b09fe7de2960960c630bbee2722e23c69c855355c45f2cfdf2065a3aa17b96&'
             width='700'
             /> 
        </div>
        <div className='figma-container-text1'>
            <p className='bold'>Log your Day</p>
            <p className='regular'>Set reminders<br/>and share how you feel</p>
        </div>
        <div className='figma-container-text2'>
        <p className='bold'>Create a Calendar</p>
        <p className='regular'>Visualize your day and track your<br/>mental and physical health</p>
        </div>
        <div className='figma-container-text3'>
        <p className='bold'>Connect</p>
        <p className='regular'>Do daily activities with your<br/>friends that focus on wellness</p>
        </div>
        <div className='figma-container1'>
        <img className='pic'   
            width='250'
            height='535'
             src='https://cdn.discordapp.com/attachments/1162859852440289421/1163031329869402122/circle_page.png?ex=653e1855&is=652ba355&hm=ad6069412f2c22997422e2cac39ab680c37490eaa214d1ded148497bcc9d3285&'
             />
        </div>
        <div className='figma-container2'>
             <img className='pic'
             width='250'
             height='535'
             src='https://cdn.discordapp.com/attachments/1162859852440289421/1163031386744160346/Calendar.png?ex=653e1862&is=652ba362&hm=3d39ee38e4aa12c1973d9c14fb9dd4c1400176625fb3a18b758bf96f4cc5923c&'
             /> 
        </div>
        <div className='figma-container3'>
             <img className='pic'
             width='250'
             height='535'
             src='https://cdn.discordapp.com/attachments/1162859852440289421/1163047639282090064/activity_page_pop_up.png?ex=653e2785&is=652bb285&hm=a931ae87cf5924be008f0a174d3b7395dae035247b20a2b272899941baa29a2e&'
             /> 

        </div>
        <div className='figma-container4'>
        <p className='bold'>InSync will hold you accountable</p>
        <p className='regular'>When it gets hard to tell your friends how you're feeling, InSync will give you a platform to share your daily thoughts.</p>
        </div>
        </div>
      );
  }
  
  export default Home;
