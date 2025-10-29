import React, { useState, useContext } from "react";
import { toast } from 'react-hot-toast';
import {
  FaBuilding,
  FaCalendarAlt,
  FaUser,
  FaInfoCircle,
  FaBed,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Calendar from "./Calender";
import FullLogo from "../FullLogo";
import BookingButton from "./BookingButton";
import { createReservation } from "../../services/reservationApi";
import { UserContext } from "../../context/UserContext";

export default function MeetingWeddingForm({ onSubmit }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow); // Initialize with tomorrow's date
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [requiresRooms, setRequiresRooms] = useState(null); // null, true, or false
  const [isLoading, setIsLoading] = useState(false);

  const { getToken } = useContext(UserContext);

  const eventOptions = [
    "Marriage",
    "Reception",
    "Birthday",
    "Office Meeting",
  ];

  // Add this function to update end date when start date changes
  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Set end date to the next day of the selected start date
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    setEndDate(nextDay);
    setShowStartCalendar(false);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // Form validation
      if (!name || !phoneNumber || !email) {
        toast.error('Please fill in all contact information');
        setIsLoading(false);
        return;
      }

      const formData = {
        typeOfReservation: selectedEvent || 'Other',
        reservationDate: startDate.toISOString(),
        reservationEndDate: endDate.toISOString(),
        numberOfRooms,
        numberOfGuests,
        additionalDetails,
        guestInfo: {
          name,
          phoneNumber,
          email
        },
        agreeToTnC: true, // Assuming user agrees to terms by submitting
        requiresRooms,
      };

      const token = getToken();
      const { data, error } = await createReservation("meeting", formData, token);

      if (error) {
        toast.error(error);
        setIsLoading(false);
        return;
      }

      toast.success('Booking request submitted successfully!');
      onSubmit({
        ...data,
        bookingId: data._id
      });
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Something went wrong with the booking request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FullLogo text={"xs"} />
        {/* Nature of Event */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NATURE OF EVENT
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 text-gray-700">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="flex-1 outline-none bg-transparent"
            >
              <option value="">Select Event Type</option>
              {eventOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NO OF GUESTS
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(parseInt(e.target.value) || 0)}
              className="flex-1 outline-none bg-transparent text-gray-700"
              min="0"
              placeholder="Enter number of guests"
            />
            <FaInfoCircle className="text-gray-400 ml-auto" />
          </div>
        </div>

        {/* Event Start Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EVENT START DATE
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer"
            onClick={() => setShowStartCalendar(!showStartCalendar)}
          >
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="flex-1 outline-none bg-transparent text-gray-700">
              {startDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          {showStartCalendar && (
            <Calendar
              selectedDate={startDate}
              onDateSelect={handleStartDateChange} // Use the new handler
              minDate={new Date()}
            />
          )}
        </div>

        {/* Event End Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EVENT END DATE
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer"
            onClick={() => setShowEndCalendar(!showEndCalendar)}
          >
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="flex-1 outline-none bg-transparent text-gray-700">
              {endDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          {showEndCalendar && (
            <Calendar
              selectedDate={endDate + 1}
              onDateSelect={(date) => {
                setEndDate(date);
                setShowEndCalendar(false);
              }}
              minDate={startDate}
            />
          )}
        </div>

        {/* Number of Rooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NUMBER OF ROOMS
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaBed className="text-gray-500 mr-2" />
            <input
              type="number"
              value={numberOfRooms}
              onChange={(e) => setNumberOfRooms(parseInt(e.target.value) || 0)}
              className="flex-1 outline-none bg-transparent"
              min="0"
              placeholder="Enter number of rooms"
            />
            <FaInfoCircle className="text-gray-400 ml-auto" />
          </div>
        </div>

        {/* Additional Details */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PLEASE SHARE ADDITIONAL DETAILS
          </label>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 py-3">
            <svg
              className="text-gray-500 mr-2 mt-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <textarea
              placeholder="Please share additional details"
              className="flex-1 outline-none resize-none bg-transparent"
              rows={4}
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 outline-none bg-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="flex-1 outline-none bg-transparent"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <FaInfoCircle className="text-gray-400 ml-2" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Event Requires Rooms
        <div className="col-span-1 md:col-span-2 pb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            DOES YOUR EVENT REQUIRE ROOMS?
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requiresRooms"
                className="w-4 h-4"
                value="yes"
                checked={requiresRooms === true}
                onChange={() => setRequiresRooms(true)}
              />
              <span className="text-gray-700">YES</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="requiresRooms"
                className="w-4 h-4"
                value="no"
                checked={requiresRooms === false}
                onChange={() => setRequiresRooms(false)}
              />
              <span className="text-gray-700">NO</span>
            </label>
          </div>
        </div> */}
      </div>

      <BookingButton text={"Place Your Request"} onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
