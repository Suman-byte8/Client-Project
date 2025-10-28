import { labelToSlug } from "./typeMapper";

/**
 * Detect booking type slug from bookingData object.
 * Always returns backend-friendly slug values:
 *   "accommodation" | "restaurant" | "meeting"
 */
export const getBookingType = (bookingData) => {
  if (!bookingData) return null;

  // Restaurant → unique by having "timeSlot"
  if (bookingData.timeSlot) return "restaurant";

  // Accommodation → has arrivalDate
  if (bookingData.arrivalDate) return "accommodation";

  // Meeting → fallback if not restaurant/accommodation
  if (
    bookingData.selectedEvent ||
    (bookingData.typeOfReservation && bookingData.typeOfReservation !== "restaurant")
  ) {
    return "meeting";
  }

  return null;
};

/**
 * UI helper: Format a date string → "February 15, 2025"
 */
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};

/**
 * UI helper: Format a date with time → "February 15, 2025 at 03:45 PM"
 */
export const formatDateWithTime = (dateString, timeString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    const formattedTime = `${displayHour}:${minutes} ${ampm}`;
    return `${formattedDate} at ${formattedTime}`;
  }
  return formattedDate;
};

/**
 * UI helper: Format time with AM/PM → "11:00 AM"
 */
export const formatTime = (timeString) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};
