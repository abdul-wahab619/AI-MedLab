import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillTicketDetailedFill } from "react-icons/bs";

const AdminLayout = () => {
  {
    console.log("adminLayout call");
  }
  return (
    <>
      <header className="m-5">
        <div className="container">
          <nav>
            <ul className="flex flex-col p-5 justify-items-start">
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/doctors">
                  <FaUserDoctor />
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/bookings">
                  <BsFillTicketDetailedFill />
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container font-semibold size-8">
        Abdul Wahab
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
