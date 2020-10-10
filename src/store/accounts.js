import axios from "axios";

export const LOAD_ACCOUNTS = "LOAD_ACCOUNTS";
export const ACCOUNTS_LOADED = "ACCOUNTS_LOADED";
export const ACCOUNTS_UNKNOWN = "ACCOUNTS_UNKNOWN";

export function loadAccounts() {
    return dispatch => {
        dispatch({
            type: LOAD_ACCOUNTS
        });

        axios
            .get("/users/api.php?call=/startupapi/v1/accounts", {
                responseType: "json"
            })
            .then(response => {
                if (response.data.meta.success) {
                    return dispatch({
                        accounts: response.data.result,
                        type: ACCOUNTS_LOADED
                    })
                } else {
                    return dispatch({
                        type: ACCOUNTS_UNKNOWN
                    })
                }
            }).catch(() =>
                dispatch({
                    type: ACCOUNTS_UNKNOWN
                })
            )
    };
}

export function accounts(state, action) {
    if (typeof state === "undefined") {
        return {
            accounts: [],
            accounts_loading: false,
            accounts_initialized: false
        };
    }

    switch (action.type) {
        case LOAD_ACCOUNTS:
            return Object.assign({}, state, {
                accounts_loading: true
            });
        case ACCOUNTS_LOADED:
            return Object.assign({}, state, {
                accounts: action.accounts,
                accounts_loading: false,
                accounts_initialized: true
            });
        case ACCOUNTS_UNKNOWN:
            return Object.assign({}, state, {
                accounts: [],
                accounts_loading: false,
                accounts_initialized: true
            });
        default:
            return state;
    }
}
