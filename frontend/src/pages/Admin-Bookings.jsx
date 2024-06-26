import React, { useEffect, useState } from "react";
import { BASE_URL, token } from "../config.js";
import useFetchData from "../hooks/useFetchData.jsx";
import { PiGenderFemaleBold } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import Loading from "../components/Loader/Loading.jsx";
import Error from "../components/Error/Error.jsx";

const AdminBookings = () => {
  const [users, setUsers] = useState({});
  const [doctors, setDoctors] = useState({});

  const {
    data: bookings,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/admin/bookings`);

  // console.log("call users");

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Users data:", data);
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const getAllDoctorsData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/doctors`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Doctors data:", data);
      setDoctors(data);
    } catch (error) {
      console.log("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
    getAllDoctorsData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
            >
              <div className="flex justify-start items-center gap-x-2">
                <MdMarkEmailUnread className="text-2xl" />
                <h2 className="my-1">{booking._id || "Unknown User"}</h2>
              </div>

              <div className="flex justify-start items-center gap-x-2">
                <FaUser className="text-2xl" />
                <h2 className="my-1">
                  User: {booking.user?.name || "Unknown User"}
                </h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <FaUserDoctor className="text-2xl" />
                <h2 className="my-1">
                  {" "}
                  Doctor: {booking.doctor?.name || "Unknown Doctor"}
                </h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <FaTicket className="text-2xl" />
                <h2 className="my-1">
                  Ticket Price: {booking.ticketPrice || "Unknown"}
                </h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <PiGenderFemaleBold className="text-2xl" />
                <h2 className="my-1">Status: {booking.status}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <MdPayments className="text-2xl" />
                <h2 className="my-1">
                  Is Paid: {booking.isPaid ? "Yes" : "No"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminBookings;
