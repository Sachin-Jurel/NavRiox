import React from "react";
import Navbar from "./components/others/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Support from "./Pages/Support";
import Changelog from "./Pages/Changelogs";
import Footer from "./components/others/Footer";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
