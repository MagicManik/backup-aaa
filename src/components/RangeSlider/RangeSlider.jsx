import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import FilterTitle from "../SideBar/FilterTitle";

const RangeSlider = () => {
  const [values, setValues] = useState([200, 8000]);
  const [inputValues, setInputValues] = useState([200, 8000]);

  const handleChange = (event, newValue) => {
    setValues(newValue);
    setInputValues(newValue); // Update the input values when the slider is dragged
  };

  const handleInputChange = (index) => (event) => {
    const newInputValues = [...inputValues];
    const inputValue = event.target.value.trim(); // Trim the input value to remove leading/trailing spaces

    if (inputValue === "") {
      newInputValues[index] = null; // You can use any other appropriate value, like null or undefined
    } else {
      newInputValues[index] = Number(inputValue);
    }

    setInputValues(newInputValues);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      setValues(inputValues);
    }
  };

  return (
    <div>
      <FilterTitle title="Range Slider" />
      <Box className="w-full px-8">
        <Slider
          value={values}
          onChange={handleChange}
          valueLabelDisplay="off"
          sx={{ color: "#0e9749" }}
          min={0}
          max={8000}
        />

        {/* <div className="flex gap-10">
        <TextField
          className="flex-1 mr-2"
          label="Min Price"
          variant="outlined"
          type="number"
          value={inputValues[0]}
          onChange={handleInputChange(0)}
          onKeyPress={handleInputKeyPress} // Trigger input submission on Enter key press
        />
        <input
          className="flex-1"
          label="Max Price"
          type="number"
          value={inputValues[1]}
          onChange={handleInputChange(1)}
          onKeyPress={handleInputKeyPress} // Trigger input submission on Enter key press
        />
      </div> */}
      </Box>

      <div className="flex justify-between mt-1.5 px-3">
        <div className="w-20">
          <input
            value={inputValues[0]}
            onChange={handleInputChange(0)}
            onKeyPress={handleInputKeyPress}
            className="block text-center w-full py-2 px-1.5 text-green-normal text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
          />
        </div>
        <div className="w-20">
          <input
            value={inputValues[1]}
            onChange={handleInputChange(1)}
            onKeyPress={handleInputKeyPress}
            className="block text-center w-full py-2 px-1.5 text-green-normal text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
