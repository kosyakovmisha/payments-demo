import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const Header =() => (

        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href ="/">Web-Payments</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/categories">Categories</Nav.Link></Nav.Item>    
                    <Nav.Item><Nav.Link href="/payments">Payments</Nav.Link></Nav.Item>    
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

);