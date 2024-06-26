import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import DcotorsDropDown from "../../DoctorDropDown/DoctorDropDown";

const PneumoniaDiseaseTest = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImagePreview = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImagePreview(e.target.result);
        setSelectedImage(event.target.files[0]);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      setFormError("Please select an image.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const response = await axios.post(
        `${BASE_URL}/predict-pneumonia`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      let pred = response.data.prediction;
      console.log("Prediction:", pred);
      let threshold = 0.999;
      let threshold1 = 0.96;
      let classification =
        pred[1] >= threshold || pred[0] >= threshold1 ? 1 : 0;
      console.log("Classification:", classification);
      setPrediction(classification);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-5 flex flex-col justify-center items-center h-screen w-screen">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <form
          className="bg-white shadow-lg shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 className="text-center font-bold text-3xl mb-5">
            Pneumonia Predictor
          </h1>
          <div className="mb-4">
            <h3 className="text-center font-bold text-2xl mb-2">
              Please upload the X-Ray of Person
            </h3>
            <input
              onChange={handleImagePreview}
              type="file"
              name="image"
              accept="image/*"
              className="py-2 px-4 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          {imagePreview && (
            <div className="mb-4">
              <img
                className="mx-auto"
                src={imagePreview}
                alt="UPLOADED IMAGE WILL APPEAR HERE"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Predict
            </button>
          </div>
        </form>
        {prediction !== null && (
          <div className="mt-3">
            <div
              className={`${
                prediction == 1
                  ? "bg-red-400 text-red-800"
                  : "bg-green-400 text-green-800"
              } rounded-md p-4`}
            >
              <h3 className="text-center text-2xl">
                {prediction == 1
                  ? "This X-Ray is predicted to have Pneumonia, Please Consult Doctor."
                  : `This X-Ray does not have Pneumonia.${prediction}`}
              </h3>
            </div>
          </div>
        )}
      </div>
      <div>
        <DcotorsDropDown
          testName={"Diabetes Disease Predictor"}
          testResult={prediction === 1 ? "Unhealthy" : "Healthy"}
        />
      </div>
    </div>
  );
};

export default PneumoniaDiseaseTest;
