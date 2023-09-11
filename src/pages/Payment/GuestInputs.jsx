import Tooltip from "@mui/material/Tooltip";
import MuiPhoneNumber from "material-ui-phone-number-2";
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";
import CheckInput from "../../components/CheckInput/CheckInput";
import FormCountryOptions from "../../components/FormOptions/FormCountryOptions";
import GuestInput from "../../components/GuestInput/GuestInput";
import Label from "../../components/Label/Label";
import { countryInfo } from "../../constant/constant";
import { useHotelRQ } from "../../requests/useHotelRQ";
import RoomData from "./RoomData";

const GuestInputs = ({
  email,
  memberId,
  trackingId,
  uId,
  price,
  occupancies,
}) => {
  // console.log(trackingId, "hello tracking id");
  // console.log(uId, "hello U id");
  // console.log("Guest Inputs Email Address:", email);
  // console.log("Guest Inputs Member Id:", memberId);
  // console.log("Guest Tracking Id:", trackingId);
  // console.log("Guest U Id:", uId);
  // console.log("Guest Inputs Price:", price);
  const { mutate } = useHotelRQ("/hold-for-payment");
  const { mutate: bookingMutate } = useHotelRQ("/create-booking");

  const countryInfoData = countryInfo;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isdCode, setIsdCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [requestNotes, setRequestNotes] = useState("");
  const [bookingId, setBookingId] = useState("");

  // console.log("Request Notes:", requestNotes);
  // console.log("isd code:" isdCode, "Selected Country:" selectedCountry);
  console.log(bookingId);

  const initialRoomsState = occupancies.map((occupancy) => ({
    adult: Array.from({ length: occupancy.adult }, () => ({
      title: "Mr",
      first_name: "",
      last_name: "",
      age: "",
    })),
    child: Array.from({ length: occupancy.child }, (child, index) => ({
      first_name: "",
      last_name: "",
      age: occupancy.child_age[index] || "",
    })),
  }));

  const [rooms, setRooms] = useState(initialRoomsState);

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    setPhoneNumberError(false);
  };

  const handleCountry = (e) => {
    const selectedDialCodeValue = e.target.value;
    const selectedCountryName = e.target.options[e.target.selectedIndex].text;
    setIsdCode(selectedDialCodeValue);
    setSelectedCountry(selectedCountryName);
  };

  // handle hold for payment
  const holdForPayment = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      return;
    }

    const inputData = {
      tracking_id: trackingId,
      pay_amount: price,
      redirect_url: `https://aaa-booking-updated.netlify.app/confirmation?uid=${uId}`,
      member_id: memberId,
      email_address: email,
      mobile_number: phoneNumber,
      country_code: isdCode,
      country: selectedCountry,
      state: stateInput,
      city: cityInput,
      booking_remarks: "n/a",
      special_requests_notes: requestNotes,
      room: rooms,
    };

    mutate(inputData, {
      onSuccess: (data) => {
        // const data = response?.data;
        console.log(data.status);
        if (data?.status === "success" && data?.payment_link) {
          window.location.href = data.payment_link;
        } else if (data?.status === "failed") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data?.reason,
          });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });

    // call create booking api
    const bookingData = {
      tracking_id: trackingId,
      member_id: memberId,
      email_address: email,
      mobile_number: phoneNumber,
      country_code: selectedCountry,
      booking_remarks: "n/a",
      special_requests_notes: "non smoking room",
      room: rooms,
    };

    bookingMutate(bookingData, {
      onSuccess: (data) => {
        // const data = response?.data;
        console.log(data, "guest input data");
        if (data?.status === "success") {
          console.log(data?.booking_id);
          setBookingId(data?.booking_id);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <form onSubmit={holdForPayment}>
        {/* title, room, adult & child input */}
        <RoomData rooms={rooms} setRooms={setRooms} />

        {/* country, phone & email input */}
        <div className=" border-t border-b border rounded-lg my-4 bg-white">
          <h4 className="border-b px-3 py-4 text-lg font-bold">
            Enter Primary Guest Contact Details
          </h4>

          <div className="flex lg:flex-row flex-col gap-4 px-3 lg:pt-6 pt-4 lg:pb-3 pb-0">
            {/* country selection */}
            <div className="w-full">
              <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-[9.5px] px-4">
                <Label
                  htmlFor="country"
                  label="Country *"
                  className="block text-[13px] text-gray-900"
                />
                <FormCountryOptions
                  onChange={handleCountry}
                  required="required"
                  countryInfoData={countryInfoData}
                ></FormCountryOptions>
              </div>
            </div>

            {/* phone number */}
            <div className="w-full">
              <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-[8px] px-4 relative">
                <Label
                  htmlFor="phoneNumber"
                  label="Phone Number *"
                  className="block text-[13px] text-gray-900"
                />

                <div>
                  <MuiPhoneNumber
                    required
                    defaultCountry={"bd"}
                    onChange={handlePhoneNumber}
                    variant="standard"
                    fullWidth
                  />
                  {phoneNumberError && (
                    <small className="text-red-600 absolute whitespace-nowrap left-[15px] -bottom-5">
                      Please provide your phone number!
                    </small>
                  )}
                </div>
              </div>
            </div>

            {/* email address */}
            <div className="w-full">
              <Tooltip
                title="You don't have permission to do this"
                followCursor
              >
                <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                  <Label
                    htmlFor="emailAddress"
                    label="Email Address"
                    className="block text-[13px] text-gray-900"
                  />
                  <GuestInput
                    type="email"
                    name="email"
                    placeholder={email}
                    readonly="readOnly"
                    newClass="cursor-default"
                  />
                </div>
              </Tooltip>
            </div>
          </div>

          {/* state and city input */}
          <div className="flex lg:flex-row flex-col gap-4 px-3 pt-3 pb-5">
            {/* state input*/}
            <div className="w-full">
              <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                <Label
                  htmlFor="state"
                  label="State *"
                  className="block text-[13px] text-gray-900"
                />
                <GuestInput
                  type="text"
                  value={stateInput}
                  placeholder="Texas"
                  required="required"
                  onChange={(e) => setStateInput(e.target.value)}
                />
              </div>
            </div>

            {/* city input */}
            <div className="w-full">
              <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                <Label
                  htmlFor="city"
                  label="City *"
                  className="block text-[13px] text-gray-900"
                />
                <GuestInput
                  type="text"
                  value={cityInput}
                  placeholder="Houston"
                  required="required"
                  onChange={(e) => setCityInput(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* reguest notes */}
        <div className=" border-t border-b pt-3 pb-2 border rounded-lg my-4 bg-white">
          <h4 className="pb-3 border-b px-3 text-lg font-bold mb-4">
            Add Special Requests
          </h4>

          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="col-span-1">
              <div className="flex items-center">
                <CheckInput
                  value="Connecting room"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="connectingRoom"
                />
                <Label label="Connecting room" htmlFor="connectingRoom" />
              </div>
              <div className="flex items-center">
                <CheckInput
                  value="Early Check-in"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="earlyCheck"
                />
                <Label label="Early Check-in" htmlFor="earlyCheck" />
              </div>
            </div>

            {/* 2nd column */}
            <div className="col-span-1">
              <div className="flex items-center">
                <CheckInput
                  value="Side by Side room"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="sideBySideRoom"
                />
                <Label label="Side by Side room" htmlFor="sideBySideRoom" />
              </div>
              <div className="flex items-center">
                <CheckInput
                  value="Late check out"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="lateCheckOut"
                />
                <Label label="Late check out" htmlFor="lateCheckOut" />
              </div>
            </div>

            {/* 3rd column */}
            <div className="col-span-1">
              <div className="flex items-center">
                <CheckInput
                  value="Late check in"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="lateCheckIn"
                />
                <Label label="Late check in" htmlFor="lateCheckIn" />
              </div>
              <div className="flex items-center">
                <CheckInput
                  value="Twin bed"
                  onChange={(e) =>
                    setRequestNotes(
                      (prevNotes) =>
                        `${
                          prevNotes +
                          (requestNotes.length > 1 ? ", " : "") +
                          e.target.value
                        }`
                    )
                  }
                  id="twinbed"
                />
                <Label label="Twin bed" htmlFor="twinbed" />
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="pt-7 pb-6 px-6">
          <input
            type="submit"
            className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-green-light hover:bg-green-dark hover:shadow-lg hover:shadow-green-normal/40 transition-all duration-300 w-full cursor-pointer"
            value="Pay Now"
          />
        </div>
      </form>
    </>
  );
};

GuestInputs.propTypes = {
  email: PropTypes.string,
  memberId: PropTypes.string,
  trackingId: PropTypes.string,
  uId: PropTypes.string,
  price: PropTypes.number,
  occupancies: PropTypes.array.isRequired,
};

export default GuestInputs;
