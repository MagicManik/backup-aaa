import PropTypes from "prop-types"; // Add this import for prop-types

// amar kkhetre value, onChange, placeholder, children kaje lagche
const GuestInput = ({
  value,
  onChange,
  placeholder,
  newClass,
  type,
  readonly,
  required,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        className={`font-bold bg-transparent rounded-md block w-full leading-normal outline-0 focus:outline-none ${newClass}`}
      />
    </>
  );
};

// Add prop-types validation
GuestInput.propTypes = {
  newClass: PropTypes.string, // If newClass is optional, you can remove `.isRequired`
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.string,
  required: PropTypes.string,
};

export default GuestInput;
