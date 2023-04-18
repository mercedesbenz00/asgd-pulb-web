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
