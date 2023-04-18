import React from "react";
import classNames from "classnames";
const HelperText = ({ error, helperText }) => {
  return (
    <div className={classNames({ "text-danger": error })}>{helperText}</div>
  );
};

export default HelperText;