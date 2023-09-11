import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const WatchVideo = ({ icon }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end items-center gap-4 aaa-wrapper">
        <h4 className="text-xl font-bold text-green-normal">
          {t("WatchVideo")}
        </h4>
        <div>
          <div className="sidebar-animation-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center"
              href=""
              rel="noreferrer"
            >
              <img className="w-16" src={icon} alt="" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#020202c7] backdrop-blur z-[2222222] ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="absolute right-0 px-3.5 py-3.5 bg-[#181818] hover:bg-black transition-all duration-300 group"
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
                className="fill-[#cecece] group-hover:fill-[#fff] transition-all duration-300"
                d="M0.626953 2.56836L13.5273 15.4688C13.6445 15.5859 13.7845 15.6641 13.9473 15.7031C14.11 15.7422 14.2728 15.7422 14.4355 15.7031C14.5983 15.6641 14.7415 15.5827 14.8652 15.459C14.9889 15.3353 15.0703 15.1921 15.1094 15.0293C15.1484 14.8665 15.1484 14.7038 15.1094 14.541C15.0703 14.3783 14.9922 14.2383 14.875 14.1211L1.97461 1.2207C1.85091 1.10352 1.70768 1.02539 1.54492 0.986328C1.38216 0.947266 1.2194 0.947266 1.05664 0.986328C0.89388 1.01888 0.750651 1.10026 0.626953 1.23047C0.509766 1.35417 0.431641 1.4974 0.392578 1.66016C0.353516 1.82292 0.353516 1.98568 0.392578 2.14844C0.431641 2.3112 0.509766 2.45117 0.626953 2.56836ZM0.626953 14.1211C0.509766 14.2383 0.428385 14.3815 0.382812 14.5508C0.34375 14.7135 0.34375 14.8763 0.382812 15.0391C0.421875 15.2018 0.503255 15.3418 0.626953 15.459C0.750651 15.5827 0.89388 15.6641 1.05664 15.7031C1.2194 15.7422 1.38216 15.7422 1.54492 15.7031C1.70768 15.6641 1.85091 15.5859 1.97461 15.4688L14.875 2.56836C14.9922 2.45117 15.0703 2.3112 15.1094 2.14844C15.1484 1.97917 15.1484 1.81315 15.1094 1.65039C15.0703 1.48763 14.9889 1.34766 14.8652 1.23047C14.7415 1.10677 14.5951 1.02539 14.4258 0.986328C14.263 0.947266 14.1003 0.947266 13.9375 0.986328C13.7812 1.02539 13.6445 1.10352 13.5273 1.2207L0.626953 14.1211Z"
              ></path>
            </svg>
          </button>
          <div className="flex justify-center items-center h-full">
            <iframe
              className="w-full max-w-4xl aspect-video lg:p-0 p-4 outline-none border-none"
              src="https://www.youtube.com/embed/NpEaa2P7qZI?si=xXg6m13DT-F5qkdD"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

WatchVideo.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WatchVideo;
