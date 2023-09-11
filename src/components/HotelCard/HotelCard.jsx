import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/images/icons/location.svg";
import starIcon from "../../assets/images/icons/star.svg";
import LoveBtn from "../Buttons/LoveBtn";
import YouTube from "../Loaders/LoaderSkeleton";

const HotelCard = ({
  isLoading,
  hotels,
  location,
  checkIn,
  checkOut,
  radius,
  occupancies,
  guestNationality,
}) => {
  const slicedHotel = hotels?.slice(0, 4);
  const occupanciesJSON = JSON.stringify(occupancies);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isLoading ? (
        <>
          {[...Array(4)].map((_, i) => (
            <YouTube key={`resultSkeleton${i}`} />
          ))}
        </>
      ) : (
        slicedHotel?.map((hotel, i) => (
          <article
            key={`result${i}`}
            className="rounded-lg font-poppins mb-10 col-span-1"
          >
            <Link
              to={`/hotel-detail/${encodeURIComponent(
                hotel?.hotel_id
              )}?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&radius=${radius}&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
                }&guest_nationality=${guestNationality}`}
              onClick={scrollToTop}
              className="overflow-hidden rounded-2xl block w-full"
            >
              <div className="relative">
                {console.log(hotel?.tracking_id, "manik xyz")}
                <img
                  className="w-full h-[275px] object-cover rounded-t-lg hover:scale-110 duration-500 relative cursor-pointer"
                  src={hotel.pic}
                  alt=""
                  // handle error image
                  onError={(e) => {
                    e.target.src =
                      "https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg";
                    e.target.alt = "Image not found";
                  }}
                />
                <div className="absolute top-2 right-2">
                  <LoveBtn width={26} height={26} />
                </div>
              </div>
            </Link>
            <div>
              <div className="flex justify-between mt-3">
                <h6 className="uppercase text-sm font-bold text-green-normal leading-3">
                  {hotel.property_type}
                </h6>
                {hotel?.rating && <span className="flex bg-yellow-star items-center gap-1 text-white text-xs font-medium mr-2 px-1.5 py-[2.5px] rounded">
                  {[...Array(parseFloat(Math.ceil(hotel?.rating)))].map(
                    (_, i) => (
                      <img
                        key={`ratingB${i}`}
                        width={13}
                        src={starIcon}
                        alt=""
                      />
                    )
                  )}
                  {/* {hotel?.rating ? hotel?.rating : 0} */}
                </span>}
              </div>
              <div className="flex items-center my-2">
                <a
                  href=""
                  className="bg-green-100 text-green-normal text-xs font-medium mr-2 px-2 py-0.5 rounded "
                >
                  close to metro
                </a>
                <a
                  href=""
                  className="bg-green-100 text-green-normal text-xs font-medium mr-2 px-2 py-0.5 rounded "
                >
                  Great view
                </a>
              </div>
              <Link
                to={`/hotel-detail/${encodeURIComponent(
                  hotel?.hotel_id
                )}?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&radius=${radius}&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
                  }&guest_nationality=${guestNationality}`}
                className="hover:underline"
              >
                <h5 className="mb-2 text-[1.6rem] leading-[2.6rem] font-bold tracking-tight text-gray-900">
                  {hotel.hotel_name} xa
                </h5>
              </Link>
              <p className="flex items-start gap-1.5 pt-1 pb-2">
                <img
                  width={11}
                  height={11}
                  className="pt-1"
                  src={locationIcon}
                  alt=""
                />
                <span className="flex-1">{hotel.address.address_line.slice(0, 25)}{hotel.address.address_line.length > 25 && "..."}</span>
              </p>
              <div>
                <span className=" text-4xl font-bold text-green-normal">
                  {hotel.price.amount} {hotel.price.currency}
                </span>
              </div>
            </div>
          </article>
        ))
      )}
    </>
  );
};

HotelCard.propTypes = {
  isLoading: PropTypes.bool,
  hotels: PropTypes.array,
  currentNavigationUrl: PropTypes.string,
  location: PropTypes.string,
  radius: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  occupancies: PropTypes.array,
  guestNationality: PropTypes.string,
};

export default HotelCard;
