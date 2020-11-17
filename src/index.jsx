// enables async/await
import "regenerator-runtime/runtime.js";

import React from "react";
import ReactDOM from "react-dom";

import { Provider, connect } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { identity, loadIdentity } from "./store/identity";
import {
  accounts,
  loadAccounts,
  setCurrentAccountById,
} from "./store/accounts";

import PowerStrip from "./components/power-strip";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

const getStore = () => {
  if (store) {
    return store;
  }

  /**
   * Redux store
   * @type Store
   */
  store = createStore(
    combineReducers({ identity, accounts }),
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  store.dispatch(loadIdentity());
  store.dispatch(loadAccounts());

  return store;
};

export const getPowerStrip = (theme) => {
  const ConnectedPowerStrip = connect(
    (state) => state,
    (dispatch) => ({
      changeAccount: (id) => {
        // perform page redirect until react SPA can fully handle account update without it
        window.location.href = `/users/change_account.php?return=${window.encodeURIComponent(
          window.location.href
        )}&account=${id}`;
        // update redux store with new account info
        dispatch(setCurrentAccountById(id));
      },
    })
  )(({ identity, accounts, changeAccount }) => (
    <PowerStrip
      identity={identity.identity}
      identityLoading={identity.identity_loading}
      identityInitialized={identity.identity_initialized}
      accounts={accounts.accounts}
      accountsLoading={accounts.accounts_loading}
      accountsInitialized={accounts.accounts_initialized}
      accountChangeCallback={changeAccount}
      theme={theme}
    />
  ));

  return (
    <Provider store={getStore()}>
      <ConnectedPowerStrip />
    </Provider>
  );
};

export const attachWidget = (powerStrip) => {
  const powerStrips = Array.from(
    document.querySelectorAll(".startupapi-power-strip")
  );
  const powerStripByID = document.getElementById("startupapi-power-strip");

  if (powerStripByID) {
    powerStrips.push(powerStripByID);
  }

  powerStrips.forEach((element) => {
    ReactDOM.render(powerStrip, element);
  });
};
