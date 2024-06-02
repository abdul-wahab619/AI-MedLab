import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Symptomchk = () => {
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const [precaution, setPrecaution] = useState("");
  const [medications, setMedications] = useState("");
  const [workout, setWorkout] = useState("");
  const [diets, setDiets] = useState("");
  const [disease, setDisease] = useState("");

  const [isDesVisible, setIsDesVisible] = useState(false);
  const [isPrecautionVisible, setIsPrecautionVisible] = useState(false);
  const [isMedicationsVisible, setIsMedicationsVisible] = useState(false);
  const [isWorkoutVisible, setIsWorkoutVisible] = useState(false);
  const [isDietsVisible, setIsDietsVisible] = useState(false);
  const [isDiseaseVisible, setIsDiseaseVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDesVisible(!isDesVisible);
  };

  const togglePrecautionVisibility = () => {
    setIsPrecautionVisible(!isPrecautionVisible);
  };
  const toggleMedicationVisibility = () => {
    setIsMedicationsVisible(!isMedicationsVisible);
  };
  const toggleWorkoutVisibility = () => {
    setIsWorkoutVisible(!isWorkoutVisible);
  };
  const toggleDietsVisibility = () => {
    setIsDietsVisible(!isDietsVisible);
  };
  const toggleDiseaseVisibility = () => {
    setIsDiseaseVisible(!isDiseaseVisible);
  };

  const handlePrediction = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(`${BASE_URL}/symptoms`, {
        data: symptoms,
      });
      console.log(response);
      setDescription(response.data.data.dis_des);
      setPrecaution(response.data.data.my_precautions);
      setMedications(response.data.data.medications);
      setWorkout(response.data.data.workout);
      setDiets(response.data.data.rec_diet);
      setDisease(response.data.data.predicted_disease);
    } catch (error) {
      setErrorMessage("Failed to fetch prediction. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Health Care Center</h2>
      </div>
      <div
        className="container my-4 w-[70%] mt-4"
        style={{
          background: "#18263b2b",
          color: "black",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <form onSubmit={handlePrediction}>
          <div className="form-group">
            <label htmlFor="symptoms" className="font-bold text-3xl mr-2" style={{ color: "black" }}>
              Select Symptoms:
            </label>
            <input
              type="text"
              className="p-3 rounded-2xl w-[60%] text-2xl font-semibold form-control"
              id="symptoms"
              name="symptoms"
              placeholder="type systems such as itching, sleeping, aching etc"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" bg-primaryColor m-10 font-semibold text-2xl text-white p-2 w-[40%] align-middle ml-80 rounded-2xl"
            disabled={isLoading}
          >
            {isLoading ? "Predicting..." : "Predict"}
          </button>
        </form>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      {description && (
        <div>
          {/* Results */}
          <h1 className="text-center my-4 mt-4">Our AI System Results</h1>
          <div className="container">
            <div className="result-container">
              <div></div>
              {/* Buttons to toggle display */}
              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#diseaseModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#F39334",
                  color: "black",
                }}
                onClick={toggleDiseaseVisibility}
              >
                Disease
              </button>
              {isDiseaseVisible && <p>{disease}</p>}
              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#descriptionModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#268AF3",
                  color: "black",
                }}
                onClick={toggleDescriptionVisibility}
              >
                Description
              </button>
              {isDesVisible && <p>{description}</p>}
              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#precautionModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#F371F9",
                  color: "black",
                }}
                onClick={togglePrecautionVisibility}
              >
                Precaution
              </button>
              {isPrecautionVisible && <p>{precaution}</p>}

              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#medicationsModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#F8576F",
                  color: "black",
                }}
                onClick={toggleMedicationVisibility}
              >
                Medications
              </button>
              {isMedicationsVisible && <p>{medications}</p>}

              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#workoutsModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#99F741",
                  color: "black",
                }}
                onClick={toggleWorkoutVisibility}
              >
                Workouts
              </button>
              {isWorkoutVisible && <p>{workout}</p>}

              <button
                className="toggle-button"
                data-bs-toggle="modal"
                data-bs-target="#dietsModal"
                style={{
                  padding: "4px",
                  margin: "5px 40px 5px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "140px",
                  borderRadius: "5px",
                  background: "#E5E23D",
                  color: "black",
                }}
                onClick={toggleDietsVisibility}
              >
                Diets
              </button>
              {isDietsVisible && <p>{diets}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Symptomchk;
