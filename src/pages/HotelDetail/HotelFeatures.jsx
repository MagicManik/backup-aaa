import PropTypes from "prop-types";
import airConditioning2 from "../../assets/images/icons/air-conditioner-green.svg";
import airConditioning from "../../assets/images/icons/air-conditioner.svg";
import bar from "../../assets/images/icons/bar-white.svg";
import bar2 from "../../assets/images/icons/bar.svg";
import party2 from "../../assets/images/icons/champagne-green.svg";
import party from "../../assets/images/icons/champagne.svg";
import atm2 from "../../assets/images/icons/credit-card-green.svg";
import atm from "../../assets/images/icons/credit-card.svg";
import familyRooms from "../../assets/images/icons/family-white.svg";
import familyRooms2 from "../../assets/images/icons/family.svg";
import gym2 from "../../assets/images/icons/gym-workout-green.svg";
import gym from "../../assets/images/icons/gym-workout.svg";
import currency2 from "../../assets/images/icons/hand-money-dollar-green.svg";
import currency from "../../assets/images/icons/hand-money-dollar.svg";
import disablePeople2 from "../../assets/images/icons/handicap-wheelchair-green.svg";
import disablePeople from "../../assets/images/icons/handicap-wheelchair.svg";
import spa2 from "../../assets/images/icons/hotel-spa-green.svg";
import spa from "../../assets/images/icons/hotel-spa.svg";
import lounge2 from "../../assets/images/icons/lounge-green.svg";
import lounge from "../../assets/images/icons/lounge.svg";
import parking2 from "../../assets/images/icons/parking-green.svg";
import parking from "../../assets/images/icons/parking.svg";
import plane2 from "../../assets/images/icons/plane-1-green.svg";
import plane from "../../assets/images/icons/plane-1.svg";
import waiter2 from "../../assets/images/icons/restaurant-waiter-green.svg";
import waiter from "../../assets/images/icons/restaurant-waiter.svg";
import restaurant from "../../assets/images/icons/restaurant-white.svg";
import restaurant2 from "../../assets/images/icons/restaurant.svg";
import roomService2 from "../../assets/images/icons/room-service-green.svg";
import roomService from "../../assets/images/icons/room-service.svg";
import hairSalon2 from "../../assets/images/icons/scissor-green.svg";
import hairSalon from "../../assets/images/icons/scissor.svg";
import serviceSupport2 from "../../assets/images/icons/services-support-green.svg";
import serviceSupport from "../../assets/images/icons/services-support.svg";
import shower2 from "../../assets/images/icons/shower-green.svg";
import shower from "../../assets/images/icons/shower.svg";
import singleBed2 from "../../assets/images/icons/single-bed-green.svg";
import singleBed from "../../assets/images/icons/single-bed.svg";
import smokeFree from "../../assets/images/icons/smoke-free-white.svg";
import smokeFree2 from "../../assets/images/icons/smoke-free.svg";
import swimming2 from "../../assets/images/icons/swimming-green.svg";
import swimming from "../../assets/images/icons/swimming.svg";
import tennis2 from "../../assets/images/icons/table-tennis-green.svg";
import tennis from "../../assets/images/icons/table-tennis.svg";
import breakfast2 from "../../assets/images/icons/tea-hot-green.svg";
import breakfast from "../../assets/images/icons/tea-hot.svg";
import television2 from "../../assets/images/icons/television-green.svg";
import television from "../../assets/images/icons/television.svg";
import washingMachine2 from "../../assets/images/icons/washing-machine-green.svg";
import washingMachine from "../../assets/images/icons/washing-machine.svg";
import wifiSignal2 from "../../assets/images/icons/wifi-signal-green.svg";
import wifiSignal from "../../assets/images/icons/wifi-signal.svg";
import wifi from "../../assets/images/icons/wifi-white.svg";
import wifi2 from "../../assets/images/icons/wifi.svg";
import FacilityInfo from "../../components/FacilityInfo/FacilityInfo";
import Map from "../../components/Map/Map";
import MoreFeatures from "../../components/MoreFeatures/MoreFeatures";

const HotelFeatures = ({ facilitiesData, Latitude, Longitude }) => {
  console.log(facilitiesData, "facilities");
  const facilityImages = {
    "Laundry Services": washingMachine,
    "Free Wifi": wifiSignal,
    "Single Bed": singleBed,
    "Private Bathroom": shower,
    "Air Conditioning": airConditioning,
    Internet: wifi,
    "WiFi in all areas": wifi,
    "Family Rooms": familyRooms,
    Restaurant: restaurant,
    Parking: parking,
    Banquet: waiter,
    Bar: bar,
    Tennis: tennis,
    "Fitness Facility": gym,
    Breakfast: breakfast,
    "Disable Friendly": disablePeople,
    "Airport Shuttle": plane,
    "Swimming Pool": swimming,
    "Business Center": serviceSupport,
    "Currency Exchange": currency,
    "Room service": roomService,
    "Non Smoking": smokeFree,
    Spa: spa,
    HairSalon: hairSalon,
    ATM: atm,
    "Night Club": party,
    Lounge: lounge,
    Television: television,
  };

  const facilityImages2 = {
    Restaurant: restaurant2,
    Bar: bar2,
    "Non Smoking": smokeFree2,
    Internet: wifi2,
    "WiFi in all areas": wifi2,
    "Family Rooms": familyRooms2,
    "Laundry Services": washingMachine2,
    "Free Wifi": wifiSignal2,
    "Single Bed": singleBed2,
    "Private Bathroom": shower2,
    "Air Conditioning": airConditioning2,
    Parking: parking2,
    Banquet: waiter2,
    Tennis: tennis2,
    "Fitness Facility": gym2,
    Breakfast: breakfast2,
    "Disable Friendly": disablePeople2,
    "Airport Shuttle": plane2,
    "Swimming Pool": swimming2,
    "Business Center": serviceSupport2,
    "Currency Exchange": currency2,
    "Room service": roomService2,
    Spa: spa2,
    HairSalon: hairSalon2,
    ATM: atm2,
    "Night Club": party2,
    Lounge: lounge2,
    Television: television2,
  };

  const displayedFacilities = facilitiesData
    ?.filter((facility) => facility.Name in facilityImages)
    .slice(0, 5);

  const remainingFacilities = facilitiesData
    ?.filter((facility) => facility.Name in facilityImages2)
    .slice(5, 11);

  return (
    <>
      <div className="px-2 py-3 lg:p-4 bg-[#0e9749] rounded-2xl text-white">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-5">
          {displayedFacilities?.map((facility) => (
            <FacilityInfo
              key={facility.Id}
              title={facility.Name}
              img={facilityImages[facility.Name]}
              height="40px"
              width="40px"
            />
          ))}
        </div>
      </div>

      {/* More Facilities */}
      <div className="flex flex-wrap -mx-4">
        <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[41.66%] lg:max-w-[0] px-4 mt-10">
          {facilitiesData?.length > 5 && (
            <h3 className="uppercase tracking-widest text-[#1C1C1C] text-xl font-bold mb-7">
              MORE FACILITY
            </h3>
          )}
          {remainingFacilities?.slice(0, 6).map((facility) => (
            <MoreFeatures
              key={facility.Id}
              title={facility.Name}
              img={facilityImages2[facility.Name]}
              color="#0e9749"
              height="30px"
              width="30px"
            />
          ))}
        </div>

        {/* Map */}
        <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[58.33%] lg:max-w-[0] px-4 mt-16">
          <Map height={470} lati={Latitude} longi={Longitude} />
        </div>
      </div>

      {/* Write Review */}
      <div className="lg:p-4 mt-11 rounded-2xl">
        <h3 className="text-[#1C1C1C] text-xl lg:text-2xl font-bold mb-2">
          Write a Review
        </h3>

        <div className="md:flex items-center gap-10 justify-between">
          <div>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
          </div>
          <button className="cursor-pointer bg-[#f5c710] mt-5 md:mt-0 py-3.5 md:py-4 px-7 text-white text-sm rounded-xl hover:bg-[#caa308] hover:border-[#0a6832] md:w-full max-w-fit font-medium transition duration-[350ms] ease-in-out focus:bg-[#caa308] focus:border-[#0a6832] focus:shadow-[0_0_0_0.2rem_rgba(14,151,73,0.25)]">
            Write a review
          </button>
        </div>
      </div>
    </>
  );
};

HotelFeatures.propTypes = {
  facilitiesData: PropTypes.array,
};

export default HotelFeatures;
