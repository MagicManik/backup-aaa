import PropTypes from "prop-types"; // Add this import for prop-types

const Label = ({ label, htmlFor, className }) => {
  return (
    <label className={`${className}`} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

// Add prop-types validation
Label.propTypes = {
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
