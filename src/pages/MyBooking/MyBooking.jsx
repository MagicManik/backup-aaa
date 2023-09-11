import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import couple from "../../assets/images/icons/couple.svg";
import useTitle from "../../hooks/useTitle";
import { useBookingRQ } from "../../requests/useBookingRQ";
import { useTranslation } from "react-i18next";

const MyBooking = () => {
  //   const loginKey = localStorage.getItem("login_key");
  const memberId = localStorage.getItem("member_id");
  const { isLoading, mutate, data } = useBookingRQ("/booking-list");
  useTitle("My Booking");

  const bookingList = data?.booking_list;

  const { t } = useTranslation();

  useEffect(() => {
    mutate({
      member_id: memberId,
      // service_type: "",
      booking_status: "any",
      // booking_id: "",
    });
  }, []);

  if (isLoading) {
    return (
      <Box className="mx-auto flex justify-center my-7">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="aaa-wrapper py-6">
      {bookingList?.map((booking) => (
        <div
          key={booking.Id}
          className="lg:p-4 p-3 my-4 rounded-2xl w-full border-solid border border-green-rgba"
        >
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className="flex items-start justify-between lg:flex-row flex-col w-full lg:gap-6 gap-4">
              <div className={`bg-[#cdecd9] rounded-lg py-6 px-3.5`}>
                <img className="lg:w-[40px] w-[36px]" src={couple} alt="" />
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <p className="lg:ml-[5px] ml-0 lg:mr-4 mr-2 tracking-widest uppercase text-green-normal text-sm font-bold bg-green-100 px-2 py-2">
                    {t("bookingId")}: {booking.booking_id}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                    {t("bookingBy")}: {booking.entry_n}
                  </p>
                </div>

                <div className="flex lg:ml-0.5 ml-1">
                  <GiCheckMark className="text-green-normal mt-2" />
                  <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F] py-1 flex-1">
                    <span className="text-gray-900">{t("bookingStatus")}:</span>{" "}
                    {booking.booking_status}
                  </p>
                </div>

                <div
                  className={`flex lg:ml-0.5 ml-1 ${booking.service_details === null ? "hidden" : "block"
                    }`}
                >
                  <GiCheckMark className="text-green-normal mt-1" />
                  <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F] flex-1">
                    <span className="text-gray-900">{t("serviceDetails")}:</span>{" "}
                    {booking.service_details}
                  </p>
                </div>

                <p className="tracking-widest uppercase text-green-normal text-lg font-bold mt-1 ml-1">
                  {t("amount")}: {booking.total_amount} {booking.currency}
                </p>
              </div>
            </div>
            <Link
              to={`/booking-details?trackingId=${booking?.tracking_id}&bookingId=${booking?.booking_id}`}
              className="cursor-pointer bg-[#0e9749] lg:mt-0 mt-5 py-3 px-4 md:px-5 text-white lg:text-lg text-sm lg:rounded-xl rounded-lg hover:bg-[#0b7438] hover:border-[#0a6832] md:w-full font-medium transition duration-[350ms] ease-in-out focus:bg-[#0b7438] focus:border-[#0a6832] focus:shadow-[0_0_0_0.2rem_rgba(50,167,100,0.5)] w-full lg:max-w-fit block"
            >
              {t("viewDetails")}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
