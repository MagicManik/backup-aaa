import PropTypes from "prop-types";
import { useState } from "react";

const DropdownTextInput = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className=" relative">
      <input
        type="text"
        onClick={() => setIsOpen(true)}
        placeholder="Click to open dropdown"
      />
      {isOpen && (
        <ul className=" absolute z-50 bg-white">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownTextInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownTextInput;
