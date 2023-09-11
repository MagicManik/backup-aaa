import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [autoSuggestions, setAutoSuggestions] = useState([]);
  const [options, setOptions] = useState(["Dhaka", "Thailand", "Singapore"]);
  const dropdownRef = useRef(null);

  const handleFocus = () => {
    setShowDropdown(true);
  };

  // Input Change
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
    <div className="relative z-[99999] pb-6">
      <input
        className="block w-full py-1 px-4 text-sm leading-4 resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
        type="search"
        id="search"
        autoComplete="off"
        placeholder="Search..."
        value={searchQuery}
        onFocus={handleFocus}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-7 left-0 z-[9999] w-full border border-green-rgba bg-white shadow-lg rounded-md overflow-y-auto"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="py-2 px-4 cursor-pointer hover:bg-green-rgba"
              onClick={() => handleSuggestionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
