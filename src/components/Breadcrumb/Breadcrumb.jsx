import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ hotelAddress, hotelName, detailHotelName }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goBack = (previousPageNumber) => {
    navigate(previousPageNumber);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap max-w-2xl items-center space-x-2 lg:max-w-7xl">
        <li>
          <Link
            to="/"
            className="text-base text-gray-00 font-normal transition duration-[350ms] ease-in-out hover:underline hover:text-[#000]"
          >
            {t("home")}
          </Link>
        </li>

        <span>/</span>

        {hotelName && (
          <>
            <li>
              <button
                onClick={() => goBack(-2)}
                className="text-base text-gray-900 font-normal transition duration-[350ms] ease-in-out hover:underline hover:text-[#000]"
              >
                {/* New Yourk, United States */}
                Back to the Search Result
              </button>
            </li>

            <span>/</span>
          </>
        )}

        {hotelAddress && (
          <>
            <li>
              <button
                onClick={() => goBack(-1)}
                className="text-base text-gray-900 font-normal transition duration-[350ms] ease-in-out hover:underline hover:text-[#000]"
              >
                {hotelAddress ? `${hotelAddress}` : `${hotelName}`}
              </button>
            </li>
            <span>/</span>
          </>
        )}

        <li className="font-bold text-black" aria-current="page">
          {detailHotelName ? `${detailHotelName}` : "Payment"}
        </li>
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  hotelAddress: PropTypes.string,
  detailHotelName: PropTypes.string,
  hotelName: PropTypes.string,
};

export default Breadcrumb;
