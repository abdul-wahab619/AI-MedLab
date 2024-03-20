import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";

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
    </div>
  );
};

export default DiabetesTest;




/*
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";

const DiabetesTest = () => {
  const [inputData, setInputData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input1"
                  placeholder="Number of Pregnancies eg. 0"
                  value={inputData.input1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input2"
                  placeholder="Glucose (mg/dL) eg. 80"
                  value={inputData.input2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input3"
                  placeholder="Blood Pressure (mmHg) eg. 80"
                  value={inputData.input3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input4"
                  placeholder="Skin Thickness (mm) eg. 20"
                  value={inputData.input4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input5"
                  placeholder="Insulin Level (IU/mL) eg. 80"
                  value={inputData.input5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input6"
                  placeholder="Body Mass Index (kg/m²) eg. 23.1"
                  value={inputData.input6}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input7"
                  placeholder="Diabetes Pedigree Function eg. 0.52"
                  value={inputData.input7}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="input8"
                  placeholder="Age (years) eg. 34"
                  value={inputData.input8}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                value="Predict"
              />
            </form>
          </div>
          {prediction && prediction.includes("[1]") ? (
            <div className="mt-3 bg-red-400 text-2xl">
              <h3 className="text-center">
                Sorry! Please consult your doctor.
              </h3>
            </div>
          ) : (
            <div className="mt-3 bg-green-400 text-2xl">
              <h3 className="text-center">Great! You are HEALTHY.</h3>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DiabetesTest;
*/
