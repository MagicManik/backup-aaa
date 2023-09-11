import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import HotelSearch from "./HotelSearch";
import RoomsAndGuestInput from "./RoomsAndGuestInput";

export const ContactForm = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // ekhane ekta problem ache
  // console.log("location check:", selectedLocation);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");
  // console.log("date check", checkInDate, checkOutDate);

  const [rooms, setRooms] = useState([
    {
      adult: 1,
      child: 0,
      child_age: [],
    },
  ]);
  // console.log("rooms check", rooms);

  // navigate for build in search functionality
  const navigate = useNavigate();

  const handleApiCall = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    queryParams.append("location", selectedLocation);
    queryParams.append("radius", "2");
    queryParams.append("checkIn", checkInDate);
    queryParams.append("checkOut", checkOutDate);

    const occupancies = rooms;
    // Convert occupancies array to JSON and encode it as a query parameter
    const occupanciesJSON = JSON.stringify(occupancies);
    queryParams.append("occupancies", occupanciesJSON);
    queryParams.append("guest_nationality", "SG");

    navigate(`/search-result?${queryParams.toString()}`);
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setSelectedLocation("");
    setDate([
      {
        startDate: new Date(),
        endDate: new Date(),
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
      <form>
        <HotelSearch
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {/* check in check out input */}
        <DateRangePicker
          date={date}
          setDate={setDate}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
        {/* room and guest input */}
        <RoomsAndGuestInput rooms={rooms} setRooms={setRooms} />
        {/* show result and clear all btn */}
        <div className="pt-12">
          <button
            onClick={handleApiCall}
            className="bg-green-light mr-6 py-4 px-4 text-white rounded-[.75rem] btn-primary duration-300 hover:shadow-none active:opacity-100 hover:opacity-100 focus:opacity-100 hover:bg-green-dark transition-colors text-sm normal-case font-normal"
          >
            Show result
          </button>
          <button onClick={handleClearAll}>Clear all</button>
        </div>
      </form>
    </div>
  );
};
