import { React } from "react";
import Select from "react-select";

const LiveSearchDropDown = ({ options, selectedValue, onChange }) => {
  return (
    <Select
      value={options?.filter((option) => option.value === selectedValue)}
      options={options}
      onChange={onChange}
    />
  );
};
export default LiveSearchDropDown;
