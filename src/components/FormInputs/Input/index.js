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
  onClickIcon = () => {},
  error = false,
  helperText = "",
  placeholder = "",
  isDisabled = false,
  isRequired = false,
  termRef = null,
  defaultValue = "",
  mode = "horizontal",
  color = "#64748B",
  fontWeight = "600",
  ...props
}) {
  const intl = useIntl();

  return (
    <div className={wrapperClass}>
      <div className="row no-gutters">
        <div className={`${mode === "vertical" ? "col-12" : "col-4"}`}>
          {label && (
            <label
              htmlFor={id}
              className={`form-label ${isRequired ? "required" : ""}`}
              style={{
                color,
                fontWeight,
              }}
            >
              {label}
            </label>
          )}
        </div>
        <div className={`${mode === "vertical" ? "col-12" : "col-8"}`}>
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
              <div
                className="position-absolute end-0 mx-3 mb-1"
                onClick={onClickIcon}
              >
                {InputIcon}
              </div>
            )}
          </div>
          <HelperText error={error} helperText={helperText} />
        </div>
      </div>
    </div>
  );
}

export default withInputFormValidation(Input);
