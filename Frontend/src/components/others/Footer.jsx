import React from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-[pulse_3s_infinite]" />

      {/* Glass Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 tracking-wide">
              NavRiox
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Empowering businesses with AI-driven automation, smart document
              processing, and intelligent workflow solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {["Home", "Services", "Support", "Changelog"].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer transition-all duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-sm">
              {["Documentation", "API Reference", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li
                  key={item}
                  className="relative w-fit cursor-pointer transition-all duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition">
                <Mail className="w-4 h-4 text-cyan-400" />
                support@navriox.ai
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition">
                <Phone className="w-4 h-4 text-cyan-400" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition">
                <MapPin className="w-4 h-4 text-cyan-400" />
                India
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <Icon className="w-5 h-5 hover:text-cyan-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} NavRiox. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
