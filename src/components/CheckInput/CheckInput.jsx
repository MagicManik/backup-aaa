import PropTypes from "prop-types";

const CheckInput = ({ id, value, onChange }) => {
  return (
    <>
      <label
        className="relative flex cursor-pointer items-center rounded-full py-1 px-3"
        htmlFor="ripple-off"
      >
        <input
          value={value}
          onChange={onChange}
          id={id}
          type="checkbox"
          className="before:content[''] peer aaa-input rounded checked:border-transparent checked:bg-green-normal h-[17px] w-[17px]"
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
    </>
  );
};

CheckInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckInput;
