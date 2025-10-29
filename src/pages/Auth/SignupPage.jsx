import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import FullLogo from "../../components/FullLogo";
import Toast from "../../components/Toast";
import bg from "../../assets/Auth/_DSC4799.jpg";

const SignupPage = () => {
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    whatsAppNumber: "",
    address: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      memberShipType: "", // Add if needed
      memberShipStartDate: "", // Add if needed
      memberShipEndDate: "", // Add if needed
      phoneNumber: formData.phoneNumber,
      whatsAppNumber: formData.whatsAppNumber,
      email: formData.email,
      address: formData.address,
      alternateNumber: "", // Add if needed
      password: formData.password,
    };
    const result = await signup(userData);
    if (result.success) {
      setToast({ message: "Signup successful! Redirecting...", type: "success" });
      setTimeout(() => {
        navigate("/");
      }, 5500); // 5.5 seconds delay
    } else {
      setToast({ message: result.message, type: "error" });
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-8"
      style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/28/26/ad/2826ad3fb9aaf5e4ca2cbd41b65dfc59.jpg')`,
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glassmorphism Card */}
      <div className="w-full max-w-[480px] rounded-3xl bg-black/10 backdrop-blur-[5px] shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8 ">
          <FullLogo/>
          <p className="text-[#000] mt-2 text-sm">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {/* First Name */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-4 text-black" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>

          {/* Last Name */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-4 text-black" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>



          {/* Membership Type */}
          {/* Removed as per user request */}
          {/* Membership Dates */}
          {/* Removed as per user request */}
          {/* Removed as per user request */}

          {/* Phone Numbers */}
          <div className="relative flex items-center">
            <FaPhone className="absolute left-4 text-black" />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>
          <div className="relative flex items-center">
            <FaPhone className="absolute left-4 text-black" />
            <input
              type="tel"
              name="whatsAppNumber"
              value={formData.whatsAppNumber}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>



          {/* Address */}
          <div className="relative flex items-center md:col-span-2">
            <FaUser className="absolute left-4 text-black" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>

          {/* Email */}
          <div className="relative flex items-center md:col-span-2">
            <FaEnvelope className="absolute left-4 text-black" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>

          {/* Password */}
          <div className="relative flex items-center md:col-span-2">
            <FaLock className="absolute left-4 text-black" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/30 bg-white/80 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button className="w-full mt-2 bg-gradient-to-r from-[#0d80f2] to-[#0c70d2] hover:from-[#0c70d2] hover:to-[#095bb3] text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300 text-sm">
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-black text-sm">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Footer */}
        <p className="text-[#000] text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/log-in"
            className="font-medium text-[#0d80f2] underline hover:text-[#0c70d2] transition duration-150"
          >
            Log In
          </Link>
        </p>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default SignupPage;