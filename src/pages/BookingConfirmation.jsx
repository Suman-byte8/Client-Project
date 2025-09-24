import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchReservationById } from "../services/reservationApi";
import { getBookingType } from "../utils/bookingUtils";
import { slugToLabel } from "../utils/typeMapper";
import { downloadAcknowledgementPDF } from "../utils/pdf/acknowledgePDF";  
import { UserContext } from "../context/UserContext";

import LoadingState from "../components/Confirmation/LoadingState";
import ErrorState from "../components/Confirmation/ErrorState";
import SuccessHeader from "../components/Confirmation/SuccessHeader";
import BookingDetails from "../components/Confirmation/BookingDetails";
import ContactDetails from "../components/Confirmation/ContactDetails";
import ActionButtons from "../components/Confirmation/ActionButtons";

import { FaArrowLeft, FaFilePdf } from "react-icons/fa";

const BookingConfirmation = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState(null);
  const { getToken } = useContext(UserContext);

  const initialData = location.state?.bookingData || {};
  const bookingId = initialData._id || initialData.bookingId;

  useEffect(() => {
    const getBooking = async () => {
      if (!bookingId) {
        setError("No booking ID found");
        setLoading(false);
        return;
      }

      const token = getToken();
      const typeSlug = getBookingType(initialData);

      if (!typeSlug) {
        setError("Invalid booking type");
        toast.error("Invalid booking type");
        setLoading(false);
        return;
      }

      const result = await fetchReservationById(typeSlug, bookingId, token);

      if (result.error) {
        setError(result.error);
        toast.error(result.error);
      } else {
        setBooking(result.data);
      }

      setLoading(false);
    };

    getBooking();
  }, [bookingId, initialData]);

  const bookingData = booking || initialData;
  const typeSlug = getBookingType(bookingData);
  const typeLabel = slugToLabel(typeSlug);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  const handleDownloadPDF = () => {
    downloadAcknowledgementPDF(bookingData, typeSlug);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-helvetica-neue">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
        {/* Always show acknowledgement status here */}
        <SuccessHeader bookingType={typeLabel} status="acknowledgement" />

        <BookingDetails booking={booking} bookingData={bookingData} bookingType={typeSlug} />
        <ContactDetails bookingData={bookingData} />

        {bookingData.additionalDetails && (
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Additional Notes</h2>
            <p className="text-gray-600">{bookingData.additionalDetails}</p>
          </div>
        )}

        <ActionButtons bookingData={bookingData} bookingType={typeSlug} handleDownloadPDF={handleDownloadPDF} />

       

        <p className="text-center text-sm text-gray-500 mt-6">
          This acknowledgement confirms that we received your request. A final confirmation PDF will be sent to your email once our team approves your booking.
        </p>

        <Link
          to="/"
          className="text-blue-600 hover:underline text-center text-sm flex items-center gap-2 mt-6 justify-center"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;