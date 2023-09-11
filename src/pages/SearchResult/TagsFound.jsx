import closeIcon from "../../assets/images/icons/close.svg";
import starIcon from "../../assets/images/icons/star.svg";

const TagsFound = () => {
  return (
    <>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        4.0
        <img className="w-2" src={closeIcon} alt="" />
      </a>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        Signle Beds
        <img className="w-2" src={closeIcon} alt="" />
      </a>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        Tag 1
        <img className="w-2" src={closeIcon} alt="" />
      </a>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        $1000 - $1200
        <img className="w-2" src={closeIcon} alt="" />
      </a>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        Tag 2
        <img className="w-2" src={closeIcon} alt="" />
      </a>
      <a
        href=""
        className="flex items-center gap-1 bg-yellow-star text-white text-xs font-medium py-0.5 rounded px-1"
      >
        <img className="w-3" src={starIcon} alt="" />
        Tag 3
        <img className="w-2" src={closeIcon} alt="" />
      </a>
    </>
  );
};

export default TagsFound;
