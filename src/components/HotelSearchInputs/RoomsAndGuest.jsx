import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import caretDown from "../../assets/images/icons/caret-down.svg";
import minusIcon from "../../assets/images/icons/minus-square.svg";
import plusIcon from "../../assets/images/icons/plus-square.svg";
import userIcon from "../../assets/images/icons/user.svg";

const RoomsAndGuest = ({ rooms, setRooms, className, dropdownClass }) => {
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);

  useEffect(() => {
    const adults = rooms?.reduce((total, room) => total + room?.adult, 0);
    const children = rooms?.reduce((total, room) => total + room?.child, 0);

    setTotalAdults(adults);
    setTotalChildren(children);
  }, [rooms]);

  // Room Count
  const handleAddRoom = (e) => {
    e.preventDefault();
    setRooms([...rooms, { adult: 1, child: 0, child_age: [] }]);
  };

  const handleRemoveRoom = (e, roomIndex) => {
    e.preventDefault();
    if (rooms.length > 1) {
      const updatedRooms = rooms.filter((room, index) => index !== roomIndex);
      setRooms(updatedRooms);
    }
  };

  // Adult Count
  const handleAdultIncrement = (e, roomIndex) => {
    e.preventDefault();
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].adult++;
    setRooms(updatedRooms);
  };

  const handleAdultDecrement = (e, roomIndex) => {
    e.preventDefault();
    const updatedRooms = [...rooms];
    if (updatedRooms[roomIndex].adult > 1) {
      updatedRooms[roomIndex].adult--;
      setRooms(updatedRooms);
    }
  };

  // Children Count
  const handleChildrenIncrement = (e, roomIndex) => {
    e.preventDefault();
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].child++;
    updatedRooms[roomIndex].child_age.push("");
    setRooms(updatedRooms);
  };

  const handleChildrenDecrement = (e, roomIndex) => {
    e.preventDefault();
    const updatedRooms = [...rooms];
    if (updatedRooms[roomIndex].child > 0) {
      updatedRooms[roomIndex].child--;
      updatedRooms[roomIndex].child_age.pop();
      setRooms(updatedRooms);
    }
  };

  // Handle Childe Age Selection
  const handleChildAgeChange = (roomIndex, ageIndex, age) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].child_age[ageIndex] = age;
    setRooms(updatedRooms);
  };

  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== dropdownRef.current.previousSibling
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
      <div
        className={`flex items-center justify-between pl-2.5 pr-3 border ${className} ${
          isDropdownOpen
            ? "rounded-t-md border-green-focus"
            : "rounded-md border-green-rgba"
        }`}
      >
        <img className="w-[0.88rem]" src={userIcon} alt="" />
        <button
          className="block w-full pl-2.5 pr-2 font-medium text-gray-900 text-sm text-left leading-8 resize-none outline-none rounded-md cursor-pointer"
          onClick={handleInputClick}
        >
          {rooms?.length} {rooms?.length > 1 ? "rooms," : "room,"} {totalAdults}{" "}
          {totalAdults > 1 ? "adults," : "adult,"} {totalChildren}{" "}
          {totalChildren > 1 ? "children" : "child"}
        </button>
        {/* dropdown */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className={`absolute left-0 right-0 z-20 top-[99%] w-full bg-white border border-green-focus shadow-lg p-4 rounded-b-md ${dropdownClass}`}
          >
            {rooms.map((room, roomIndex) => (
              <div key={roomIndex} className="my-4">
                <li className="flex justify-between items-center">
                  <label className="text-base text-green-normal font-bold leading-4">
                    Room {roomIndex + 1}
                  </label>
                </li>
                {/* adult */}
                <div className="my-4 flex justify-between items-center">
                  <label
                    htmlFor="roomsCount"
                    className="text-sm font-semibold text-gray-900 leading-4"
                  >
                    Adults
                    <br />
                    <small className="text-gray-800 font-light">
                      18+ years
                    </small>
                  </label>
                  <div className="flex justify-between items-center">
                    <button
                      className="group"
                      onClick={(e) => handleAdultDecrement(e, roomIndex)}
                    >
                      <img
                        className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                        src={minusIcon}
                        alt=""
                      />
                    </button>
                    <span className="w-12 text-center">{room.adult}</span>
                    <button
                      className="group"
                      onClick={(e) => handleAdultIncrement(e, roomIndex)}
                    >
                      <img
                        className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                        src={plusIcon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>

                {/* amena - select child */}
                <div className="my-4 flex justify-between items-center">
                  <label
                    htmlFor="roomsCount"
                    className="text-sm font-semibold text-gray-900 leading-4"
                  >
                    Children
                    <br />
                    <small className="text-gray-800 font-light">
                      0 - 17 years
                    </small>
                  </label>

                  <div className="flex justify-between items-center">
                    <button
                      className="group"
                      onClick={(e) => handleChildrenDecrement(e, roomIndex)}
                    >
                      <img
                        className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                        src={minusIcon}
                        alt=""
                      />
                    </button>
                    <span className="w-12 text-center">{room.child}</span>
                    <button
                      className="group"
                      onClick={(e) => handleChildrenIncrement(e, roomIndex)}
                    >
                      <img
                        className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                        src={plusIcon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>

                {/* child age */}
                <div className="flex flex-col justify-between items-start my-4">
                  <label
                    htmlFor="roomsCount"
                    className={`${
                      room.child_age.length > 0 ? "block" : "hidden"
                    } text-sm font-semibold text-gray-900 leading-4 mt-2 mb-3`}
                  >
                    Child&apos;s Age as of Check-in Date
                  </label>

                  <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
                    {room.child_age.map((age, ageIndex) => (
                      <div
                        key={`childAgeDiv${ageIndex + 1}`}
                        className="w-full"
                      >
                        <select
                          style={{
                            backgroundImage: `url(${caretDown})`,
                            backgroundPosition: "right 12px center",
                          }}
                          onChange={(e) =>
                            handleChildAgeChange(
                              roomIndex,
                              ageIndex,
                              e.target.value
                            )
                          }
                          value={age}
                          className="bg-no-repeat bg-center text-base font-normal border-solid border-[1px] border-[rgba(14,151,73,0.4)] bg-[#fafffc] rounded-md block w-full py-1 px-[10px] md:pl-[10px] md:pr-7 leading-normal bg-clip-padding outline-0 transition duration-[0.15ms] ease-in-out focus:border-[#38ed86] appearance-none"
                        >
                          <option value="">Select Age</option>
                          {[...Array(18)].map((_, i) => (
                            <option key={`age${i}`} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Remove Room */}
                <div
                  className={`${
                    roomIndex === 0 ? "hidden" : "block"
                  } flex justify-between items-center gap-5 font-bold text-red-700`}
                >
                  <button onClick={(e) => handleRemoveRoom(e, roomIndex)}>
                    Remove Room
                  </button>
                </div>
              </div>
            ))}
            <button
              className="text-green-normal font-bold hover:opacity-100 duration-300"
              onClick={handleAddRoom}
            >
              Add Room
            </button>
            <button
              className="block bg-green-light mt-6 py-2 px-4 text-white w-full rounded-[.75rem] btn-primary duration-300 hover:shadow-none active:opacity-100 hover:opacity-100 focus:opacity-100 hover:bg-green-dark transition-colors text-sm normal-case font-normal"
              onClick={() => setIsDropdownOpen(false)}
            >
              Apply
            </button>
          </div>
        )}
        <img className="w-3 h-3 opacity-[.5]" src={arrowIcon} alt="" />
      </div>
    </>
  );
};

RoomsAndGuest.propTypes = {
  rooms: PropTypes.array.isRequired,
  setRooms: PropTypes.func.isRequired,
  className: PropTypes.string,
  dropdownClass: PropTypes.string,
};

export default RoomsAndGuest;
