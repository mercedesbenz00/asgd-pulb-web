import ReactTooltip from "react-tooltip";
import classNames from "classnames";
import UnlockPendingIcon from "components/Icons/UnlockPendingIcon";
import UnlockIcon from "components/Icons/UnlockIcon";
import LockIcon from "components/Icons/LockIcon";
import { formatDateWithoutDay } from "utilities/common";
import { ACCESS_REQUEST_STATUS, ACCESS_TYPE_ENUM } from "utilities/constants";

export default function PaltformRowCard({
  platform,
  color = "#00854F",
  setShowForm,
  setApplication,
  redirectUser,
  isNonSSO = false,
}) {
  const {
    name,
    encodedUrl,
    versionName,
    versionDate,
    accessRequests,
    haveAccess,
  } = platform;
  let disabled = true;
  let actionText = "Request Access";
  let status = undefined;
  let accessType = undefined;
  let accessTerm = undefined;

  if (haveAccess || isNonSSO) {
    disabled = false;
    actionText = "Login";
  } else if (!!accessRequests && accessRequests?.length > 0) {
    status = accessRequests[0]?.status;
    accessType = accessRequests[0]?.accessType;
    accessTerm = accessRequests[0]?.accessTerm;

    disabled = status !== ACCESS_REQUEST_STATUS.APPROVED;
    actionText =
      status === ACCESS_REQUEST_STATUS.REJECTED ? "Request Access" : "Login";
  }

  const renderLockIcon = () => {
    if (!haveAccess && !isNonSSO) {
      if (status === ACCESS_REQUEST_STATUS.REJECTED || status === undefined) {
        return (
          <div data-tip data-for="rejectedTip">
            <LockIcon />
            <ReactTooltip
              id="rejectedTip"
              place="top"
              type="error"
              effect="solid"
            >
              No Access
            </ReactTooltip>
          </div>
        );
      } else if (status === ACCESS_REQUEST_STATUS.PENDING) {
        return (
          <div data-tip data-for="pendingTip">
            <UnlockPendingIcon />
            <ReactTooltip
              id="pendingTip"
              place="top"
              type="warning"
              effect="solid"
            >
              Pending Approval
            </ReactTooltip>
          </div>
        );
      } else if (
        status === ACCESS_REQUEST_STATUS.APPROVED &&
        accessType === ACCESS_TYPE_ENUM.TEMPORARY
      ) {
        return (
          <div data-tip data-for="approvedTip">
            <UnlockIcon />
            <ReactTooltip
              id="approvedTip"
              place="top"
              type="success"
              effect="solid"
            >
              {`Expiring in ${accessTerm} hours`}
            </ReactTooltip>
          </div>
        );
      }
    }
  };

  return (
    <div className="custom-card my-2 p-3 d-flex flex-wrap w-100 align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className={classNames("ms-2", { visible: disabled })}>
          {renderLockIcon()}
        </div>
        <div className="d-flex align-items-center">
          <div
            className={classNames("fw-bold mx-3", {
              "opacity-50": disabled,
            })}
          >
            {name}
          </div>
          <div
            style={{ color: "#979391", fontSize: "smaller" }}
            className={classNames("text-uppercase", { "opacity-50": disabled })}
          >{`Version ${versionName} | ${formatDateWithoutDay(
            versionDate
          )}`}</div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-auto">
        {isNonSSO && (
          <button
            type="button"
            className="btn mx-2"
            style={{ backgroundColor: color, color: "white" }}
            onClick={() => {
              setShowForm(true);
              setApplication(platform);
            }}
          >
            Request Access
          </button>
        )}

        <button
          type="button"
          className="btn"
          style={{ backgroundColor: color, color: "white" }}
          disabled={actionText === "Login" && disabled}
          onClick={(e) => {
            e.preventDefault();
            if (actionText === "Login") {
              if (!disabled) {
                redirectUser(encodedUrl);
              }
            } else {
              setShowForm(true);
              setApplication(platform);
            }
          }}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}
