import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", formData);
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Signup Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Create Your Account
        </h2>

        <p className="text-gray-400 text-center text-sm mb-8">
          Join NavRiox AI and automate your workflow.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300"
          >
            Sign Up
          </motion.button>

        </form>

        <p className="text-gray-400 text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
