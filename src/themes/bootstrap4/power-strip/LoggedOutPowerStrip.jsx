import React from "react";
import PropTypes from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

LoggedOutPowerStrip.propTypes = {
  signUpURL: PropTypes.string,
  logInURL: PropTypes.string,
};

export default function LoggedOutPowerStrip(props) {
  return (
    <Navbar>
      <Nav>
        <Nav.Link href={props.signUpURL}>Sign Up</Nav.Link>
        <Nav.Link href={props.logInURL}>Log In</Nav.Link>
      </Nav>
    </Navbar>
  );
}
