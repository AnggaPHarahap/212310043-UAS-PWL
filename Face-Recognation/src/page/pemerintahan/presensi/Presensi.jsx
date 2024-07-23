import React, { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";

const Presensi = () => {
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [probability, setProbability] = useState(0);
  const [highestPrediction, setHighestPrediction] = useState("");
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);

  const dataUser = [
    {
      nama: "Angga",
      npm: 212310043,
      status: "A",
    },
    {
      nama: "Fathur",
      npm: 212310018,
      status: "A",
    },
    {
      nama: "Adit",
      npm: 212310010,
      status: "A",
    },
    {
      nama: "Nagasa",
      npm: 212310035,
      status: "A",
    },
  ];

  const [staff, setStaff] = useState(dataUser);

  const loadModel = async () => {
    const modelURL = "/model.json";
    const metadataURL = "/metadata.json";

    try {
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Error loading model: ", error);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const setupWebcam = async () => {
    const flip = true;
    const webcam = new tmImage.Webcam(640, 480, flip);
    await webcam.setup();
    await webcam.play();
    webcamRef.current = webcam;
    requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);

    for (let i = 0; i < maxPredictions; i++) {
      labelContainerRef.current.appendChild(document.createElement("div"));
    }
    setIsCameraOn(true);
  };

  const loop = async () => {
    if (webcamRef.current) {
      webcamRef.current.update();
      await predict();
      requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (model && webcamRef.current) {
      const prediction = await model.predict(webcamRef.current.canvas);
      setPredictions(prediction);
      const highestPrediction = prediction.reduce((prev, current) =>
        prev.probability > current.probability ? prev : current
      );
      setHighestPrediction(highestPrediction.className);
    }
  };

  const handleStart = async () => {
    if (!isCameraOn) {
      await setupWebcam();
    }
  };

  const PredictionResult = ({ predictions }) => {
    const highestProbability = predictions.reduce((max, obj) => {
      return obj.probability > max.probability ? obj : max;
    }, predictions[0]);

    const threshold = 80;
    const accuracy = highestProbability
      ? (highestProbability.probability * 100).toFixed(0)
      : 0;
    const staffName = highestProbability && highestProbability.className;
    if (accuracy > threshold) {
      const findStaff = staff.find((v) => v.nama.includes(staffName));
      if (findStaff) {
        updateStatusPresensi(staffName, highestProbability.probability);
      }
    }
  };
  const updateStatusPresensi = (nama, probability) => {
    if (probability > 0.8) {
      setStaff((prev) =>
        prev.map((v) => (v.nama === nama ? { ...v, status: "P" } : v))
      );
    }
  };
  return (
    <div className="container">
      <button
        type="button"
        className={"btn text-white font-bold rounded-lg my-4"}
        style={{ backgroundColor: "#215273" }}
        onClick={handleStart}
      >
        {!isCameraOn ? "Start" : "Stop"}
      </button>

      <div className="row">
        <div className="col-md-6">
          <div id="webcam-container"></div>
        </div>
        <div className="col-md-6">
          <div id="label-container" ref={labelContainerRef}>
            {predictions.map((prediction, index) => (
              <div key={index}>
                {prediction.className}:{""}
                {prediction.probability.toFixed(2) * 100}%
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {prediction.probability.toFixed(2) * 100 <= 80
                    ? "tidak terdeteksi"
                    : "terdeteksi"}
                  <div
                    className="progress-bar"
                    style={{
                      width: prediction.probability.toFixed(2) * 100 + "%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <PredictionResult predictions={predictions} />
          <table className="table table-bordered">
            {staff.map((s, index) => (
              <tr key={index}>
                <td>{s.nama}</td>
                <td>{s.npm}</td>
                <td>{s.status === "A" ? "Alfa" : "Hadir"}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Presensi;
