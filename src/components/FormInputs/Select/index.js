import React from "react";
import withInputFormValidation from "hoc/withInputFormValidation";
import HelperText from "../HelperText";

function Select({
  label,
  value,
  onChange,
  id,
  options,
  defaultOption,
  wrapperClass,
  error = false,
  helperText = "",
  isRequired=false,
  ...props
}) {
  const renderOptions = () => {
    return options?.map((option) => {
      return (
        <option
          key={option?.value}
          value={option?.value}
          // selected={value === option.value}
        >
          {option?.label}
        </option>
      );
    });
  };

  return (
    <div className={wrapperClass}>
      <label htmlFor={id} className={`form-label fw-bold ${isRequired ? "required" : ""}`}>
        {label}
      </label>
      <select
        className="form-select bg-white"
        id={id}
        onChange={onChange}
        value={value}
        {...props}
      >
        {defaultOption && <option>{defaultOption}</option>}
        {renderOptions()}
      </select>
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}

export default withInputFormValidation(Select);
