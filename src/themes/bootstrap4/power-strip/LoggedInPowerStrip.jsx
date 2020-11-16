import React from "react";
import PropTypes from "prop-types";

import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";

LoggedInPowerStrip.propTypes = {
  name: PropTypes.string.isRequired,
  accounts: PropTypes.array.isRequired,
  accountChangeCallback: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  editURL: PropTypes.string.isRequired,
  logoutURL: PropTypes.string.isRequired,
  adminURL: PropTypes.string.isRequired,
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
  if (props.accounts.length > 1) {
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
    <nav className="navbar-nav">
      {adminLink}
      {accountDropdown}
      <Nav.Link href={props.editURL}>{props.name}</Nav.Link>
      <Nav.Link href={props.logoutURL}>Log Out</Nav.Link>
    </nav>
  );
}
