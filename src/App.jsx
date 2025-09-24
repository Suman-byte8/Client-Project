import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import OurRooms from "./pages/OurRooms";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OurFacilities from "./pages/Facilities";
import OfferPage from "./pages/OfferPage";
import ReservationPage from "./pages/ReservationPage";
import OurHeartMalda from "./pages/HeartMalda";
import Membership from "./pages/Membership";
import BookingConfirmation from "./pages/BookingConfirmation";
import GalleryPage from "./pages/GalleryPage";
import PrivacyPolicyPage from "./pages/Privacy Policy/PrivacyPolicyPage";
import TermsOfService from "./pages/Privacy Policy/TermsOfService";
import RoomViewPage from "./pages/RoomViewPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import MeetingPage from "./pages/SemiNavlinksPages/MeetingPage";
import WeddingPage from "./pages/SemiNavlinksPages/WeddingPage";
import SleepBoutique from "./pages/SemiNavlinksPages/SleepBoutique";
import ProtectedRoute from "./components/ProtectedRoute";

const AppContent = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/log-in" || location.pathname === "/sign-up";

  return (
    <div className="font-helvetica-neue">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-facilities" element={<OurFacilities />} />
        <Route path="/our-offers" element={<OfferPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/heart-malda" element={<OurHeartMalda />} />
        <Route
          path="/membership-area"
          element={
            <ProtectedRoute>
              <Membership />
            </ProtectedRoute>
          }
        />

        {/* 🔐 PROTECTED ROUTES */}
        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        <Route path="/our-rooms" element={<OurRooms />} />
        <Route path="/our-rooms/room-tour/:id" element={<RoomViewPage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/banquet-page" element={<MeetingPage />} />
        <Route path="/wedding-page" element={<WeddingPage />} />
        <Route path="/sleep-boutique" element={<SleepBoutique />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
};

export default App;