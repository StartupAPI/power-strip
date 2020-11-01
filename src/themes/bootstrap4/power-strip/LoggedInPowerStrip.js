import { Component } from "react";

export default class LoggedInPowerStrip extends Component {
    render(props) {
        let current_account;
        if (props.accounts && props.accounts.length > 1) {
            current_account = props.accounts.find(account => account.is_current);
        }

        return (<ul class="navbar-nav">
            { current_account ? (<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    {current_account.name}
                </a>
                <div class="dropdown-menu">
                    {props.accounts
                        .filter(account => !account.is_current)
                        .map(account => (
                        <a class="dropdown-item" href="#">{account.name}</a>
                    ))}
                </div>
            </li>) : null}
            { props.isAdmin ? (
                <li class="nav-item">
                    <a class="nav-link" href={props.adminURL}>
                        Admin
                    </a>
                </li>
            ) : null }
            <li class="nav-item">
                <a class="nav-link" href={props.editURL}>
                    {props.name}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href={props.logoutURL}>
                    Log Out
                </a>
            </li>
        </ul>);
    }
}
