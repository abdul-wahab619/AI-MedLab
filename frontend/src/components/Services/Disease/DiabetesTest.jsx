import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import DcotorsDropDown from "../../DoctorDropDown/DoctorDropDown";

const DiabetesTest = () => {
  const [inputData, setInputData] = useState({
    "Number of Pregnancies eg. 0": "",
    "Glucose (mg/dL) eg. 80": "",
    "Blood Pressure (mmHg) eg. 80": "",
    "Skin Thickness (mm) eg. 20": "",
    "Insulin Level (IU/mL) eg. 80": "",
    "Body Mass Index (kg/m²) eg. 23.1": "",
    "Diabetes Pedigree Function eg. 0.52": "",
    "Age (years) eg. 34": "",
  });
  const [prediction, setPrediction] = useState(null);
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    const isFormFilled = Object.values(inputData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormFilled) {
      setFormError("Please fill out all fields.");
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/diabetes`, {
        data: inputData,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/3">
          <h1 className="text-center text-2xl font-bold">Diabetes Predictor</h1>
          <div className="bg-white border border-black rounded p-4">
            <form onSubmit={handleSubmit}>
              {/* Input fields */}
              {Object.entries(inputData).map(([name, value]) => (
                <div key={name} className="mb-4">
                  <input
                    className="border border-black rounded px-3 py-2 w-full"
                    type="text"
                    name={name}
                    placeholder={`${name}`}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              {/* Form error message */}
              {formError && (
                <div className="text-red-500 mb-4">{formError}</div>
              )}
              {/* Submit button */}
              <input
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                value="Predict"
              />
            </form>
          </div>
          {/* Prediction result */}
          {prediction !== null && (
            <div
              className={`mt-3 ${
                prediction.includes("[1]") ? "bg-red-400" : "bg-green-400"
              } text-2xl`}
            >
              <h3 className="text-center">
                {prediction.includes("[1]")
                  ? "Sorry! Please consult your doctor."
                  : "Great! You are HEALTHY."}
              </h3>
            </div>
          )}
        </div>
      </div>
      <DcotorsDropDown
        testName={"Diabetes Disease Predictor"}
        testResult={prediction?.includes("[1]") ? "Unhealthy" : "Healthy"}
      />
    </div>
  );
};

export default DiabetesTest;