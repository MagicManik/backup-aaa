import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import headphone from "../../assets/images/icons/headphone.png";
import heartIcon from "../../assets/images/icons/heart-line.svg";
import locationIcon from "../../assets/images/icons/location.svg";
import shareIcon from "../../assets/images/icons/share.svg";
import starIcon from "../../assets/images/icons/star.svg";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import GuestReview from "../../components/GuestReview/GuestReview";
import HotelCard from "../../components/HotelCard/HotelCard";
import HotelOverviewCarousel from "../../components/HotelOverviewCarousel/HotelOverviewCarousel";
import HotelSearchFilters from "../../components/HotelSearchFilters/HotelSearchFilters";
import Questions from "../../components/Questions/Questions";
import { useHotelRQ } from "../../requests/useHotelRQ";
import HotelFeatures from "./HotelFeatures";
import ReserveRoomModal from "./ReserveRoomModal";
import { useTranslation } from "react-i18next";

const HotelDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const decodedHotelId = decodeURIComponent(id);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hotelAddress, setHotelAddress] = useState("");
  const [reFetch, setReFetch] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationParam = queryParams.get("location");
  const radiusParam = queryParams.get("radius");
  const checkInParam = queryParams.get("checkIn");
  const checkOutParam = queryParams.get("checkOut");
  const trackingId = queryParams.get("trackingId");
  const guestNationalityParam = queryParams.get("guest_nationality");
  // convert occupancies as array
  const occupanciesParam = queryParams.get("occupancies");
  const occupanciesArray = JSON.parse(occupanciesParam);

  // import for call hotel detail api
  const {
    isLoading,
    isError,
    mutate,
    data: hotelDetail,
  } = useHotelRQ("/hotel-contents");

  // import for call hotel availability or rooms api
  const {
    isLoading: isRoomsLoading,
    isError: roomsError,
    mutate: roomsMutate,
    data: rooms,
  } = useHotelRQ("/availability");

  // distructure hotelDetails
  const {
    PropertyType,
    Name,
    Rating,
    AddressLine1,
    CityName,
    PostalCode,
    CountryName,
    Description,
    PrimaryPhoto,
    photos = [],
    Latitude,
    Longitude
  } = hotelDetail?.gtrs_contents || {};

  // pslit hotel description
  const splittedDescription = Description?.split("\n\n");
  // remove alphabet from rating


  //   const rating = Rating?.replace(/\D/g, "");
  const ratingString = Rating?.replace(/\D/g / 0, "");
  const ratingNumber = parseFloat(ratingString);
  const ratingNumberCeil = Math.ceil(ratingNumber);

  // get rooms
  const hotelRooms = rooms?.rooms;

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // call hotel detail api
  useEffect(() => {
    mutate({ hotel_id: decodedHotelId });
  }, [decodedHotelId]);
  // hotel detail api call closed

  // new rooms api call start
  useEffect(() => {
    roomsMutate({
      tracking_id: trackingId,
      hotel_id: decodedHotelId,
      checkIn: checkInParam,
      checkOut: checkOutParam,
      occupancies: occupanciesArray,
      guest_nationality: guestNationalityParam,
    });
  }, [decodedHotelId]);
  // new rooms api call closed

  useEffect(() => {
    const fulladdress = `${AddressLine1 === null ? "" : AddressLine1} ${CityName === null ? "" : CityName
      } ${PostalCode === null ? "" : PostalCode} ${CountryName === null ? "" : CountryName
      }`;
    setHotelAddress(fulladdress);
  }, [AddressLine1, CityName, PostalCode, CountryName]);

  // facilites data
  const [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    const facilitiesList =
      hotelDetail?.supplier_basic_contents?.Facilities_data;
    setFacilitiesData(facilitiesList);
  }, [hotelDetail]);

  // fetch related hotel by calling search api
  // facilites data
  // load hotels
  const {
    isLoading: isSearchLoading,
    mutate: searchMutate,
    data: searchData,
  } = useHotelRQ("/search");
  const hotels = searchData?.data;

  useEffect(() => {
    searchMutate({
      location: locationParam,
      radius: radiusParam,
      checkIn: checkInParam,
      checkOut: checkOutParam,
      occupancies: occupanciesArray,
      guest_nationality: guestNationalityParam,
    });
  }, []);

  if (isError) {
    return <span>Oops! Something is wrong....</span>;
  }

  return (
    <main className="text-base text-[#1c1c1c] bg-white">
      <div className=" border-y border-gray-200 py-[15px]">
        <div className="aaa-wrapper">
          <Breadcrumb hotelAddress={CityName} detailHotelName={Name} />
        </div>
      </div>
      <div className="aaa-wrapper">
        {isLoading ? (
          <Box className="mx-auto flex justify-center my-7">
            <CircularProgress />
          </Box>
        ) : (
          <div className="py-10 md:py-12">
            <div className="flex flex-wrap -mx-4">
              <div className="min-w-[100%] lg:min-w-[41.66%] lg:max-w-[0] px-4 mb-10 lg:mb-0">
                <h1 className="tracking-widest uppercase text-[#0e9749] text-sm font-bold mb-2">
                  {PropertyType}
                </h1>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-[#1C1C1C] text-3xl lg:text-4xl font-bold leading-snug">
                    {Name}
                  </h3>

                  {ratingNumberCeil && <span className="flex items-center gap-1 bg-[#f5c710] text-white text-xs font-semibold mr-2 md:mr-1.5 lg:mr-2 mb-2 px-[7px] md:px-2 py-[3px] rounded">
                    {[...Array(ratingNumberCeil)].map((rating, i) => (
                      <img key={`rating${i}`} width={13} src={starIcon} alt="" />
                    ))}
                    <img width={13} src={starIcon} alt="" />

                    {/* {ratingNumber} */}
                  </span>}


                </div>

                <div className="flex items-baseline gap-1.5 mb-5">
                  <img width={12} src={locationIcon} alt="" />
                  <p>
                    {AddressLine1} {CityName} {PostalCode} {CountryName}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <div className="flex items-center gap-5 mb-2">
                    <h1 className="tracking-widest uppercase text-[#1C1C1C] text-sm font-bold">
                      {t("DESCRIPTION")}
                    </h1>

                    <button
                      className="cursor-pointer bg-[#0e9749] py-1.5 px-3.5 md:px-5 text-white text-sm rounded-md hover:bg-[#0b7438] hover:border-[#0a6832] md:w-full max-w-fit font-medium transition duration-[350ms] ease-in-out focus:bg-[#0b7438] focus:border-[#0a6832] focus:shadow-[0_0_0_0.2rem_rgba(50,167,100,0.5)] lg:hidden"
                      onClick={handleCollapse}
                    >
                      {isCollapsed ? "Read less" : "Read More"}
                    </button>
                  </div>

                  <div
                    className={`${isCollapsed ? "block" : "hidden lg:block"
                      } text-justify transition duration-[350ms] ease-in-out`}
                  >
                    {splittedDescription?.map((paragraph, index) => (
                      <p className="mb-3" key={`desp${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-5 mt-10 cursor-pointer">
                    <button className="bg-[#f2faf5] focus:bg-[#cdecd9] focus:shadow-[0_0_0_0.2rem_rgba(14,151,73,0.25)] py-4 px-4 rounded-full text-[#0e9749]">
                      <img
                        className="font-bold w-6 lg:w-[28px] fill-[#0e9749]"
                        src={heartIcon}
                        alt=""
                      />
                    </button>
                    <button className="bg-[#f2faf5] focus:bg-[#cdecd9] focus:shadow-[0_0_0_0.2rem_rgba(14,151,73,0.25)] py-4 px-4 rounded-full">
                      <img
                        className="font-bold w-6 lg:w-[28px] lg:h-[28px]"
                        src={shareIcon}
                        alt=""
                      />
                    </button>

                    {/* Modal */}
                    <ReserveRoomModal
                      rooms={hotelRooms}
                      occupancies={occupanciesArray}
                      isLoading={isRoomsLoading}
                      roomsError={roomsError}
                      checkIn={checkInParam}
                      checkOut={checkOutParam}
                      Name={Name}
                      Rating={Rating}
                      hotelAddress={hotelAddress}
                      photos={photos}
                    />
                  </div>
                </div>
              </div>

              {/* Image Slider Carousel */}
              <div className="min-w-[100%] lg:min-w-[58.33%] lg:max-w-[0] px-4 lg:mb-0">
                <HotelOverviewCarousel
                  PrimaryPhoto={PrimaryPhoto}
                  photos={photos}
                />
                {/* react | share | modal btn for mobile devices  */}
                <div className="min-w-[100%] lg:min-w-[58.33%] lg:max-w-[0] px-4 lg:mb-0">
                  <div className="flex items-center gap-5 lg:justify-end justify-between lg:hidden pt-6">
                    <button className="bg-[#f2faf5] focus:bg-[#cdecd9] focus:shadow-[0_0_0_0.2rem_rgba(14,151,73,0.25)] py-4 px-4 rounded-full text-[#0e9749]">
                      <img
                        className="font-bold w-6 lg:w-[28px] fill-[#0e9749]"
                        src={heartIcon}
                        alt=""
                      />
                    </button>
                    <button className="bg-[#f2faf5] focus:bg-[#cdecd9] focus:shadow-[0_0_0_0.2rem_rgba(14,151,73,0.25)] py-4 px-4 rounded-full">
                      <img
                        className="font-bold w-6 lg:w-[28px]"
                        src={shareIcon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2nd Section - search inputs */}
        {hotelDetail && (
          <HotelSearchFilters
            trackingId={trackingId}
            decodedHotelId={decodedHotelId}
            checkInParam={checkInParam}
            checkOutParam={checkOutParam}
            occupanciesArray={occupanciesArray}
            guestNationalityParam={guestNationalityParam}
            // divided
            hotelName={Name}
            hotelRooms={hotelRooms}
            photos={photos}
            Rating={Rating}
            hotelAddress={hotelAddress}
            reFetch={reFetch}
            setReFetch={setReFetch}
          />
        )}

        {/* 3rd Section - Review and Facilities */}
        <div className="pt-10 md:pt-12">
          <div className="flex flex-wrap -mx-4">
            <div className="min-w-[100%] lg:min-w-[33.33%] lg:max-w-[0] px-4 md:mb-0">
              <h3 className="uppercase tracking-widest text-[#1C1C1C] text-xl md:text-2xl font-bold leading-snug mb-10">
                Guest Reviews
              </h3>
              <div>
                <GuestReview />
                <GuestReview />
                <GuestReview />
                <GuestReview />
                <GuestReview />
                <GuestReview />
                <div className="mt-5 text-right">
                  <button className="mb-2 cursor-pointer bg-none focus:bg-none text-[#0e9749] opacity-50 hover:opacity-100 text-xl md:w-full max-w-fit font-medium transition duration-[350ms] ease-in-out">
                    view more reviews
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="min-w-[100%] lg:min-w-[66.67%] lg:max-w-[0] px-4 lg:pl-10 mt-10 lg:mt-0 lg:mb-0">
              <HotelFeatures facilitiesData={facilitiesData} Latitude={Latitude} Longitude={Longitude} />
            </div>
          </div>
        </div>

        {/* 4th Section - Questions */}
        <div className="py-12">
          <h3 className="uppercase tracking-widest text-[#1C1C1C] text-xl lg:text-2xl font-bold leading-snug mb-3.5">
            DO YOU HAVE ANY QUESTIONS?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            {/* Questions */}
            <div className="md:col-span-2 lg:pr-10">
              <Questions
                question="Are you able to leave
                your bags there on the last day after checking out before a late flight home?"
                answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus."
                phnMinWidth="400%"
                phnMaxWidth="500%"
                answerPadding="pl-7"
              />
              <Questions
                question="Are there hairdryers in
                    the apartments?"
                answer="Hi ! yes we have hair dryers in the apartment!"
                phnMinWidth="150%"
                phnMaxWidth="500%"
                answerPadding="pl-[34px]"
              />
              <Questions
                question="The 2 beds are on 2
                    separates rooms? With privacy each other?"
                answer="Hi, The apartment is a studio lay out. There is an
                    alcove bed and a murphy pull out bed the only thing that separates the two would be
                    a curtain."
                phnMinWidth="250%"
                phnMaxWidth="500%"
                answerPadding="pl-[34px]"
              />
            </div>

            {/* Section Card */}
            <div
              className={`group cursor-pointer mt-10 lg:mt-5 p-4 md:p-10 bg-[#0e9749] hover:bg-[#0a6832] text-white rounded-xl text-center lg:text-left flex flex-col lg:flex-row lg:gap-3 justify-between lg:min-h-[22rem] lg:max-h-[22rem]`}
            >
              <div className="flex flex-col justify-between min-h-[10rem] md:min-h-[11.5rem]">
                <h6 className="uppercase text-sm tracking-[0.15rem] font-bold">
                  About Welive Wall Street
                </h6>
                <div>
                  <h2 className="mb-2 font-bold text-2xl lg:text-3xl">
                    Do You have any question to ask
                  </h2>
                  <h4 className="font-bold text-xl lg:text-2xl mt-8 md:mt-10 md:mb-3">
                    Ask A Question{" "}
                    <img
                      className="inline-flex items-center brightness-[0] invert w-[19px] ml-2 transition duration-[350ms] ease-in-out group-hover:translate-x-[0.5rem]"
                      src={arrowRight}
                      alt="List Your Property"
                    />
                  </h4>
                </div>
              </div>
              <div className="pt-5 md:pt-6 md:pe-2 flex justify-center justify-items-end">
                <img
                  className="transition duration-[350ms] ease-in-out group-hover:translate-y-[1.5rem] group-hover:bg-[#0a6832] lg:w-48 h-28"
                  src={headphone}
                  alt="List Your Property"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5th box - Related Hotels */}
        <div className="pt-12">
          <h3 className="uppercase tracking-widest text-[#1C1C1C] text-xl lg:text-2xl font-bold leading-snug mb-9">
            Related Hotels
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-y-12 gap-8">
            <HotelCard
              isLoading={isSearchLoading}
              hotels={hotels}
              location={locationParam}
              radius={radiusParam}
              checkIn={checkInParam}
              checkOut={checkOutParam}
              occupancies={occupanciesArray}
              guestNationality={guestNationalityParam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

HotelDetail.propTypes = {
  Latitude: PropTypes.number,
  Longitude: PropTypes.number,
};

export default HotelDetail;
