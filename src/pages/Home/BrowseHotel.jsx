import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrowRightIcon from "../../assets/images/icons/arrow-right-green.svg";
import bedIcon from "../../assets/images/icons/bed.svg";
import locationIcon from "../../assets/images/icons/location.svg";
import planIcon from "../../assets/images/icons/plan.svg";
import starIcon from "../../assets/images/icons/star.svg";

const BrowseHotel = ({
  hotel,
  location,
  checkInDate,
  checkOutDate,
  occupanciesJSON,
}) => {
  return (
    <article className="rounded-lg mb-16">
      <Link
        to={`/hotel-detail/${encodeURIComponent(
          hotel?.hotel_id
        )}?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
          }&guest_nationality=SA`}
        className="overflow-hidden rounded-2xl block"
      >
        <img
          className="rounded-t-lg hover:scale-110 duration-500 w-full h-[402px] object-cover"
          src={hotel?.pic}
          alt=""
        />
      </Link>
      <div>
        <div className="flex justify-between my-3.5">
          <h6 className="uppercase text-base font-bold text-green-normal leading-4">
            {hotel?.property_type}
          </h6>
          <span className="flex bg-yellow-star items-center gap-1 text-white text-xs font-medium mr-2 px-2 py-[2.5px] rounded">
            <img width={13} src={starIcon} alt="" />
            {hotel?.rating === "" ? "0" : hotel?.rating}
          </span>
        </div>
        <Link
          to={`/hotel-detail/${encodeURIComponent(
            hotel?.hotel_id
          )}?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
            }&guest_nationality=SA`}
          className="hover:underline"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {hotel?.hotel_name}
          </h5>
        </Link>
        <p className="flex items-center gap-1.5 py-2">
          <img width={11} src={locationIcon} alt="" />
          {hotel.address.address_line}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus...
        </p>
        <div className="flex items-center gap-10 py-5">
          <div className="flex items-center gap-4">
            <img width={26} src={bedIcon} alt="" />
            <span className="text-green-dark opacity-50 font-medium text-xl">
              2
            </span>
          </div>
          <div className="flex items-center gap-4">
            <img width={26} src={planIcon} alt="" />
            <span className="text-green-dark opacity-50 font-medium text-xl">
              250m<sup>3</sup>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {/* <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-100 text-[#FF1129] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                50% OFF
              </span>
              <span className="text-green-dark opacity-50 font-bold text-xl">
                2500 SAR
              </span>
            </div> */}
            <span className="text-3xl font-bold text-green-normal">
              {hotel?.price?.amount} {hotel?.price?.currency}
            </span>
          </div>
          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotel?.hotel_id
            )}?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
              }&guest_nationality=SA`}
          >
            <img
              className="opacity-50 hover:opacity-100 transition duration-700 mr-16"
              width={18}
              src={arrowRightIcon}
              alt=""
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

BrowseHotel.propTypes = {
  hotel: PropTypes.object,
  location: PropTypes.string,
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  occupanciesJSON: PropTypes.string,
};

export default BrowseHotel;
