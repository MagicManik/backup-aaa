import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/images/icons/location.svg";
import starIcon from "../../assets/images/icons/star.svg";
import noResultImg from "../../assets/images/no-result.jpg";
import LoveBtn from "../../components/Buttons/LoveBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import YouTube from "../../components/Loaders/LoaderSkeleton";
import SideBar from "../../components/SideBar/SideBar";

const Results = ({
  isLoading,
  hotels,
  location,
  checkIn,
  checkOut,
  radius,
  occupancies,
  guestNationality,
}) => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);

  const occupanciesJSON = JSON.stringify(occupancies);

  // Filtering logic
  const filteredProducts = hotels?.filter((product) => {
    const ratingMatch =
      selectedRatings.length === 0 ||
      selectedRatings.includes(Math.floor(product.rating));

    const priceMatch =
      product.price.amount >= priceRange[0] &&
      product.price.amount <= priceRange[1];

    return ratingMatch && priceMatch;
  });
  // Filtering logic closed

  // sidebar functionalities
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // sidebar functionalities closed

  return (
    <>
      <SideBar
        isOpen={isOpen}
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      {isLoading ? (
        <div className="flex-1 overflow-hidden">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {[...Array(12)].map((_, i) => (
              <YouTube key={`resultSkeleton${i}`} />
            ))}
          </div>
        </div>
      ) : (
        <section className="flex-1 overflow-hidden">
          <PrimaryBtn
            onClick={toggleMenu}
            label="Filters"
            btnBox="bg-green-normal hover:bg-green-dark transition-all w-[100px] xl:hidden ml-auto mb-8 rounded"
            size="!text-[12px] !w-full !py-3"
          />
          {!filteredProducts?.length && (
            <div className="relative py-6">
              <img
                className="mx-auto lg:w-2/4 w-full"
                src={noResultImg}
                alt="no-result-image"
              ></img>
              <p className="text-xl text-gray-400 text-center absolute lg:bottom-4 bottom-0 left-0 right-0">
                Search result not found!
              </p>
            </div>
          )}
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {filteredProducts?.map((hotel, i) => (
              <article
                key={`result${i}`}
                className="rounded-lg font-poppins mb-10 col-span-1"
              >
                <Link
                  to={`/hotel-detail/${encodeURIComponent(
                    hotel?.hotel_id
                  )}?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&radius=${radius}&occupancies=${occupanciesJSON}&trackingId=${hotel?.tracking_id
                    }&guest_nationality=${guestNationality}`}
                  className="overflow-hidden rounded-2xl block w-full"
                >
                  <div className="relative">
                    {console.log(hotel.tracking_id, "zyz amena")}
                    <img
                      className="w-full h-[267px] object-cover rounded-t-lg hover:scale-110 duration-500 relative cursor-pointer"
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
                      {hotel.hotel_name}
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
                    {/* <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-100 text-[#FF1129] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                        50% OFF
                      </span>
                      <span className="text-green-dark opacity-50 font-bold text-lg">
                        2500 SAR
                      </span>
                    </div> */}
                    <span className=" text-4xl font-bold text-green-normal">
                      {hotel.price.amount} {hotel.price.currency}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* sidebar overly for outside click */}
          {isOpen && (
            <div
              className="fixed sidebar-overly top-0 left-0 w-screen h-screen bg-black opacity-25 z-[80]"
              onClick={toggleMenu}
            />
          )}
        </section>
      )}
    </>
  );
};

Results.propTypes = {
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

export default Results;
