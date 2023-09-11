import { useEffect, useRef, useState } from "react";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import minusIcon from "../../assets/images/icons/minus-square.svg";
import plusIcon from "../../assets/images/icons/plus-square.svg";

const ManikDropdown = () => {
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
    <div className="pt-10 relative ">
      <label className="text-[.75rem] mb-2 block font-medium" htmlFor="">
        Rooms and Guest
      </label>
      <div
        className={`flex items-center justify-between pl-2.5 pr-3 border ${
          isDropdownOpen
            ? "rounded-t-md border-green-focus"
            : "rounded-md border-green-rgba"
        }`}
      >
        <input
          type="text"
          className="block w-full py-1 pr-2 font-medium text-gray-900 text-sm leading-4 resize-none outline-none rounded-md"
          onClick={handleInputClick}
        />
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 z-20 top-[99%] w-full bg-white border border-green-focus shadow-lg"
          >
            <ul className="m-4">
              <li className="flex justify-between items-center">
                <label
                  htmlFor="roomsCount"
                  className="text-sm font-medium text-gray-900"
                >
                  Rooms
                </label>
                <div className="flex justify-between items-center gap-5">
                  <button className="group">
                    <img
                      className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={minusIcon}
                      alt=""
                    />
                  </button>
                  <span>2</span>
                  <button className="group">
                    <img
                      className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={plusIcon}
                      alt=""
                    />
                  </button>
                </div>
              </li>

              <li className="flex justify-between items-center my-4">
                <label
                  htmlFor="roomsCount"
                  className="text-sm font-medium text-gray-900 leading-4"
                >
                  Adults
                  <br />
                  <small className="text-gray-800 font-light">18+ years</small>
                </label>
                <div className="flex justify-between items-center gap-5">
                  <button className="group">
                    <img
                      className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={minusIcon}
                      alt=""
                    />
                  </button>
                  <span>2</span>
                  <button className="group">
                    <img
                      className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={plusIcon}
                      alt=""
                    />
                  </button>
                </div>
              </li>

              <li className="flex justify-between items-center my-4">
                <label
                  htmlFor="roomsCount"
                  className="text-sm font-medium text-gray-900 leading-4"
                >
                  Children
                  <br />
                  <small className="text-gray-800 font-light">
                    0 - 17 years
                  </small>
                </label>
                <div className="flex justify-between items-center gap-5">
                  <button className="group">
                    <img
                      className="w-[16.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={minusIcon}
                      alt=""
                    />
                  </button>
                  <span>3</span>
                  <button className="group">
                    <img
                      className="w-[17.5px] opacity-[.5] group-hover:opacity-100 duration-300"
                      src={plusIcon}
                      alt=""
                    />
                  </button>
                </div>
              </li>
              <li className="flex justify-between items-center my-4">
                <label
                  htmlFor="roomsCount"
                  className="text-sm font-medium text-gray-900 leading-4"
                >
                  Child&apos;s Age as of Check-in Date
                </label>
                <div className="columns-3"></div>
              </li>
            </ul>
          </div>
        )}
        <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default ManikDropdown;
