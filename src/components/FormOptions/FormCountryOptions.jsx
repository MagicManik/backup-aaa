import PropTypes from "prop-types";
import caretDown from "../../assets/images/icons/caret-down.svg";

const FormCountryOptions = ({
  onChange,
  required,
  countryInfoData,
  className,
}) => {
  return (
    <select
      onChange={onChange}
      style={{
        backgroundImage: `url(${caretDown})`,
        backgroundPosition: "right 12px center",
      }}
      required={required}
      className={`custom-select bg-no-repeat bg-center text-lg font-normal border-solid border-[1px] border-transparent bg-[#f7f7f7] rounded block w-full md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none ${className}`}
    >
      <option value="">Select Country</option>
      {countryInfoData?.map((name, i) => (
        <option key={i} value={name.dial_code}>
          {name?.name}
        </option>
      ))}
    </select>
  );
};

// Add prop-types validation
FormCountryOptions.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.string,
  className: PropTypes.string,
  countryInfoData: PropTypes.array.isRequired,
};

export default FormCountryOptions;
