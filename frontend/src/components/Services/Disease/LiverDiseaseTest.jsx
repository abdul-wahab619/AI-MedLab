import React from "react";

const LiverDiseaseTest = () => {
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
          Liver Disease Predictor
        </h1>
        <div className="card border border-black rounded-lg p-8">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Age"
                  placeholder="Age"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Total_Bilirubin"
                  placeholder="Total Bilirubin"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Direct_Bilirubin"
                  placeholder="Direct Bilirubin"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Alkaline_Phosphotase"
                  placeholder="Alkaline Phosphotase"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Alamine_Aminotransferase"
                  placeholder="Alamine Aminotransferase"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Aspartate_Aminotransferase"
                  placeholder="Aspartate Aminotransferase"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Total_Protiens"
                  placeholder="Total Protiens"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Albumin"
                  placeholder="Albumin"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Albumin_and_Globulin_Ratio"
                  placeholder="Albumin and Globulin Ratio"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="Gender_Male"
                  placeholder="Gender(Male: 1, Female: 0)"
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
      <div className="col-md-2"></div>
    </div>
  );
};

export default LiverDiseaseTest;
