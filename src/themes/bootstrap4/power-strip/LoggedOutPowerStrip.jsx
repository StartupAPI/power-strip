import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function LoggedOutPowerStrip(props) {
    return <Navbar>
        <Nav>
            <Nav.Link href={props.signUpURL}>Sign Up</Nav.Link>
            <Nav.Link href={props.logInURL}>Log In</Nav.Link>
        </Nav>
    </Navbar>
}