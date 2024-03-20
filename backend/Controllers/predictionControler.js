import pickle from "pickle";
import fs from "fs";
import PythonShell from "python-shell";

const modelPath = "aimodels/diabetes.pkl";

// const diabetesModel = pickle.loads(diabetesModelBuffer);

// Function to load the diabetes model
// const diabetesModelBuffer = fs.readFileSync("aimodels/diabetes.pkl");
// const diabetesModel = nodePickle.loads(diabetesModelBuffer);

// Load the diabetes model
// const diabetesModel = loadDiabetesModel();
// const tf = require("@tensorflow/tfjs-node");

// process.env.PYTHON =
//   "C:\\Users\\Gujrat laptops\\AppData\\Local\\Programs\\Python\\Python37\\python.exe";
// Load machine learning models
// const diabetesModelBuffer = fs.readFileSync("models/diabetes.pkl");
// const diabetesModel = pickle.loads(diabetesModelBuffer);

// const diabetesModel = pickle.loads("models/diabetes.pkl");
// const cancerModel = pickle.loads("models/breast_cancer.pkl");
// const heartModel = pickle.loads("models/heart.pkl");
// const kidneyModel = pickle.loads("models/kidney.pkl");
// const liverModel = pickle.loads("models/LiverDisease.pkl");
// const malariaModel = tf.loadLayersModel("models/malaria.h5");
// const pneumoniaModel = tf.loadLayersModel("models/pneumonia.h5");

// Route handler functions
export const predictDiabetes = (req, res) => {
  const data = req.body;
  console.log("data: ", data);
  let options = {
    mode: "text",
    // pythonPath:'C:/Users/Gujrat laptops/.pyenv/pyenv-win/versions/3.7.4/python.exe',
    args: [JSON.stringify(data)],
    pythonOptions: ["-u"],
  };

  // Use PythonShell to run the Python script
  PythonShell.run("predict.py", options, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      // Parse the result and send it back to the client
      const prediction = JSON.parse(result);
      res.json({ prediction });
    }
  });
  // Handle diabetes prediction
  // const input = req.body.input; // Assuming input data is passed in the request body
  // const prediction = diabetesModel.predict(input);
  // res.json({ prediction });
};

export const predictCancer = (req, res) => {
  // Handle cancer prediction
  const input = req.body.input;
  const prediction = cancerModel.predict(input);
  res.json({ prediction });
};

export const predictHeart = (req, res) => {
  // Handle heart prediction
  const input = req.body.input;
  const prediction = heartModel.predict(input);
  res.json({ prediction });
};

export const predictKidney = (req, res) => {
  // Handle kidney prediction
  const input = req.body.input;
  const prediction = kidneyModel.predict(input);
  res.json({ prediction });
};

export const predictLiver = (req, res) => {
  // Handle liver prediction
  const input = req.body.input;
  const prediction = liverModel.predict(input);
  res.json({ prediction });
};

export const predictMalaria = (req, res) => {
  // Handle malaria prediction
};

export const predictPneumonia = (req, res) => {
  // Handle pneumonia prediction
};
