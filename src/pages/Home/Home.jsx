import playIcon from "../../assets/images/icons/play.svg";
import Banner from "../../components/Banner/Banner";
import WatchVideo from "../../components/WatchVideo/WatchVideo";
import BrowseCountries from "./BrowseCountries";
import BrowseHotels from "./BrowseHotels";
import BrowseProperties from "./BrowseProperties";

import CityRecommendation from "./CityRecommendation";
import DiscountOffer from "./DiscountOffer";

const Home = () => {
  return (
    <>
      <main className="font-poppins">
        <Banner />
        <WatchVideo icon={playIcon} />
        <DiscountOffer />
        <BrowseCountries />
        <BrowseProperties />
        <BrowseHotels />
        <CityRecommendation />
      </main>
    </>
  );
};

export default Home;
