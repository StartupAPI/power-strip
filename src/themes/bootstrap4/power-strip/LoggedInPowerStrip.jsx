import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

export default function LoggedInPowerStrip(props) {
    let accountDropdown = null;
    if (props.accounts && props.accounts.length > 1) {
        const current_account = props.accounts.find(account => account.is_current);

        accountDropdown = <Dropdown onSelect={props.accountChangeCallback}>
            <Dropdown.Toggle variant="plain" id="account-dropdown">
                {current_account.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.accounts
                    .filter(account => !account.is_current)
                    .map(account => (
                    <Dropdown.Item eventKey={account.id}>{account.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    }

    let adminLink = null;
    if (props.isAdmin) {
        adminLink = <Nav.Link href={props.adminURL}>Admin</Nav.Link>
    }

    return <Navbar>
        <Nav>
            {accountDropdown}
            {adminLink}
            <Nav.Link href={props.editURL}>{props.name}</Nav.Link>
            <Nav.Link href={props.logoutURL}>Log Out</Nav.Link>
        </Nav>
    </Navbar>
}