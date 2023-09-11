import { differenceInDays, format } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import calendarIcon from "../../assets/images/icons/calendar.svg";

const DateRangePicker = ({ date, setDate, className }) => {
  // console.log(date, setDate, "is date and set date available");
  const [openDate, setOpenDate] = useState(false);
  const datePickerRef = useRef(null);
  const inputRef = useRef(null);

  // Format the date for ui
  const formattedStartDate = format(date[0].startDate, "EEEE, do MMMM");
  const formattedEndDate = format(date[0].endDate, "EEEE, do MMMM");
  // formate date for api calling
  // const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  // const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  // night count
  const getTotalNights = () => {
    const nights = differenceInDays(date[0].endDate, date[0].startDate);
    return nights >= 2 ? `${nights} nights` : `${nights} night`;
  };

  useEffect(() => {
    if (formattedStartDate !== formattedEndDate) {
      setOpenDate(false);
    }
  }, [formattedStartDate, formattedEndDate]);

  // when click outside of the react date range picker it will be automatic hidden
  useEffect(() => {
    // Function to handle clicks outside of the component
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setOpenDate(false);
      }
    };
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          ref={inputRef}
          onClick={() => setOpenDate(!openDate)}
          className={`flex justify-between gap-4 items-center border cursor-pointer ${
            openDate
              ? "border-green-focus rounded-t-md"
              : "border-green-rgba rounded-md"
          }`}
        >
          <div className="relative cursor-pointer">
            <div className="absolute bottom-0 top-0 left-0 flex items-center pl-2 pointer-events-none cursor-pointer">
              <img
                className="w-[17.3px] cursor-pointer"
                src={calendarIcon}
                alt=""
              />
            </div>
            <input
              type="search"
              id="search"
              className={`block w-full pl-8 text-gray-900 text-sm leading-8 resize-none outline-none rounded-md cursor-pointer ${className}`}
              value={`${formattedStartDate}`}
              readOnly
            />
          </div>

          <label className=" text-[.75rem] text-gray-600 font-bold whitespace-nowrap cursor-pointer leading-8">
            {getTotalNights()}
          </label>

          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full pr-9 text-gray-900 text-sm leading-8 resize-none outline-none rounded-md cursor-pointer text-right"
              value={`${formattedEndDate}`}
              readOnly
            />
            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none cursor-pointer">
              <img
                className="w-3 opacity-[.5] cursor-pointer"
                src={arrowIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* react date range picker */}
        {openDate && (
          <div ref={datePickerRef}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              months={2}
              rangeColors={["#0e9749", "#38ed86", "#38ed86"]}
              className="bg-white absolute top-[97%] w-full z-20 border border-green-focus rounded-b-md shadow-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

DateRangePicker.propTypes = {
  date: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      key: PropTypes.string,
    })
  ).isRequired,
  setDate: PropTypes.func.isRequired,
  // checkInDate: PropTypes.string.isRequired,
  // checkOutDate: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DateRangePicker;
