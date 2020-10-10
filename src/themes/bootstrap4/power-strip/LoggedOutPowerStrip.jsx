import { h, Component } from "preact";

export default class LoggedOutPowerStrip extends Component {
    render(props) {
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
    };
}
