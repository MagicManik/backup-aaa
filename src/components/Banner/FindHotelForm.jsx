import { addDays, format } from "date-fns";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import AutoSuggestion from "../HotelSearchInputs/AutoSuggestion";
import DateRangePicker from "../HotelSearchInputs/DateRangePicker";
import RoomsAndGuest from "../HotelSearchInputs/RoomsAndGuest";
import Label from "../Label/Label";

const FindHotelForm = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const [date, setDate] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  // formated check in and check out date
  const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  const [rooms, setRooms] = useState([
    {
      adult: 1,
      child: 0,
      child_age: [],
    },
  ]);
  // convert rooms array to JSON and then append it on the URLSearchParams
  const occupanciesJSON = JSON.stringify(rooms);

  // navigate to the search result page with some input data
  const handleNavigateSearchResult = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      toast.error(<small>Please provide your destination!</small>);
      return;
    }
    const queryParams = new URLSearchParams();
    queryParams.append("location", searchQuery);
    queryParams.append("radius", "5");
    queryParams.append("checkIn", checkInDate);
    queryParams.append("checkOut", checkOutDate);
    queryParams.append("occupancies", occupanciesJSON);
    queryParams.append("guest_nationality", "SA");

    navigate(`/search-result?${queryParams.toString()}`);
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setDate([
      {
        startDate: addDays(new Date(), 1),
        endDate: addDays(new Date(), 2),
        key: "selection",
      },
    ]);
    setRooms([
      {
        adult: 1,
        child: 0,
        child_age: [],
      },
    ]);
  };

  return (
    <div className="border border-green-normal rounded-xl lg:p-7 p-4">
      <div>
        {/* auto suggestion */}
        <div className="relative pb-6 z-40">
          <AutoSuggestion
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            // selectedLocation={selectedLocation}
            // setSelectedLocation={setSelectedLocation}
          />
        </div>
        {/* react data range picker */}
        <div className="flex mt-4 justify-between items-center text-[.75rem] mb-1.5 font-medium px-9">
          <Label label={t("CheckIn")} htmlFor="checkIn" />
          <Label label={t("CheckOut")} htmlFor="checkOut" />
        </div>
        <DateRangePicker
          date={date}
          setDate={setDate}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
        {/* room and guest input */}
        <div className="pt-10 relative ">
          <label className="text-[.75rem] mb-2 block font-medium" htmlFor="">
            {t("RoomsandGuest")}
          </label>
          <RoomsAndGuest rooms={rooms} setRooms={setRooms} />
        </div>
        {/* show result and clear all btn */}
        <div className="pt-12 flex gap-7">
          <PrimaryBtn
            onClick={handleNavigateSearchResult}
            label={t("Showresult")}
            btnBox="bg-green-light hover:bg-green-dark rounded-[.75rem] transition-colors duration-300"
            size="!text-sm !py-4 !px-[14px] !font-normal !font-poppins"
          />
          <button onClick={handleClearAll}>{t("Clearall")}</button>
        </div>
      </div>
    </div>
  );
};

export default FindHotelForm;
