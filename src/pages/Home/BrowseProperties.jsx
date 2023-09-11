import { addDays, format } from "date-fns";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useHotels from "../../hooks/useHotels";
import { useTranslation } from "react-i18next";

const BrowseProperties = () => {
  const { isLoading, hotels } = useHotels();
  const slicedHotels = hotels?.slice(7, 12);
  const { t } = useTranslation();

  const hotelIndex0 = slicedHotels?.[0];
  const hotelIndex1 = slicedHotels?.[1];
  const hotelIndex2 = slicedHotels?.[2];
  const hotelIndex3 = slicedHotels?.[3];
  const hotelIndex4 = slicedHotels?.[4];

  // navigate to result page
  const navigate = useNavigate();
  const userLocation = useCurrentLocation();
  const userCapitalName = userLocation?.capital;

  const rooms = [
    {
      adult: 2,
      child: 0,
      child_age: [],
    },
  ];

  // convert occupancies or room array to JSON stringify
  const occupanciesJSON = JSON.stringify(rooms);

  const [date] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  const handleNavigateSearchResult = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    queryParams.append("location", userCapitalName);
    queryParams.append("radius", "2");
    queryParams.append("checkIn", checkInDate);
    queryParams.append("checkOut", checkOutDate);
    queryParams.append("occupancies", occupanciesJSON);
    queryParams.append("guest_nationality", "SA");

    navigate(`/search-result?${queryParams.toString()}`);
  };

  // navigate to result page

  return (
    <section className="lg:my-20 pt-20 pb-28 aaa-wrapper">
      <div className="grid grid-cols-12 justify-center items-center py-4">
        <div className="lg:col-span-6 col-span-12 lg:mb-7 mb-3">
          <h2 className="text-4xl font-bold pb-3 leading-10 lg:text-left text-center">
            {t("browseByProperty")}
          </h2>
          <p className="lg:text-left text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus...
          </p>
        </div>
        <div className="lg:col-span-6 col-span-12 place-items-center place-self-center lg:mb-0 mb-4 flex lg:justify-end justify-center w-full">
          <button
            onClick={handleNavigateSearchResult}
            className="text-green-normal opacity-[.5] font-bold"
          >
            {t("viewall")}
          </button>
        </div>
      </div>


      <div className="grid grid-cols-12 lg:gap-9 gap-4">
        {/* 1st box */}
        <div className="lg:col-span-3 col-span-12">
          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotelIndex0?.hotel_id
            )}?location=${userCapitalName}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotelIndex0?.tracking_id
              }&guest_nationality=SA`}
            className="section__img has--details text-white relative overflow-hidden rounded-2xl block h-full"
          >
            <img
              className="transition duration-500 w-full rounded-2xl h-full object-cover"
              src={hotelIndex0?.pic}
              alt="Image"
            />
            <div className="absolute z-10 left-6 bottom-6">
              <h4 className="mb-1 font-medium">
                {hotelIndex0?.property_type}
              </h4>
              <h6 className="mb-0 text-xl font-bold">
                {hotelIndex0?.price?.amount} {hotelIndex0?.price?.currency}
              </h6>
            </div>
          </Link>
        </div>

        {/* middle box */}
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-9">
          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotelIndex1?.hotel_id
            )}?location=${userCapitalName}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotelIndex1?.tracking_id
              }&guest_nationality=SA`}
            className="section__img has--details text-white relative overflow-hidden rounded-2xl block"
          >
            <img
              className="transition duration-500 w-full h-[246px] object-cover rounded-2xl"
              src={hotelIndex1?.pic}
              alt="Image"
            />
            <div className="absolute z-10 left-6 bottom-6">
              <h4 className="mb-1 font-medium">
                {hotelIndex1?.property_type}
              </h4>
              <h6 className="mb-0 text-xl font-bold">
                {hotelIndex1?.price?.amount} {hotelIndex1?.price?.currency}
              </h6>
            </div>
          </Link>
          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotelIndex2?.hotel_id
            )}?location=${userCapitalName}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotelIndex2?.tracking_id
              }&guest_nationality=SA`}
            className="section__img has--details text-white relative overflow-hidden rounded-2xl block"
          >
            <img
              className="transition duration-500 w-full h-[246px] object-cover rounded-2xl"
              src={hotelIndex2?.pic}
              alt="Image"
              // handle error image
              onError={(e) => {
                e.target.src =
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg";
                e.target.alt = "Image not found";
              }}
            />
            <div className="absolute z-10 left-6 bottom-6">
              <h4 className="mb-1 font-medium">
                {hotelIndex2?.property_type}
              </h4>
              <h6 className="mb-0 text-xl font-bold">
                {hotelIndex2?.price?.amount} {hotelIndex2?.price?.currency}
              </h6>
            </div>
          </Link>
        </div>

        {/* last box */}
        <div className="lg:col-span-3 col-span-12 flex flex-col gap-9">
          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotelIndex3?.hotel_id
            )}?location=${userCapitalName}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotelIndex3?.tracking_id
              }&guest_nationality=SA`}
            className="section__img has--details text-white relative overflow-hidden rounded-2xl block"
          >
            <img
              className="transition duration-500 w-full rounded-2xl h-[246px] object-cover"
              src={hotelIndex3?.pic}
              alt="Image"
            />
            <div className="absolute z-10 left-6 bottom-6">
              <h4 className="mb-1 font-medium">
                {hotelIndex3?.property_type}
              </h4>
              <h6 className="mb-0 text-xl font-bold">
                {hotelIndex3?.price?.amount} {hotelIndex3?.price?.currency}
              </h6>
            </div>
          </Link>

          <Link
            to={`/hotel-detail/${encodeURIComponent(
              hotelIndex4?.hotel_id
            )}?location=${userCapitalName}&checkIn=${checkInDate}&checkOut=${checkOutDate}&radius=5&occupancies=${occupanciesJSON}&trackingId=${hotelIndex4?.tracking_id
              }&guest_nationality=SA`}
            className="section__img has--details text-white relative overflow-hidden rounded-2xl block"
          >
            <img
              className="transition duration-500 w-full rounded-2xl h-[246px] object-cover"
              src={hotelIndex4?.pic}
              alt="Image"
              // handle error image
              onError={(e) => {
                e.target.src =
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg";
                e.target.alt = "Image not found";
              }}
            />
            <div className="absolute z-10 left-6 bottom-6">
              <h4 className="mb-1 font-medium">HOTELS</h4>
              <h6 className="mb-0 text-xl font-bold">
                {hotelIndex4?.price?.amount} {hotelIndex4?.price?.currency}
              </h6>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default BrowseProperties;
