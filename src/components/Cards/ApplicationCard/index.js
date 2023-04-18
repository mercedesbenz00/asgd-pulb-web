import React from "react";
export default function ApplicationCard({
  title,
  Icon = "",
  actionText = "Enter",
  action,
  color = "#00854F",
}) {
  return (
    <div
      className='custom-card d-flex flex-column justify-content-between align-items-center m-2 p-3'
      style={{ width: "280px", height: "250px" }}
    >
      <img src={Icon} alt={title} className='img-fluid mt-2' />
      <h6 className='fw-bold'>{title}</h6>
      <button
        type='button'
        className='btn w-50'
        style={{ backgroundColor: color, color: "white" }}
        onClick={(e) => {
          e.preventDefault();
          action();
        }}
      >
        {actionText}
      </button>
    </div>
  );
}
