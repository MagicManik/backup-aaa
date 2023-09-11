import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";

const TagsFilter = () => {
  return (
    <div className="my-6 mx-3.5">
      <div className="flex items-center justify-between my-3">
        <h5 className="font-bold text-gray-900">Tags</h5>
        <button className="text-sm text-gray-light font-medium">
          clear all
        </button>
      </div>
      <div className="relative">
        <input
          type="search"
          id="search"
          className="block w-full py-1.5 pl-2 pr-8 text-sm font-bold resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
          required
        />
        <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
          <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TagsFilter;
