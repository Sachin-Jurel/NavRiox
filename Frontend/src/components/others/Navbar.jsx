import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-purple-600" : "hover:text-purple-500";

  return (
    <nav className="w-full bg-black border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex items-center">
          <img src={logo} className="w-16 sm:w-20" alt="NavRiox Logo" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            <span className="text-white">Nav</span>
            <span className="text-purple-900">Riox</span>
          </h1>
        </div>

        <div className="hidden lg:flex gap-8 text-white font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/support" className={linkClass}>
            Support
          </NavLink>
          <NavLink to="/changelog" className={linkClass}>
            Changelog
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg text-white bg-purple-900 hover:bg-purple-700 transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg text-purple-900 bg-white border border-purple-900 hover:bg-purple-100 transition">
            Register
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 py-6">
          <div className="flex flex-col items-center gap-5 text-white">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Services
            </NavLink>
            <NavLink
              to="/support"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Support
            </NavLink>
            <NavLink
              to="/changelog"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Changelog
            </NavLink>

            <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
              <button className="py-2.5 rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 text-white font-medium shadow-lg shadow-purple-900/30 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 hover:scale-105">
                Login
              </button>

              <button className="py-2.5 rounded-lg bg-transparent text-purple-400 font-medium border border-purple-700 hover:bg-purple-900/20 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
