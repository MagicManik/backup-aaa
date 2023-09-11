import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const CustomDateRangePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Datepicker
        primaryColor={"emerald"}
        separator={"      night        "}
        value={value}
        onChange={handleValueChange}
      />
      <input
        className="w-full text-justify flex justify-between tracking-wider"
        type="text"
        value="FirstWord&nbsp;&nbsp;&nbsp;SecondWord&nbsp;&nbsp;&nbsp;ThirdWord"
      />
    </div>
  );
};
export default CustomDateRangePicker;
