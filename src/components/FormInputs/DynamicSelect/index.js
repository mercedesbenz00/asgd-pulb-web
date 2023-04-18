import React from "react";

import CreatableSelect from "react-select/creatable";
import HelperText from "../HelperText";
const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default function DynamicSelect({
  values = [],
  onChange,
  id,
  label,
  wrapperClass = "",
  isRequired = false,
  isClearable = true,
  isMulti = true,
  error = "",
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState(values);

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => {
          const newValue = [...prev, createOption(inputValue)];
          onChange(newValue);
          return newValue;
        });

        setInputValue("");
        event.preventDefault();
        break;
      default:
        console.log("Case not handled");
    }
  };

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={id}
        className={`form-label fw-bold ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable={isClearable}
        isMulti={isMulti}
        menuIsOpen={false}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder={label}
        value={value}
      />
      {error ? <HelperText error={!!error} helperText={error} /> : null}
    </div>
  );
}
