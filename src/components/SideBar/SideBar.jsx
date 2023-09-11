import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import { useState } from "react";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import starGoldenIcon from "../../assets/images/icons/star-golden.svg";
import CheckInput from "../CheckInput/CheckInput";
import Label from "../Label/Label";
import Map from "../Map/Map";
import FilterTitle from "./FilterTitle";

const SideBar = ({
  isOpen,
  selectedRatings,
  setSelectedRatings,
  priceRange,
  setPriceRange,
}) => {
  const [propertyType, setPropertyType] = useState(null);
  console.log(propertyType, "is property type available");
  // range filter functionalities
  const [inputValues, setInputValues] = useState([0, 20000]);

  const handleChange = (event, newValue) => {
    // setValues(newValue);
    setPriceRange(newValue);
    setInputValues(newValue);
  };

  const handleInputChange = (index) => (event) => {
    const newInputValues = [...inputValues];
    const inputValue = event.target.value.trim();

    if (isNaN(inputValue)) {
      return;
    }

    if (inputValue === "") {
      newInputValues[index] = null;
    } else {
      newInputValues[index] = Number(inputValue);
    }

    setInputValues(newInputValues);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      // setValues(inputValues);
      setPriceRange(inputValues);
    }
  };

  // range filter functionalities close
  // hotel filter
  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  // Filtering logic
  // const filteredProducts =
  //   selectedRatings.length === 0
  //     ? data
  //     : data.filter((item) =>
  //         selectedRatings.includes(Math.floor(item.rating))
  //       );

  return (
    <aside
      className={`xl:w-[356px] lg:w-[300px] w-[86%] xl:static fixed top-0 left-0 z-[90] transform transition-transform duration-300 ease-in-out bg-white xl:p-0 px-3 lg:pt-36 pt-24 pb-16 lg:pr-0 pr-3 xl:h-auto h-screen min-h-screen lg:overflow-y-auto overflow-y-scroll overflow-x-hidden aaa-sidebar ${
        isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
      }`}
    >
      <Map height={300} />
      {/* rating filter */}
      <div className="border border-green-normal rounded-xl mt-9 xl:p-3 lg:p-3 p-1">
        {/* rating */}
        <div className="mb-6">
          <FilterTitle title="Rating" />

          <div
            onChange={() => handleRatingChange(1)}
            className="flex items-center"
          >
            <CheckInput id="oneStar" />
            <Label
              label={
                <div className="flex gap-2 items-center">
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                </div>
              }
              htmlFor="oneStar"
            />
          </div>

          <div
            onChange={() => handleRatingChange(2)}
            className="flex items-center"
          >
            <CheckInput id="twoStar" />
            <Label
              label={
                <div className="flex gap-2 items-center">
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                </div>
              }
              htmlFor="twoStar"
            />
          </div>

          <div
            onChange={() => handleRatingChange(3)}
            className="flex items-center"
          >
            <CheckInput id="threeStar" />
            <Label
              label={
                <div className="flex gap-2 items-center">
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                </div>
              }
              htmlFor="threeStar"
            />
          </div>

          <div
            onChange={() => handleRatingChange(4)}
            className="flex items-center"
          >
            <CheckInput id="fourStar" />
            <Label
              label={
                <div className="flex gap-2 items-center">
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img
                    className="w-[18px] opacity-50"
                    src={starGoldenIcon}
                  ></img>
                </div>
              }
              htmlFor="fourStar"
            />
          </div>

          <div
            onChange={() => handleRatingChange(5)}
            className="flex items-center"
          >
            <CheckInput id="fourFive" />
            <Label
              label={
                <div className="flex gap-2 items-center">
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                  <img className="w-[18px]" src={starGoldenIcon}></img>
                </div>
              }
              htmlFor="fourFive"
            />
          </div>
        </div>

        {/* range slider */}
        <div>
          <FilterTitle title="Range Slider" />
          <Box className="w-full px-8">
            <Slider
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="off"
              sx={{ color: "#0e9749" }}
              min={0}
              max={20000}
            />
          </Box>

          <div className="flex justify-between mt-1.5 px-3">
            <div className="w-20">
              <input
                value={inputValues[0]}
                onChange={handleInputChange(0)}
                onKeyDown={handleInputKeyDown}
                className="block text-center w-full py-2 px-1.5 text-green-normal text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              />
            </div>
            <div className="w-20">
              <input
                value={inputValues[1]}
                onChange={handleInputChange(1)}
                onKeyDown={handleInputKeyDown}
                className="block text-center w-full py-2 px-1.5 text-green-normal text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              />
            </div>
          </div>
        </div>
        {/* range slider colose */}

        {/* discount */}
        <div className="my-6">
          <FilterTitle title="Discounts" />
          <div className="flex items-center mt-3">
            <CheckInput id="specialOffers" />
            <Label
              label="Special Offers"
              htmlFor="specialOffers"
              className="text-[15px] text-[#191C19] font-bold"
            />
          </div>
        </div>
        {/* discount close */}

        {/* room type */}
        <div className="my-6">
          <FilterTitle title="Room Type" />
          <div className="flex flex-col mt-3">
            {/* first radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="doubleBed"
              >
                <input
                  id="doubleBed"
                  name="roomType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="doubleBed"
              >
                1 Double Bed
              </label>
            </div>
            {/* 2nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="singleBeds"
              >
                <input
                  id="singleBeds"
                  name="roomType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="singleBeds"
              >
                Single Beds
              </label>
            </div>
            {/* 3nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="multipleBeds"
              >
                <input
                  id="multipleBeds"
                  name="roomType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="multipleBeds"
              >
                Multiple Beds
              </label>
            </div>
            {/* 4nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="twoSingleBed"
              >
                <input
                  id="twoSingleBed"
                  name="roomType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="twoSingleBed"
              >
                2 Single Beds
              </label>
            </div>
          </div>
        </div>
        {/* room type close */}

        {/* property type */}
        <div className="my-6">
          <FilterTitle title="Property Type" />
          <div className="flex flex-col">
            {/* first radio box */}

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="hostel"
              >
                <input
                  value="hostel"
                  onChange={(e) => setPropertyType(e.target.value)}
                  id="hostel"
                  name="propertyType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="hostel"
              >
                Hostel
              </label>
            </div>
            {/* 2nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="hotel"
              >
                <input
                  value="hotel"
                  onChange={(e) => setPropertyType(e.target.value)}
                  id="hotel"
                  name="propertyType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="hotel"
              >
                Hotel
              </label>
            </div>
            {/* 3nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="villa"
              >
                <input
                  id="villa"
                  name="propertyType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="villa"
              >
                Villa
              </label>
            </div>
            {/* 4nd radio box */}
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full py-1.5 px-3"
                htmlFor="homestay"
              >
                <input
                  id="homestay"
                  name="propertyType"
                  type="radio"
                  className="before:content[''] peer aaa-input h-5 w-5 rounded-full checked:border-[#84DCAA]"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-normal opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                className="text-[15px] text-[#191C19] font-bold"
                htmlFor="homestay"
              >
                Homestay
              </label>
            </div>
          </div>
        </div>
        {/* property close */}

        {/* Tags */}
        <div className="my-6 mx-3.5">
          <div className="flex items-center justify-between my-3">
            <h5 className="font-bold text-gray-900">Tags</h5>
            <button className="text-sm text-gray-light font-medium">
              clear all
            </button>
          </div>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full py-1.5 pl-2 pr-8 text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
              required
            />
            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
              <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
            </div>
          </div>
        </div>
        {/* tags close */}
      </div>

      {/* <Filters /> */}
    </aside>
  );
};

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array,
  selectedRatings: PropTypes.array,
  setSelectedRatings: PropTypes.func,
  priceRange: PropTypes.array,
  setPriceRange: PropTypes.func,
};

export default SideBar;
