import withInputFormValidation from "hoc/withInputFormValidation";
import React from "react";
import HelperText from "../HelperText";
import { useIntl } from "react-intl";

function Input({
  label,
  value,
  onChange,
  type = "text",
  id,
  wrapperClass,
  InputIcon = null,
  error = false,
  helperText = "",
  placeholder = "",
  isDisabled = false,
  isRequired = false,
  termRef = null,
  defaultValue = "",
  ...props
}) {
  const intl = useIntl();

  return (
    <div className={wrapperClass}>
      {label && (
        <label
          htmlFor={id}
          className={`form-label fw-bold ${isRequired ? "required" : ""}`}
        >
          {label}
        </label>
      )}
      <div className="d-flex align-items-center position-relative">
        <input
          type={type}
          id={id}
          className={`form-control ${!isDisabled ? "bg-white" : ""}`}
          {...props}
          value={value}
          onChange={onChange}
          placeholder={
            typeof placeholder === "object"
              ? intl.formatMessage(placeholder)
              : placeholder
          }
          disabled={isDisabled}
          {...(!!termRef && { ref: termRef, defaultValue })}
        />
        {InputIcon && (
          <div className="position-absolute end-0 mx-3 mb-1">{InputIcon}</div>
        )}
      </div>
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}

export default withInputFormValidation(Input);
