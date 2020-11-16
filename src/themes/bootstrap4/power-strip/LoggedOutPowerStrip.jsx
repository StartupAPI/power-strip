import React from "react";
import PropTypes from "prop-types";

import Nav from "react-bootstrap/Nav";

LoggedOutPowerStrip.propTypes = {
  signUpURL: PropTypes.string.isRequired,
  logInURL: PropTypes.string.isRequired,
};

export default function LoggedOutPowerStrip(props) {
  return (
    <nav className="navbar-nav">
      <Nav.Link href={props.signUpURL}>Sign Up</Nav.Link>
      <Nav.Link href={props.logInURL}>Log In</Nav.Link>
    </nav>
  );
}
