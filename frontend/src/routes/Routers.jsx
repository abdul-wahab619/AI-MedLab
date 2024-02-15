import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctordetails" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Routers;
