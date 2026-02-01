import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black px-10 flex items-center justify-between border border-gray-800 relative">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} width="100" alt="NavRiox Logo" />
        <h1 className="text-3xl font-bold">
          <span className="text-white">Nav</span>
          <span className="text-purple-900">Riox</span>
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-white font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-500"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-500"}>
          services
        </NavLink>
        <NavLink to="/support" className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-500"}>
          ? support
        </NavLink>
        <NavLink to="/changelog" className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-500"}>
          changelog
        </NavLink>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 rounded-lg font-medium text-white bg-purple-900 hover:text-purple-600 transition">
          Login
        </button>
        <button className="px-5 py-2 rounded-lg font-medium text-purple-900 bg-white border border-purple-900 hover:bg-purple-100 transition">
          Register
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-3xl"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <div className="flex flex-col items-center gap-4 py-6 text-white">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>services</NavLink>
            <NavLink to="/support" onClick={() => setOpen(false)}>support</NavLink>
            <NavLink to="/changelog" onClick={() => setOpen(false)}>changelog</NavLink>

            <button className="w-40 px-5 py-2 rounded-lg bg-purple-900 hover:bg-purple-700">
              Login
            </button>
            <button className="w-40 px-5 py-2 rounded-lg bg-white text-purple-900 border border-purple-900 hover:bg-purple-100">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
