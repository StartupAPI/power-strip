import React from "react";
import PropTypes from "prop-types";

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
    return `${account.name} (${plan.name})`;
  } else {
    return account.name;
  }
}

export default function LoggedInPowerStrip(props) {
  let accountDropdown = null;
  if (props.accounts.length > 1) {
    const currentAccount = props.accounts.find((account) => account.is_current);

    accountDropdown = (
      <li>
        <select
          onChange={(event) => {
            props.accountChangeCallback(event.target.value);
          }}
          defaultValue={currentAccount.id}
        >
          {props.accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {formatAccountTitle(account, account.plan)}
            </option>
          ))}
        </select>
      </li>
    );
  }

  let adminLink = null;
  if (props.isAdmin) {
    adminLink = (
      <li>
        <a href={props.adminURL}>Admin</a>
      </li>
    );
  }

  return (
    <ul>
      {adminLink}
      {accountDropdown}
      <li>
        <a href={props.editURL}>{props.name}</a>
      </li>
      <li>
        <a href={props.logoutURL}>Log Out</a>
      </li>
    </ul>
  );
}
