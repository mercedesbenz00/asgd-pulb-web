/* eslint-disable import/no-anonymous-default-export */
import { MODULES_ENUM } from "utilities/constants";
import MasterData from "./container";

export const MASTER_DATA_LABEL = "Master Data";
export const MASTER_DATA_ROUTE = "/master-data";

export default {
  routeProps: [
    {
      path: MASTER_DATA_ROUTE,
      component: MasterData,
      exact: true,
      authRequired: true,
      useLayout: true,
      accessRequired: () => MODULES_ENUM.MANAGE_MASTER_DATA,
    },
  ],
  name: MASTER_DATA_LABEL,
  default: true,
  enabled: true,
};
