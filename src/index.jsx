import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, connect} from 'react-redux'
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";

import {identity, loadIdentity} from "./store/identity";
import {accounts, loadAccounts, setCurrentAccountById} from "./store/accounts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Redux store
 * @type Store
 */
const store = createStore(
  combineReducers({identity, accounts}),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

import PowerStrip from "./components/power-strip";

import theme from './themes/bootstrap4';

const ConnectedPowerStrip = connect(
  state => state,
  dispatch => ({
    changeAccount: id => {
      dispatch(setCurrentAccountById(id))
    }
  })
)( ({ identity, accounts, changeAccount }) => (
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

store.dispatch(loadIdentity());
store.dispatch(loadAccounts());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedPowerStrip/>
  </Provider>,
  document.getElementById('startupapi-power-strip')
);