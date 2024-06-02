import express from "express";
import { spawn } from "child_process";
import multer from "multer";
import path from "path";

const router = express.Router();

const diabetesModel = "D:\\AI-MedLab\\backend\\aimodels\\diabetes.pkl";
const heartModel = "D:\\AI-MedLab\\backend\\aimodels\\heart.pkl";
const kidneyModel = "D:\\AI-MedLab\\backend\\aimodels\\kidney.pkl";
const liverModel = "D:\\AI-MedLab\\backend\\aimodels\\kidney.pkl";
const breastCancerModel = "D:\\AI-MedLab\\backend\\aimodels\\breast_cancer.pkl";

const pythonScriptPathForDiabetes = "D:\\AI-MedLab\\backend\\predict.py";
const pythonScriptPathForHeart = "D:\\AI-MedLab\\backend\\heart.py";
const pythonScriptPathForKidney = "D:\\AI-MedLab\\backend\\kidney.py";
const pythonScriptPathForLiver = "D:\\AI-MedLab\\backend\\kidney.py";
const pythonScriptPathForBreastCancer =
  "D:\\AI-MedLab\\backend\\breast-cancer.py";

router.post("/diabetes", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForDiabetes,
      "--loads",
      diabetesModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});
router.post("/heart", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForHeart,
      "--loads",
      heartModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});
router.post("/kidney", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForKidney,
      "--loads",
      kidneyModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});
router.post("/liver", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForLiver,
      "--loads",
      liverModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});
router.post("/breast-cancer", (req, res) => {
  try {
    const data = req.body.data;
    const pythonProcess = spawn("python", [
      pythonScriptPathForBreastCancer,
      "--loads",
      breastCancerModel,
      JSON.stringify(data),
    ]);
    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.post("/predict-pneumonia", upload.single("image"), (req, res) => {
  try {
    // Get the uploaded image file path
    const imagePath = req.file.path;

    // Path to the Python script for pneumonia prediction
    const pythonScriptPathForPneumonia = "D:\\AI-MedLab\\backend\\pneumonia.py";

    // Spawn a Python process to execute the prediction script
    const pythonProcess = spawn("python", [
      pythonScriptPathForPneumonia,
      imagePath,
    ]);

    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});

router.post("/predict-malaria", upload.single("image"), (req, res) => {
  try {
    // Get the uploaded image file path
    const imagePath = req.file.path;

    // Path to the Python script for pneumonia prediction
    const pythonScriptPathForPneumonia = "D:\\AI-MedLab\\backend\\malaria.py";

    // Spawn a Python process to execute the prediction script
    const pythonProcess = spawn("python", [
      pythonScriptPathForPneumonia,
      imagePath,
    ]);

    let prediction = "";
    let responseSent = false; // Flag to track if response has been sent

    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script output:", data.toString());
      prediction += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      console.log("Prediction:", prediction);
      if (!responseSent) {
        res.json({ prediction });
        responseSent = true;
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      res.status(500).send("Internal Server Error");
      responseSent = true;
    }
  }
});

export default router;
