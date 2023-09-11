import PropTypes from "prop-types";

const FilterTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between mx-3.5 my-3">
      <h5 className="font-bold text-gray-900">{title}</h5>
      <button className="text-sm text-gray-light font-medium">clear all</button>
    </div>
  );
};

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FilterTitle;
