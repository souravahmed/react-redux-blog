import React from "react";
import Select from "react-select";

const LiveSearchDropDown = ({
  options,
  defaultValue = { label: "Select a user", value: "0" },
  onChange,
  selectedValue,
}) => {
  return (
    <Select
      value={options.filter((option) => option.value === selectedValue)}
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default LiveSearchDropDown;
