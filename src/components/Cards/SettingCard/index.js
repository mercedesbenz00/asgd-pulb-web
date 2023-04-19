import React from "react";
import BuisnessGroupIcon from "../../Icons/BuisnessGroupIcon";
import { useHistory } from "react-router-dom";

export default function SettingCard({
  title,
  Icon = BuisnessGroupIcon,
  actionText = "Enter",
  action,
  state,
  color = "#1A395C",
}) {
  let history = useHistory();
  return (
    <div
      className="custom-card d-flex flex-column justify-content-between align-items-center m-2 p-3"
      style={{ width: "300px", height: "240px" }}
    >
      <Icon color={color} />
      <h6 className="fw-bold text-center">{title}</h6>

      <button
        type="button"
        style={{ backgroundColor: color, color: "white" }}
        className="btn btn-primary w-50"
        onClick={(e) => {
          e.preventDefault();
          history.push({
            pathname: action,
            // search: "?query=abc",
            ...(!!state && { state }),
          });
        }}
      >
        {actionText}
      </button>
    </div>
  );
}
