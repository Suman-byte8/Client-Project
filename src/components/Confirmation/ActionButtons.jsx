import React from "react";
import { downloadConfirmationPDF } from "../../utils/pdf/confirmationPDF";
import { FaFilePdf } from "react-icons/fa";

const ActionButtons = ({ bookingData, bookingType, handleDownloadPDF }) => {
  const handlePrint = () => {
    // Add CSS for zoom out before printing
    const style = document.createElement("style");
    style.textContent = `
      @media print {
        body {
          zoom: 0.8;
          -webkit-transform: scale(0.8);
          transform: scale(0.9);
          transform-origin: top center;
        }
      }
    `;
    document.head.appendChild(style);

    // Trigger print
    window.print();

    // Remove the style after printing
    setTimeout(() => {
      document.head.removeChild(style);
    }, 1000);
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={handleDownloadPDF}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md"
      >
        <FaFilePdf />
        Download Acknowledgement PDF
      </button>
      <button
        onClick={handlePrint}
        className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Print Details
      </button>
    </div>
  );
};

export default ActionButtons;
