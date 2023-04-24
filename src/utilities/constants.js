import MasterIcon from "components/Icons/MasterIcon";
import DashboardIcon from "components/Icons/DashboardIcon";

export const STATUS_ENUM = {
  status: [
    { label: "Active", value: false },
    { label: "Not Active", value: true },
  ],
  get list() {
    return this.status.map(({ label, value }) => {
      return {
        label,
        value,
      };
    });
  },
};

export const ALERT_TYPE_ENUM = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  INFO: "INFO",
  WARNING: "WARNING",
};

export const USERS_ROLES_ENUM = {
  SYSTEM_ADMIN: "SYSTEM_ADMIN",
  ADMIN: "ADMIN",
  OPERATOR: "OPERATOR",
  get List() {
    return [
      {
        label: "System Admin",
        value: this.SYSTEM_ADMIN,
      },
      {
        label: "Admin",
        value: this.ADMIN,
      },
      {
        label: "Operator",
        value: this.OPERATOR,
      },
    ];
  },
  getRole(role) {
    return this.List?.find((item) => item?.value === role);
  },
};

export const IS_SUPER_ADMIN = "IS_SUPER_ADMIN";

export const MODULES_ENUM = {
  MANAGE_MASTER_DATA: "MANAGE_MASTER_DATA",
  MANAGE_DASHBOARD: "MANAGE_DASHBOARD",
  OPERATOR_DASHBOARD: "OPERATOR_DASHBOARD",
};

export const MODULE_LIST = [
  {
    key: MODULES_ENUM?.MANAGE_MASTER_DATA,
    label: "Master Data",
    path: "/master-data",
    icon: MasterIcon,
  },
  {
    key: MODULES_ENUM?.MANAGE_DASHBOARD,
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    key: MODULES_ENUM?.OPERATOR_DASHBOARD,
    label: "Operator Dashboard",
    path: "/operator-dashboard",
    icon: DashboardIcon,
  },
];
