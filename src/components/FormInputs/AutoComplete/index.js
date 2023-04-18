import React from "react";
import AsyncSelect from "react-select/async";

export default function AutoComplete({
  label,
  value,
  onChange,
  id,
  loadOptions,
  wrapperClass,
  isMulti = false,
  placeholder = "",
  ...props
}) {
  return (
    <div className={wrapperClass}>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        className={"autocomplete"}
        placeholder={placeholder}
        onChange={(data)=>{
          onChange(data)
        }}
        isClearable={true}
        escapeClearsValue={true}
        value={value}
      />
    </div>
  );
}
