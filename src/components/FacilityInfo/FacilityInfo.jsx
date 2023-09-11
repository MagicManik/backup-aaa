import PropTypes from "prop-types";

const FacilityInfo = ({ title, img, height, width }) => {
  return (
    <div className="flex flex-col items-center py-2.5">
      <img className="mb-3" src={img} alt="" style={{ height, width }} />
      <h3 className="text-base md:text-sm lg:text-base font-semibold">
        {title}
      </h3>
    </div>
  );
};

FacilityInfo.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  px: PropTypes.string,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default FacilityInfo;
