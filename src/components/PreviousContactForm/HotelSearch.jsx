import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import lensIcon from "../../assets/images/icons/lens.svg";

const HotelSearch = ({
  selectedLocation,
  setSelectedLocation,
  searchQuery,
  setSearchQuery,
}) => {
  // const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [autoSuggestions, setAutoSuggestions] = useState([]);

  const [options, setOptions] = useState([
    "Dhaka",
    "Thailand",
    "Singapore",
    "Dubai",
  ]);
  const dropdownRef = useRef(null);

  // Focus
  const handleFocus = () => {
    setSelectedLocation("");
    setShowDropdown(true);
  };

  // Input
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    setShowDropdown(true);
  };

  // api Call
  useEffect(() => {
    if (searchQuery.length <= 4) {
      return;
    } else {
      let data = JSON.stringify({ location: searchQuery });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://sandbox-api.myvoiaj.com/hotel/autosuggetion",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: "26838567395226479",
          secretecode: "3UNhMde4XEfbY6RimCyyJHzXzmEbYQKmxO7J5DIAkZb",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status !== "failed") {
            setAutoSuggestions(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (autoSuggestions.length > 0) {
      setOptions(autoSuggestions.map((item) => item.location));
    }
  }, [autoSuggestions]);

  // select location
  const handleSuggestionSelect = (suggestion) => {
    // console.log("Selected suggestion:", suggestion);
    setSelectedLocation(suggestion);
    setSearchQuery(suggestion);
    setShowDropdown(false);
  };

  // dropdown close by clicking outside
  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== dropdownRef.current.previousSibling
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative pb-6 z-40">
      <img className="w-4 absolute top-[0.5rem] left-2" src={lensIcon} alt="" />
      <input
        className={`block w-full pl-8 pr-2 text-sm leading-8 resize-none border outline-none ${
          showDropdown
            ? "rounded-t-md border-green-focus"
            : "rounded-md border-green-rgba"
        }`}
        type="search"
        autoComplete="off"
        placeholder="Destination/Hotel Name"
        value={selectedLocation ? selectedLocation : searchQuery}
        onFocus={handleFocus}
        onChange={handleInputChange}
      />

      {showDropdown && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 w-full bg-white shadow-lg border border-t-0 border-green-focus"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="py-1.5 px-2 cursor-pointer hover:bg-green-rgba flex items-start"
              onClick={() => handleSuggestionSelect(option)}
            >
              <img
                className="w-4 mt-0.5 mr-1.5 opacity-40"
                src={lensIcon}
                alt=""
              />
              <span className="text-sm text-gray-900">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

HotelSearch.propTypes = {
  selectedLocation: PropTypes.string,
  setSelectedLocation: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default HotelSearch;
