import guest1 from "../../assets/images/guest-reviews-img1.jpg";
import starIcon from "../../assets/images/icons/star.svg";

const GuestReview = () => {
  return (
    <div className="flex items-start mt-4 md:mt-5">
      <img className="w-12 md:w-[70px]" src={guest1} alt="" />
      <div className="pl-2 md:pl-5">
        <div className="flex items-baseline justify-between gap-1.5 mb-1">
          <h3 className="text-[#1C1C1C] text-base md:text-lg font-bold">
            Robert Hamilton
          </h3>
          <span className="flex items-center gap-1 bg-[#f5c710] text-white text-xs font-semibold mr-2 md:mr-1.5 lg:mr-2 mb-2 px-[7px] md:px-2 py-[3px] rounded">
            <img width={13} src={starIcon} alt="" />
            4.0
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
    </div>
  );
};

export default GuestReview;
