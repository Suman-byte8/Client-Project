import jsPDF from "jspdf";
import QRCode from "qrcode";

/**
 * Generate Confirmation PDF styled like the SLS example
 */
export const downloadConfirmationPDF = async (bookingData, bookingType) => {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = 210; // A4 width
  let y = 10;

  // ▬▬▬▬ HERO BANNER ▬▬▬▬
  try {
    const bannerPath = "/banner.png"; 
    doc.addImage(bannerPath, "JPEG", 0, 0, pageWidth, 60);
  } catch (e) {
    console.warn("Banner image missing");
    doc.setFillColor(20, 20, 20);
    doc.rect(0, 0, pageWidth, 60, "F");
  }

  // Overlay: "YOU'RE CONFIRMED"
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("YOU'RE", 15, 35);
  doc.text("CONFIRMED", 15, 50);
  y = 70;

  // ▬▬▬▬ GREETING SECTION ▬▬▬▬
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(0, 0, 0);
  doc.rect(0, 60, pageWidth, 40, "F");

  doc.setFont("helvetica", "normal");
  const guestName = bookingData?.guestInfo?.name || "Guest";
  doc.text(`Hi ${guestName},`, 15, y);
  y += 7;
  doc.text(
    `Thanks for choosing Silver Arcade Premier! You're in for a seriously lavish stay.`,
    15,
    y,
    { maxWidth: 180 }
  );
  y += 12;
  doc.text(
    `Please review your reservation details below. If you need changes, contact us immediately.`,
    15,
    y,
    { maxWidth: 180 }
  );
  y += 10;

  // ▬▬▬▬ HOTEL INFO ▬▬▬▬
  doc.setFontSize(10);
  doc.text("Silver Arcade Premier", 15, y);
  y += 5;
  doc.text("Charchpally, ITI More, Malda, WB 732101", 15, y);
  y += 5;
  doc.text("Phone: +7719381841 | Email: mdshabib1993@gmail.com", 15, y);
  y += 15;

  // ▬▬▬▬ TWO COLUMN LAYOUT ▬▬▬▬
  // Left column width = 120mm
  const leftX = 15;
  const rightX = 140;
  y = 120;

  // CONFIRMATION DETAILS - LEFT
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(0, 0, 0);
  doc.rect(leftX - 5, y - 8, 115, 6, "F");
  doc.setFontSize(11);
  doc.text("CONFIRMATION DETAILS", leftX, y - 3);

  doc.setFontSize(10);
  doc.setTextColor(60);
  y += 6;

  const details = [
    ["GUEST NAME", guestName],
    ["BOOKING TYPE", bookingType.toUpperCase()],
    ["BOOKING ID", bookingData._id || "N/A"],
  ];

  if (bookingType === "accommodation") {
    details.push(["CHECK-IN", new Date(bookingData.arrivalDate).toLocaleDateString()]);
    details.push(["CHECK-OUT", new Date(bookingData.departureDate).toLocaleDateString()]);
    details.push(["ROOMS", bookingData.rooms?.length?.toString() || "N/A"]);
    details.push(["ADULTS", bookingData.totalAdults?.toString() || "0"]);
    details.push(["CHILDREN", bookingData.totalChildren?.toString() || "0"]);
  }
  if (bookingType === "restaurant") {
    details.push(["DATE", new Date(bookingData.date).toLocaleDateString()]);
    details.push(["TIME SLOT", bookingData.timeSlot]);
    details.push(["DINERS", bookingData.noOfDiners?.toString()]);
  }
  if (bookingType === "meeting") {
    details.push(["EVENT", bookingData.typeOfReservation]);
    details.push(["START", new Date(bookingData.reservationDate).toLocaleDateString()]);
    details.push(["END", new Date(bookingData.reservationEndDate).toLocaleDateString()]);
    details.push(["GUESTS", bookingData.numberOfGuests?.toString()]);
    details.push(["ROOMS", bookingData.numberOfRooms?.toString()]);
  }

  details.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, leftX, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${value}`, leftX + 45, y);
    y += 7;
  });

  // Sidebar - RIGHT
  let sideY = 120;
  const sidebarBlocks = [
    { title: "Dine & Drink", text: "Find out what’s going on in our restaurant & bar." },
    { title: "Be in the know", text: "Get exclusive offers with our SAP app." },
    { title: "Unlock the SAP Experience", text: "Enjoy mobile check-in and upgrades." },
  ];

  sidebarBlocks.forEach(({ title, text }) => {
    doc.setFillColor(245, 245, 245);
    doc.rect(rightX - 5, sideY, 65, 40, "F");
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(title, rightX, sideY + 8);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(doc.splitTextToSize(text, 60), rightX, sideY + 16);
    sideY += 45;
  });

  // ▬▬▬▬ FOOTER ▬▬▬▬
  doc.setFillColor(0, 0, 0);
  doc.rect(0, 275, pageWidth, 20, "F");
  doc.setTextColor(200);
  doc.setFontSize(8);
  doc.text("© 2024 Silver Arcade Premier | All Rights Reserved", pageWidth / 2, 288, { align: "center" });

  // Save
  const dateStamp = new Date().toISOString().slice(0, 10);
  doc.save(`SAP_${bookingType.toUpperCase()}_CONFIRMATION_${dateStamp}.pdf`);
};