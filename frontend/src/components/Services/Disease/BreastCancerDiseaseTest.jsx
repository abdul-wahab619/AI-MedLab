import React from "react";

const BreastCancerPredictor = () => {
  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // Example: You can fetch data from form fields and perform actions like submitting to a backend endpoint
  };

  return (
    <div className="m-5 row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h1 className="text-center text-3xl font-bold mb-8">
          Breast Cancer Predictor
        </h1>
        <div className="card border border-black rounded-lg p-8">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="radius_mean"
                  placeholder="radius_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="texture_mean"
                  placeholder="texture_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="perimeter_mean"
                  placeholder="perimeter_mean"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="area_mean"
                  placeholder="area_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="smoothness_mean"
                  placeholder="smoothness_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="compactness_mean"
                  placeholder="compactness_mean"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concavity_mean"
                  placeholder="concavity_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concave_points_mean"
                  placeholder="concave_points_mean"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="symmetry_mean"
                  placeholder="symmetry_mean"
                />
              </div>
            </div>

            {/* Repeat the above grid for other fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="radius_se"
                  placeholder="radius_se"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="perimeter_se"
                  placeholder="perimeter_se"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="area_se"
                  placeholder="area_se"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="compactness_se"
                  placeholder="compactness_se"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concavity_se"
                  placeholder="concavity_se"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concave_points_se"
                  placeholder="concave_points_se"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="fractal_dimension_se"
                  placeholder="fractal_dimension_se"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="radius_worst"
                  placeholder="radius_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="texture_worst"
                  placeholder="texture_worst"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="perimeter_worst"
                  placeholder="perimeter_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="area_worst"
                  placeholder="area_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="smoothness_worst"
                  placeholder="smoothness_worst"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="compactness_worst"
                  placeholder="compactness_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concavity_worst"
                  placeholder="concavity_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="concave_points_worst"
                  placeholder="concave_points_worst"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="symmetry_worst"
                  placeholder="symmetry_worst"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="fractal_dimension_worst"
                  placeholder="fractal_dimension_worst"
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

export default BreastCancerPredictor;
