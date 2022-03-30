import React from 'react'
import { useNavigate } from 'react-router-dom'

import './navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const NavbarHome = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Padh.ai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="aboutus">About Us</Nav.Link>
                        <Nav.Link href="vision">Our Vision</Nav.Link>
                        <NavDropdown title="More ..." id="basic-nav-dropdown">
                            <NavDropdown.Item href="aboutus">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="vision">Our Vision</NavDropdown.Item>
                            <NavDropdown.Item href="goals">Future Endeavours</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Button variant="outline-success" onClick={ () => navigate('/login') }>
                        Login
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarHome