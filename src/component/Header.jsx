import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import * as bsIcons from 'react-icons/bs';
import * as biIcons from 'react-icons/bi';
import * as giIcons from 'react-icons/gi';

const Header = () => {
  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' expand="lg">
        <Navbar.Brand href="#"><giIcons.GiFireShield size={'28px'}/> Fire Sheild B2B CRM</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-4 my-md-0"
            style={{ maxHeight: '60px' }}
            navbarScroll
          >
            <Nav className='justify-content-end'>
              <Nav.Link href="#action1"><biIcons.BiLogInCircle /></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
              
         </Nav>
        </Navbar.Collapse> */}
      </Navbar>
      <Navbar bg='dark' variant='dark' expand="lg" className='justify-content-center'>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-4 my-md-0 justify-content-end"
              style={{ maxHeight: '60px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><biIcons.BiLogInCircle /></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Header