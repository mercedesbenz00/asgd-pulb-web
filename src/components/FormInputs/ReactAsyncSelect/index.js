import withInputFormValidation from "hoc/withInputFormValidation";
import HelperText from "../HelperText";
import { useField } from "formik";

import { components } from "react-select";
import AsyncSelect from "react-select/async";
import SearchIcon from "components/Icons/SearchIcon";

const ReactAsyncSelect = ({
  value,
  onChange = () => {},
  options,
  isClearable = true,
  placeholder = "Pilih...",
  borderRadius = "0.375rem",
  width = "auto",
  id,
  label,
  wrapperClass,
  error = false,
  helperText = "",
  isVisible = true,
  isRequired = false,
  withForm = true,
  ...props
}) => {
  const [field, meta, { setValue, setTouched }] = useField(props);

  if (!isVisible) return <></>;

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>

      <AsyncSelect
        cacheOptions
        defaultOptions={false}
        value={field?.value}
        getOptionLabel={(e) => e.name}
        escapeClearsValue={true}
        getOptionValue={(e) => e.id}
        loadOptions={options}
        onChange={(val) => {
          setValue(val);
          onChange(val);
        }}
        onBlur={setTouched}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: (props) => {
            return (
              <components.DropdownIndicator {...props}>
                <SearchIcon width="20" height="20" />
              </components.DropdownIndicator>
            );
          },
          ClearIndicator: () => {
            return (
              <div
                className="react--datepicker__closeicon"
                onClick={() => {
                  setValue(null);
                  onChange("");
                }}
              ></div>
            );
          },
        }}
        placeholder={placeholder}
        styles={{
          control: (styles) => ({
            ...styles,
            borderRadius,
            width,
          }),
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        isClearable={isClearable}
      />

      {meta.touched && meta.error ? (
        <HelperText error={meta.error} helperText={helperText} />
      ) : null}
    </div>
  );
};

export default withInputFormValidation(ReactAsyncSelect);
