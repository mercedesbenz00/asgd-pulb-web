import { Fragment } from "react";
import withInputFormValidation from "hoc/withInputFormValidation";
import HelperText from "../HelperText";

function RadioGroup({
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
  isDisabled = false,
  mode = "horizontal",
  color = "#64748B",
  fontWeight = "600",
  ...props
}) {
  const renderOptions = () => {
    return options?.map((option, index) => {
      const elemIndex = id + index;
      const optVal = String(option?.value);
      return (
        <Fragment key={elemIndex}>
          <input
            type="radio"
            className="btn-check"
            name={name}
            id={elemIndex}
            autoComplete="off"
            value={optVal}
            onChange={onChange}
            checked={value === optVal}
          />
          <label
            className="btn btn-outline-primary border-secondary"
            htmlFor={elemIndex}
          >
            {option?.label}
          </label>
        </Fragment>
      );
    });
  };

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
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            {renderOptions()}
          </div>
          <HelperText error={error} helperText={helperText} />
        </div>
      </div>
    </div>
  );
}
export default withInputFormValidation(RadioGroup);
