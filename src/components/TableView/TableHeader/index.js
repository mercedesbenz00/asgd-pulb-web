import React from "react";

export default function TableHeader({ title, headerActions }) {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h5 style={{ fontWeight: "bolder" }}>{title}</h5>
      {headerActions()}
    </div>
  );
}
