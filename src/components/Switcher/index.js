/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import ExpandMore from "components/Icons/ExpandMore";
import React from "react";

const Switcher = ({ onSelect, list, color = "#00854F" }) => {
  const [openDropdown, setOpenDropDown] = React.useState(false);

  return (
    <div className={classNames("dropdown", { show: openDropdown })}>
      <button
        className="btn btn-link p-0"
        type="button"
        style={{ boxShadow: "none" }}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => setOpenDropDown(true)}
      >
        <ExpandMore color={color} />
      </button>
      <ul
        className={classNames("dropdown-menu dropdown-menu-end shadow", {
          show: openDropdown,
        })}
      >
        {list?.map(({ label, value }) => {
          return (
            <li key={value}>
              <a
                className="dropdown-item py-2"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpenDropDown(false);
                  onSelect(value);
                }}
   
              >
                <div style={{ textAlign: "right" }}>{label}</div>
              </a>
            </li>
          );
        })}
        {}
      </ul>
    </div>
  );
};

export default Switcher;
