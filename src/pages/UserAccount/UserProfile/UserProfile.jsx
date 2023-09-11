import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import locationIcon from "../../../assets/images/icons/location.svg";
import userIcon from "../../../assets/images/icons/user-icon.svg";
import userProfileBg from "../../../assets/images/user-profile-bg.avif";
import useUser from "../../../hooks/useUser";
import { apiHeaders } from "../../../lib/apiHeaders";
import ChangePassword from "./ChangePassword";
import ProfileUpdateModal from "./ProfileUpdateModal";

const UserProfile = () => {
  const location = useLocation();
  const [user, reFetch, setReFetch] = useUser();
  const [bookingList, setBookingList] = useState([]);

  console.log(bookingList);

  const loginKey = localStorage.getItem("login_key");
  const memberId = localStorage.getItem("member_id");

  // booking list
  const bookingData = JSON.stringify({
    member_id: memberId,
    service_type: "",
    booking_status: "any",
    booking_id: "",
  });

  const bookingConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://sandbox-api.myvoiaj.com/booking-list",
    headers: apiHeaders,
    data: bookingData,
  };

  useEffect(() => {
    axios
      .request(bookingConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data?.status) {
          console.log("booking data", response.data);
          setBookingList(response.data?.booking_list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!loginKey || !memberId || !user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return (
    <main className="profile-page">
      <section className="relative block lg:h-[500px] h-[380px]">
        <div
          style={{ backgroundImage: `url(${userProfileBg})` }}
          className="top-0 w-full h-full bg-center bg-cover bg-fixed"
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 px-4">
            <div className="lg:px-6 px-0">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      className="w-36 h-36 rounded-full -mt-16 shadow-xl border-2 border-green-light"
                      src={userIcon}
                      alt=""
                    />
                    <span className="-top-12 right-[0.55rem] absolute  w-5 h-5 bg-green-light border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 lg:order-3 lg:text-right lg:self-center lg:mr-4 mr-0">
                  {/* orginal */}
                  {user && (
                    <ProfileUpdateModal
                      user={user}
                      loginKey={loginKey}
                      reFetch={reFetch}
                      setReFetch={setReFetch}
                    />
                  )}
                </div>
                <div className="w-full lg:w-4/12 lg:px-4 px-0 lg:order-1">
                  <div className="flex justify-between mt-8 pb-4">
                    <div className="text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-green-light">
                        {user?.status}
                      </span>
                      <span className="text-sm text-blueGray-400">Status</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {user?.gender}
                      </span>
                      <span className="text-sm text-blueGray-400">Gender</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {user?.member_id}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Member ID
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:mt-12 mt-2">
                <h3 className="text-4xl font-semibold leading-normal text-green-normal mb-2">
                  {user?.fullname}
                </h3>

                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase flex justify-center items-start gap-1.5 mx-auto">
                  <img
                    className="w-3 lg:mt-0.5 md:mt-0.5 mt-1"
                    src={locationIcon}
                    alt=""
                  />
                  <p className="text-left">
                    {/* big dash html or tripple dash html code: &#x2E3B; */}
                    {user?.city} {user?.postal_code}, {user?.state} &#8212;{" "}
                    {user?.country}
                  </p>
                  {/* {user?.data?.email} */}
                </div>

                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Date of Birth: {user?.dob}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  E-mail: {user?.email}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Phone No: {user?.mobile}
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12">
                    {user && (
                      <ChangePassword
                        loginKey={loginKey}
                        memberId={memberId}
                        email={user?.email}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
