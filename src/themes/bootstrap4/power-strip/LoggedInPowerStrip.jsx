import React from "react";
import PropTypes from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";

LoggedInPowerStrip.propTypes = {
  name: PropTypes.string,
  accounts: PropTypes.array,
  accountChangeCallback: PropTypes.func,
  isAdmin: PropTypes.bool,
  editURL: PropTypes.string,
  logoutURL: PropTypes.string,
  adminURL: PropTypes.string,
};

function formatAccountTitle(account, plan) {
  if (plan) {
    return (
      <span>
        {account.name}{" "}
        <Badge variant="secondary" title={plan.description}>
          {plan.name}
        </Badge>
      </span>
    );
  } else {
    return account.name;
  }
}

export default function LoggedInPowerStrip(props) {
  let accountDropdown = null;
  if (props.accounts && props.accounts.length > 1) {
    const currentAccount = props.accounts.find((account) => account.is_current);

    const title = formatAccountTitle(currentAccount, currentAccount.plan);

    accountDropdown = (
      <DropdownButton
        as={ButtonGroup}
        id="startupapi-account-dropdown"
        size="sm"
        variant="outline-secondary"
        title={title}
        onSelect={props.accountChangeCallback}
      >
        {props.accounts.map((account) => (
          <Dropdown.Item
            key={account.id}
            eventKey={account.id}
            active={account.is_current}
          >
            {formatAccountTitle(account, account.plan)}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }

  let adminLink = null;
  if (props.isAdmin) {
    adminLink = <Nav.Link href={props.adminURL}>Admin</Nav.Link>;
  }

  return (
    <Navbar>
      <Nav>
        {adminLink}
        {accountDropdown}
        <Nav.Link href={props.editURL}>{props.name}</Nav.Link>
        <Nav.Link href={props.logoutURL}>Log Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}
