import { components } from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";
import Highlighter from "react-highlight-words";
import SearchIcon from "components/Icons/SearchIcon";

const ReactAsyncSelectCustom = ({
  value,
  onChange,
  options,
  isClearable = true,
  placeholder = "Pilih...",
  borderRadius = "0.375rem",
  width = "auto",
}) => {
  function formatOptionLabel({ label }, { inputValue }) {
    return <Highlighter searchWords={[inputValue]} textToHighlight={label} />;
  }

  return (
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions={false}
      loadOptions={options}
      getOptionLabel={(e) => e.name || e.label}
      getOptionValue={(e) => e.id || e.value}
      value={value}
      onChange={onChange}
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
              className="react-datepicker__close-icon"
              onClick={() => onChange(null)}
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
      formatCreateLabel={(userInput) => `Search for "${userInput}"`}
      allowCreateWhileLoading
      createOptionPosition="first"
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default ReactAsyncSelectCustom;
