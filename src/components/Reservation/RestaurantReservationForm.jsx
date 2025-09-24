import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import FullLogo from "../FullLogo";
import BookingButton from "./BookingButton";
import { DinerCount } from "./RestaurantReservation/components/DinerCount";
import { DateSelection } from "./RestaurantReservation/components/DateSelection";
import { TimeSlotSelection } from "./RestaurantReservation/components/TimeSlotSelection";
import { SpecialRequests } from "./RestaurantReservation/components/SpecialRequests";
import { AdditionalDetails } from "./RestaurantReservation/components/AdditionalDetails";
import { GuestInformation } from "./RestaurantReservation/components/GuestInformation";
import { TermsAndConditions } from "./RestaurantReservation/components/TermsAndConditions";
import { createReservation } from "../../services/reservationApi";
import { UserContext } from "../../context/UserContext";

export default function RestaurantReservationForm({ onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [numberOfDiners, setNumberOfDiners] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [agreeToTnC, setAgreeToTnC] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getToken } = useContext(UserContext);

  const validateForm = () => {
    if (!timeSlot) {
      toast.error("Please select a time slot.");
      return false;
    }
    if (!guestName || !guestPhoneNumber || !guestEmail || !agreeToTnC) {
      toast.error("Please fill in all required fields and agree to the terms.");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setNumberOfDiners(1);
    setTimeSlot("");
    setSpecialRequests("");
    setAdditionalDetails("");
    setGuestName("");
    setGuestPhoneNumber("");
    setGuestEmail("");
    setAgreeToTnC(false);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      if (!validateForm()) {
        setIsLoading(false);
        return;
      }

      // Map time slot to valid enum values
      const mappedTimeSlot = timeSlot === "18:00" ? "Dinner" : timeSlot === "12:00" ? "Lunch" : "Breakfast";

      const formData = {
        typeOfReservation: "restaurant",
        noOfDiners: numberOfDiners,
        date: selectedDate.toISOString(),
        timeSlot: mappedTimeSlot,
        specialRequests,
        additionalDetails,
        guestInfo: {
          name: guestName,
          phoneNumber: guestPhoneNumber,
          email: guestEmail,
        },
        agreeToTnC,
      };

      const token = getToken();
      const { data, error } = await createReservation("restaurant", formData, token);

      if (error) {
        toast.error(error);
        setIsLoading(false);
        return;
      }

      toast.success("Reservation created successfully!");
      onSubmit(data);
      resetForm();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8">
      <FullLogo text={"xs"} />

      {/* Main Booking Details */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 mt-4">
        <DateSelection
          selectedDate={selectedDate}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          onDateSelect={(date) => {
            setSelectedDate(date);
            setShowCalendar(false);
          }}
        />
        <TimeSlotSelection
          timeSlot={timeSlot}
          setTimeSlot={setTimeSlot}
        />
      </div>

      {/* Diner Count */}
      <div className="mb-6">
        <DinerCount
          numberOfDiners={numberOfDiners}
          setNumberOfDiners={setNumberOfDiners}
        />
      </div>

      {/* Special Requests & Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SpecialRequests
          specialRequests={specialRequests}
          setSpecialRequests={setSpecialRequests}
        />
        <AdditionalDetails
          additionalDetails={additionalDetails}
          setAdditionalDetails={setAdditionalDetails}
        />
      </div>

      {/* Guest Information */}
      <div className="mb-6">
        <GuestInformation
          guestName={guestName}
          guestPhoneNumber={guestPhoneNumber}
          guestEmail={guestEmail}
          setGuestName={setGuestName}
          setGuestPhoneNumber={setGuestPhoneNumber}
          setGuestEmail={setGuestEmail}
        />
      </div>

      {/* Terms and Conditions */}
      <div className="mb-6">
        <TermsAndConditions
          agreeToTnC={agreeToTnC}
          setAgreeToTnC={setAgreeToTnC}
        />
      </div>

      <BookingButton
  text={"Place Your Reservation"}
  onSubmit={handleSubmit}   // ✅ pass the function
  isLoading={isLoading}
/>
    </div>
  );
}
