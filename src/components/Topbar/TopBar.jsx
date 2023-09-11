import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import saudiFlag from "../../assets/images/flags/saudi.png";
import usaFlag from "../../assets/images/flags/usa.png";

const TopBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // multiple Language
  const { i18n } = useTranslation();
  const selectedLanguage = localStorage.getItem("lang");

  console.log(selectedLanguage, "manik");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setIsDropdown(false);
  };

  const { t } = useTranslation();

  // dropdown close by clicking outside
  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== dropdownRef.current.previousSibling
    ) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="bg-green-normal font-poppins text-sm relative z-[1010]">
      <div className="relative text-white aaa-wrapper py-1.5">
        <div className="mx-auto">
          <div className="flex items-center">
            <nav id="main-navigation" className="w-2/3">
              <ul className="flex items-center">
                <li className="mr-6">
                  <Link to="/about" className="lg:block hidden">
                    {t("about")}
                  </Link>
                </li>
                <li className="mr-6">
                  <Link to="/help" className="lg:block hidden">
                    {t("help")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="lg:block hidden">
                    {t("contactUs")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-1/3 flex justify-end items-center">
              <div className="dropdown mr-4">
                <div className="dropdown-toggle no-arrow cursor-pointer">
                  USD
                </div>
              </div>

              <div className="relative text-base">
                <button
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    e.stopPropagation(); // Stop event propagation
                    setIsDropdown(!isDropdown);
                  }}
                  className="flex items-center uppercase cursor-pointer w-14"
                >
                  <img
                    className="mr-2 w-6 border border-white shadow-lg"
                    src={selectedLanguage === "ar" ? saudiFlag : usaFlag}
                    alt="US"
                  />
                  {selectedLanguage === "ar" ? "AR" : "US"}
                </button>

                {/* multiple language start */}
                {isDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute lg:right-[-36px] right-[-11.7px] mt-1.5 border-x border-b border-green-normal bg-white"
                  >
                    <button
                      onClick={() => changeLanguage("ar")}
                      className="flex justify-center items-center gap-2.5 hover:bg-green-100 lg:px-12 px-6 py-0.5  text-black"
                    >
                      <img className="w-6 shadow-lg" src={saudiFlag} alt="" />
                      AR
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className="flex items-center justify-center gap-2.5 hover:bg-green-100 lg:px-12 px-6 py-0.5  text-black"
                    >
                      <img className="w-6 shadow-lg" src={usaFlag} alt="" />
                      US
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
