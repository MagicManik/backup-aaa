import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Results from "./Results";
import SearchAgainForm from "./SearchAgainForm";
import TagsFound from "./TagsFound";

const PreviousSearchResult = () => {
  const [reFetch, setReFetch] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const { total_hotel, data } = searchResult || {};

  // for search functionality this data coming from contact form
  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const locationParam = queryParams.get("location");
  const radiusParam = queryParams.get("radius");
  const checkInParam = queryParams.get("checkIn");
  const checkOutParam = queryParams.get("checkOut");
  const occupanciesParam = queryParams.get("occupancies"); // This will be a JSON string
  // You can parse the JSON string to get the occupancies array
  const occupanciesArray = JSON.parse(occupanciesParam);
  const guestNationalityParam = queryParams.get("guest_nationality");

  console.log(
    locationParam,
    radiusParam,
    checkInParam,
    checkOutParam,
    occupanciesParam,
    occupanciesArray,
    guestNationalityParam
  );

  useEffect(() => {
    const data = JSON.stringify({
      location: locationParam,
      radius: radiusParam,
      checkIn: checkInParam,
      checkOut: checkOutParam,
      occupancies: occupanciesArray,
      guest_nationality: guestNationalityParam,

      // bring from postman api
      // location: "Dubai",
      // radius: "2",
      // checkIn: "2023-09-10",
      // checkOut: "2023-09-11",
      // occupancies: [
      //   {
      //     adult: "2",
      //     child: "1",
      //     child_age: ["5"],
      //   },
      //   {
      //     adult: "1",
      //     child: "1",
      //     child_age: ["7"],
      //   },
      // ],
      // guest_nationality: "SG",
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sandbox-api.myvoiaj.com/hotel/search",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apikey: "26838567395226479",
        secretecode: "3UNhMde4XEfbY6RimCyyJHzXzmEbYQKmxO7J5DIAkZb",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reFetch]);

  const currentNavigationUrl = window.location.href;

  return (
    <main>
      {/* <SearchAgainForm reFetch={reFetch} setReFetch={setReFetch} /> */}
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
            {total_hotel && total_hotel} Results Found
            {/* 1225 Results Found */}
            <TagsFound />
          </div>
        </span>
      </section>
      <div className="aaa-wrapper flex xl:flex-row lg:flex-col gap-9">
        <Results data={data} currentNavigationUrl={currentNavigationUrl} />
      </div>
    </main>
  );
};

export default PreviousSearchResult;
