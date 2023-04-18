import EmptyDataIcon from "components/Icons/EmptyDataIcon";
import React from "react";

export default function NoRecordFound({
  description = " There aren't any data yet. Stay tuned!",
}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      <EmptyDataIcon />
      <h6 className="text-muted">{description}</h6>
    </div>
  );
}
