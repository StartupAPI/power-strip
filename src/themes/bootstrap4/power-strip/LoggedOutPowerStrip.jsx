import React from "react";

export default function LoggedOutPowerStrip(props) {
    return (<ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href={props.signUpURL}>
                Sign Up
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href={props.logInURL}>
                Log In
            </a>
        </li>
    </ul>);
}