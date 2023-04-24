/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "SET_LABEL_TAB":
      return {
        ...state,
        labelTab: action.payload,
      };

    case "SET_LABEL_MODULE":
      return {
        ...state,
        labelModule: action.payload,
      };

    default:
      return state;
  }
};
