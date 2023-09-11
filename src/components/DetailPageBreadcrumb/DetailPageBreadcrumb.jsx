import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DetailPageBreadcrumb = ({
  navigationUrl,
  CityName,
  CountryName,
  Name,
}) => {
  const address = `${
    CityName === undefined || CityName === null ? "" : CityName
  } ${CountryName ? "," : ""} ${
    CountryName === undefined || CountryName === null ? "" : CountryName
  }`;
  return (
    <nav
      aria-label="breadcrumb"
      className="py-4 border-solid border-t border-b border-[#e8e8e8]"
    >
      <ol className="flex flex-wrap max-w-2xl items-center space-x-2 lg:max-w-7xl">
        <li>
          <Link
            to={"/"}
            className="text-base text-gray-00 font-normal after:content-['/'] after:ml-2 transition duration-[350ms] ease-in-out hover:underline hover:text-[#000]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={navigationUrl}
            className={`text-base text-gray-900 font-normal ${
              CityName || CountryName
                ? "after:content-['/'] after:ml-2"
                : "after:content-['']"
            }  transition duration-[350ms] ease-in-out hover:underline hover:text-[#000]`}
          >
            {/* New Yourk, United States */}
            {CityName || CountryName ? address : ""}
          </Link>
        </li>
        <li aria-current="page" className="text-base text-black font-bold">
          {/* WeLive Wall Street */}
          {Name}
        </li>
      </ol>
    </nav>
  );
};

DetailPageBreadcrumb.propTypes = {
  navigationUrl: PropTypes.string.isRequired,
  CityName: PropTypes.string,
  CountryName: PropTypes.string,
  Name: PropTypes.string,
};

export default DetailPageBreadcrumb;
