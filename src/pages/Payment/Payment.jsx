import { Navigate, useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import useUser from "../../hooks/useUser";
import BookingSummary from "./BookingSummary";
import GuestInputs from "./GuestInputs";

const Payment = () => {
  const [user] = useUser();
  const location = useLocation();

  const { id } = useParams();
  const uId = decodeURIComponent(id);
  const trackingId = sessionStorage.getItem("trackingId");
  const storedPriceJSON = sessionStorage.getItem("price");
  const priceParse = JSON.parse(storedPriceJSON);
  const price = priceParse.amount;
  const currency = priceParse.currency;
  const occupanciesSession = sessionStorage.getItem("occupancies");
  const occupancies = JSON.parse(occupanciesSession);
  const facilitiesJson = sessionStorage.getItem("facilities");
  const facilities = JSON.parse(facilitiesJson);
  const room = sessionStorage.getItem("room");
  const rateType = sessionStorage.getItem("ratetype");
  const checkInDate = sessionStorage.getItem("checkIn");
  const checkOutDate = sessionStorage.getItem("checkOut");
  const hotelName = sessionStorage.getItem("name");
  const rating = sessionStorage.getItem("rating");
  const hotelAddress = sessionStorage.getItem("address");
  const photo = sessionStorage.getItem("photo");

  // get this valu to check quickly is user logged in or not
  const loginKey = localStorage.getItem("login_key");
  const memberId = localStorage.getItem("member_id");

  if (!loginKey || !memberId || !user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return (
    <main className="text-base text-[#1c1c1c] bg-[#f5f8ff] py-6">
      <div className="aaa-wrapper">
        <div className="bg-white rounded-lg lg:px-8 px-4 border-solid border border-[#e8e8e8]">
          <div className="py-4">
            <Breadcrumb hotelAddress={hotelAddress} hotelName={hotelName} />
          </div>
        </div>
        <div className="lg:flex gap-4">
          <div className="min-w-[100%] lg:min-w-[66%] lg:max-w-[0]">
            {/* payment inputs */}
            <GuestInputs
              email={user?.email}
              memberId={user?.member_id}
              uId={uId}
              trackingId={trackingId}
              price={price}
              occupancies={occupancies}
            />
          </div>

          {/* 2nd */}
          {/* <PaymentDetails /> */}
          <div className="min-w-[100%] lg:min-w-[32.95%] lg:max-w-[0]">
            <BookingSummary
              price={price}
              currency={currency}
              room={room}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              facilities={facilities}
              rateType={rateType}
              occupancies={occupancies}
              hotelName={hotelName}
              rating={rating}
              hotelAddress={hotelAddress}
              photo={photo}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
