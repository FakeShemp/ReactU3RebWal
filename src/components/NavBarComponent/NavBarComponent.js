/**
 * Navigation bar that links to all sub-pages
 */

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

class NavBarComponent extends Component {
    render() {
        return (
            <Navbar>
                <LinkContainer exact to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/user">
                    <Nav.Link>User</Nav.Link>
                </LinkContainer>
            </Navbar>
        )
    }
}

export default NavBarComponent;