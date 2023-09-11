import FilterTitle from "./FilterTitle";

const PropertyTypeFilter = () => {
  return (
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
  );
};

export default PropertyTypeFilter;
