import PropTypes from "prop-types";

const PaymentInput = ({
  children,
  newClass,
  type,
  name,
  placeholder,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <label className="tracking-normal md:tracking-widest uppercase font-semibold md:font-bold text-[#9ABDA9] text-sm md:text-base block">
        {children}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`font-bold border-solid border-[1px] border-[rgba(14,151,73,0.4)] min-h-[2rem] md:min-h-[2.7rem] bg-[#fafffc] rounded-md block w-full py-1.5 px-[10px] md:px-3 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] placeholder:text-slate-100 outline-none ${newClass}`}
      />
    </>
  );
};

PaymentInput.propTypes = {
  children: PropTypes.node.isRequired,
  newClass: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default PaymentInput;
