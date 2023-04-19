import ArrowBack from "components/Icons/ArrowBack";
import { HOME_ROUTE } from "modules/home";
import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <Link
      to={HOME_ROUTE}
      style={{ width: "fit-content" }}
      className="text-decoration-none d-flex"
    >
      <div className="d-flex align-items-center">
        <ArrowBack />
        <h6 className="ms-2 mt-2"> Back to Business Platorms</h6>
      </div>
    </Link>
  );
}
