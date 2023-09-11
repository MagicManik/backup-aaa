import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BrowseCountry.css";

const BrowseCountry = ({
  hotel,
  hotelsLength,
  location,
  checkInDate,
  checkOutDate,
  occupanciesJSON,
}) => {
  return (
    <div>
      <Link
        to={`/hotel-detail/${encodeURIComponent(
          hotel?.hotel_id
        )}?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${
          hotel?.tracking_id
        }&guest_nationality=SA`}
        className="section__img has--details text-white relative overflow-hidden rounded-2xl block"
      >
        <img
          className="transition duration-500 w-full h-56 rounded-2xl object-cover"
          src={hotel?.pic}
          alt="Image"
        />
        <div className="section__img-details absolute h-full w-full flex justify-between flex-col p-6">
          <div>
            <h6 className=" font-medium uppercase mb-0">Starting From</h6>
            <h4>
              {hotel?.price?.amount} {hotel?.price?.currency}
            </h4>
          </div>
          <div className="flex items-center">
            <div className="section__img-thumb rounded-[50%] mr-4">
              <img className="rounded-[50%] h-full w-full" src={hotel?.pic} />
            </div>
            <div>
              <h4 className="mb-1">{hotel?.address?.city}</h4>
              <h6 className="mb-0 font-medium">{hotelsLength} HOTELS</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

BrowseCountry.propTypes = {
  hotel: PropTypes.object,
  hotelsLength: PropTypes.number,
  location: PropTypes.string,
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  occupanciesJSON: PropTypes.string,
};

export default BrowseCountry;
