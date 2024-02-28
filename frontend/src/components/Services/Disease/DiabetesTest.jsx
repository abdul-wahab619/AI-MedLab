import React from "react";

const DiabetesTest = () => {
  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // Example: You can fetch data from form fields and perform actions like submitting to a backend endpoint
  };

  return (
    <div>
      {/* {message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {message}
        </div>
      )} */}
      <div className="flex justify-center">
        <div className="w-2/3">
          <h1 className="text-center text-2xl font-bold">Diabetes Predictor</h1>
          <div className="bg-white border border-black rounded p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="pregnancies"
                  placeholder="Number of Pregnancies eg. 0"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="glucose"
                  placeholder="Glucose (mg/dL) eg. 80"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="bloodpressure"
                  placeholder="Blood Pressure (mmHg) eg. 80"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="skinthickness"
                  placeholder="Skin Thickness (mm) eg. 20"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="insulin"
                  placeholder="Insulin Level (IU/mL) eg. 80"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="bmi"
                  placeholder="Body Mass Index (kg/m²) eg. 23.1"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="dpf"
                  placeholder="Diabetes Pedigree Function eg. 0.52"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border border-black rounded px-3 py-2 w-full"
                  type="text"
                  name="age"
                  placeholder="Age (years) eg. 34"
                />
              </div>
              <input
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                value="Predict"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabetesTest;
