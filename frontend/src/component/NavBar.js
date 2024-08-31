import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Register.js'
import './Homecard.js'
// import { IoCartOutline } from "react-icons/io5";
import Cart from './Cart';
// import { Link } from 'react-router-dom';
import Login from './Login.js';
import Registration from './Register.js';

// import Registration from './Register.js';
function NavBar() {
    return (
            <Navbar expand="lg" className="bg-body-tertiary  ">
            <Container fluid>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src="logo-2.png"
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        <span className="ms-2">Glasstique</span>
                    </Navbar.Brand>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                        <Nav className="ms-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/product">Products</Nav.Link>
                            <Nav.Link href="/aboutus">About us</Nav.Link>
                            {/* <Nav.Link href="#link">Login</Nav.Link> */}
                            <Login/>
                            {/* <Nav.Link as={Link} to='/register'>Register</Nav.Link>  */}
                            <Registration/>
                        </Nav>
                        {/* <IoCartOutline size={40} /> */}
                        <Cart/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    )
}

export default NavBar
