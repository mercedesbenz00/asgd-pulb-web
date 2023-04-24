import * as actions from "actions/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: "",
  success: "",
  current: null,
  isDeleted: false,
};

const pulpInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_PULP_INFORMATION_LIST:
    case actions.REQUEST_PULP_INFORMATION:
    case actions.SAVE_PULP_INFORMATION_REQUEST:
    case actions.DELETE_PULP_INFORMATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        success: "",
        current: null,
        isDeleted: false,
      };

    case actions.RECEIVED_PULP_INFORMATION_LIST:
      return {
        ...state,
        loading: false,
        error: "",
        success: "",
        data: action.payload,
      };

    case actions.RECEIVED_PULP_INFORMATION:
      return {
        ...state,
        loading: false,
        error: "",
        success: "",
        current: action.payload,
      };

    case actions.SAVE_PULP_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: action.payload,
      };

    case actions.DELETE_PULP_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: action.payload,
        isDeleted: true,
      };

    case actions.FAILED_PULP_INFORMATION_LIST:
    case actions.FAILED_PULP_INFORMATION:
    case actions.SAVE_PULP_INFORMATION_FAILED:
    case actions.DELETE_PULP_INFORMATION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload?.message,
        success: "",
        isDeleted: false,
      };

    case actions.RESET_PULP_INFORMATION:
      return {
        ...state,
        error: "",
        success: "",
        current: null,
        isDeleted: false,
      };
    default:
      return state;
  }
};

export default pulpInfoReducer;
