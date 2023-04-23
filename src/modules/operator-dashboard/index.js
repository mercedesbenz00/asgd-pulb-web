/* eslint-disable import/no-anonymous-default-export */
import { MODULES_ENUM } from "utilities/constants";
import OperatorDashboard from "./container";

export const OPERATOR_DASHBOARD_LABEL = "Operator Dashboard";
export const OPERATOR_DASHBOARD_ROUTE = "/operator-dashboard";

export default {
  routeProps: [
    {
      path: OPERATOR_DASHBOARD_ROUTE,
      component: OperatorDashboard,
      exact: true,
      authRequired: true,
      useLayout: true,
      accessRequired: () => MODULES_ENUM.OPERATOR_DASHBOARD,
    },
  ],
  name: OPERATOR_DASHBOARD_LABEL,
  default: true,
  enabled: true,
};
