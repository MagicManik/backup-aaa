import { useState } from "react";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import building from "../../assets/images/icons/building.svg";
import { regions } from "../../data/regionsData";
import Region from "./Region";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Properties = () => {
  const [activeTab, setActiveTab] = useState("region");
  const { t } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 px-4 py-16 aaa-wrapper">
      <div className="md:col-span-2">
        <div className="inline-flex mt-4 rounded-md overflow-hidden bg-green-white text-gray-light">
          <div
            className={`cursor-pointer py-2 px-4 text-center rounded-s-md ${activeTab === "region" && "bg-green-normal text-white"
              }`}
            onClick={() => handleTabClick("region")}
          >
            {t("region")}
          </div>

          <div
            className={`cursor-pointer py-2 px-4 text-center ${activeTab === "cities" && "bg-green-normal text-white"
              }`}
            onClick={() => handleTabClick("cities")}
          >
            {t("cities")}
          </div>
          <div
            className={`cursor-pointer py-2 px-4 text-center  ${activeTab === "place" && "bg-green-normal text-white"
              }`}
            onClick={() => handleTabClick("place")}
          >
            {t("placeofInterest")}
          </div>
        </div>

        <div className="mt-5">
          {activeTab === "region" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 md:gap-x-2">
              {regions.map((region) => (
                <Region key={region.id} region={region}></Region>
              ))}
            </div>
          )}

          {activeTab === "cities" && (
            <div className="bg-gray-200 p-4">
              <h2 className="text-2xl font-bold">Cities Section</h2>
            </div>
          )}

          {activeTab === "place" && (
            <div className="bg-gray-200 p-4">
              <h2 className="text-2xl font-bold">Place of Interest Section</h2>
            </div>
          )}
        </div>
      </div>

      <div
        className={`group cursor-pointer mt-10 lg:mt-4 p-4 md:p-10 bg-[#0e9749] hover:bg-[#0a6832] text-white rounded-xl text-center lg:text-left flex flex-col lg:flex-row justify-between lg:min-h-[20.6rem]`}
      >
        <div className="flex flex-col justify-between min-h-[10rem] md:min-h-[11.5rem]">
          <h6 className="uppercase text-sm tracking-[0.15rem] font-bold">
            {t("listYourProperty")}
          </h6>
          <div>
            <h2 className="mb-2 font-bold text-2xl lg:text-3xl">
              {t("enterYourPropertyHere")}
            </h2>
            <Link to={"/register"} className="font-bold text-xl lg:text-2xl mt-8 md:mt-10 md:mb-3">
              {t("signUp")}{" "}
              <img
                className="inline-flex items-center brightness-[0] invert w-[19px] ml-2 transition duration-[350ms] ease-in-out group-hover:translate-x-[0.5rem]"
                src={arrowRight}
                alt="List Your Property"
              />
            </Link>
          </div>
        </div>
        <div className="pt-5 md:pt-6 md:pe-2 flex justify-center justify-items-end">
          <img
            className="transition duration-[350ms] ease-in-out group-hover:translate-y-[1.5rem] w-48 h-28"
            src={building}
            alt="List Your Property"
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
