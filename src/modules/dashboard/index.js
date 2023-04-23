/* eslint-disable import/no-anonymous-default-export */
import { MODULES_ENUM } from "utilities/constants";
import Dashboard from "./container";

export const DASHBOARD_LABEL = "Dashboard";
export const DASHBOARD_ROUTE = "/dashboard";

export default {
  routeProps: [
    {
      path: DASHBOARD_ROUTE,
      component: Dashboard,
      exact: true,
      authRequired: true,
      useLayout: true,
      accessRequired: () => MODULES_ENUM.MANAGE_DASHBOARD,
    },
  ],
  name: DASHBOARD_LABEL,
  default: true,
  enabled: true,
};
