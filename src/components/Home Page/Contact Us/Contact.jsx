import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa"; // Assuming react-icons is installed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please provide a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-thin mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message *"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Map */}
        <div className="flex-1">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=25.00417870568155,88.13334421253452&hl=en&z=14&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
