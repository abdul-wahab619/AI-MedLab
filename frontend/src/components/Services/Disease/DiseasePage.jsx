import React, { useState } from "react";
import DiabetesTest from "./DiabetesTest";
import HeartDiseaseTest from "./HeartDiseaseTest";
import KidneyDiseaseTest from "./KidneyDiseaseTest.jsx";
import LiverDiseaseTest from "./LiverDiseaseTest.jsx";
import BreastCancerDiseaseTest from "./BreastCancerDiseaseTest.jsx";
import MalariaDiseaseTest from "./MalariaDiseaseTest.jsx";
import PneumoniaDiseaseTest from "./PneumoniaDiseaseTest.jsx";
import ResultComponent from "./ResultComponent";

const DiseasePage = ({ service }) => {
  const [prediction, setPrediction] = useState(null);
  const handlePrediction = (pred) => {
    setPrediction(pred);
  };

  console.log(service.id);

  // Render the appropriate disease component based on the URL parameter
  switch (service.id) {
    case "1":
      return <DiabetesTest />;
    case "2":
      return <HeartDiseaseTest />;
    case "3":
      return <KidneyDiseaseTest />;
    case "4":
      return <LiverDiseaseTest />;
    case "5":
      return <BreastCancerDiseaseTest />;
    case "6":
      return (
        <>
          <MalariaDiseaseTest onPrediction={handlePrediction} />
          {prediction !== null && <ResultComponent prediction={prediction} />}
        </>
      );
    case "7":
      return (
        <>
          <PneumoniaDiseaseTest onPrediction={handlePrediction} />
          {prediction !== null && <ResultComponent prediction={prediction} />}
        </>
      );
    default:
      return <div>No such disease found</div>;
  }
};

export default DiseasePage;
