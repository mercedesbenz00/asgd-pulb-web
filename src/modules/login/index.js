/* eslint-disable import/no-anonymous-default-export */

import Login from "./container";
import LoginWithoutKeyCloak from "./container/LoginWithoutKeycloak";

export const LOGIN_ROUTE = "/login";

export default {
  routeProps: [
    {
      path: LOGIN_ROUTE,
      exact: true,
      component:
        process.env.REACT_APP_BYPASS_KEYCLOAK === "true"
          ? LoginWithoutKeyCloak
          : Login,
      authRequired: false,
      useLayout: true,
    },
  ],
  name: "login",
  default: true,
  enabled: true,
};
