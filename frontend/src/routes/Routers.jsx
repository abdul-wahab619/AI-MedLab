import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import { services } from "../assets/data/services.js";
import DiseasePage from "../components/Services/Disease/DiseasePage.jsx";
import AdminLayout from "../layout/Admin-Layout.jsx";
import AdminUsers from "../pages/Admin-Users.jsx";
import AdminDoctors from "../pages/Admin-Doctors.jsx";
import AdminBookings from "../pages/Admin-Bookings.jsx";
import AdminUpdate from "../layout/pages/Admin-Update.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/doctors" element={<AdminDoctors />} />
        <Route path="/bookings" element={<AdminBookings />} />
        <Route path="/users/:id/edit" element={<AdminUpdate />} />
      </Route>

      {/* Dynamically create routes for each disease */}
      {services.map((service) => (
        <Route
          key={service.id}
          path={`/disease/${service.id}`}
          element={<DiseasePage service={service} />} // Pass the service data to the DiseasePage component
        />
      ))}
    </Routes>
  );
};

export default Routers;
