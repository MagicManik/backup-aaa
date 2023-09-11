import FormSubmitBtn from "./FormSubmitBtn";
import ManikDropdown from "./ManikDropdown";
import ReactDateRange from "./ReactDateRange";
import SearchBar from "./SearchBar";

const FindHotel = () => {
  return (
    <div className="border border-green-normal rounded-xl lg:p-7 p-4">
      <form>
        <SearchBar />
        <ReactDateRange />
        <ManikDropdown />
        <FormSubmitBtn />
      </form>
    </div>
  );
};

export default FindHotel;
