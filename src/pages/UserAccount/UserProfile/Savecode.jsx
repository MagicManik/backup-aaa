import { Dialog, Transition } from "@headlessui/react";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number-2";
import PropTypes from "prop-types"; // Import PropTypes
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import userImg from "../../../assets/images/user.jpeg";
import FormInput from "../../../components/FormInput/FormInput";
import FormCountryOptions from "../../../components/FormOptions/FormCountryOptions";
import SelectGender from "../../../components/SelectGender/SelectGender";
import { countryInfo, gender } from "../../../constant/constant";

const Savecode = ({ isOpen, setIsOpen, userInfo }) => {
  const countryInfoData = countryInfo;
  const genderData = gender;
  const [fullName, setFullName] = useState("");
  const [isdCode, setIsdCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    email,
    member_id,
    fullname,
    isd_code,
    mobile,
    dob,
    city,
    address,
    state,
    country,
    postal_code,
  } = userInfo;

  // handle profile update
  const handleSignUp = (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = JSON.stringify({
      login_key:
        "hrkZNADLOHJjEQePfquE6K9UApSi3Os1qIshEXcBDxRGDbWHUPnyrtRyg5O7PgQXJlgIbLISISYtSZpoSyAG8lpFFW", // required
      member_id: member_id, // required
      email: email, // required
      fullname: fullName || fullname, // required
      isd_code: isdCode || isd_code, // not required
      mobile: phoneNumber || mobile, // required
      dob: dateOfBirth || dob, // required
      gender: selectedGender, // required
      address: addressInput || address, // not required
      city: cityInput || city, // not required
      state: stateInput || state, // not required
      postal_code: postalCode || postal_code, // not required
      country: selectedCountry || country, // not required
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sandbox-api.myvoiaj.com/user/profile-update",
      headers: {
        apikey: "26838567395226479",
        secretecode: "3UNhMde4XEfbY6RimCyyJHzXzmEbYQKmxO7J5DIAkZb",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const data = response.data;
        if (data?.status === "success") {
          setIsOpen(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        className="w-full max-w-[800px]"
      >
        <Dialog as="div" className="relative z-1 w-[80%]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[1200]">
            <div className="flex min-h-full items-center justify-center lg:p-4 p-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-[600px] w-[100%] transform lg:p-6 p-3 text-left align-middle transition-all max-h-full overflow-scroll scroll-smooth">
                  {/* modal body */}

                  <form onSubmit={handleSignUp}>
                    <div className="bg-white rounded-3xl relative mx-auto mt-36 pt-20">
                      <img
                        src={userImg}
                        alt=""
                        className="rounded-full mx-auto w-28 h-28 shadow-md border-4 border-white transition duration-200 transform hover:scale-110 absolute left-0 right-0 -top-12"
                      />

                      <div className="px-6">
                        <h1 className="font-bold text-center text-3xl text-green-normal">
                          {userInfo?.fullname}
                        </h1>
                        <p className="text-center text-sm text-gray-400 font-medium mt-1">
                          Update you profile
                        </p>

                        {/* 1st box */}
                        {/* input field 1 */}
                        <div className="w-full">
                          <div className="border-t border-gray-100 text-gray-600 py-1 w-full mt-4 pt-3">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Full name
                            </label>
                            <FormInput
                              type="text"
                              placeholder={userInfo?.fullname}
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* 2nd box */}
                        {/* input field 2 */}
                        <div className="w-full">
                          <Tooltip
                            title="You don't have permission to do this"
                            followCursor
                          >
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Email Address
                              </label>

                              <FormInput
                                type="email"
                                name="email"
                                placeholder={userInfo?.email}
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                readonly="readOnly"
                                newClass="cursor-default focus:border-green-rgba"
                              />
                            </div>
                          </Tooltip>
                        </div>

                        {/* phone number */}
                        <div className="w-full py-1">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="border border-green-rgba rounded-md py-1.5 px-2">
                            <MuiPhoneNumber
                              defaultCountry={"bd"}
                              onChange={handlePhoneNumber}
                              variant="standard"
                              fullWidth
                            />
                          </div>
                        </div>

                        {/* 3rd input box */}
                        <div className="flex gap-5">
                          {/* input field 4 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Date of Birth
                              </label>
                              <FormInput
                                type="text"
                                placeholder={userInfo?.dob}
                                required
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* input field 5 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Gender
                              </label>
                              <SelectGender
                                // selected value
                                value={selectedGender}
                                // onclick
                                onChange={(e) =>
                                  setSelectedGender(e.target.value)
                                }
                                // gender array
                                selectName={genderData}
                                defaultOption="Select Gender"
                              ></SelectGender>
                            </div>
                          </div>
                        </div>

                        {/* 4th box */}
                        <div className="w-full">
                          <div className="text-gray-600 py-1 w-full">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Address
                            </label>
                            <FormInput
                              type="text"
                              placeholder={userInfo?.address}
                              required
                              value={addressInput}
                              onChange={(e) => setAddressInput(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* 5th input box */}
                        <div className="flex gap-5">
                          {/* input field 1 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Country
                              </label>
                              {/* <FormInput
                              type="email"
                              name="email"
                              id="email"
                              placeholder={userInfo?.data?.country}
                              required
                              
                            /> */}
                              <FormCountryOptions
                                setIsdCode={setIsdCode}
                                value={selectedCountry}
                                onChange={(e) =>
                                  setSelectedCountry(e.target.value)
                                }
                                selectName={countryInfoData}
                                defaultOption="Select Country"
                              ></FormCountryOptions>
                            </div>
                          </div>

                          {/* input field 8 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                State
                              </label>
                              <FormInput
                                type="text"
                                placeholder={userInfo?.state}
                                required
                                value={stateInput}
                                onChange={(e) => setStateInput(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* 6th input box */}
                        <div className="flex gap-5">
                          {/* input field 9 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                City
                              </label>
                              <FormInput
                                type="text"
                                placeholder={userInfo?.city}
                                required
                                value={cityInput}
                                onChange={(e) => setCityInput(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* input field 9 */}
                          <div className="w-full">
                            <div className="text-gray-600 py-1 w-full">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Postal Code
                              </label>
                              <FormInput
                                type="text"
                                placeholder={userInfo?.postal_code}
                                required
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-7 pb-6 px-6">
                          <input
                            type="submit"
                            className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-green-normal hover:bg-green-dark hover:shadow-lg hover:shadow-green-normal/40 transition-all duration-300 w-full cursor-pointer"
                            value="Save changes"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Savecode.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
};

export default Savecode;
