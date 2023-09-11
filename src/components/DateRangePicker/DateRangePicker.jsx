import { differenceInDays, format } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import calendarIcon from "../../assets/images/icons/calendar.svg";

const DateRangePicker = ({ date, setDate }) => {
  const [openDate, setOpenDate] = useState(false);

  // Format the date for ui
  const formattedStartDate = format(date[0].startDate, "EEEE, do MMMM");
  const formattedEndDate = format(date[0].endDate, "EEEE, do MMMM");
  // formate date for api calling
  // const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  // const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  // console.log("check in date:", checkInDate);
  // console.log("check out date:", checkOutDate);

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

  return (
    <>
      <div className="flex mt-4 justify-between items-center text-[.75rem] mb-1.5 font-medium px-9">
        <label htmlFor="">Check In</label>
        <label htmlFor="">Check Out</label>
      </div>

      <div className="relative">
        <div
          onClick={() => setOpenDate(!openDate)}
          className={`flex justify-between gap-4 items-center mb-2 border cursor-pointer ${
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
              className="block w-full pl-8 text-gray-900 text-sm leading-8 resize-none outline-none rounded-md cursor-pointer"
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
              className="block w-full pr-8 text-gray-900 text-sm leading-8 resize-none outline-none rounded-md cursor-pointer"
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
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            months={2}
            rangeColors={["#0e9749", "#38ed86", "#38ed86"]}
            className="bg-white absolute top-[97%] w-full z-20 border border-green-focus rounded-b-md shadow-lg"
          />
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
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
};

export default DateRangePicker;
