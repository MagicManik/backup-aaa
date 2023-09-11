import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import arrowIcon from "../../assets/images/icons/arrow-circle-down.svg";
import couple from "../../assets/images/icons/couple.svg";
import locationIcon from "../../assets/images/icons/location.svg";
import noResultImg from "../../assets/images/rooms-not-found.jpg";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import DateRangePicker from "../../components/HotelSearchInputs/DateRangePicker";
import RoomsAndGuest from "../../components/HotelSearchInputs/RoomsAndGuest";
import { useHotelRQ } from "../../requests/useHotelRQ";

const HotelSearchFilters = ({
  trackingId,
  decodedHotelId,
  checkInParam,
  checkOutParam,
  occupanciesArray,
  guestNationalityParam,
  hotelName,
  photos,
  Rating,
  hotelAddress,
}) => {
  const { isLoading, mutate: roomsMutate, data } = useHotelRQ("/availability");
  const { mutate: validationMutate } = useHotelRQ("/validation");
  const navigate = useNavigate();
  // this is user previous page date but user can overright this date through the calender!
  const [date, setDate] = useState([
    {
      startDate: new Date(checkInParam),
      endDate: new Date(checkOutParam),
      key: "selection",
    },
  ]);

  const formatedCheckInDate = format(date[0].startDate, "yyyy-MM-dd");
  const formatedCheckOutDate = format(date[0].endDate, "yyyy-MM-dd");
  // date picker functionalities closed

  // this is user previous page room or occupancies state and this occupencies state user can overright through the RoomsAndGuest component!
  const [rooms, setRooms] = useState(occupanciesArray);
  // closed occupancies or rooms state

  // handle navigate to the payment page *state start
  const occupanciesJSON = JSON.stringify(rooms);
  const photo = photos?.map((photo) => photo.url) || {};
  // handle navigate to the payment page *state closed

  // start previous rooms which is comming previous page
  useEffect(() => {
    roomsMutate({
      tracking_id: trackingId,
      hotel_id: decodedHotelId,
      checkIn: checkInParam,
      checkOut: checkOutParam,
      occupancies: occupanciesArray,
      guest_nationality: guestNationalityParam,
    });
  }, []);
  // closed previous rooms which is comming previous page

  // start new rooms by handle click through the new check in check out date and occupancies or room value
  const handleRoomCheck = () => {
    roomsMutate({
      tracking_id: trackingId,
      hotel_id: decodedHotelId,
      checkIn: formatedCheckInDate,
      checkOut: formatedCheckOutDate,
      occupancies: rooms,
      guest_nationality: guestNationalityParam,
    });
  };
  // closed new rooms by handle click throught new check in check out and occupancies or room value

  // handle navigate to the payment page start
  const handleNavigatePayment = (trackingid, roomGroupId, price, roomData) => {
    const priceJSON = JSON.stringify(price);
    const room = roomData?.room_name;
    const facilities = roomData?.amenities_list?.slice(0, 2);
    const facilitiesJSON = JSON.stringify(facilities);
    const rateType = roomData?.rate_type;

    const roomInfo = {
      tracking_id: trackingid,
      room_group_id: roomGroupId,
    };

    validationMutate(roomInfo, {
      onSuccess: (data) => {
        if (data?.status === "invalid") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unable to process booking. Please try another hotel.",
          });
        } else if (data?.status === "valid") {
          sessionStorage.setItem("roomGroupId", roomGroupId);
          sessionStorage.setItem("trackingId", trackingid);
          sessionStorage.setItem("price", priceJSON);
          sessionStorage.setItem("occupancies", occupanciesJSON);
          sessionStorage.setItem("room", room);
          sessionStorage.setItem("facilities", facilitiesJSON);
          sessionStorage.setItem("rateType", rateType);
          sessionStorage.setItem("checkIn", checkInParam);
          sessionStorage.setItem("checkOut", checkOutParam);
          sessionStorage.setItem("name", hotelName);
          sessionStorage.setItem("rating", Rating);
          sessionStorage.setItem("address", hotelAddress);
          sessionStorage.setItem("photo", photo[1]);
          navigate(
            `/payment/${encodeURIComponent(
              roomGroupId
            )}?trackingId=${trackingid}&price=${encodeURIComponent(
              priceJSON
            )}&occupancies=${occupanciesJSON}&room=${room}&facilities=${facilitiesJSON}&ratetype=${rateType}&checkIn=${checkInParam}&checkOut=${checkOutParam}&name=${hotelName}&rating=${Rating}&address=${hotelAddress}&photo=${
              photo[1]
            }`
          );
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  // handle navigate to the payment page closed

  return (
    <>
      <div className="p-4 bg-[#f2faf5] rounded-2xl text-[#0e9749] py-8">
        <h1 className="tracking-widest uppercase text-[#0e9749] text-base font-bold mb-2">
          Check Availability
        </h1>
        <form className="flex justify-between lg:flex-row flex-col items-center gap-3 py-4">
          {/* auto suggestion */}
          <div className="relative lg:w-[20%] w-[100%]">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-[12px]" src={locationIcon} alt="" />
              </div>
              <input
                type="search"
                id="search"
                value={hotelName}
                className="appearance-none bg-white block w-full py-[8px] pl-8 pr-[1.6rem] text-sm resize-none border-solid border border-[rgba(14,151,73,0.4)] outline-none rounded-md transition duration-[0.15ms] ease-in-out cursor-default"
                readOnly
              ></input>
              <div className="absolute inset-y-0 right-3 flex items-center pl-2 pointer-events-none">
                <img className="w-3 opacity-[.5]" src={arrowIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 w-[100%]">
            <DateRangePicker date={date} setDate={setDate} className="py-0.5" />
          </div>

          {/* room and guest input */}
          <div className="relative lg:w-[26%] w-[100%]">
            <RoomsAndGuest
              rooms={rooms}
              setRooms={setRooms}
              className="!py-0.5"
              dropdownClass="top-[98%]"
            />
          </div>
          <div className="lg:w-[100px] ml-auto">
            <PrimaryBtn
              onClick={handleRoomCheck}
              label="Check"
              btnBox="bg-green-normal hover:bg-green-dark rounded-md transition-colors duration-300"
              size="!text-[13.5px] !py-[7.8px] !w-full !font-normal !font-poppins"
            />
          </div>
        </form>
      </div>

      {data === null && (
        <div className="relative pt-10 pb-6">
          <img
            className="mx-auto lg:w-2/4 w-full"
            src={noResultImg}
            alt="no-result-image"
          ></img>
          <p className="text-xl text-gray-400 text-center absolute lg:bottom-0 -bottom-3 left-0 right-0">
            Rooms not found!
          </p>
        </div>
      )}

      {isLoading ? (
        <Box className="mx-auto flex justify-center my-7">
          <CircularProgress />
        </Box>
      ) : (
        data?.rooms?.map((room) => (
          <div key={room?.room_group_id}>
            {room?.data?.map((roomData, roomIndex) => (
              <div
                key={`room${roomIndex}`}
                className="lg:p-4 p-3 my-4 rounded-2xl w-full border-solid border border-green-rgba"
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
                        {roomData?.room_name}
                      </h3>

                      <div className="flex items-center">
                        <FaBed className="text-green-normal text-lg" />
                        <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                          {roomData?.bed?.bed_type}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <GiCheckMark className="text-green-normal" />
                        <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                          {roomData?.rate_type}
                        </p>
                      </div>

                      {roomData?.amenities_list?.slice(0, 3).map((list, i) => (
                        <div
                          key={`amenity${i}`}
                          className={`flex items-center ${
                            list.toLowerCase() ===
                              roomData?.rate_type.toLowerCase() || list === ""
                              ? "hidden"
                              : "block"
                          } ${
                            roomData?.rate_type === "Bed & breakfast" &&
                            list === "Bed And Breakfast"
                              ? "hidden"
                              : "block"
                          }`}
                        >
                          <GiCheckMark className="text-green-normal" />
                          <p className={`ml-[5px] lg:mr-4 mr-2 text-[#4F514F]`}>
                            {list}
                          </p>
                        </div>
                      ))}

                      <div className="flex items-center">
                        {roomData?.cancellation_policies?.summery.toLowerCase() ===
                        "non refundable".toLocaleLowerCase() ? (
                          <RxCrossCircled className="text-red-600" />
                        ) : (
                          <AiOutlineInfoCircle className="text-red-600" />
                        )}
                        <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                          {roomData?.cancellation_policies?.summery}
                        </p>
                      </div>

                      <p className="tracking-widest uppercase text-green-normal text-lg font-bold">
                        {room?.price?.amount} {room?.price?.currency}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleNavigatePayment(
                        room?.tracking_id,
                        room?.room_group_id,
                        room?.price,
                        roomData
                      )
                    }
                    className="cursor-pointer bg-[#0e9749] lg:mt-0 mt-5 lg:py-3 py-2 px-4 md:px-5 text-white lg:text-lg text-sm lg:rounded-xl rounded-lg hover:bg-[#0b7438] hover:border-[#0a6832] md:w-full font-medium transition duration-[350ms] ease-in-out focus:bg-[#0b7438] focus:border-[#0a6832] focus:shadow-[0_0_0_0.2rem_rgba(50,167,100,0.5)] w-full lg:max-w-fit block"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </>
  );
};

HotelSearchFilters.propTypes = {
  trackingId: PropTypes.string,
  decodedHotelId: PropTypes.string,
  checkInParam: PropTypes.string.isRequired,
  checkOutParam: PropTypes.string.isRequired,
  occupanciesArray: PropTypes.array.isRequired,
  guestNationalityParam: PropTypes.string,
  hotelRooms: PropTypes.array,
  hotelName: PropTypes.string,
  photos: PropTypes.array,
  Rating: PropTypes.string,
  hotelAddress: PropTypes.string,
};

export default HotelSearchFilters;
