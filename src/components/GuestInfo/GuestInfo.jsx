import PropTypes from "prop-types";

const GuestInfo = ({ title, info }) => {
  return (
    <>
      <h5 className="tracking-widest uppercase text-[#9ABDA9] font-bold mb-1">
        {title}
      </h5>
      <h3 className="text-[#1C1C1C] text-xl lg:text-2xl font-bold">{info}</h3>
    </>
  );
};

GuestInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default GuestInfo;
