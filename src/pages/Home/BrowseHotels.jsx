import { addDays, format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useHotels from "../../hooks/useHotels";
import BrowseHotel from "./BrowseHotel";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";
import YouTube from "../../components/Loaders/LoaderSkeleton";

const BrowseHotels = () => {
  const { isLoading, hotels } = useHotels();
  const { t } = useTranslation();

  const filteredHotel = hotels?.filter(
    (hotel) => hotel?.property_type === "Hotel"
  );

  const slicedHotels = filteredHotel?.slice(10, 12);

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
  // Convert occupancies array to JSON and encode it as a query parameter
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

  return (
    <section className="aaa-wrapper">
      <div className="lg:grid lg:grid-cols-3 sm:gap-5 xl:gap-8">
        {isLoading ? (
          <>
            {[...Array(2)].map((_, i) => (
              <div key={`browseHotelsSkeleton${i}`} className="rounded-lg mb-16">
                <YouTube />
              </div>
            ))}
          </>
        ) : (
          slicedHotels?.map((hotel, i) => (
            <BrowseHotel
              key={`browsehotel${i}`}
              hotel={hotel}
              location={userCapitalName}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              occupanciesJSON={occupanciesJSON}
            />
          ))
        )}
        {/* 3rd card */}
        <div className="rounded-lg xl:text-right lg:text-right text-center lg:pt-36 pt-0">
          <h2 className="text-4xl font-bold pb-4">{t("browseHotels")}</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit.
          </p>
          <button
            onClick={handleNavigateSearchResult}
            className="bg-green-normal py-5 px-12 my-6 text-white rounded-[.75rem] btn-primary hover:bg-green-dark text-[12.5px] font-medium transition-colors"
          >
            {t("browseHotels")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseHotels;
