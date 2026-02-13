import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center text-sm mb-8">
          Login to your NavRiox account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-purple-500" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        <p className="text-gray-400 text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
