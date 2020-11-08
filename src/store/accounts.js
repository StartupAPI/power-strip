export const LOAD_ACCOUNTS = "LOAD_ACCOUNTS";
export const ACCOUNTS_LOADED = "ACCOUNTS_LOADED";
export const ACCOUNTS_UNKNOWN = "ACCOUNTS_UNKNOWN";
export const SET_CURRENT_ACCOUNT = "SET_CURRENT_ACCOUNT";

export function setCurrentAccountById(accountId) {
  // @TODO: make a call to API to switch current account
  return {
    type: SET_CURRENT_ACCOUNT,
    accountId,
  };
}

export function loadAccounts() {
  return async (dispatch) => {
    dispatch({
      type: LOAD_ACCOUNTS,
    });

    const data = await window
      .fetch("/users/api.php?call=/startupapi/v1/accounts", {
        method: "GET",
        credentials: "same-origin",
      })
      .then((response) => response.json())
      .catch(() => null);

    if (data && data.meta && data.meta.success) {
      return dispatch({
        accounts: data.result,
        type: ACCOUNTS_LOADED,
      });
    } else {
      return dispatch({
        type: ACCOUNTS_UNKNOWN,
      });
    }
  };
}

export function accounts(state, action) {
  if (typeof state === "undefined") {
    return {
      accounts: [],
      accounts_loading: false,
      accounts_initialized: false,
    };
  }

  switch (action.type) {
    case LOAD_ACCOUNTS:
      return { ...state, accounts_loading: true };
    case ACCOUNTS_LOADED:
      return {
        ...state,
        accounts: action.accounts,
        accounts_loading: false,
        accounts_initialized: true,
      };
    case ACCOUNTS_UNKNOWN:
      return {
        ...state,
        accounts: [],
        accounts_loading: false,
        accounts_initialized: true,
      };
    case SET_CURRENT_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.map((account) => {
          account.is_current = account.id === Number.parseInt(action.accountId);
          return account;
        }),
      };
    default:
      return state;
  }
}
