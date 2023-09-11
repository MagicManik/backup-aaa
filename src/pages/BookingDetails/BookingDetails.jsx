import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import couple from "../../assets/images/icons/couple.svg";
import locationIcon from "../../assets/images/icons/location-light.svg";
import locationIconWhite from "../../assets/images/icons/location-white.svg";
import starGoldenIcon from "../../assets/images/icons/star-golden.svg";
import starIcon from "../../assets/images/icons/star.svg";
import useTitle from "../../hooks/useTitle";
import { useBookingRQ } from "../../requests/useBookingRQ";
import { useTranslation } from "react-i18next";

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cancelReason, setCancelReason] = useState("");
  const searchParams = new URLSearchParams(location.search);
  const trackingId = searchParams.get("trackingId");
  const bookingId = searchParams.get("bookingId");
  useTitle("Booking Details");
  console.log("tracking id:", trackingId);
  console.log("booking id:", bookingId);

  const { isLoading, mutate, data } = useBookingRQ("/booking-details");

  const { mutate: bookingCancelMutate, data: bookingCancleData } =
    useBookingRQ("/booking-cancel");
  console.log(bookingCancleData);

  const { t } = useTranslation();

  useEffect(() => {
    mutate({
      tracking_id: trackingId,
      booking_id: bookingId,
    });
  }, [trackingId, bookingId]);

  const bookingData = {
    tracking_id: trackingId,
    booking_id: bookingId,
    cancel_reason: cancelReason,
  };

  const handleBookingCancel = () => {
    (async () => {
      const { value: reason } = await Swal.fire({
        title: "Are you sure to cancel?",
        input: "text",
        inputLabel: "Kindly provide the cause for the cancellation.",
        inputPlaceholder: "Not Interested",
        showCloseButton: true,
        // showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      });
      if (reason) {
        setCancelReason(reason);
        bookingCancelMutate(bookingData, {
          onSuccess: (data) => {
            console.log(data, "pailam");
            if (data.status === "failed") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.reason,
              });
            } else if (data.status === "sucess") {
              navigate("/my-booking");
            }
          },
          onError: (error) => {
            console.log(error);
          },
        });
      }
    })();

    // bookingCancelMutate({
    //   tracking_id: trackingId,
    //   booking_id: bookingId,
    //   cancel_reason: "not interested",
    // });
  };

  const {
    booking_id,
    checkin_departure_date,
    checkout_arrival_date,
    primary_guest_name,
    total_amount,
    service_details,
    auto_cancel,
    guest_email_address,
  } = data?.booking_details || {};

  const {
    PropertyType,
    Name,
    Rating,
    AddressLine1,
    CityName,
    PostalCode,
    CountryName,
    rooms,
    // Description,
    PrimaryPhoto,
    StateName,
  } = data?.gtrs_contents || {};

  //   const rating = Rating?.replace(/\D/g, "");
  const ratingString = Rating?.replace(/\D/g / 0, "");
  const ratingNumber = parseFloat(ratingString);
  const ratingNumberCeil = Math.ceil(ratingNumber);

  if (isLoading) {
    return (
      <Box className="mx-auto flex justify-center my-7">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="text-[#1c1c1c] bg-[#f5f8ff] py-6 w-full">
      <div className="lg:flex gap-4 aaa-wrapper">
        <div className="min-w-[100%] lg:min-w-[66%] lg:max-w-[0]">
          <div>
            <div className="border-t border-b border rounded-lg my-4 bg-white relative">
              <div className="flex items-center justify-between flex-wrap border-b py-3 gap-2">
                <h4 className="px-3 text-lg font-bold">{t("myBookingDetails")}</h4>
                <span className="bg-green-100 text-green-normal rounded-md text-base font-bold py-1.5 px-4 mr-3 mx-3 lg:mb-0">
                  {t("bookingId")}: {booking_id}
                </span>
              </div>
              {/* <button onClick={handleBookingCancel}>Cancle</button> */}

              <div className="p-3">
                <div className="text-gray-600 bg-[#f7f7f7] rounded-lg py-[9.5px] px-4">
                  {/* hotel name and rating */}

                  <div>
                    <div className="flex justify-between items-center flex-wrap py-1">
                      <p className="tracking-widest uppercase text-[#0e9749] text-sm font-bold mb-1">
                        {PropertyType}
                      </p>
                      <button
                        onClick={handleBookingCancel}
                        className={`text-red-600 font bg-[#ffb5b5a8] hover:bg-[#ff9191a8] transition-all duration-300 rounded px-2 py-0.5`}
                      >
                        {t("bookingCancel")}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold">{Name}</h3>
                    <div className="mt-2.5">
                      <span className="flex items-center gap-2 bg-[#f5c710] text-white text-xs font-semibold px-[7px] md:px-2 rounded py-0.5">
                        <img width={13} src={starIcon} alt="" />
                        {ratingNumber ? ratingNumber : 0}
                      </span>
                    </div>
                  </div>
                  {/* ekhane location */}
                  <div>
                    <div className="flex items-baseline gap-1.5 py-2">
                      <img width={12} src={locationIcon} alt="" />
                      <p>
                        {StateName} {AddressLine1} {CityName} {PostalCode}{" "}
                        {CountryName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* state and city input box */}
              <div className="flex lg:flex-row flex-col gap-4 px-3 pt-3 pb-5">
                {/* check in*/}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <FiCalendar className="text-3xl text-green-light" />
                    <h4 className=" uppercase text-gray-800 font-medium my-1">
                      Check-in
                    </h4>
                    <p>{checkin_departure_date}</p>
                  </div>
                </div>

                {/* check out */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <FiCalendar className="text-3xl text-green-light" />
                    <h4 className=" uppercase text-gray-800 font-medium my-1">
                      Check-out
                    </h4>
                    <p>{checkout_arrival_date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* reguest notes */}
            <div className=" border-t border-b pt-3 pb-2 border rounded-lg my-4 bg-white">
              <h4 className="border-b px-3 pb-4 pt-1 text-lg font-bold">
                {t("room")}
              </h4>
              {/* 1st column */}
              <div className="px-3">
                {rooms?.map((room) => (
                  <div
                    key={room.room_code}
                    className="lg:p-4 p-3 my-4 rounded-2xl w-full border-solid border border-[#e8e8e8]"
                  >
                    <div className="flex lg:flex-row flex-col items-center justify-between">
                      <div className="flex items-start justify-between w-full lg:gap-6 gap-4">
                        <div className={`bg-[#cdecd9] rounded-lg py-6 px-3.5`}>
                          <img
                            className="lg:w-[40px] w-[36px]"
                            src={couple}
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#1C1C1C] lg:text-lg text-base font-bold">
                            {room.room_name}
                          </h3>

                          <div className="flex items-center">
                            {/* <FaBed className="text-green-normal text-lg" /> */}
                            <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                              {room.room_type}
                            </p>
                          </div>

                          <div className="flex items-center">
                            {/* <FaBed className="text-green-normal text-lg" /> */}
                            <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                              {room.characteristic}
                            </p>
                          </div>

                          <div className="flex items-center">
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              Max Adult: {room.maxAdults}
                            </p>
                          </div>

                          <div className="flex items-center">
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              Max Children: {room?.maxChildren}
                            </p>
                          </div>
                          <div className="flex items-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        {/* <PaymentDetails /> */}
        <div className="min-w-[100%] lg:min-w-[32.95%] lg:max-w-[0]">
          <div>
            <div className="border-t border-b px-3 py-3 border rounded-lg my-4 bg-white">
              <article className="rounded-lg font-poppins mb-5 bg-[#f4f4fa]">
                <div className="overflow-hidden rounded-t-lg block w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[380px] object-cover rounded-t-lg hover:scale-110 duration-500 relative brightness-[.6]"
                      src={PrimaryPhoto}
                      onError={(e) => {
                        e.target.src =
                          "https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg";
                        e.target.alt = "Image not found";
                      }}
                      alt=""
                    />
                    <div className="absolute top-4 left-5 max-w-[85%] text-white text-xs">
                      <h6 className="font-bold text-xl">{Name}</h6>
                      <div className="flex items-center gap-1 font-medium my-2">
                        {[...Array(ratingNumber ? ratingNumberCeil : "")].map(
                          (_, i) => (
                            <img
                              key={`ratingB${i}`}
                              width={13}
                              src={starGoldenIcon}
                              alt=""
                            />
                          )
                        )}

                        <p className="text-xs leading-3">{Rating}</p>
                      </div>
                      <div className="flex items-center gap-1.5 my-3 font-medium leading-5">
                        <img width={14} src={locationIconWhite} alt="" />
                        <span>
                          {AddressLine1} {CityName} {PostalCode} {CountryName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-3 pt-5 pb-1">
                  <div className="text-gray-600 text-sm leading-3">
                    <div className="flex items-center text-gray-900 py-2">
                      <p className="text-lg font-bold">
                        {t("primaryGuest")}:
                        <span className="text-green-normal font-medium px-3 py-1">
                          {primary_guest_name}
                        </span>
                      </p>
                    </div>
                    <p>
                      <span className="text-gray-900">{t("email")}:</span>{" "}
                      {guest_email_address}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600 text-sm my-4 bg-green-100 p-2">
                    <p>
                      <span className="text-green-normal text-base">
                        {t("detail")}:
                      </span>{" "}
                      {service_details}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600 text-sm my-4">
                    <h6 className="font-semibold">
                      {t("autoCancel")}: <span>{auto_cancel}</span>
                    </h6>
                    {/* <img className="font-bold w-4" src={infoIcon} alt="" /> */}
                  </div>
                </div>
              </article>

              <div className=" bg-green-100 text-green-normal rounded-lg text-base leading-3">
                <div className="flex justify-between py-4 px-3">
                  <h6 className="font-bold">{t("totalamount")}</h6>
                  <p className="font-medium">{total_amount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
