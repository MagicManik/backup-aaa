import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import caretDown from "../../assets/images/icons/caret-down.svg";
import minusIcon from "../../assets/images/icons/minus-square.svg";
import plusIcon from "../../assets/images/icons/plus-square.svg";

const RoomsApiCall = ({
  adultCount,
  setAdultCount,
  childrenCount,
  setChildrenCount,
  childAges,
  setChildAges,
}) => {
  const [roomCount, setRoomCount] = useState(1);
  // const [adultCount, setAdultCount] = useState(1);
  // const [childrenCount, setChildrenCount] = useState(0);
  // const [childAges, setChildAges] = useState([]);

  // Room Count

  const handleRoomIncrement = (e) => {
    e.preventDefault();

    // setRoomCount(roomCount + 1); // main code

    // for 1 room testing
    if (roomCount === 1) {
      return;
    } else {
      setRoomCount(roomCount + 1);
    }
  };

  const handleRoomDecrement = (e) => {
    e.preventDefault();
    if (roomCount === 1) {
      return;
    } else {
      setRoomCount(roomCount - 1);
    }
  };

  // Adult Count

  const handleAdultIncrement = (e) => {
    e.preventDefault();
    setAdultCount(adultCount + 1);
  };

  const handleAdultDecrement = (e) => {
    e.preventDefault();
    if (adultCount === 1) {
      return;
    } else {
      setAdultCount(adultCount - 1);
    }
  };

  // Children Count

  const handleChildrenIncrement = (e) => {
    e.preventDefault();
    setChildrenCount(childrenCount + 1);

    // 2nd time added
    setChildAges([...childAges, 0]);
  };

  const handleChildrenDecrement = (e) => {
    e.preventDefault();
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
      setChildAges(childAges.slice(0, childAges.length - 1));
    }
  };

  // handle age selection

  const handleSetChildAge = (index, age) => {
    const updatedChildAges = [...childAges];
    updatedChildAges[index] = age;
    setChildAges(updatedChildAges);
  };

  // ===================================================

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== dropdownRef.current.previousSibling // Check if the click is not on the input field
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div>
        <label className="text-[.75rem] mb-2 mt-8 block font-medium" htmlFor="">
          Rooms and Guest
        </label>

        <div className="my-4 flex justify-between items-center">
          <label
            htmlFor="roomsCount"
            className="text-sm font-medium text-gray-900"
          >
            Rooms
          </label>
          <div className="flex justify-between items-center gap-5">
            <button className="group" onClick={handleRoomDecrement}>
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>
            <span>{roomCount}</span>
            <button className="group" onClick={handleRoomIncrement}>
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="my-4 flex justify-between items-center">
          <label
            htmlFor="roomsCount"
            className="text-sm font-medium text-gray-900 leading-4"
          >
            Adults
            <br />
            <small className="text-gray-800 font-light">18+ years</small>
          </label>
          <div className="flex justify-between items-center gap-5">
            <button className="group" onClick={handleAdultDecrement}>
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>
            <span>{adultCount}</span>
            <button className="group" onClick={handleAdultIncrement}>
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="my-4 flex justify-between items-center">
          <label
            htmlFor="roomsCount"
            className="text-sm font-medium text-gray-900 leading-4"
          >
            Children
            <br />
            <small className="text-gray-800 font-light">0 - 17 years</small>
          </label>
          <div className="flex justify-between items-center gap-5">
            <button className="group" onClick={handleChildrenDecrement}>
              <img
                className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={minusIcon}
                alt=""
              />
            </button>
            <span>{childrenCount}</span>
            <button className="group" onClick={handleChildrenIncrement}>
              <img
                className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                src={plusIcon}
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start my-4">
          <label
            htmlFor="roomsCount"
            className="text-sm font-medium text-gray-900 leading-4 mb-2"
          >
            Child&apos;s Age as of Check-in Date
          </label>

          {/* <div className="columns-3"></div> */}

          <div className="grid grid-cols-3 gap-4 w-full">
            {childAges.map((age, index) => (
              <div key={`childAgeDiv${index + 1}`} className="w-full">
                <select
                  style={{
                    backgroundImage: `url(${caretDown})`,
                    backgroundPosition: "right 12px center",
                  }}
                  // onChange={(e) => handleSetChildAge(e.target.value)}
                  onChange={(e) => handleSetChildAge(index, e.target.value)}
                  value={age}
                  className="bg-no-repeat bg-center text-lg font-normal border-solid border-[1px] border-[rgba(14,151,73,0.4)] min-h-[2rem] md:min-h-[2.3rem] bg-[#fafffc] rounded-md block w-full py-1 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none"
                >
                  {/* <option>{childAge}</option> */}
                  {[...Array(18)].map((_, i) => (
                    <option key={`result${i}`} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

RoomsApiCall.propTypes = {
  adultCount: PropTypes.number.isRequired,
  setAdultCount: PropTypes.func.isRequired,
  childrenCount: PropTypes.number.isRequired,
  setChildrenCount: PropTypes.func.isRequired,
  childAges: PropTypes.arrayOf(PropTypes.number).isRequired,
  setChildAges: PropTypes.func.isRequired,
};

export default RoomsApiCall;
