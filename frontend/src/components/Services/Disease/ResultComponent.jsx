import React from "react";
import { useNavigate } from "react-router-dom";

const ResultComponent = ({ prediction }) => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate.push("/"); // Navigate to the home page
  };

  return (
    <div className="row" style={{ marginBottom: "477px" }}>
      <div className="col-md-3"></div>
      <div className="col-md-6">
        {prediction === 1 ? (
          <div className="card card-body alert alert-danger">
            <center>
              This X-Ray is predicted to have Pneumonia, Please Consult Doctor.
            </center>
          </div>
        ) : (
          <div className="card card-body alert alert-success">
            <center>This X-Ray does not have Pneumonia.</center>
          </div>
        )}
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button
              onClick={handleNavigateHome}
              className="btn btn-block btn-primary"
            >
              Back to Home
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default ResultComponent;
