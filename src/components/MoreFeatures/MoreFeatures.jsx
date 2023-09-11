import PropTypes from "prop-types";

const MoreFeatures = ({ title, img, height, width }) => {
  return (
    <div className="flex items-center gap-5 mt-4 md:mt-5">
      <div className="bg-[#cdecd9] rounded-lg p-4">
        <img src={img} alt="" style={{ height, width }} />
      </div>
      <p className="md:text-base font-bold">{title}</p>
    </div>
  );
};

MoreFeatures.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default MoreFeatures;
