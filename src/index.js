let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h, render } from "preact";

import thunkMiddleware from "redux-thunk";
import {Provider, connect} from "preact-redux";
import {createStore, combineReducers, applyMiddleware} from "redux";

import {identity, loadIdentity} from "./store/identity";
import {accounts, loadAccounts} from "./store/accounts";

/**
 * Redux store
 * @type Store
 */
const store = createStore(
  combineReducers({identity, accounts}),
  // /* eslint-disable no-underscore-dangle */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

import PowerStrip from "./components/power-strip";

import theme from './themes/bootstrap4';

const ConnectedPowerStrip = connect(
  state => state
)( ({ identity, accounts }) => (
  <PowerStrip
    identity={identity.identity}
    identityLoading={identity.identity_loading}
    identityInitialized={identity.identity_initialized}
    accounts={accounts.accounts}
    accountsLoading={accounts.accounts_loading}
    accountsInitialized={accounts.accounts_initialized}
    theme={theme}
  />
));

store.dispatch(loadIdentity());
store.dispatch(loadAccounts());

render(
  <Provider store={store}>
    <ConnectedPowerStrip/>
  </Provider>,
  document.getElementById('startupapi-power-strip')
);
