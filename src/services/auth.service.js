import api, { API_VERSION, axiosConfig } from "./api";
import TokenService from "./token.service";

const register = (username, email, password) => {
  return api
    .post(
      `/api/${API_VERSION}/join`,
      {
        username,
        email,
        password,
      },
      axiosConfig
    )
    .then((response) => {
      if (response.data && response.data.success) {
        return response.data;
      } else {
        throw new Error(response.data.errMsg);
      }
    });
};

const login = (username, password) => {
  return api
    .post(
      `/api/${API_VERSION}/login`,
      {
        id: username,
        pw: password,
      },
      axiosConfig
    )
    .then((response) => {
      if (response.data && response.data.success) {
        TokenService.setUser(response.data.data);
      } else {
        throw new Error(response.data.errMsg);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
