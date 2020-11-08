import React from "react";

export default function PowerStrip(props) {
  let startupAPIRoot = props.startupapiroot || "/users/";

  const LoggedInPowerStrip = props.theme.LoggedInPowerStrip;
  const LoggedOutPowerStrip = props.theme.LoggedOutPowerStrip;

  let accountsProps = {};
  if (props.accountsInitialized) {
    accountsProps = {
      accounts: props.accounts,
    };
  }

  // do not show a power strip until identity is initialized
  let powerStrip = null;
  if (props.identityInitialized) {
    if (props.identity.name) {
      powerStrip = (
        <LoggedInPowerStrip
          {...accountsProps}
          name={props.identity.name}
          editURL={`${startupAPIRoot}edit.php`}
          logoutURL={`${startupAPIRoot}logout.php`}
          isAdmin={props.identity.is_system_admin}
          adminURL={`${startupAPIRoot}admin/`}
          accountChangeCallback={props.accountChangeCallback}
        />
      );
    } else {
      powerStrip = (
        <LoggedOutPowerStrip
          signUpURL={`${startupAPIRoot}register.php`}
          logInURL={`${startupAPIRoot}login.php`}
        />
      );
    }
  }

  return powerStrip;
}
