import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHotelRQ } from "../../requests/useHotelRQ";
import Results from "./Results";
import SearchAgainForm from "./SearchAgainForm";
import TagsFound from "./TagsFound";
import { useTranslation } from "react-i18next";

const NewSearchResult = () => {
  // load hotels
  const { isLoading, isError, mutate, data } = useHotelRQ("/search");
  const hotels = data?.data;
  const { t } = useTranslation();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationParam = queryParams.get("location");
  const radiusParam = queryParams.get("radius");
  const checkInParam = queryParams.get("checkIn");
  const checkOutParam = queryParams.get("checkOut");
  const guestNationalityParam = queryParams.get("guest_nationality");
  // convert occupancies as array
  const occupanciesParam = queryParams.get("occupancies");
  const occupanciesArray = JSON.parse(occupanciesParam);
  // custom reFetch
  const [reFetch, setReFetch] = useState(false);

  console.log(checkInParam, "check in params");
  console.log(checkOutParam, "checkout params");

  const fetchData = () => {
    mutate({
      location: locationParam,
      radius: radiusParam,
      checkIn: checkInParam,
      checkOut: checkOutParam,
      occupancies: occupanciesArray,
      guest_nationality: guestNationalityParam,
    });
  };

  useEffect(() => {
    fetchData();
  }, [reFetch]);

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="mx-auto text-center">
          <p className="text-red-600 text-2xl mb-6">
            Oops! Something is wrong. Please try again!
          </p>
          <Link
            to="/"
            className="px-12 bg-green-normal hover:bg-green-dark text-white font-semibold py-3"
          >
            GO BACK HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <SearchAgainForm
        reFetch={reFetch}
        setReFetch={setReFetch}
        checkInParam={checkInParam}
        checkOutParam={checkOutParam}
        locationParam={locationParam}
        occupanciesArray={occupanciesArray}
      />
      <section className="flex xl:flex-row lg:flex-row flex-col xl:items-center lg:items-start my-8 font-poppins aaa-wrapper">
        <span className="text-sm font-medium xl:pb-0 lg:pb-0 pb-4 mr-6 whitespace-nowrap">
          <div className="flex items-center flex-wrap gap-2">
            {hotels?.length} {t("resultsFound")}
            <TagsFound />
          </div>
        </span>
      </section>
      <section className="aaa-wrapper flex xl:flex-row lg:flex-col gap-9">
        <Results
          isLoading={isLoading}
          hotels={hotels}
          location={locationParam}
          radius={radiusParam}
          checkIn={checkInParam}
          checkOut={checkOutParam}
          occupancies={occupanciesArray}
          guestNationality={guestNationalityParam}
        />
      </section>
    </main>
  );
};

export default NewSearchResult;
