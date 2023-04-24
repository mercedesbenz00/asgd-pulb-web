import { request } from "utilities/http";
import * as actionTypes from "./actionTypes";

export const getMachines = (data) => {
  return request({
    url: "/api/machines",
    method: "get",
    data,
  });
};

export const getFeedingLines = (data) => {
  return request({
    url: "/api/feeding-lines",
    method: "get",
    data,
  });
};

const getFeedingLine = (id) => {
  return request({
    url: `/api/feeding-lines/${id}`,
    method: "get",
  });
};

const createFeedingLine = (data) => {
  return request({
    url: "/api/feeding-lines",
    method: "post",
    data,
  });
};

const updateFeedingLine = (data) => {
  return request({
    url: "/api/feeding-lines",
    method: "put",
    data,
  });
};

const deleteFeedingLine = (id) => {
  return request({
    url: `/api/feeding-lines`,
    method: "delete",
    data: {
      id,
    },
  });
};

export const requestFeedingLines = (requestInfo) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_FEEDING_LINE_LIST,
    });

    try {
      const { data: response } = await getFeedingLines(requestInfo);
      const { status, data: result, message } = response;
      if (status) {
        dispatch({
          type: actionTypes.RECEIVED_FEEDING_LINE_LIST,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.FAILED_FEEDING_LINE_LIST,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.FAILED_FEEDING_LINE_LIST,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const requestFeedingLine = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_FEEDING_LINE,
    });

    try {
      const { data: response } = await getFeedingLine(id);
      const { status, data: result, message } = response;
      if (status) {
        dispatch({
          type: actionTypes.RECEIVED_FEEDING_LINE,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.FAILED_FEEDING_LINE,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.FAILED_FEEDING_LINE,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const saveFeedingLine = (requestInfo, id = 0) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SAVE_FEEDING_LINE_REQUEST,
    });

    try {
      const { data: response } = !!id
        ? await updateFeedingLine(requestInfo)
        : await createFeedingLine(requestInfo);

      const { status, data: result, message } = response;
      console.log("result", result);
      if (status) {
        dispatch({
          type: actionTypes.SAVE_FEEDING_LINE_SUCCESS,
          payload: message,
        });
      } else {
        dispatch({
          type: actionTypes.SAVE_FEEDING_LINE_FAILED,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.SAVE_FEEDING_LINE_FAILED,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const deleteFeedingLineRequest = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_FEEDING_LINE_REQUEST,
    });

    try {
      const { data: response } = await deleteFeedingLine(id);
      const { status, data: result, message } = response;
      console.log("result", result);
      if (status) {
        dispatch({
          type: actionTypes.DELETE_FEEDING_LINE_SUCCESS,
          payload: message,
        });
      } else {
        dispatch({
          type: actionTypes.DELETE_FEEDING_LINE_FAILED,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.DELETE_FEEDING_LINE_FAILED,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const resetFeedingLine = () => {
  return {
    type: actionTypes.RESET_FEEDING_LINE,
  };
};
