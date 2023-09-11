import PropTypes from "prop-types"; // Add this import for prop-types

// amar kkhetre value, onChange, placeholder, children kaje lagche
const FormInput = ({
  value,
  onChange,
  placeholder,
  children,
  newClass,
  type,
  readonly,
  required,
}) => {
  return (
    <>
      <label className="tracking-normal md:tracking-widest uppercase font-semibold md:font-bold block mb-2">
        {children}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        className={`font-bold border-solid border-[1px] border-green-rgba min-h-[2rem] md:min-h-[2.7rem] bg-[#fafffc] rounded-md block w-full py-1.5 px-[10px] md:px-3 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-green-focus outline-none ${newClass}`}
      />
    </>
  );
};

// Add prop-types validation
FormInput.propTypes = {
  children: PropTypes.node,
  newClass: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.string,
  required: PropTypes.string,
};

export default FormInput;
