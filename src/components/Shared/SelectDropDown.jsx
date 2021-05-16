import React from "react";
import PropTypes from "prop-types";

const SelectDropDown = ({
  handleOnSelect,
  options,
  defaultOptionText = "Select user",
  defaultOptionValue = 0,
  selectedValue,
}) => {
  return (
    <select
      className="form-select"
      onChange={handleOnSelect}
      value={selectedValue}
    >
      <option value={defaultOptionValue}>{defaultOptionText}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;

SelectDropDown.propTypes = {
  handleOnSelect: PropTypes.func.isRequired,
  defaultOptionText: PropTypes.string,
  defaultOptionValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
