import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loader from "../../components/Loader/Loading";
import axios from "axios";
import { toast } from "react-toastify";

function DoctorsDropDown({ testName, testResult = null }) {
  const loginUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token"); // Assuming you store your token in localStorage
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  const handleSelectChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const bookAppointment = async () => {
    console.log({ testResult });
    const payload = {
      doctorId: selectedDoctor,
      testName: testName.testName,
      testResult: testResult.testResult,
      payment: "Pending",
      price: "100",
      patientGender: loginUser.gender,
      patientName: loginUser.name,
      bookedOn: `${new Date()}`,
    };

    try {
      await axios.post(
        `${BASE_URL}/users/appointments/create-appointment`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      toast.success("Appointment booking done");
    } catch (error) {
      toast.error("Failed to book appointment");
      console.error(error);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}

      <div className="center-container space-x-0.5">
        <div className="flex justify-center mt-10">
          <h1>Select a Doctor: </h1>
          <div className="select-container">
            <select
              value={selectedDoctor}
              onChange={handleSelectChange}
              className="border"
            >
              <option value="" disabled>
                Select a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            {selectedDoctor && <p>Selected Doctor ID : {selectedDoctor}</p>}
          </div>
        </div>
        <div className="button-container">
          <div className="flex justify-center mt-10">
            <button className="px-20 py-15">
              <a
                href="/home"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-20 rounded"
              >
                Back to Home
              </a>
            </button>
            <button
              onClick={bookAppointment}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded pr-8"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsDropDown;
