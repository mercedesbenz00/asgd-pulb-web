import Select, { components } from "react-select";
import withInputFormValidation from "hoc/withInputFormValidation";
import HelperText from "../HelperText";
import { useField } from "formik";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";

const ReactSelect = ({
  value,
  onChange,
  options,
  isDisabled = false,
  isValid = true,
  isSearchable = true,
  isClearable = false,
  isLoading = false,
  isMulti = false,
  width = "auto",
  placeholder = "Pilih...",
  borderRadius = "0.5rem",
  widthMultiValue = "auto",
  isOptionDisabled = false,
  maxLimit = undefined,
  id,
  label,
  wrapperClass,
  error = false,
  helperText = "",
  isVisible = true,
  isRequired = false,
  ...props
}) => {
  const [field, meta, { setValue, setTouched }] = useField(props);

  const onChangeSingle = ({ value }) => {
    setValue(value);
  };

  const onChangeMulti = (value) => {
    setValue(value);
  };

  const valueSingle =
    !!value && value !== undefined
      ? options?.find((c) => c.value === value)
      : options?.find((c) => c.value === field?.value) || null;

  const valueMulti = !!value && value !== undefined ? value : null;

  if (!isVisible) return <></>;

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <Select
        value={!isMulti ? valueSingle : valueMulti}
        onChange={!isMulti ? onChangeSingle : onChangeMulti}
        onBlur={setTouched}
        options={options}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isValid={isValid}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isMulti={isMulti}
        placeholder={placeholder}
        className="mySelect"
        classNamePrefix="mySelect"
        myBorderRadius={borderRadius}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          multiValue: (base) => ({ ...base, width: widthMultiValue }),
        }}
        menuPortalTarget={document.body}
        myWidth={width}
        isOptionDisabled={(option) =>
          !!isOptionDisabled && !!maxLimit && maxLimit !== undefined
            ? value.length >= maxLimit
            : false
        }
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: (props) => {
            return (
              <components.DropdownIndicator {...props}>
                <ArrowDownIcon width="20" height="20" />
              </components.DropdownIndicator>
            );
          },
          ClearIndicator: () => {
            return (
              <div
                className="react-datepicker__close-icon"
                onClick={() => setValue(null)}
              ></div>
            );
          },
        }}
      />
      {meta.touched && meta.error ? (
        <HelperText error={meta.error} helperText={helperText} />
      ) : null}
    </div>
  );
};

export default withInputFormValidation(ReactSelect);
