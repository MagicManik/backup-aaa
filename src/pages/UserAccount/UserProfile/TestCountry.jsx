import PropTypes from "prop-types";
import caretDown from "../../assets/images/icons/caret-down.svg";

const FormCountryOptions = ({
  onChange,
  value,
  defaultOption,
  selectName,
  required,
  className,
}) => {
  return (
    <select
      style={{
        backgroundImage: `url(${caretDown})`,
        backgroundPosition: "right 12px center",
      }}
      value={value}
      required={required}
      onChange={onChange}
      className={`custom-select bg-no-repeat bg-center text-lg font-normal border-solid border-[1px] border-transparent bg-[#f7f7f7] rounded block w-full md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none ${className}`}
    >
      <option value="">{defaultOption}</option>
      {selectName?.map((name, i) => (
        <option key={i} value={name.dial_code}>
          {name?.name}
        </option>
      ))}
    </select>
  );
};

// Add prop-types validation
FormCountryOptions.propTypes = {
  children: PropTypes.node,
  selectName: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  required: PropTypes.string,
  className: PropTypes.string,
};

export default FormCountryOptions;
