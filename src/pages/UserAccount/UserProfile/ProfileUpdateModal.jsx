import { Dialog, Transition } from "@headlessui/react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MuiPhoneNumber from "material-ui-phone-number-2";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import userImg from "../../../assets/images/icons/avatar.jpg";
import FormInput from "../../../components/FormInput/FormInput";
import FormCountryOptions from "../../../components/FormOptions/FormCountryOptions";
import SelectGender from "../../../components/SelectGender/SelectGender";
import {
  countryInfo,
  gender as initialGender,
} from "../../../constant/constant";
import { useUserRQ } from "../../../requests/useUserRQ";

const ProfileUpdateModal = ({ user, loginKey, reFetch, setReFetch }) => {
  const { mutate } = useUserRQ("/profile-update");
  const countryInfoData = countryInfo;
  const genderData = initialGender;
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

  const handleCountry = (e) => {
    const selectedDialCodeValue = e.target.value;
    const selectedCountryName = e.target.options[e.target.selectedIndex].text;
    setIsdCode(selectedDialCodeValue);
    setSelectedCountry(selectedCountryName);
  };

  const {
    email,
    member_id,
    fullname,
    isd_code,
    mobile,
    dob,
    gender,
    city,
    address,
    state,
    country,
    postal_code,
  } = user;

  // console.log(user.data, "data paichi");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // handle profile update
  const handleSignUp = (e) => {
    if (e) {
      e.preventDefault();
    }

    const inputData = {
      login_key: loginKey, // required
      member_id: member_id, // required
      email: email, // required
      fullname: fullName || fullname, // required
      isd_code: isdCode || isd_code, // not required
      mobile: phoneNumber || mobile, // required
      dob: dateOfBirth || dob, // required
      gender: selectedGender || gender, // required
      address: addressInput || address, // not required
      city: cityInput || city, // not required
      state: stateInput || state, // not required
      postal_code: postalCode || postal_code, // not required
      country: selectedCountry || country, // not required
    };

    mutate(inputData, {
      onSuccess: (data) => {
        if (data?.status === "success") {
          setReFetch(!reFetch);
          setIsOpen(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        className="!absolute !text-white !bg-green-light !top-4 !right-4 lg:!text-sm !text-[12px]"
      >
        <BiSolidEdit className="mr-1 lg:text-xl text-lg lg:mb-0.5 mb-0" /> Edit
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[1200] chrome-scrollbar">
            {/* ekhane backdrop close handle kora hoiche */}
            <div className="flex min-h-full items-center justify-center px-4 lg:pt-[130px] pt-44 pb-14 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* ekhane image positioning kora hoiche */}
                <Dialog.Panel className="w-full max-w-[553px] transform overflow-hidden rounded-3xl text-left align-middle transition-all pt-[60px]">
                  <img
                    className="w-28 h-28 mx-auto rounded-full absolute left-0 right-0 top-[5.5px] shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                    src={userImg}
                    alt=""
                  />
                  {/* image close */}
                  <div className="bg-white pt-16 px-6 rounded-3xl shadow-xl overflow-hidden">
                    <Dialog.Title
                      as="h3"
                      className="font-bold text-center text-3xl text-green-light"
                    >
                      {fullname}
                    </Dialog.Title>
                    <p className="text-center text-sm text-gray-400 font-medium mt-1">
                      Update your profile
                    </p>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent px-[11px] py-[11px] text-sm font-medium focus:outline-none focus-visible:ring-offset-2 absolute top-[70px] right-3.5 hover:before:bg-[#2222220d] modal-close-btn"
                      onClick={closeModal}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xs:w-4 xs:h-4"
                      >
                        <path
                          className="fill-[#333]"
                          d="M0.626953 2.56836L13.5273 15.4688C13.6445 15.5859 13.7845 15.6641 13.9473 15.7031C14.11 15.7422 14.2728 15.7422 14.4355 15.7031C14.5983 15.6641 14.7415 15.5827 14.8652 15.459C14.9889 15.3353 15.0703 15.1921 15.1094 15.0293C15.1484 14.8665 15.1484 14.7038 15.1094 14.541C15.0703 14.3783 14.9922 14.2383 14.875 14.1211L1.97461 1.2207C1.85091 1.10352 1.70768 1.02539 1.54492 0.986328C1.38216 0.947266 1.2194 0.947266 1.05664 0.986328C0.89388 1.01888 0.750651 1.10026 0.626953 1.23047C0.509766 1.35417 0.431641 1.4974 0.392578 1.66016C0.353516 1.82292 0.353516 1.98568 0.392578 2.14844C0.431641 2.3112 0.509766 2.45117 0.626953 2.56836ZM0.626953 14.1211C0.509766 14.2383 0.428385 14.3815 0.382812 14.5508C0.34375 14.7135 0.34375 14.8763 0.382812 15.0391C0.421875 15.2018 0.503255 15.3418 0.626953 15.459C0.750651 15.5827 0.89388 15.6641 1.05664 15.7031C1.2194 15.7422 1.38216 15.7422 1.54492 15.7031C1.70768 15.6641 1.85091 15.5859 1.97461 15.4688L14.875 2.56836C14.9922 2.45117 15.0703 2.3112 15.1094 2.14844C15.1484 1.97917 15.1484 1.81315 15.1094 1.65039C15.0703 1.48763 14.9889 1.34766 14.8652 1.23047C14.7415 1.10677 14.5951 1.02539 14.4258 0.986328C14.263 0.947266 14.1003 0.947266 13.9375 0.986328C13.7812 1.02539 13.6445 1.10352 13.5273 1.2207L0.626953 14.1211Z"
                        ></path>
                      </svg>
                    </button>

                    <form onSubmit={handleSignUp}>
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
                            placeholder={user?.fullname}
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
                              placeholder={user?.email}
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
                      <div className="flex lg:flex-row flex-col lg:gap-5 gap-0">
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
                              placeholder={user?.dob}
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
                            placeholder={user?.address}
                            value={addressInput}
                            onChange={(e) => setAddressInput(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* 5th input box */}
                      <div className="flex lg:flex-row flex-col lg:gap-5 gap-0">
                        {/* input field 1 */}
                        <div className="w-full">
                          <div className="text-gray-600 py-1 w-full">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Country
                            </label>
                            <FormCountryOptions
                              onChange={handleCountry}
                              countryInfoData={countryInfoData}
                              className="px-3 py-[6.7px] !rounded-md !border-green-rgba"
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
                              placeholder={user?.state}
                              value={stateInput}
                              onChange={(e) => setStateInput(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 6th input box */}
                      <div className="flex lg:flex-row flex-col lg:gap-5 gap-0">
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
                              placeholder={user?.city}
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
                              placeholder={user?.postal_code}
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-7 pb-6 px-6">
                        <input
                          type="submit"
                          className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-green-light hover:bg-green-dark hover:shadow-lg hover:shadow-green-normal/40 transition-all duration-300 w-full cursor-pointer"
                          value="Save changes"
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ProfileUpdateModal.propTypes = {
  user: PropTypes.object,
  loginKey: PropTypes.string,
  reFetch: PropTypes.bool,
  setReFetch: PropTypes.func,
};

export default ProfileUpdateModal;
