import React from "react";
import PropTypes from "prop-types";

LoggedOutPowerStrip.propTypes = {
  signUpURL: PropTypes.string,
  logInURL: PropTypes.string,
};

export default function LoggedOutPowerStrip(props) {
  return (
    <ul>
      <li>
        <a href={props.signUpURL}>Sign Up</a>
      </li>
      <li>
        <a href={props.logInURL}>Log In</a>
      </li>
    </ul>
  );
}
