import classNames from "classnames";
import React from "react";

export default function FloatingSidebar({
  open,
  children,
  onClose,
  width = "20rem",
  title = "",
}) {
  return (
    <>
      <div
        className={classNames("container offcanvas offcanvas-start", {
          show: open,
        })}
        style={{ width, marginTop: "64px" }}
        data-bs-backdrop="static"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">{title}</h5>
        </div>
        <div className="offcanvas-body">{children}</div>
      </div>
      {open && (
        <div className="offcanvas-backdrop fade show" onClick={onClose}></div>
      )}
    </>
  );
}
