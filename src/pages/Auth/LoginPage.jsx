import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import FullLogo from "../../components/FullLogo";
import Toast from "../../components/Toast";
import bg from "../../assets/Auth/_DSC4799.jpg";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    if (result.success) {
      setToast({ message: "Login successful! Redirecting...", type: "success" });
      setTimeout(() => {
        navigate("/");
      }, 5500); // 5.5 seconds delay
    } else {
      setToast({ message: result.message, type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,

          // "url('https://i.pinimg.com/1200x/d7/dd/e7/d7dde70508315db155b9b8c071c5007b.jpg')",
        }}
      >
        {/* Glassmorphism Card */}
        <div className="w-full max-w-[420px] rounded-3xl bg-black/10 backdrop-blur-[5px] shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <FullLogo />
            <p className="text-white/80 text-sm mt-2">
              Login to continue your journey
            </p>
          </div>

          {/* Email / Username */}
          <div className="relative mb-5">
            <FaUser className="absolute top-4 left-3 text-black" />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Username"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/30 bg-white/20 placeholder-white/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50 shadow-sm"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <FaLock className="absolute top-4 left-3 text-black" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/30 bg-white/20 placeholder-white/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d80f2]/50 shadow-sm"
            />
          </div>

          {/* Forgot Password */}
          {/* <div className="flex justify-end mb-6">
          <button className="text-white/80 text-xs underline hover:text-white transition">
            Forgot Password?
          </button>
        </div> */}

          {/* Login Button */}
          <button className="w-full bg-gradient-to-r from-[#0d80f2] to-[#0c70d2] hover:from-[#0c70d2] hover:to-[#095bb3] text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300 text-sm">
            Log In
          </button>

          {/* Sign Up Redirect */}
          <p className="text-white/80 text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-[#0d80f2] underline hover:text-[#0c70d2] transition duration-150"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </form>
  );
};

export default LoginPage;
