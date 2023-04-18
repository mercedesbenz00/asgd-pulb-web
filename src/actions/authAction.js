import * as actionTypes from "./actionTypes";
import { request } from "utilities/http";

export const resetLoginError = () => {
  return { type: actionTypes.RESET_LOGIN_REQUEST };
};

export const HardLoginReset = () => {
  return { type: actionTypes.HARD_LOGIN_RESET };
};

export const requestLogin = (token) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOGIN,
      payload: token,
    });

    try {
      const { data: response } = await loginAction();
      const { status, data: result, message } = response;
      if (status) {
        dispatch({
          type: actionTypes.RECIVED_LOGIN,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.FAILED_LOGIN,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.FAILED_LOGIN,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

const loginAction = (data) => {
  return request({
    url: "/api/v1/login",
    method: "post",
    data,
  });
};
