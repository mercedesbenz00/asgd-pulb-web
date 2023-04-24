import { request } from "utilities/http";
import * as actionTypes from "./actionTypes";

export const getPulpBrands = (data) => {
  return request({
    url: "/api/pulp-brands",
    method: "get",
    data,
  });
};

export const getPulpProducts = (data) => {
  return request({
    url: "/api/pulp-products",
    method: "get",
    data,
  });
};

export const getPulpTypes = (data) => {
  return request({
    url: "/api/pulp-types",
    method: "get",
    data,
  });
};

export const getPulpShapes = (data) => {
  return request({
    url: "/api/pulp-shapes",
    method: "get",
    data,
  });
};

export const getPulpInfos = (data) => {
  return request({
    url: "/api/pulp-infos",
    method: "get",
    data,
  });
};

const getPulpInfo = (id) => {
  return request({
    url: `/api/pulp-infos/${id}`,
    method: "get",
  });
};

const createPulpInfo = (data) => {
  return request({
    url: "/api/pulp-infos",
    method: "post",
    data,
  });
};

const updatePulpInfo = (data) => {
  return request({
    url: "/api/pulp-infos",
    method: "put",
    data,
  });
};

const deletePulpInfo = (id) => {
  return request({
    url: `/api/pulp-infos`,
    method: "delete",
    data: {
      id,
    },
  });
};

export const requestPulpInfos = (requestInfo) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_PULP_INFORMATION_LIST,
    });

    try {
      const { data: response } = await getPulpInfos(requestInfo);
      const { status, data: result, message } = response;
      if (status) {
        dispatch({
          type: actionTypes.RECEIVED_PULP_INFORMATION_LIST,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.FAILED_PULP_INFORMATION_LIST,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.FAILED_PULP_INFORMATION_LIST,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const requestPulpInfo = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_PULP_INFORMATION,
    });

    try {
      const { data: response } = await getPulpInfo(id);
      const { status, data: result, message } = response;
      if (status) {
        dispatch({
          type: actionTypes.RECEIVED_PULP_INFORMATION,
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.FAILED_PULP_INFORMATION,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.FAILED_PULP_INFORMATION,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const savePulpInfo = (requestInfo, id = 0) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SAVE_PULP_INFORMATION_REQUEST,
    });

    try {
      const { data: response } = !!id
        ? await updatePulpInfo(requestInfo)
        : await createPulpInfo(requestInfo);

      const { status, data: result, message } = response;
      console.log("result", result);
      if (status) {
        dispatch({
          type: actionTypes.SAVE_PULP_INFORMATION_SUCCESS,
          payload: message,
        });
      } else {
        dispatch({
          type: actionTypes.SAVE_PULP_INFORMATION_FAILED,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.SAVE_PULP_INFORMATION_FAILED,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const deletePulpInfoRequest = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_PULP_INFORMATION_REQUEST,
    });

    try {
      const { data: response } = await deletePulpInfo(id);
      const { status, data: result, message } = response;
      console.log("result", result);
      if (status) {
        dispatch({
          type: actionTypes.DELETE_PULP_INFORMATION_SUCCESS,
          payload: message,
        });
      } else {
        dispatch({
          type: actionTypes.DELETE_PULP_INFORMATION_FAILED,
          payload: {
            message,
          },
        });
      }
    } catch {
      dispatch({
        type: actionTypes.DELETE_PULP_INFORMATION_FAILED,
        payload: {
          message: "error",
        },
      });
      return false;
    }
  };
};

export const resetPulpInfo = () => {
  return {
    type: actionTypes.RESET_PULP_INFORMATION,
  };
};
