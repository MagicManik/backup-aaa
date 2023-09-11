import CheckInput from "../CheckInput/CheckInput";
import Label from "../Label/Label";
import FilterTitle from "./FilterTitle";

const DiscountFilter = () => {
  return (
    <div className="my-6">
      <FilterTitle title="Discounts" />
      <div className="flex items-center mt-3">
        <CheckInput id="specialOffers" />
        <Label
          label="Special Offers"
          htmlFor="specialOffers"
          className="text-[15px] text-[#191C19] font-bold"
        />
      </div>
    </div>
  );
};

export default DiscountFilter;
