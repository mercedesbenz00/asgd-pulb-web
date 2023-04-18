import {
  FAILED_LOGIN,
  RECIVED_LOGIN,
  REQUEST_LOGIN,
  RESET_LOGIN_REQUEST,
  HARD_LOGIN_RESET,
} from "actions/actionTypes";

const initState = {
  userInfo: {},
  isAuthenticated: false,
  token: "",
  validating: false,
  error: "",
  isHardReset: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        token: action?.payload,
        validating: true,
        isHardReset: false,
      };

    case RECIVED_LOGIN:
      return {
        ...state,
        validating: false,
        isAuthenticated: true,
        userInfo: { ...action?.payload },
      };

    case RESET_LOGIN_REQUEST:
    case "persist/PURGE":
      return initState;

    case FAILED_LOGIN:
      return {
        ...state,
        validating: false,
        token: "",
        error: action?.payload?.message,
      };
    case HARD_LOGIN_RESET:
      return { ...initState, isHardReset: true };
    default:
      return state;
  }
};

export default authReducer;
