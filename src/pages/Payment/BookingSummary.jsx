import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useState } from "react";
import infoIcon from "../../assets/images/icons/info.svg";
import locationIcon from "../../assets/images/icons/location-white.svg";
import starGoldenIcon from "../../assets/images/icons/star-golden.svg";

const BookingSummary = ({
  price,
  currency,
  room,
  checkInDate,
  checkOutDate,
  facilities,
  rateType,
  occupancies,
  hotelName,
  rating,
  hotelAddress,
  photo,
}) => {
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);

  useEffect(() => {
    const adults = occupancies?.reduce((total, room) => total + room?.adult, 0);
    const children = occupancies?.reduce(
      (total, room) => total + room?.child,
      0
    );

    setTotalAdults(adults);
    setTotalChildren(children);
  }, [occupancies]);

  const ratingNumber = parseInt(rating.slice(0, 1));

  return (
    <div>
      <div className=" border-t border-b px-3 py-3 border rounded-lg mt-6 lg:mt-8 bg-white">
        <div className="bg-green-white rounded-lg mb-4">
          <h1 className="py-3 text-lg font-bold text-center text-green-normal">
            Booking Summary
          </h1>
        </div>

        <article className="rounded-lg font-poppins mb-5 bg-[#f4f4fa]">
          <div className="overflow-hidden rounded-t-lg block w-full">
            <div className="relative">
              <img
                className="w-full h-[380px] object-cover rounded-t-lg hover:scale-110 duration-500 relative brightness-[.6]"
                src={photo}
                onError={(e) => {
                  e.target.src =
                    "https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg";
                  e.target.alt = "Image not found";
                }}
                alt=""
              />
              <div className="absolute top-4 left-5 max-w-[85%] text-white text-xs">
                <h6 className="font-bold text-xl">{hotelName}</h6>
                <div className="flex items-center gap-1 font-medium my-2">
                  {[...Array(ratingNumber || "")].map((_, i) => (
                    <img
                      key={`result${i}`}
                      width={13}
                      src={starGoldenIcon}
                      alt=""
                    />
                  ))}
                  <p className="text-xs leading-3"> ({rating})</p>
                </div>
                <div className="flex items-baseline gap-1.5 my-3 font-medium leading-5">
                  <img width={14} src={locationIcon} alt="" />
                  <span>{hotelAddress}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 pt-5 pb-1">
            <div className="flex justify-between text-gray-600 text-sm leading-3">
              <h6 className="font-semibold">Date</h6>
              <p className="font-medium">
                {checkInDate} to {checkOutDate}
              </p>
            </div>

            <div className="flex justify-between text-gray-600 text-sm leading-3 my-4">
              <h6 className="font-semibold">Room</h6>
              <p className="font-medium">{room}</p>
            </div>

            <div className="flex items-center justify-end gap-4 my-4">
              {facilities.map((facility, i) => (
                <p
                  key={`facility${i}`}
                  className="bg-green-100 text-green-normal text-xs font-medium px-2 py-0.5 rounded"
                >
                  {facility === "" ? rateType : facility}
                </p>
              ))}
            </div>

            <div className="flex justify-between text-gray-600 text-sm leading-3 my-4">
              <h6 className="font-semibold">Occupancy</h6>
              <p className="font-medium">
                {occupancies?.length}{" "}
                {occupancies?.length > 1 ? "rooms," : "room,"} {totalAdults}{" "}
                {totalAdults > 1 ? "adults" : "adult"}
                {totalChildren === 0
                  ? ""
                  : `, ${totalChildren} ${
                      totalChildren === 1 ? "child" : "children"
                    }`}
              </p>
            </div>
            <div className="flex justify-between text-gray-600 text-sm leading-3 my-4">
              <h6 className="font-semibold">Room Fare</h6>
              <img className="font-bold w-4" src={infoIcon} alt="" />
            </div>
          </div>
        </article>

        <div className=" bg-green-100 text-green-normal rounded-lg text-base leading-3">
          <div className="flex justify-between py-4 px-3">
            <h6 className="font-bold">Total Payable</h6>
            <p className="font-medium">
              {price} {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

BookingSummary.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  rateType: PropTypes.string.isRequired,
  occupancies: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.number.isRequired,
      child: PropTypes.number.isRequired,
    })
  ).isRequired,
  hotelName: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  hotelAddress: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default BookingSummary;
