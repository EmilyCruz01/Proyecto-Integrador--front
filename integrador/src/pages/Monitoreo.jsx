import Navbar from "../components/Menu/Navbar";
import "../styles/pages.style/monitoreo.css";
import { useRef, useState, useEffect } from "react";
import moment from "moment-timezone";
import io from "socket.io-client";
import axios from "axios";

const worker = new Worker(new URL("../workers/WorkerPlatano.js", import.meta.url));

const Monitoreo = () => {
  const [verdesData, setVerdesData] = useState([]);
  const [madurosData, setMadurosData] = useState([]);
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const getAllMonitorings = async () => {
    try {
      const date = getDate();
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const url = `https://api-fi.dreamapp.com.mx/monitorings/${date}`;
      const response = await axios.get(url, config);
      const monitoringsData = response.data.data;

      const maduros = monitoringsData.filter((item) => item.box === "Maduros");
      const verdes = monitoringsData.filter((item) => item.box === "Verdes");

      setMadurosData(maduros);
      setVerdesData(verdes);

      worker.postMessage({ maduros, verdes });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDate = () => {
    const timezone = "America/Mexico_City";
    return moment().tz(timezone).format("YYYY-MM-DD");
  };

  useEffect(() => {
    worker.onmessage = (e) => {
      const { maduros, verdes } = e.data;
      console.log("Datos procesados por el Worker:", { maduros, verdes });
     
    };

    return () => {
      worker.terminate(); 
    };
  }, []);

  useEffect(() => {
    getAllMonitorings();

    const socket = io("https://socket-server.dreamapp.com.mx");

    socket.on("monitorings", (data) => {
      console.log(data);
      if (data.box === "Maduros") {
        setMadurosData((prevData) => [...prevData, data]);
      } else if (data.box === "Verdes") {
        setVerdesData((prevData) => [...prevData, data]);
      }

      worker.postMessage({ data });
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  const handleStartCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStream(stream);
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  };

  const handleStopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
    }
  };

  const formatData = (data) => {
    return data
      .map((item) => {
        return `Date: ${item.date}:${item.time}, Temperature: ${item.temperature}, Humidity: ${item.humidity}, Weight: ${item.weight}`;
      })
      .join("\n");
  };

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <button onClick={handleStartCamera}>Ver</button>
        <button onClick={handleStopCamera}>Detener</button>
        <video ref={videoRef} style={{ width: "100%", height: "auto" }} autoPlay></video>
      </div>
      <div className="tablas">
        <div className="tablaMonitoreo">
          <h1>Maduros</h1>
          <textarea className="inputTabla" readOnly value={formatData(madurosData)} />
        </div>

        <div className="tablaMonitoreo">
          <h1>Verdes</h1>
          <textarea className="inputTabla" readOnly value={formatData(verdesData)} />
        </div>
      </div>
    </div>
  );
};

export default Monitoreo;
