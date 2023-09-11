import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import calendarIcon from "../../assets/images/icons/calendar.svg";
import locationIcon from "../../assets/images/icons/location.svg";
import minusIcon from "../../assets/images/icons/minus-square.svg";
import plusIcon from "../../assets/images/icons/plus-square.svg";

const SearchInputs = () => {
  const [checkIn, setCheckIn] = useState({
    startDate: null,
  });

  const [checkOut, setCheckOut] = useState({
    startDate: null,
  });

  return (
    <>
      <div className="xl:columns-6 lg:columns-3 columns-1 xl:gap-2 lg:gap-4 justify-between items-center">
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            City
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <img className="w-[8px]" src={locationIcon} alt="" />
            </div>
            <select
              type="search"
              id="search"
              className="appearance-none bg-white block w-full py-1 pl-8 pr-[1.6rem] text-sm resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pl-2 pointer-events-none">
              <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
            </div>
          </div>
        </div>
        {/* new check in input */}
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Check in
          </label>
          <div>
            <div className="relative">
              <img
                className="w-[17.3px] absolute -bottom-6 left-2 z-30"
                src={calendarIcon}
                alt=""
              />
            </div>
            <Datepicker
              useRange={false}
              asSingle={true}
              value={checkIn}
              onChange={(value) => setCheckIn(value)}
              primaryColor={"emerald"}
              inputClassName="outline-none bg-white text-gray-900 text-center text-sm border border-green-normal focus:border-green-focus w-full py-1 pl-7 pr-6 rounded-md font-medium"
              containerClassName="text-sm tailwind-custom-date-picker"
              toggleClassName="hidden"
            />

            <div className="relative inset-y-0 right-2 flex items-center pl-2 pointer-events-none">
              <img
                className="w-3 absolute right-0 bottom-2.5 opacity-[.5]"
                src={arrowIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* new check out input */}
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Check in
          </label>
          <div>
            <div className="relative">
              <img
                className="w-[17.3px] absolute -bottom-6 left-2 z-30"
                src={calendarIcon}
                alt=""
              />
            </div>
            <Datepicker
              useRange={false}
              asSingle={true}
              value={checkOut}
              onChange={(value) => setCheckOut(value)}
              primaryColor={"emerald"}
              inputClassName="outline-none bg-white text-gray-900 text-center text-sm border border-green-normal focus:border-green-focus w-full py-1 pl-7 pr-6 rounded-md font-medium"
              containerClassName="text-sm tailwind-custom-date-picker"
              toggleClassName="hidden"
            />

            <div className="relative inset-y-0 right-2 flex items-center pl-2 pointer-events-none">
              <img
                className="w-3 absolute right-0 bottom-2.5 opacity-[.5]"
                src={arrowIcon}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* prvious check in input */}

        {/* <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Check in
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <img className="w-[17.3px]" src={calendarIcon} alt="" />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full py-1 pl-8 pr-[1.6rem] text-sm resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-2 pointer-events-none">
              <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
            </div>
          </div>
        </div> */}

        {/* previous check out input */}

        {/* <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Check out
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <img className="w-[17.3px]" src={calendarIcon} alt="" />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full py-1 pl-8 pr-[1.6rem] text-sm resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md hide-date-icon"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-2 pointer-events-none">
              <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
            </div>
          </div>
        </div> */}

        {/* Number of Rooms */}
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Number of Rooms
          </label>
          <div className="relative">
            <button className="absolute inset-y-0 left-0 pl-2 group">
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>
            <input
              type="search"
              id="search"
              className="block w-full py-1 px-8 text-sm font-medium resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            />
            <button className="absolute inset-y-0 right-2 pl-2 group">
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>
        {/* Number of Adults */}
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Number of Adults
          </label>
          <div className="relative">
            <button className="absolute inset-y-0 left-0 pl-2 group">
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>

            <input
              type="search"
              id="search"
              className="block w-full py-1 px-8 text-sm resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            />
            <button className="absolute inset-y-0 right-2 pl-2 group">
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>
        {/* Number of Children */}
        <div className="xl:mb-0 mb-8">
          <label
            className="text-[11px] mb-1 block font-medium text-green-normal"
            htmlFor=""
          >
            Number of Children
          </label>
          <div className="relative">
            <button className="absolute inset-y-0 left-0 pl-2 group">
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>

            <input
              type="search"
              id="search"
              className="block w-full py-1 px-8 text-sm resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            />
            <button className="absolute inset-y-0 right-2 pl-2 group">
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInputs;
