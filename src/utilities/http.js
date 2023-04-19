import { HardLoginReset } from "actions/authAction";
import axios from "axios";
import store from "store";

const API_TIMEOUT = 1000 * 60;
const baseURL = process.env.REACT_APP_API_BASE_URL;

const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error?.response) {
      const { status } = error?.response;
      if (status === 401 || status === 403) {
        store.dispatch(HardLoginReset());
      }
    }
    return Promise.reject(error);
  }
);

export const formatRequest = ({
  path = "",
  method = "get",
  data = {},
  timeout = API_TIMEOUT,
  useAuth = true,
  customHeader = null,
}) => {
  let headers = {};

  if (customHeader) {
    headers = { ...headers, ...customHeader };
  }

  if (useAuth) {
    const Auth = (store.getState() || {})?.Auth || {};
    headers["x-jwt-auth"] = Auth.token;
  }
  let query = "";
  if (method === "get" && data) {
    query = buildParams(data);
  }

  const url = `${path}${query !== "" ? "?" + query : ""}`;

  return {
    method,
    url,
    data,
    headers,
    timeout,
  };
};

function buildParams(data) {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((value) => params.append(key, value.toString()));
    } else {
      params.append(key, value.toString());
    }
  });

  return params.toString();
}

export const request = ({
  url = "",
  method = "get",
  data = {},
  timeout = API_TIMEOUT,
  useAuth = true,
  customHeader = null,
}) => {
  return Axios(
    formatRequest({
      path: url,
      method,
      data,
      timeout,
      useAuth,
      customHeader,
    })
  );
};
