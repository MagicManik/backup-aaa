import { useTranslation } from "react-i18next";
import appleLogo from "../../assets/images/icons/apple.svg";
import arrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import discountImg from "../../assets/images/icons/discount.png";
import globIcon from "../../assets/images/icons/globe.svg";
import playStorLogo from "../../assets/images/icons/google-play.svg";
import hoursIcon from "../../assets/images/icons/open-24-hours.svg";
import walletIcon from "../../assets/images/icons/wallet.svg";

const DiscountOffer = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:py-16 pt-16 pb-7 aaa-wrapper">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 col-span-12 hover:bg-green-dark bg-green-normal transition-all duration-500 rounded-lg px-10 py-10 text-white">
          <h6 className="text-base lg:text-left text-center font-bold uppercase">
            {t("RecommendforDiscount")}
          </h6>
          <img
            className="pt-8 pb-4 lg:mr-auto mx-auto"
            width={96}
            src={discountImg}
            alt=""
          />
          <h2 className="text-2xl font-bold lg:text-left text-center">
            {t("Signupnowandgetupto25%discount")}
          </h2>
          {/* <button className='pt-7 text-xl font-bold flex justify-center'>
                        Sign Up
                        <img width={18} className='text-white ml-4' src={arrowRightIcon} alt="" />
                    </button> */}

          <button className="font-bold text-xl mt-7 md:mt-10 md:mb-3 mx-auto w-full">
            {t("Signup")}
            <img
              className="inline-flex items-center brightness-[0] invert w-[19px] ml-2 transition duration-[350ms] ease-in-out group-hover:translate-x-[0.5rem]"
              src={arrowRightIcon}
              alt="List Your Property"
            />
          </button>
        </div>

        <div className="lg:col-span-9 col-span-12">
          <section className="bg-green-white mb-3 rounded-lg">
            <div className="px-4 mx-auto max-w-screen-xl">
              <h5 className="text-lg font-bold text-green-normal px-2 py-5">
                {t("Whatyouwillget")}
              </h5>
              <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
                <div className="max-w-sm p-2">
                  <img className="mb-4" width={70} src={walletIcon} alt="" />
                  <a href="#">
                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 ">
                      {t("Newdealslisted")}
                      <br />
                      {t("dailyforeverysinglebudget")}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal">
                    Lorem ipsum dolor sit amet, ctetuer adipiscing elit.
                  </p>
                </div>

                <div className="max-w-sm p-2 ">
                  <img className="mb-4" width={70} src={globIcon} alt="" />
                  <a href="#">
                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 ">
                      {t("1,39,514properties")} <br /> {t("aroundtheworld")}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal">
                    Lorem ipsum dolor sit amet, ctetuer adipiscing elit.
                  </p>
                </div>

                <div className="max-w-sm p-2 ">
                  <img className="mb-4" width={70} src={hoursIcon} alt="" />
                  <a href="#">
                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
                      {" "}
                      {t("wearehere")} <br /> {t("tohelpyou")}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal">
                    Lorem ipsum dolor sit amet, ctetuer adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex lg:flex-row flex-col gap-6 bg-green-white p-5 rounded-lg">
            <div className="flex-1">
              <h4 className="text-xl font-medium mb-2">
                <span className="text-2xl block font-bold">{t("download")}</span>
                {t("ourappnow")}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>

            <a
              className="flex items-center gap-4 whitespace-nowrap font-bold hover:underline"
              href=""
            >
              <img width={30} src={appleLogo} alt="" />
              {t("downloadfrom")} <br /> Apple Store
            </a>

            <a
              className="flex items-center gap-4 whitespace-nowrap font-bold hover:underline"
              href=""
            >
              <img width={30} src={playStorLogo} alt="" />
              {t("downloadfrom")} <br /> Play Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountOffer;
