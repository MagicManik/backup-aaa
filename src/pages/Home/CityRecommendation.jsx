import { Link } from 'react-router-dom';
import background from '../../assets/images/statue.png';
import { useTranslation } from 'react-i18next';

const CityRecommendation = () => {
    const { t } = useTranslation();
    return (
        <div className="text-center my-16 px-4 aaa-wrapper">
            <div style={{ backgroundImage: `url(${background})` }} className=" bg-no-repeat bg-center bg-[#fef9e6] min-h-[21rem] md:min-h-[30rem] rounded-md py-9 md:py-14 flex flex-col items-center justify-between">
                <h6 className="text-[#f5c710] uppercase tracking-[0.12rem] md:tracking-[0.15rem] text-sm font-bold mb-2">{t("recommendedCity")}</h6>
                <div>
                    <h2 className="text-[#0e9749] mb-0 text-2xl md:text-3xl font-bold">{t("unitedStates")}</h2>
                    <h2 className="text-4xl md:text-6xl font-bold leading-none mb-5 mt-2">{t("newYork")}</h2>
                    <p className="uppercase text-sm md:text-base mb-3 max-w-[305px] md:max-w-[330px] lg:max-w-[350px] leading-loose">
                        {t("hotelsApartments")}
                    </p>
                </div>
                <Link href="#" className="cursor-pointer leading-none font-bold md:font-medium rounded-xl btn bg-[#f5c710] text-sm md:text-xl border-solid border-[#f5c710] border-2 px-5 py-3 md:py-4 text-white transition duration-[350ms] ease-in-out hover:bg-[#d6ad09] hover:border-[#caa308]">
                    {t("browseProperties")}
                </Link>
            </div>
        </div>
    );
};

export default CityRecommendation;