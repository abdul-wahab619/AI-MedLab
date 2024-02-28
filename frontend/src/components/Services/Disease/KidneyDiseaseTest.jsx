import React from "react";

const KidneyDiseaseTest = () => {
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
          Kidney Disease Predictor
        </h1>
        <div className="card border border-black rounded-lg p-8">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="age"
                  placeholder="Age"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="bp"
                  placeholder="BP"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="al"
                  placeholder="AL"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="su"
                  placeholder="SU"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="rbc"
                  placeholder="RBC"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="pc"
                  placeholder="PC"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="pcc"
                  placeholder="PCC"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="ba"
                  placeholder="BA"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="bgr"
                  placeholder="BGR"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="bu"
                  placeholder="BU"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="sc"
                  placeholder="SC"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="pot"
                  placeholder="POT"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="wc"
                  placeholder="WC"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="htn"
                  placeholder="HTN"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="dm"
                  placeholder="DM"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="cad"
                  placeholder="CAD"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="pe"
                  placeholder="PE"
                />
              </div>
              <div>
                <input
                  className="border border-black p-2 w-full"
                  type="text"
                  name="ane"
                  placeholder="ANE"
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

export default KidneyDiseaseTest;
