import React from "react";

const HeartDiseaseTest = () => {
  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // Example: You can fetch data from form fields and perform actions like submitting to a backend endpoint
  };

  return (
    <div className="m-5 row mb-32">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h1 className="text-center text-3xl font-bold mb-8">
          Heart Disease Predictor
        </h1>
        <div className="card border border-black rounded-lg p-8">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="age"
                  placeholder="Age"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="sex"
                  placeholder="Sex (Male:1, Female:0)"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="cp"
                  placeholder="Chest Pain Type"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="trestbps"
                  placeholder="Resting Blood Pressure (mm Hg)"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="chol"
                  placeholder="Serum Cholestoral (mg/dl)"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="fbs"
                  placeholder="Fasting Blood Sugar (1 = true; 0 = false)"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="restecg"
                  placeholder="Resting Electrocardiographic Results"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="thalach"
                  placeholder="Maximum Heart Rate Achieved"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="exang"
                  placeholder="Exercise Induced Angina (1 = yes; 0 = no)"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="oldpeak"
                  placeholder="ST Depression Induced by Exercise Relative to Rest"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="slope"
                  placeholder="Slope of the Peak Exercise ST Segment"
                />
              </div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="ca"
                  placeholder="Number of Major Vessels (0-3) Colored by Flourosopy"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="thal"
                  placeholder="3 = Normal; 6 = Fixed Defect; 7 = Reversable Defect"
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-info btn-block w-full text-[20px] mt-8 hover:cursor-pointer"
              value="Predict"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeartDiseaseTest;
