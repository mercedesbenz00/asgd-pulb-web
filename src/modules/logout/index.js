/* eslint-disable import/no-anonymous-default-export */
import Logout from "./container";

export const LOGOUT_ROUTE = "/logout";
export default {
  routeProps: [
    {
      path: LOGOUT_ROUTE,
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
