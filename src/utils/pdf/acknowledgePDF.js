import jsPDF from "jspdf";
import { formatDate } from "../bookingUtils";

const logoPath = "/logo.png";

export const downloadAcknowledgementPDF = async (bookingData, bookingType) => {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  let y = 20;

  // ▬▬▬▬ HEADER ▬▬▬▬
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 0, pageWidth, 30, "F");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("BOOKING ACKNOWLEDGEMENT", pageWidth / 2, 18, { align: "center" });

  // Logo
  try {
    doc.addImage(logoPath, "PNG", 15, 5, 20, 20);
  } catch (e) {
    console.warn("Logo not found:", logoPath);
  }

  y = 45;

  // ▬▬▬▬ MESSAGE ▬▬▬▬
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50);
  doc.setFontSize(12);
  doc.text(
    `Dear ${bookingData?.guestInfo?.name || "Guest"},`,
    15,
    y
  );
  y += 8;
  doc.text(
    `Thank you for choosing Silver Arcade Premier. This is an acknowledgement of your booking.`,
    15,
    y,
    { maxWidth: 180 }
  );
  y += 8;
  doc.text(
    `Your reservation is now pending confirmation by our staff. You will receive a confirmation receipt when approved.`,
    15,
    y,
    { maxWidth: 180 }
  );

  y += 20;

  // ▬▬▬▬ BOOKING SUMMARY ▬▬▬▬
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("BOOKING SUMMARY", 15, y);
  y += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const summary = [
    ["Booking Type", bookingType],
    ["Booking ID", bookingData._id || "N/A"],
    ["Guest Name", bookingData?.guestInfo?.name || "N/A"],
    ["Phone", bookingData?.guestInfo?.phoneNumber || "N/A"],
    ["Email", bookingData?.guestInfo?.email || "N/A"],
  ];

  if (bookingType === "accommodation") {
    summary.push(["Check-in", formatDate(bookingData.arrivalDate)]);
    summary.push(["Check-out", formatDate(bookingData.departureDate)]);
    summary.push(["Rooms", (bookingData.rooms?.length || 0).toString()]);
  }
  if (bookingType === "restaurant") {
    summary.push(["Reservation Date", formatDate(bookingData.date)]);
    summary.push(["Time Slot", bookingData.timeSlot]);
    summary.push(["Number of Diners", bookingData.noOfDiners?.toString()]);
  }
  if (bookingType === "meeting") {
    summary.push(["Event", bookingData.typeOfReservation]);
    summary.push(["Start Date", formatDate(bookingData.reservationDate)]);
    summary.push(["End Date", formatDate(bookingData.reservationEndDate)]);
    summary.push(["Guests", bookingData.numberOfGuests?.toString()]);
    summary.push(["Rooms", bookingData.numberOfRooms?.toString()]);
  }

  summary.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, 20, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${value}`, 70, y);
    y += 8;
  });

  y += 15;

  // ▬▬▬▬ FOOTER ▬▬▬▬
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 270, pageWidth, 20, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    "Silver Arcade Premier • Charchpally, ITI More, Malda, West Bengal – 732101",
    pageWidth / 2,
    278,
    { align: "center" }
  );
  doc.text("Phone: +7719381841 | Email: mdshabib1993@gmail.com", pageWidth / 2, 285, { align: "center" });

  const dateStamp = new Date().toISOString().slice(0, 10);
  doc.save(`SAP_${bookingType.toUpperCase()}_ACKNOWLEDGEMENT_${dateStamp}.pdf`);
};