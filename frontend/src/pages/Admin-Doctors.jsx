import React, { useEffect } from "react";
import { BASE_URL, token } from "../config.js";
import useFetchData from "../hooks/useFetchData.jsx";
import { BiEditAlt, BiUserCircle } from "react-icons/bi";
import { MdDelete, MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";
import { PiGenderFemaleBold } from "react-icons/pi";
import Loading from "../components/Loader/Loading.jsx";
import Error from "../components/Error/Error.jsx";

const AdminDoctors = () => {
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
      // setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/admin/doctors/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Users after delete:", data);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log("Error deleting user:", error);
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
              <div className="flex justify-between">
                <BiEditAlt className="text-blue-500 cursor-pointer" />
                <button>
                  <MdDelete className="cursor-pointer text-red-500" />
                </button>
              </div>
              <div className="top-1 w-full">
                <img
                  className="w-full h-auto rounded-lg"
                  src={user.photo || "default_image_url"}
                  alt={user._id}
                />
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className=" text-2xl" />
                <h2 className="my-1">{user.name}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <MdOutlineMarkEmailUnread className="text-2xl" />
                <h2 className="my-1">{user.email}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <MdOutlinePersonPin className=" text-2xl" />
                <h2 className="my-1">{user.role || "Unknown Author"}</h2>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <PiGenderFemaleBold className=" text-2xl" />
                <h2 className="my-1">{user.gender}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminDoctors;
