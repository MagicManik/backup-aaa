import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { FaBed } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import couple from "../../../assets/images/icons/couple.svg";

const BookingList = ({ isOpen, setIsOpen, bookingList }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
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

        <div
          style={{ scrollbarWidth: "none" }}
          className="fixed inset-0 overflow-y-auto z-[1000]  aaa-wrapper"
        >
          <div className="flex min-h-full items-center justify-center lg:py-4 py-[54px] text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="lg:w-[85%] w-[100%] transform rounded-2xl bg-white lg:p-6 p-3 text-left align-middle shadow-xl transition-all max-h-full border border-gray-300">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="py-5">
                    <button
                      type="button"
                      className="rounded-full border border-transparent px-[11px] py-[11px] text-sm font-medium focus:outline-none absolute lg:right-5 right-3 hover:before:bg-[#2222220d] modal-close-btn lg:top-3 top-1"
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
                  </div>

                  <div className="p-4 bg-green-normal lg:rounded-xl rounded-lg text-white w-full mb-7">
                    <h1 className="tracking-widest uppercase text-base md:text-2xl font-bold text-center">
                      My Booking List
                    </h1>
                  </div>
                </Dialog.Title>

                {bookingList?.map((booking) => (
                  <div
                    key={booking.Id}
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
                            {/* {roomData.room_name} */}
                          </h3>

                          <div className="flex items-center">
                            <FaBed className="text-green-normal text-lg" />
                            <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                              {/* {roomData.bed.bed_type} */}
                              booking id: HO2328AUAAD4
                            </p>
                          </div>

                          <div className="flex items-center">
                            <FaBed className="text-green-normal text-lg" />
                            <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                              {/* {roomData.bed.bed_type} */}
                              tracking_id: 1693242894L571
                            </p>
                          </div>

                          <div className="flex items-center">
                            <FaBed className="text-green-normal text-lg" />
                            <p className="ml-[5px] lg:mr-4 mr-2 tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                              {/* {roomData.bed.bed_type} */}
                              entry n: Mr ABC
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              booking status: confirm
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              generated date: 2023-08-28
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              service_details: Hotel Booking with 1 room with 1
                              night(s). Check-In 2023-08-31 &amp; Check-Out
                              2023-09-01. 2 Adult
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              ticket status: queue
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              total amount: 309.42
                            </p>
                          </div>

                          <div className="flex items-center">
                            <GiCheckMark className="text-green-normal" />
                            <p className="ml-[5px] lg:mr-4 mr-2 text-[#4F514F]">
                              {/* {roomData.rate_type} */}
                              auto_cancel: 2023-07-02 23:59:59
                            </p>
                          </div>

                          <p className="tracking-widest uppercase text-green-normal text-lg font-bold">
                            {/* {room.price?.amount} {room.price?.currency} */}
                          </p>
                        </div>
                      </div>
                      <button
                        // onClick={() =>
                        //   handleNavigate(
                        //     room.tracking_id,
                        //     room.room_group_id,
                        //     room.price,
                        //     roomData
                        //   )
                        // }
                        className="cursor-pointer bg-[#0e9749] lg:mt-0 mt-5 lg:py-3 py-2 px-4 md:px-5 text-white lg:text-lg text-sm lg:rounded-xl rounded-lg hover:bg-[#0b7438] hover:border-[#0a6832] md:w-full font-medium transition duration-[350ms] ease-in-out focus:bg-[#0b7438] focus:border-[#0a6832] focus:shadow-[0_0_0_0.2rem_rgba(50,167,100,0.5)] w-full lg:max-w-fit block"
                      >
                        Booking cancel
                      </button>
                    </div>
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BookingList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  bookingList: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired,
      // Define the PropTypes for the properties inside the bookingList array here
    })
  ).isRequired,
};

export default BookingList;
