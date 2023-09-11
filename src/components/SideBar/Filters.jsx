import DiscountFilter from "./DiscountFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import RangeSlider from "./RangeSlider";
import RatingFilter from "./RatingFilter";
import RoomTypeFilter from "./RoomTypeFilter";
import TagsFilter from "./TagsFilter";

const Filters = () => {
  return (
    <div className="border border-green-normal rounded-xl mt-9 xl:p-3 lg:p-3 p-1">
      <RatingFilter />
      <RangeSlider />
      <DiscountFilter />
      <RoomTypeFilter />
      <PropertyTypeFilter />
      <TagsFilter />
    </div>
  );
};

export default Filters;
