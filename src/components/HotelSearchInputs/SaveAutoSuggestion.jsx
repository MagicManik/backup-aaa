import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import lensIcon from "../../assets/images/icons/lens.svg";
import { useHotelRQ } from "../../requests/useHotelRQ";

const AutoSuggestion = ({
  searchQuery,
  setSearchQuery,
  className,
  imgClass,
}) => {
  const { mutate, data } = useHotelRQ("/autosuggetion");
  const [showDropdown, setShowDropdown] = useState(false);
  const [autoSuggestions, setAutoSuggestions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const dropdownRef = useRef(null);

  // default suggestion start
  const [options, setOptions] = useState([
    "Bangkok",
    "Dhaka",
    "Dubai",
    "Hongkong",
    "Pakistan",
    "Italy",
  ]);

  useEffect(() => {
    if (autoSuggestions?.length > 0) {
      setOptions(autoSuggestions.map((item) => item.location));
    }
  }, [autoSuggestions]);
  // default suggestion closed

  // handle input change start
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    setShowDropdown(true);
  };
  // handle input change closed

  // fetch auto suggestion
  const fetchAutoSuggestions = (query) => {
    if (query.length <= 4) {
      return;
    } else {
      mutate({ location: query });
      setAutoSuggestions(data);
    }
  };

  useEffect(() => {
    fetchAutoSuggestions(searchQuery);
  }, [searchQuery]);
  // auto suggestion fetch closed

  // select auto suggestion by pressing arow key start
  const handleSuggestionSelect = (suggestion) => {
    setSearchQuery(suggestion);
    setShowDropdown(false);
  };
  // select auto suggestion by pressing arow key closed

  // arrow key functionalities start
  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Handle down arrow key press
      e.preventDefault();
      setSelectedIdx((prevIdx) => {
        const nextIdx = prevIdx + 1 >= options.length ? 0 : prevIdx + 1;
        setSearchQuery(options[nextIdx]);
        fetchAutoSuggestions(options[nextIdx]);
        return nextIdx;
      });
    } else if (e.key === "ArrowUp") {
      // Handle up arrow key press
      e.preventDefault();
      setSelectedIdx((prevIdx) => {
        const nextIdx = prevIdx - 1 < 0 ? options.length - 1 : prevIdx - 1;
        setSearchQuery(options[nextIdx]);
        fetchAutoSuggestions(options[nextIdx]);
        return nextIdx;
      });
    } else if (e.key === "Enter" && selectedIdx !== -1) {
      handleSuggestionSelect(options[selectedIdx]);
    }
  };

  // remove
  useEffect(() => {
    document.addEventListener("keydown", handleInputKeyDown);
    return () => {
      document.removeEventListener("keydown", handleInputKeyDown);
    };
  }, [selectedIdx]);

  // arrow key functionalities closed

  // outside click functionalities start
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
  // outside click functionalities closed

  return (
    <>
      <img
        className={`w-4 absolute top-[0.56rem] left-2 ${imgClass}`}
        src={lensIcon}
        alt=""
      />
      <input
        className={`block w-full pl-8 pr-2 text-sm leading-8 resize-none border outline-none ${className} ${
          showDropdown
            ? "rounded-t-md border-green-focus"
            : "rounded-md border-green-rgba"
        }`}
        autoComplete="off"
        placeholder="Destination/Hotel Name"
        value={searchQuery}
        onFocus={() => setShowDropdown(true)}
        onChange={handleInputChange}
      />

      {showDropdown && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 w-full bg-white shadow-lg border border-t-0 border-green-focus rounded-b-md overflow-hidden"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`py-1.5 px-2 cursor-pointer hover:bg-green-rgba flex items-start ${
                selectedIdx === index ? "bg-green-rgba" : ""
              }`}
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
    </>
  );
};

AutoSuggestion.propTypes = {
  selectedLocation: PropTypes.string,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  className: PropTypes.string,
  imgClass: PropTypes.string,
};

export default AutoSuggestion;
