import React from 'react';
import { Container, NavDropdown, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div> <Navbar bg="" expand="lg" className='header'>
    <Container>
        <Navbar.Brand href="#home" className='fw-bold'>
            <img alt='c' src='/images/logo.png' /> Smriti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
                <Nav.Link href="#home ">Home</Nav.Link>
                <Nav.Link href="#link">Men</Nav.Link>
                <Nav.Link href="#link2">Women</Nav.Link>
                <div className='position-relative'>
                <Nav.Link href="#link3">Baby's Collection</Nav.Link>
                <span className='position-absolute new_red tri'>New</span>
                </div>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Cart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Product Details</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Product Checkout
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link4">Blog</Nav.Link>
                <Nav.Link href="#link5">Contact</Nav.Link>
            </Nav>
            <Link to=""><FontAwesomeIcon icon={faSearch} /></Link>
            <Link to=""><FontAwesomeIcon icon={faUser} /></Link> 
            <Link to="" className=' position-relative'>
              <span className='position-absolute notify'>12</span>  <FontAwesomeIcon icon={faShoppingCart} /></Link>
        </Navbar.Collapse>
    </Container>
</Navbar></div>
  )
}

export default Header