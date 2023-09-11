import PropTypes from "prop-types";
import caretDown from "../../assets/images/icons/caret-down.svg";

const SelectGender = ({ onChange, value, defaultOption, selectName }) => {
  return (
    <select
      style={{
        backgroundImage: `url(${caretDown})`,
        backgroundPosition: "right 12px center",
      }}
      value={value}
      onChange={onChange}
      className="custom-select bg-no-repeat bg-center text-lg font-normal border-solid border-[1px] border-[rgba(14,151,73,0.4)] min-h-[2rem] md:min-h-[2.7rem] bg-[#fafffc] rounded-md block w-full py-1.5 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none"
    >
      <option value="">{defaultOption}</option>
      {selectName?.map((name, i) => (
        <option key={`country-x${i}`}>{name?.name}</option>
      ))}
    </select>
  );
};

// Add prop-types validation
SelectGender.propTypes = {
  selectName: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default SelectGender;
