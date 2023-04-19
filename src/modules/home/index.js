/* eslint-disable import/no-anonymous-default-export */
import Home from "./container";

export const HOME_ROUTE = "/";

export default {
  routeProps: [
    {
      path: HOME_ROUTE,
      exact: true,
      component: Home,
      authRequired: true,
      useLayout: true,
    },
  ],
  name: "Home",
  default: true,
  enabled: true,
};
