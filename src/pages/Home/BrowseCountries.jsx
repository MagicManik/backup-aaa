import { addDays, format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useHotels from "../../hooks/useHotels";
import BrowseCountry from "./BrowseCountry";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";

const BrowseCountries = () => {
  const { isLoading, hotels } = useHotels();
  const slicedHotels = hotels?.slice(1, 7);
  const { t } = useTranslation();

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
    queryParams.append("radius", "5");
    queryParams.append("checkIn", checkInDate);
    queryParams.append("checkOut", checkOutDate);
    queryParams.append("occupancies", occupanciesJSON);
    queryParams.append("guest_nationality", "SA");

    navigate(`/search-result?${queryParams.toString()}`);
  };

  return (
    <section className="bg-white lg:pt-11 pt-6 overflow-hidden">
      <div className="aaa-wrapper">
        <div className="grid grid-cols-12 justify-center items-center py-4">
          <div className="lg:col-span-6 col-span-12 lg:mb-7 mb-3">
            <h2 className="text-4xl font-bold pb-3 leading-10 lg:text-left text-center">
              {t("browseByCountry")}
            </h2>
            <p className="lg:text-left text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus...
            </p>
          </div>
          <div className="lg:col-span-6 col-span-12 lg:ml-auto mx-auto lg:mx-0 lg:mb-0 mb-4">
            <button
              onClick={handleNavigateSearchResult}
              className="text-green-normal opacity-[.5] font-bold"
            >
              {t("viewall")}
            </button>
          </div>
        </div>

        {/* images container */}
        <div className="flex flex-nowrap bc-img-container">
          {/* image card 1 */}
          {isLoading ? (

            <>
              {[...Array(6)].map((_, i) => (
                <div key={`browse-country-${i}`} className="transition duration-500 w-full h-56 object-cover rounded-3xl overflow-hidden">
                  <Skeleton variant="rounded" className="!h-full !w-full !rounded-3xl" />
                </div>
              ))}
            </>

          ) : (
            slicedHotels?.map((hotel, i) => (
              <BrowseCountry
                key={`hotel${i}`}
                hotel={hotel}
                hotelsLength={hotels?.length}
                // new
                location={userCapitalName}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                occupanciesJSON={occupanciesJSON}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseCountries;
