// Header.jsx
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.svg';


const Header = () => {


  return (
    <Navbar bg="dark" variant="dark" sticky="top">
     
        <Navbar.Brand>
          <img
            alt="Logo"
            src={logo}
            width="80"
            height="40"
            style={{ marginLeft: '20px' }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

       

    </Navbar>
  );
};

export default Header;
