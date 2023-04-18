import classNames from "classnames";
import React from "react";
import { ALERT_TYPE_ENUM } from "utilities/constants";
import AlertSuccessIcon from "components/Icons/AlertSuccessIcon";
import AlertErrorIcon from "components/Icons/AlertErrorIcon";
import AlertWarningIcon from "components/Icons/AlertWarningIcon";
import AlertInfoIcon from "components/Icons/AlertInfoIcon";
import AlertCloseIcon from "components/Icons/AlertCloseIcon";

const ALERT_STYLE = {
  SUCCESS: {
    backgroundColor: "#ECFDF5",
    color: "#10B981",
  },
  ERROR: {
    backgroundColor: "#FEF2F2",
    color: "#EF4444",
  },
  WARNING: {
    backgroundColor: "#FFFBEB",
    color: "#F59E0B",
  },
  INFO: {
    backgroundColor: "#E8EDFB",
    color: "#1D4ED8",
  },
};

export default function Alert({
  type = "",
  message = "",
  open = true,
  onClose = () => {},
}) {
  const style = React.useMemo(() => {
    if (type === ALERT_TYPE_ENUM.ERROR) {
      return ALERT_STYLE[ALERT_TYPE_ENUM.ERROR];
    } else if (type === ALERT_TYPE_ENUM.SUCCESS) {
      return ALERT_STYLE[ALERT_TYPE_ENUM.SUCCESS];
    } else if (type === ALERT_TYPE_ENUM.INFO) {
      return ALERT_STYLE[ALERT_TYPE_ENUM.INFO];
    } else if (type === ALERT_TYPE_ENUM.WARNING) {
      return ALERT_STYLE[ALERT_TYPE_ENUM.WARNING];
    }
  }, [type]);

  const icon = React.useMemo(() => {
    if (type === ALERT_TYPE_ENUM.ERROR) {
      return <AlertErrorIcon />;
    } else if (type === ALERT_TYPE_ENUM.SUCCESS) {
      return <AlertSuccessIcon />;
    } else if (type === ALERT_TYPE_ENUM.INFO) {
      return <AlertInfoIcon />;
    } else if (type === ALERT_TYPE_ENUM.WARNING) {
      return <AlertWarningIcon />;
    }
  }, [type]);

  return (
    <div
      className={classNames("toast align-items-center position-fixed end-0", {
        show: open,
      })}
      style={{
        bottom: "30px",
        ...style,
        border: `1px solid ${style.color}`,
        borderRadius: "6px",
        zIndex:'10'
      }}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ms-2">
          <div className="">{icon}</div>
          <div className="toast-body">{message}</div>
        </div>

        <div className="me-2" onClick={onClose} style={{ cursor: "pointer" }}>
          <AlertCloseIcon color={style.color} />
        </div>
      </div>
    </div>
  );
}
