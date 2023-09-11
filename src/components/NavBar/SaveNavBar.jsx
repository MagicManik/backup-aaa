import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { MdOutlineClear, MdOutlineMenu, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/images/icons/location.svg";
import logo from "../../assets/images/logo.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import LinkBtn from "../Buttons/LinkBtn";
import LoveBtn from "../Buttons/LoveBtn";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SaveNavBar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-[1000] w-full bg-green-white ${
        scrollNavbar && "shadow-[0_0_1rem_rgba(14,151,73,0.3)]"
      }`}
    >
      {({ open }) => (
        <div className="relative">
          {/* uporer div ta lagche dropdown menu ke responsive korar jonno */}
          <div
            className={`grid grid-cols-12 aaa-wrapper items-center justify-between duration-500 ${
              scrollNavbar ? "lg:py-3 py-1" : "lg:py-4 py-2"
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
                className={`lg:mr-auto mx-auto ${
                  scrollNavbar
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
                You are in
                <span className="text-green-normal font-poppins">
                  Ottawa, Canada
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
                <span className="lg:block hidden">Saved hotels</span>
              </Link>
              <Link
                to="/signin"
                className="lg:block hidden py-2 mr-7 text-sm tracking-wide text-green-normal"
                aria-current="page"
              >
                Download Our App
              </Link>
              {user?.email ? (
                <Menu as="div" className="relative">
                  <div>
                    {/* <Menu.Button className="inline-flex w-full justify-center rounded-md pl-1 py-1 text-sm font-medium text-gray-700 focus:outline-none">
                      <img
                        className="rounded-full navbar-user-profile"
                        width={40}
                        src={user?.photoURL}
                        alt=""
                      />
                    </Menu.Button> */}
                    <Menu.Button className="inline-flex w-full justify-center rounded-md pl-1 py-1 text-sm font-medium text-gray-700 focus:outline-none">
                      {user?.photoURL ? (
                        <img
                          className="rounded-full navbar-user-profile"
                          width={40}
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <p className="bg-green-light inline-flex w-full justify-center rounded-full px-4 py-2 text-xl text-center font-bold text-white focus:outline-none ring-1 ring-lime-500 ring-offset-2">
                          {user?.displayName.slice(0, 1)}
                        </p>
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
                    <Menu.Items className="absolute right-0 z-10 bg-white mt-2 origin-top-right user-profile-menu rounded-[10px] profile-dropdown-container w-72 shadow-xl">
                      <div>
                        <div className="pb-1 m-4 user-dopdown-menu rounded-lg">
                          {/* <Menu.Item>
                            {user?.photoURL ? (
                              <img
                                className="mx-auto rounded-full mt-4 user-profile-dropdown-img"
                                width={70}
                                src={user?.photoURL}
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
                          </Menu.Item> */}
                          <Menu.Item>
                            {user?.photoURL ? (
                              <img
                                className="mx-auto rounded-full mt-4 user-profile-dropdown-img"
                                width={70}
                                src={user?.photoURL}
                                alt="My Profile"
                              />
                            ) : (
                              // <img
                              //     className="mx-auto rounded-full mt-4 user-profile-dropdown-img"
                              //     width={70}
                              //     src={avatar}
                              //     alt="My Profile"
                              // />

                              //   <p className="">
                              //   {user?.displayName.slice(0, 1)}
                              // </p>

                              <p className="inline-flex justify-center w-full pt-2">
                                <span className="bg-green-light rounded-full px-4 py-2 text-2xl text-center font-bold text-white focus:outline-none ring-1 ring-lime-500 ring-offset-2">
                                  {user?.displayName.slice(0, 1)}
                                </span>
                              </p>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <p className="text-xl mb-1 text-green-normal pt-3 text-center font-medium">
                                {user?.displayName}
                              </p>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <p className="text-sm text-center text-info text-[#3a3a3a] mb-4">
                                {user?.email}
                              </p>
                            )}
                          </Menu.Item>
                        </div>
                        {user && (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active
                                    ? "dropdown-item text-gray-900"
                                    : "text-[#414141]",
                                  "px-4 py-2 font-normal flex  items-center w-full hover:bg-green-100 border-l-4 border-transparent hover:border-l-4 hover:border-green-normal"
                                )}
                              >
                                <ImProfile className="mr-4 text-green-normal" />
                                My Profile
                              </a>
                            )}
                          </Menu.Item>
                        )}
                        {user ? (
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogOut}
                                className={classNames(
                                  active
                                    ? "dropdown-item text-gray-900"
                                    : "text-[#414141]",
                                  "px-4 py-2 font-normal flex  items-center mb-4 w-full hover:bg-green-100 border-l-4 border-transparent hover:border-l-4 hover:border-green-normal"
                                )}
                              >
                                <FiLogOut className="mr-4 text-green-normal" />{" "}
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={"/login"}
                                className={classNames(
                                  active
                                    ? "bg-[#fff] text-gray-900"
                                    : "text-[#414141]",
                                  "px-4 py-2 font-normal flex  items-center mb-4"
                                )}
                              >
                                <FiLogIn className="mr-4" /> Log in
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Menu as="div" className="relative">
                  <LinkBtn
                    to="/signin"
                    label="Sign In / Register"
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
          <Disclosure.Panel className="lg:hidden block bg-green-normal h-screen">
            <div id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link to="/#canada" className="movile-menu-link">
                  You are in Ottawa, Canada
                </Link>
                <Link to="/#services" className="movile-menu-link">
                  Our services
                </Link>
                <Link to="/save-hotels" className="movile-menu-link">
                  Saved Hotels
                </Link>
                <Link to="/about" className="movile-menu-link">
                  About us
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default SaveNavBar;
