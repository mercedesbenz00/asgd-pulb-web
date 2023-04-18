import withInputFormValidation from "hoc/withInputFormValidation";
import React from "react";
import HelperText from "../HelperText";

function Radio({
  label,
  value,
  onChange,
  id,
  options,
  wrapperClass,
  name,
  error = false,
  helperText = "",
  isRequired = false,
  ...props
}) {
  const renderOptions = () => {
    return options?.map((option, index) => {
      const elemIndex = id + index;
      return (
        <div className="form-check form-check-inline w-100" key={elemIndex}>
          <input
            className="form-check-input"
            type="radio"
            id={elemIndex}
            value={String(option?.value)}
            onChange={onChange}
            checked={value === String(option?.value)}
            name={name}
          />
          <label className="form-check-label" htmlFor={elemIndex}>
            {option?.label}
          </label>
        </div>
      );
    });
  };

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <div className="d-flex justify-content-between">{renderOptions()}</div>
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}
export default withInputFormValidation(Radio);
