import axios from "axios";

export const LOAD_IDENTITY = "LOAD_IDENTITY";
export const IDENTITY_LOADED = "IDENTITY_LOADED";
export const IDENTITY_UNKNOWN = "IDENTITY_UNKNOWN";

export function loadIdentity() {
    return dispatch => {
        dispatch({
            type: LOAD_IDENTITY
        });

        axios
            .get("/users/api.php?call=/startupapi/v1/user", {
                responseType: "json"
            })
            .then(response => {
                if (response.data.meta.success) {
                    return dispatch({
                        identity: response.data.result,
                        type: IDENTITY_LOADED
                    })
                } else {
                    return dispatch({
                        type: IDENTITY_UNKNOWN
                    })
                }
            }).catch(() =>
                dispatch({
                    type: IDENTITY_UNKNOWN
                })
            )
    };
}

export function identity(state, action) {
    if (typeof state === "undefined") {
        return {
            identity: {},
            identity_loading: false,
            identity_initialized: false
        };
    }

    switch (action.type) {
        case LOAD_IDENTITY:
            return Object.assign({}, state, {
                identity_loading: true
            });
        case IDENTITY_LOADED:
            return Object.assign({}, state, {
                identity: action.identity,
                identity_loading: false,
                identity_initialized: true
            });
        case IDENTITY_UNKNOWN:
            return Object.assign({}, state, {
                identity: {},
                identity_loading: false,
                identity_initialized: true
            });
        default:
            return state;
    }
}
