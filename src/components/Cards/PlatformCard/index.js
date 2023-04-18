import classNames from "classnames";
import UnlockPendingIcon from "components/Icons/UnlockPendingIcon";
import UnlockIcon from "components/Icons/UnlockIcon";
import LockIcon from "components/Icons/LockIcon";
import { formatDateWithoutDay } from "utilities/common";
import { ACCESS_REQUEST_STATUS, ACCESS_TYPE_ENUM } from "utilities/constants";

export default function PaltformCard({
  platform,
  Icon,
  color = "#00854F",
  setShowForm,
  setApplication,
  redirectUser,
}) {
  const {
    name,
    encodedUrl,
    versionName,
    versionDate,
    accessRequests,
    haveAccess,
    isNonSSO = false,
  } = platform;

  let disabled = true;
  let actionText = "Request Access";
  let status = undefined;
  let accessType = undefined;
  let accessTerm = undefined;
  const accessGranted = haveAccess && accessRequests?.length < 1;
  if (accessGranted) {
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
    if (!accessGranted) {
      if (status === ACCESS_REQUEST_STATUS.REJECTED || status === undefined) {
        return <LockIcon />;
      } else if (status === ACCESS_REQUEST_STATUS.PENDING) {
        return (
          <div className='d-flex flex-column align-items-end'>
            <UnlockPendingIcon />
            <div
              className='mt-1'
              style={{ color: "#979391", fontSize: "smaller" }}
            >
              Pending Approval
            </div>
          </div>
        );
      } else if (
        status === ACCESS_REQUEST_STATUS.APPROVED &&
        accessType === ACCESS_TYPE_ENUM.TEMPORARY
      ) {
        return (
          <div className='d-flex flex-column align-items-end'>
            <UnlockIcon />
            <div
              className='mt-1'
              style={{ color: "#979391", fontSize: "smaller" }}
            >
              {`Expiring in ${accessTerm} hours`}
            </div>
          </div>
        );
      }
    }
  };

  const renderAction = (actionText, disabled) => (
    <button
      type='button'
      className='btn mx-1'
      style={{ backgroundColor: color, color: "white" }}
      disabled={actionText === "Login" && disabled}
      onClick={() => {
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
  );

  return (
    <div
      className='custom-card d-flex flex-column m-2 p-3'
      style={{ width: "290px", height: "240px" }}
    >
      <div className='d-flex justify-content-between'>
        <Icon />
        {renderLockIcon()}
      </div>
      <div className='d-flex flex-column mt-4'>
        <div
          className={classNames("fw-bold mb-1", {
            "opacity-50": disabled,
          })}
        >
          {name}
        </div>
        <div
          style={{ color: "#979391", fontSize: "smaller" }}
          className={classNames("text-uppercase", { "opacity-50": disabled })}
        >{`Version ${versionName} | ${formatDateWithoutDay(versionDate)}`}</div>
      </div>
      <div className='d-flex justify-content-center mt-auto'>
        {isNonSSO &&
          status !== ACCESS_REQUEST_STATUS.APPROVED &&
          !disabled &&
          renderAction("Request Access", false)}
        {renderAction(actionText, disabled)}
      </div>
    </div>
  );
}