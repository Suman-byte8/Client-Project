import React, { useState, useContext, useEffect } from "react";
import { Img } from "react-image";
import { indianStatesCities, indianStates } from "../data/indianCities";
import { UserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerMembership } from "../services/membershipApi";

export default function Membership() {
  const { user, getToken } = useContext(UserContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    state: "",
    city: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
  });

  const [loading, setLoading] = useState(false); // handles form submission
  const [isFetching, setIsFetching] = useState(true); // loader before context is ready

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        country: "India",
        state: user.state || "",
        city: user.city || "",
        countryCode: "+91",
        phoneNumber: user.phoneNumber || "",
        email: user.email || "",
      });
      console.log("User data loaded into form:", user);
    }
    // simulate network/context delay (2s instead of 0.5s)
    const timer = setTimeout(() => setIsFetching(false), 2000);
    return () => clearTimeout(timer);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.memberShipType === "pending") {
      toast.info(
        "You have already applied for membership. Your application is under review."
      );
      return;
    }

    if (!form.state || !form.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const token = getToken();
      await registerMembership(form, token);
      toast.success(
        "Membership application submitted successfully! Your application is under review."
      );
      setForm((prev) => ({ ...prev, state: "", city: "" }));
    } catch (err) {
      console.error("Register error:", err);
      toast.error(
        err.response?.data?.message ||
          "Failed to submit membership application"
      );
    } finally {
      setLoading(false);
    }
  };

  const cities = form.state ? indianStatesCities[form.state] || [] : [];

  // 🌀 Loader while fetching
  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-sm">
            Loading membership details...
          </p>
        </div>
      </div>
    );
  }

  // CONDITIONS
  if (user && user.memberShipType === "approved") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">You are already a member!</h1>
          <p className="mt-4 text-gray-600">
            Your membership status is:{" "}
            <span className="font-semibold">{user.memberShipType}</span>
          </p>
          <p className="mt-2 text-gray-600">
            If you wish to upgrade your membership, please contact us at{" "}
            <a href="mailto:support@example.com" className="text-blue-500">
              support@example.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +1234567890
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  if (user && user.memberShipType === "rejected") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-red-600">
            Your Membership Application was Rejected
          </h1>
          <p className="mt-4 text-gray-600">
            We are sorry to inform you that your membership application has been
            rejected.
          </p>
          <p className="mt-2 text-gray-600">
            If you believe this is a mistake or wish to appeal, please contact
            our support staff at{" "}
            <a href="mailto:support@example.com" className="text-blue-500">
              support@example.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +1234567890
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // Default FORM
  return (
    <div className="flex flex-col-reverse md:flex-row w-full max-h-[screen-height] px-6 py-4 bg-white gap-8">
      <ToastContainer />
      {/* Left Form Section */}
      <div className="w-full space-y-4">
        <h1 className="text-2xl font-semibold flex items-center space-x-2">
          <Img src="/logo.png?url" alt="Logo" className="h-8" />
          <span>Membership Plan</span>
        </h1>
        <p className="text-gray-600">
          Enroll into{" "}
          <span className="font-semibold">SILVER ARCADE PREMIER</span>, a
          membership that makes you feel rewarded.
        </p>
        <p className="text-sm text-gray-400 italic">
          All fields are mandatory other than phone number for international
          guests
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              className="border border-gray-200 text-gray-500 p-2 rounded w-full bg-gray-100"
              required
              disabled
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              className="border border-gray-200 text-gray-500 p-2 rounded w-full bg-gray-100"
              required
              disabled
            />
          </div>

          <input
            name="country"
            value={form.country}
            className="border border-gray-200 text-gray-500 p-2 rounded w-full bg-gray-50"
            readOnly
          />

          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
            disabled={user && user.memberShipType === "pending"}
          >
            <option value="">Select your State*</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            disabled={!form.state || (user && user.memberShipType === "pending")}
            required
          >
            <option value="">Select your City*</option>
            {cities.length > 0 ? (
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))
            ) : (
              <option disabled>No cities found</option>
            )}
          </select>

          {/* Phone */}
          <div className="w-full flex gap-4">
            <input
              name="countryCode"
              value={form.countryCode}
              className="border border-gray-200 text-gray-500 p-2 rounded max-w-[50px] bg-gray-50"
              readOnly
            />
            <input
              name="phoneNumber"
              placeholder="Mobile Number"
              value={form.phoneNumber}
              className="border border-gray-200 text-gray-500 p-2 rounded w-full bg-gray-100"
              disabled
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            className="border border-gray-200 text-gray-500 p-2 rounded w-full bg-gray-100"
            disabled
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Apply For Membership"}
          </button>
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center items-center rounded-r-xl overflow-hidden">
        <Img
          src="https://images.unsplash.com/photo-1565688842882-e0b2693d349a?w=400&auto=format&fit=crop&q=60"
          alt="Membership"
          className="rounded-lg object-contain w-full h-full max-h-[400px] overflow-hidden"
        />
      </div>
    </div>
  );
}