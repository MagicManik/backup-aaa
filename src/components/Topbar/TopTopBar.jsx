import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import saudiFlag from "../../assets/images/flags/saudi.png";
import flagImg from "../../assets/images/flags/usa.jpg";
import usaFlag from "../../assets/images/flags/usa.png";

const TopBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // multiple Language
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
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
    <section className="bg-green-normal font-poppins text-sm relative z-[100]">
      <div className="relative text-white py-[8px] aaa-wrapper">
        <div className="mx-auto">
          <div className="flex items-center">
            <nav id="main-navigation" className="w-2/3">
              <ul className="flex items-center">
                <li className="mr-6">
                  {/* ------------------------------------ */}

                  <div>
                    <h1>{t("hello")}</h1>
                    <p>{t("greet")}</p>
                  </div>
                  {/* ------------------- */}
                  <a className="lg:block hidden" href="about.html">
                    About
                  </a>
                </li>
                <li className="mr-6">
                  <a className="lg:block hidden" href="help.html">
                    Help
                  </a>
                </li>
                <li>
                  <a className="lg:block hidden" href="contact-us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="w-1/3 flex justify-end">
              <div className="dropdown mr-5">
                <div className="dropdown-toggle no-arrow cursor-pointer">
                  USD
                </div>
                {/* <div className="dropdown-menu rounded-0">
                                <div className="dropdown-item active cursor-pointer">USD</div>
                                <div className="dropdown-item cursor-pointer">EUR</div>
                                <div className="dropdown-item cursor-pointer">SAR</div>
                            </div> */}
              </div>

              <div className="dropdown">
                <div className="dropdown-toggle no-arrow cursor-pointer flex items-center">
                  <img className="mr-2" src={flagImg} alt="US" />
                  US
                </div>
                {/* multiple language start */}
                {isDropdown && (
                  <div className="border bg-white">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="flex items-center gap-2.5 hover:bg-green-100 px-12 py-1  text-black"
                    >
                      <img className=" w-6" src={saudiFlag} alt="" />
                      AR
                    </button>
                    <button
                      onClick={() => changeLanguage("es")}
                      className="flex items-center gap-2.5 hover:bg-green-100 px-12 py-1  text-black"
                    >
                      <img className="w-6" src={usaFlag} alt="" />
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
