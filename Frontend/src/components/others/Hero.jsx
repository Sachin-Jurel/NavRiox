import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-widest uppercase"
      >
        AI Automation Suite
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
      >
        AI-Powered{" "}
        <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
          Automation
        </span>{" "}
        for Forms & Photos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0"
      >
        NavRiox helps you autofill forms, enhance photos, and automate
        repetitive workflows in seconds — securely and intelligently.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="flex flex-wrap justify-center md:justify-start gap-5"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/register")}
          className="px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 transition-all duration-300"
        >
          Get Started
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/services")}
          className="px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 hover:bg-white/10 transition"
        >
          Explore Services
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
