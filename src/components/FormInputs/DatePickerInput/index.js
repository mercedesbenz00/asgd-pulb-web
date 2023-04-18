import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalenderIcon from "../../Icons/CalenderIcon";
import withInputFormValidation from "hoc/withInputFormValidation";
import HelperText from "../HelperText";

function DatePickerInput({
  label,
  value,
  onChange,
  type = "text",
  id,
  wrapperClass,
  placeholder,
  minDate = new Date(),
  selectsRange = false,
  isDisabled = false,
  isRequired = false,
  dateFormat = "MM/dd/yyyy",
  showMonthYearPicker = false,
  showTimeSelect = false,
  showTimeInput = false,
  isClearable = true,
  error = false,
  helperText = "",
  ...props
}) {
  const getSelectedValue = () => {
    if (selectsRange) {
      const [startDate, endDate] = value;
      return {
        startDate: startDate,
        endDate: endDate,
      };
    }
    return {
      selected: value,
    };
  };

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <div className="d-flex align-items-center position-relative">
        <DatePicker
          selectsRange={selectsRange}
          onChange={(date, e) => {
            onChange(e, date);
          }}
          className={`form-control ${!isDisabled ? "bg-white" : ""}`}
          minDate={minDate}
          placeholderText={placeholder}
          {...getSelectedValue()}
          isClearable={!!value && !!isClearable}
          dateFormat={dateFormat}
          showMonthYearPicker={showMonthYearPicker}
          showTimeSelect={showTimeSelect}
          showTimeInput={showTimeInput}
          disabled={isDisabled}
        />
        <div className="position-absolute end-0 mx-3 mb-1">
          <CalenderIcon />
        </div>
      </div>
      <HelperText error={error} helperText={helperText} />
    </div>
  );
}
export default withInputFormValidation(DatePickerInput);
