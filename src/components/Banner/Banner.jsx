import { useTranslation } from "react-i18next";
import banner1 from "../../assets/images/find-place-img1.jpg";
import banner2 from "../../assets/images/find-place-img2.jpg";
import FindHotelForm from "./FindHotelForm";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white pt-11 lg:pb-0 pb-8 aaa-wrapper">
      <div className="grid lg:gap-8 xl:gap-8 lg:pt-2 lg:pb-0 lg:grid-cols-12 mx-auto">
        <div className="lg:mr-auto mx-auto place-self-center lg:col-span-7">
          <div className="grid grid-cols-2 rounded-lg lg:col-span-7 gap-3.5 overflow-hidden">
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full hover:scale-110 transition-all duration-500"
                src={banner1}
                alt="office content 1"
              />
            </div>
            <div className="overflow-hidden rounded-lg lg:mt-14">
              <img
                className="w-full hover:scale-110 transition-all duration-500"
                src={banner2}
                alt="office content 2"
              />
            </div>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5">
          <div className="text-right w-full">
            <div className="pb-4 lg:pt-0 pt-6">
              <h1 className="text-[3.3rem] font-bold text-gray-900 lg:leading-normal leading-[64px]">
                {t("FindthePlace")}
                <span className="mb-4 text-[2.2rem] font-bold text-green-normal block">
                  {t("youwanttogo")}
                </span>
              </h1>
            </div>
          </div>
          {/* <ContactForm /> */}
          <FindHotelForm />
        </div>
      </div>
    </section>
  );
};

export default Banner;
