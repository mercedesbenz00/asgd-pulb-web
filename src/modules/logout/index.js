/* eslint-disable import/no-anonymous-default-export */
import Logout from "./container";

export const LOGIN_ROUTE = "/logout";
export default {
  routeProps: [
    {
      path: LOGIN_ROUTE,
      exact: true,
      component: Logout,
      authRequired: false,
      useLayout: true,
    },
  ],
  name: "logout",
  default: true,
  enabled: true,
};
