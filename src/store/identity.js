export const LOAD_IDENTITY = "LOAD_IDENTITY";
export const IDENTITY_LOADED = "IDENTITY_LOADED";
export const IDENTITY_UNKNOWN = "IDENTITY_UNKNOWN";

export function loadIdentity() {
  return async (dispatch) => {
    dispatch({
      type: LOAD_IDENTITY,
    });

    const data = await window
      .fetch("/users/api.php?call=/startupapi/v1/user", {
        method: "GET",
        credentials: "same-origin",
      })
      .then((response) => response.json())
      .catch(() => null);

    if (data && data.meta && data.meta.success) {
      return dispatch({
        identity: data.result,
        type: IDENTITY_LOADED,
      });
    } else {
      return dispatch({
        type: IDENTITY_UNKNOWN,
      });
    }
  };
}

export function identity(state, action) {
  if (typeof state === "undefined") {
    return {
      identity: {},
      identity_loading: false,
      identity_initialized: false,
    };
  }

  switch (action.type) {
    case LOAD_IDENTITY:
      return { ...state, identity_loading: true };
    case IDENTITY_LOADED:
      return {
        ...state,
        identity: action.identity,
        identity_loading: false,
        identity_initialized: true,
      };
    case IDENTITY_UNKNOWN:
      return {
        ...state,
        identity: {},
        identity_loading: false,
        identity_initialized: true,
      };
    default:
      return state;
  }
}
