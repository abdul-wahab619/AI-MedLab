import React from "react";

const ResultComponent = ({ prediction }) => (
  <div className="row" style={{ marginBottom: "477px" }}>
    <div className="col-md-3"></div>
    <div className="col-md-6">
      {prediction === 1 ? (
        <div className="card card-body alert alert-danger">
          <center>This cell is an Infected Malarial Cell.</center>
        </div>
      ) : (
        <div className="card card-body alert alert-success">
          <center>This cell is not Infected.</center>
        </div>
      )}
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <a href="/" className="btn btn-block btn-primary">
            Back to Home
          </a>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
    <div className="col-md-3"></div>
  </div>
);

export default ResultComponent;
