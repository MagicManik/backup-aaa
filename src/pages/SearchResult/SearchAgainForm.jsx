import { addDays, format } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import AutoSuggestion from "../../components/HotelSearchInputs/AutoSuggestion";
import DateRangePicker from "../../components/HotelSearchInputs/DateRangePicker";
import RoomsAndGuest from "../../components/HotelSearchInputs/RoomsAndGuest";
import { useTranslation } from "react-i18next";

const SearchAgainForm = ({
  reFetch,
  setReFetch,
  checkInParam,
  checkOutParam,
  locationParam,
  occupanciesArray,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState("");
  const [rooms, setRooms] = useState([
    {
      adult: 1,
      child: 0,
      child_age: [],
    },
  ]);

  const [date, setDate] = useState([
    {
      startDate: checkInParam ? new Date(checkInParam) : addDays(new Date(), 1),
      endDate: checkOutParam ? new Date(checkOutParam) : addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  // set data in the searchQuery and rooms state
  useEffect(() => {
    setSearchQuery(locationParam);
    setRooms(occupanciesArray);
  }, []);

  // append data in the URLSearchParams and reFetch search result
  const handleURLSearchParams = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      toast.error(<small>Please provide your destination!</small>);
      return;
    } else if (checkInDate === checkOutDate) {
      toast.error(<small>Please select a date range!</small>);
      return;
    }
    const queryParams = new URLSearchParams();
    queryParams.append("location", searchQuery);
    queryParams.append("radius", "2");
    queryParams.append("checkIn", checkInDate);
    queryParams.append("checkOut", checkOutDate);

    const occupancies = rooms;
    // Convert occupancies array to JSON and encode it as a query parameter
    const occupanciesJSON = JSON.stringify(occupancies);
    queryParams.append("occupancies", occupanciesJSON);
    queryParams.append("guest_nationality", "SG");
    // navigate always same page
    navigate(`/search-result?${queryParams.toString()}`);

    setReFetch(!reFetch);
  };

  return (
    <section className="border border-gray-200 py-11">
      <form className="aaa-wrapper flex justify-between lg:flex-row flex-col items-center gap-3 relative xl:z-[100] z-50">
        {/* auto suggestion */}
        <div className="relative lg:w-[26%] w-[100%] z-10">
          <AutoSuggestion
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            imgClass="!top-[9.5px] left-2.5 w-5"
            className="!py-0.5 !pl-9"
          />
        </div>

        {/* react date range picker */}
        <div className="lg:flex-1 w-[100%]">
          <DateRangePicker
            date={date}
            setDate={setDate}
            className="py-[2.45px]"
          />
        </div>

        {/* room and guest input */}
        <div className="relative lg:w-[26%] w-[100%]">
          <RoomsAndGuest
            rooms={rooms}
            setRooms={setRooms}
            className="py-[2.5px]"
            dropdownClass="!top-[96.6%]"
          />
        </div>
        <div className="lg:w-[110px] ml-auto">
          <PrimaryBtn
            onClick={handleURLSearchParams}
            label={t("searchagain")}
            btnBox="bg-green-normal hover:bg-green-dark rounded-md transition-colors duration-300"
            size="!text-[13.5px] !px-[5px] !py-[7.5px] !w-full !font-normal !font-poppins"
          />
        </div>
      </form>
    </section>
  );
};

SearchAgainForm.propTypes = {
  reFetch: PropTypes.bool.isRequired,
  setReFetch: PropTypes.func.isRequired,
  checkInParam: PropTypes.string.isRequired,
  checkOutParam: PropTypes.string.isRequired,
  locationParam: PropTypes.string.isRequired,
  occupanciesArray: PropTypes.array.isRequired,
};

export default SearchAgainForm;
