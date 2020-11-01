import { Component } from "react";

export default class PowerStrip extends Component {
  render(props) {
    let startupAPIRoot = props.startupapiroot || '/users/';

    const LoggedInPowerStrip = props.theme.LoggedInPowerStrip;
    const LoggedOutPowerStrip = props.theme.LoggedOutPowerStrip;

    let accountsProps = {};
    if (props.accountsInitialized) {
      accountsProps = {
        accounts: props.accounts
      }
    }

    if (!props.identityInitialized) {
      return null;
    } else {
      return props.identity.name ? 
      (
        <LoggedInPowerStrip
          {...accountsProps}
          name={props.identity.name}
          editURL={`${startupAPIRoot}edit.php`}
          logoutURL={`${startupAPIRoot}logout.php`}
          isAdmin={props.identity.is_system_admin}
          adminURL={`${startupAPIRoot}admin/`}
        />
      ) : (
        <LoggedOutPowerStrip
          signUpURL={`${startupAPIRoot}register.php`}
          logInURL={`${startupAPIRoot}login.php`}
        />
      );
    }
  }
}
