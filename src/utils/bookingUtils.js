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
 * UI helper: Format a date string → "February 15, 2025 at 03:45 PM"
 */
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime}`;
};