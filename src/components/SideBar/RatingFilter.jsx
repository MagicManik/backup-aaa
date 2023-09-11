import starGoldenIcon from "../../assets/images/icons/star-golden.svg";
import CheckInput from "../CheckInput/CheckInput";
import Label from "../Label/Label";
import FilterTitle from "./FilterTitle";

const RatingFilter = () => {
  return (
    <>
      <FilterTitle title="Rating" />
      <div className="flex items-center">
        <CheckInput id="oneStar" />
        <Label
          label={
            <div className="flex gap-2 items-center">
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
            </div>
          }
          htmlFor="oneStar"
        />
      </div>

      <div className="flex items-center">
        <CheckInput id="twoStar" />
        <Label
          label={
            <div className="flex gap-2 items-center">
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
            </div>
          }
          htmlFor="twoStar"
        />
      </div>
      <div className="flex items-center">
        <CheckInput id="threeStar" />
        <Label
          label={
            <div className="flex gap-2 items-center">
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
            </div>
          }
          htmlFor="threeStar"
        />
      </div>
      <div className="flex items-center">
        <CheckInput id="fourStar" />
        <Label
          label={
            <div className="flex gap-2 items-center">
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px] opacity-50" src={starGoldenIcon}></img>
            </div>
          }
          htmlFor="fourStar"
        />
      </div>
      <div className="flex items-center">
        <CheckInput id="fourFive" />
        <Label
          label={
            <div className="flex gap-2 items-center">
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
              <img className="w-[18px]" src={starGoldenIcon}></img>
            </div>
          }
          htmlFor="fourFive"
        />
      </div>
    </>
  );
};

export default RatingFilter;
