import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, token } from "../config.js";
import useFetchData from "../hooks/useFetchData.jsx";
import defaultImg from "../assets/images/default.avif";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { PiGenderFemaleBold } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../components/Loader/Loading.jsx";
import Error from "../components/Error/Error.jsx";

const AdminDoctors = () => {
  const navigate = useNavigate();
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/admin/doctors`);

  console.log("call users");

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/doctors`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Users data:", data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const updateApprovalStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/admin/doctors/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isApproved: newStatus }),
      });
      const data = await response.json();
      console.log("Updated user:", data);

      if (response.ok) {
        navigate(`/admin/doctors`);
        getAllUsersData();
      }
    } catch (error) {
      console.log("Error updating approval status:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((user, index) => (
            <div
              key={index}
              className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
            >
              <div className="mb-3 flex justify-between">
                <BiEditAlt className="text-blue-500 cursor-pointer" />
                <Link to={`/delete/doctor/${user._id}`}>
                  <MdDelete className="cursor-pointer text-red-500" />
                </Link>
              </div>
              <div className="top-1 w-full">
                <img
                  className="w-full h-[250px] object-fill rounded-lg"
                  src={user.photo || `${defaultImg}`}
                  alt={user._id}
                />
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <FaUser className=" text-2xl" />
                <h2 className="my-1">{user.name}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <MdMarkEmailUnread className="text-2xl" />
                <h2 className="my-1">{user.email}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <FaUserDoctor className=" text-2xl" />
                <h2 className="my-1">{user.role || "Unknown Author"}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <PiGenderFemaleBold className=" text-2xl" />
                <h2 className="my-1">{user.gender}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <PiGenderFemaleBold className=" text-2xl" />
                <div className="my-1">
                  <label
                    htmlFor={`approvalStatus-${user._id}`}
                    className="mr-2"
                  >
                    isApproved?
                  </label>
                  <select
                    id={`approvalStatus-${user._id}`}
                    value={user.isApproved}
                    onChange={(e) =>
                      updateApprovalStatus(user._id, e.target.value)
                    }
                    className="border rounded p-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminDoctors;
