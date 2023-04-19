import classNames from "classnames";
import React from "react";

const ProfileOptions = ({ logoutAction }) => {
  const [openDropdown, setOpenDropDown] = React.useState(false);
  return (
    <div className={classNames("dropdown", { show: openDropdown })}>
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        style={{ boxShadow: "none" }}
        onClick={() => setOpenDropDown(true)}
      ></button>
      <ul className={classNames("dropdown-menu", { show: openDropdown })}>
        <li>
          <a
            className="dropdown-item"
            onClick={(e) => {
              e.preventDefault();
              setOpenDropDown(false);
              logoutAction();
            }}
            href="true"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileOptions;
