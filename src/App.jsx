import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/Topbar/TopBar";
import BookingDetails from "./pages/BookingDetails/BookingDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Properties from "./pages/Home/Properties";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import MyBooking from "./pages/MyBooking/MyBooking";
import Payment from "./pages/Payment/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation/PaymentConfirmation";
import SearchResult from "./pages/SearchResult/SearchResult";
import SignIn from "./pages/UserAccount/SignIn/SignIn";
import SignUp from "./pages/UserAccount/SignUp/SignUp";
import UserProfile from "./pages/UserAccount/UserProfile/UserProfile";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/confirmation" element={<PaymentConfirmation />} />
        <Route path="/hotel-detail/:id" element={<HotelDetail />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Properties />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
