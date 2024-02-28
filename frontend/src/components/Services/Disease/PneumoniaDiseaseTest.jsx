import React, { useState } from "react";

const PneumoniaDiseaseTest = () => {
  // State to store the image preview URL
  const [imagePreview, setImagePreview] = useState("");

  // Function to handle image preview
  const handleImagePreview = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // Example: You can fetch data from form fields and perform actions like submitting to a backend endpoint
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
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
      </div>
    </div>
  );
};

export default PneumoniaDiseaseTest;
