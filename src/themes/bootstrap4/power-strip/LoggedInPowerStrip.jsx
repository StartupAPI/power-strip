import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

export default function LoggedInPowerStrip(props) {
    let accountDropdown = null;
    if (props.accounts && props.accounts.length > 1) {
        const current_account = props.accounts.find(account => account.is_current);

        accountDropdown = <Dropdown onSelect={props.accountChangeCallback}>
            <Dropdown.Toggle variant="outline-secondary" id="account-dropdown">
                {current_account.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.accounts
                    .map(account => (
                    <Dropdown.Item eventKey={account.id} active={account.is_current}>{account.name}</Dropdown.Item>
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