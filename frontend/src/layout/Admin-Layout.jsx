import React, { useContext } from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import AdminUsers from "../pages/Admin-Users";
import AdminDoctors from "../pages/Admin-Doctors";
import AdminBookings from "../pages/Admin-Bookings";
import AdminUpdate from "./pages/Admin-Update";
import { authContext } from "../context/AuthContext";
import AdminHome from "../pages/Admin-Home";
import DeleteUser from "../pages/DeleteUser";
import DeleteDoctor from "../pages/DeleteDoctor";

const AdminLayout = () => {
  const { user, dispatch } = useContext(authContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <nav className="flex justify-between rounded-full m-5 bg-gray-200 items-center py-4 px-6">
        <ul className="flex justify-around gap-44">
          <li>
            <NavLink to="/home" className="flex items-center">
              <FaHome className="mr-1" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className="flex items-center">
              <FaUser className="mr-1" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/doctors" className="flex items-center">
              <FaUserDoctor className="mr-1" />
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/bookings" className="flex items-center">
              <BsFillTicketDetailedFill className="mr-1" />
              Bookings
            </NavLink>
          </li>
        </ul>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </div>{" "}
      </nav>
      <div className="container font-semibold text-xl">
        <Outlet />
      </div>
      <Routes>
        <Route path="/home" element={<AdminHome />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/doctors" element={<AdminDoctors />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/users/:id/edit" element={<AdminUpdate />} />
        <Route path="/delete/user/:id" element={<DeleteUser />} />
        <Route path="/delete/doctor/:id" element={<DeleteDoctor />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
