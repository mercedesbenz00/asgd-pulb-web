import * as actions from "actions/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: "",
  success: "",
  current: null,
  isDeleted: false,
};

const feedingLineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_FEEDING_LINE_LIST:
    case actions.REQUEST_FEEDING_LINE:
    case actions.SAVE_FEEDING_LINE_REQUEST:
    case actions.DELETE_FEEDING_LINE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        success: "",
        current: null,
        isDeleted: false,
      };

    case actions.RECEIVED_FEEDING_LINE_LIST:
      return {
        ...state,
        loading: false,
        error: "",
        success: "",
        data: action.payload,
      };

    case actions.RECEIVED_FEEDING_LINE:
      return {
        ...state,
        loading: false,
        error: "",
        success: "",
        current: action.payload,
      };

    case actions.SAVE_FEEDING_LINE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: action.payload,
      };

    case actions.DELETE_FEEDING_LINE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: action.payload,
        isDeleted: true,
      };

    case actions.FAILED_FEEDING_LINE_LIST:
    case actions.FAILED_FEEDING_LINE:
    case actions.SAVE_FEEDING_LINE_FAILED:
    case actions.DELETE_FEEDING_LINE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload?.message,
        success: "",
        isDeleted: false,
      };

    case actions.RESET_FEEDING_LINE:
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

export default feedingLineReducer;
