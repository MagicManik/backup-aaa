import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImProfile } from "react-icons/im";
import { MdOutlineClear, MdOutlineMenu, MdPerson } from "react-icons/md";
import { TbBrandBooking, TbPower } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatar from "../../assets/images/icons/avatar.jpg";
import LocationIcon from "../../assets/images/icons/location.svg";
import logo from "../../assets/images/logo.svg";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useUser from "../../hooks/useUser";
import LinkBtn from "../Buttons/LinkBtn";
import LoveBtn from "../Buttons/LoveBtn";

const Navbar = () => {
  const { country, city } = useCurrentLocation();
  const [user] = useUser();
  const { t } = useTranslation();
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const loginKey = localStorage.getItem("login_key");
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (loginKey) {
      localStorage.removeItem("login_key");
      localStorage.removeItem("member_id");
      navigate("/");
    }
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-[1000] w-full bg-green-white ${scrollNavbar && "shadow-[0_0_1rem_rgba(14,151,73,0.3)]"
        }`}
    >
      {({ open }) => (
        <div className="relative">
          {/* uporer div ta lagche dropdown menu ke responsive korar jonno */}
          <div
            className={`grid grid-cols-12 aaa-wrapper items-center justify-between duration-500 ${scrollNavbar ? "lg:py-3 py-1" : "lg:py-4 py-2"
              }`}
          >
            {/* mobile menu hamburger icon [1st box mobile] */}
            <div className="col-span-4 lg:hidden">
              <Disclosure.Button>
                {open ? (
                  <MdOutlineClear className="text-[2rem] text-green-normal" />
                ) : (
                  <MdOutlineMenu className="text-[2rem] text-green-normal" />
                )}
              </Disclosure.Button>
            </div>
            {/* site logo or second box of mobile and 1st box of desktop */}
            <Link
              className="xl:col-span-3 lg:col-span-6 col-span-4 lg:mr-auto lg:ml-0 mx-auto"
              to="/"
            >
              <img
                className={`lg:mr-auto mx-auto ${scrollNavbar
                  ? " w-[6.2rem] transition duration-500"
                  : "w-[7.8rem] transition duration-500"
                  }`}
                src={logo}
                alt="Your Company"
              />
            </Link>
            {/* nav links */}

            <div className="xl:col-span-4 xl:block hidden">
              <label className="flex items-center gap-1 justify-end font-medium">
                <img width={12} className="mr-1" src={LocationIcon} alt="" />
                {country && city && "You are in"}
                <span className="text-green-normal font-poppins">
                  {/* {country && city ? `${country}, ${city}` : ""} */}
                  {country && city ? `${country}, Dhaka` : ""}
                </span>
              </label>
            </div>

            {/* movile nav links and profile menu and 3rd box of mobile and 2nd box of desktop */}
            <div className="xl:col-span-5 lg:col-span-6 col-span-4 ml-auto flex items-center">
              <Link
                to="/profile"
                className="py-2 lg:mr-7 mr-2 text-sm tracking-wide flex items-center"
                aria-current="page"
              >
                <LoveBtn width={"18"} height={"18"} />
                <span className="lg:block hidden">{t("Savedhotels")}</span>
              </Link>
              <Link
                to="/signin"
                className="lg:block hidden py-2 mr-7 text-sm tracking-wide text-green-normal hover:text-green-light duration-300"
                aria-current="page"
              >
                {t("DownloadOurApp")}
              </Link>
              {loginKey && (
                <Link
                  to="/my-booking"
                  className="lg:block hidden py-2 mr-7 text-sm tracking-wide text-green-normal hover:text-green-light duration-300"
                  aria-current="page"
                >
                  {t("Mybooking")}
                </Link>
              )}
              {loginKey ? (
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md pl-1 py-1 text-sm font-medium text-gray-700 focus:outline-none">
                      {loginKey ? (
                        <img
                          className="rounded-full navbar-user-profile ring-2 ring-offset-2 ring-green-light"
                          width={40}
                          src={avatar}
                          alt=""
                        />
                      ) : (
                        <img
                          className="rounded-full navbar-user-profile ring-2 ring-offset-2 ring-green-light"
                          width={40}
                          src={avatar}
                          alt=""
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 bg-white origin-top-right user-profile-menu rounded-[10px] profile-dropdown-container w-72 shadow-xl lg:mt-1.5 mt-1">
                      <div className="w-10 overflow-hidden inline-block absolute -right-2 -top-4">
                        <div className="h-4 w-4 bg-green-normal rotate-45 transform origin-bottom-left"></div>
                      </div>
                      <div>
                        <div className="m-4 user-dopdown-menu rounded-lg">
                          <Menu.Item>
                            {loginKey ? (
                              <img
                                className="mx-auto rounded-full mt-4 user-profile-dropdown-img"
                                width={70}
                                src={avatar}
                                alt="My Profile"
                              />
                            ) : (
                              <img
                                className="mx-auto rounded-full mt-4 user-profile-dropdown-img"
                                width={70}
                                src={avatar}
                                alt="My Profile"
                              />
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <p className="text-xl mb-1 text-green-normal pt-3 text-center font-bold">
                                {user?.fullname}
                              </p>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <p className="text-sm text-center text-info text-[#3a3a3a]">
                                {user?.email}
                              </p>
                            )}
                          </Menu.Item>
                        </div>
                        {loginKey && (
                          <>
                            <Menu.Item>
                              <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                  `nav-link ${isActive
                                    ? "active-nav-link"
                                    : "border-transparent"
                                  }`
                                }
                              >
                                <ImProfile className="mr-4 text-green-normal text-lg" />
                                My Profile
                              </NavLink>
                            </Menu.Item>
                            <Menu.Item className="lg:hidden block">
                              <NavLink
                                to="/my-booking"
                                className={({ isActive }) =>
                                  `nav-link ${isActive
                                    ? "active-nav-link"
                                    : "border-transparent"
                                  }`
                                }
                              >
                                <TbBrandBooking className="ml-[-2.8px] mr-[13px] text-green-normal text-[23px]" />
                                My Booking
                              </NavLink>
                            </Menu.Item>
                            <Menu.Item className="lg:hidden block">
                              <NavLink
                                to="/saved-hotels"
                                className={({ isActive }) =>
                                  `nav-link ${isActive
                                    ? "active-nav-link"
                                    : "border-transparent"
                                  }`
                                }
                              >
                                <svg
                                  className="text-green-normal fill-green-normal ml-[-1px] mr-[13px]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 512 512"
                                  id="heart"
                                >
                                  <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path>
                                </svg>
                                Saved hotels
                              </NavLink>
                            </Menu.Item>
                          </>
                        )}

                        <Menu.Item>
                          <button
                            onClick={handleLogOut}
                            className={
                              "px-4 py-2 font-normal flex  items-center mb-4 w-full hover:bg-green-100 border-l-4 border-transparent hover:border-l-4 hover:border-green-normal"
                            }
                          >
                            <TbPower className="ml-[-2.7px] mr-[13.1px] text-green-normal text-[23px]" />
                            Log out
                          </button>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Menu as="div" className="relative">
                  <LinkBtn
                    to="/signin"
                    label={`${t("signIn")} / ${t("register")}`}
                    btnBox="bg-green-normal hover:bg-green-dark transition-all rounded-lg lg:block hidden font-poppins"
                    size="!w-full !py-[17.8px] !px-[19px] !text-[13.5px] !leading-5"
                  />
                  <Link to="/signin" className="lg:hidden block">
                    <MdPerson className=" text-[2rem] text-green-normal" />
                  </Link>
                </Menu>
              )}
            </div>
          </div>
          {/* <Disclosure.Panel > */}

          <Disclosure.Panel className="lg:hidden flex flex-col gap-2 bg-green-normal h-screen px-2 pt-2 pb-3">
            {({ close }) => (
              <>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-bold bg-gray-700 text-white"
                >
                  <label className="flex gap-1 font-medium">
                    <img
                      width={12}
                      className="mr-1"
                      src={LocationIcon}
                      alt=""
                    />
                    {country && city && "You are in"}
                    <span className="text-green-normal font-poppins">
                      {/* {country && city ? `${country}, ${city}` : ""} */}
                      {country && city ? `${country}, Dhaka` : ""}
                    </span>
                  </label>
                </Link>
                <Link
                  to="/help"
                  className="movile-menu-link"
                  onClick={() => close()}
                >
                  Help
                </Link>
                <Link
                  to="/about-us"
                  className="movile-menu-link"
                  onClick={() => close()}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="movile-menu-link"
                  onClick={() => close()}
                >
                  Contact Us
                </Link>
                <Link
                  to="/download-app"
                  className="movile-menu-link"
                  onClick={() => close()}
                >
                  Download Our App
                </Link>
              </>
            )}
          </Disclosure.Panel>
          {/* </Disclosure.Panel> */}
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
