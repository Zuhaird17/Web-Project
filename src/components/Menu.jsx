import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png';
import {Button} from 'react-bootstrap';



const menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#CATALOGUE" style={{paddingRight:"64px"}}>CATALOGUE</Nav.Link>
                        <Nav.Link href="#FASHION" style={{paddingRight:"64px"}}>FASHION</Nav.Link>
                        <Nav.Link href="#FAVOURITE" style={{paddingRight:"64px"}}>FAVOURITE</Nav.Link>
                        <Nav.Link href="#LIFESTYLE" style={{paddingRight:"64px"}}>LIFESTYLE</Nav.Link>
                        <Button variant="dark">SIGN UP</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default menu