import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../config";

const DeleteDoctor = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/admin/doctors/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast("Doctor Deleted successfully");
        navigate("/admin/doctors");
      })
      .catch((err) => {
        toast("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Doctor</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteDoctor;
