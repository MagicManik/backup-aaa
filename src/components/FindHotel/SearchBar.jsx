import lensIcon from "../../assets/images/icons/lens.svg";

const SearchBar = () => {
  return (
    <div className="relative mb-11">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
        <img className="w-4" src={lensIcon} alt="" />
      </div>
      <input
        className="block w-full py-1 px-4 pl-8 font-medium placeholder:font-normal text-gray-900 text-sm placeholder:italic leading-4 resize-none border border-green-rgba focus:border-green-focus outline-none rounded-md"
        type="search"
        id="search"
        placeholder="Destination/Hotel Name"
      />
    </div>
  );
};

export default SearchBar;
