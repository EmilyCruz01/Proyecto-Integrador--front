import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import moment from "moment-timezone";
import 'chart.js/auto';
import '../styles/pages.style/graficaBarras.css';
import Navbar from '../components/Menu/Navbar';
import axios from "axios";

const graficaBarras = () => {
  const [monitorings, setMonitorings] = useState([]);
  const [totalWeightMaduros, setTotalWeightMaduros] = useState(0);
  const [totalWeightVerdes, setTotalWeightVerdes] = useState(0);

  const fetchData = async() => {
    try {
      const date = getDate();
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: token,
        }
      };
      const url = `https://api-fi.dreamapp.com.mx/monitorings/${date}`
      const monitoringsData = await axios.get(url, config);
      setMonitorings(monitoringsData.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDate = () => {
    const timezone = 'America/Mexico_City';
    return moment().tz(timezone).format('YYYY-MM-DD');
  };

  const calculateWeights = () => {
    let madurosWeight = 0;
    let verdesWeight = 0;

    monitorings.forEach(item => {
      console.log(item.box);
      if (item.box === 'Maduros') {
        madurosWeight += item.weight;
      } else if (item.box === 'Verdes') {
        verdesWeight += item.weight;
      }
    });

    setTotalWeightMaduros(madurosWeight);
    setTotalWeightVerdes(verdesWeight);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    calculateWeights();
  },)
  
  const data = {
    labels: ['Maduros','Verdes'],
    datasets: [
      {
        label: 'kg',
        data: [totalWeightMaduros, totalWeightVerdes],
        backgroundColor: ['#FFFF00', '#00FF00'],
        borderColor: ['#CCCC00', '#333333'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kg',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Categoría',
        },
      },
    },
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="bar-chart-container">
      <Bar data={data} options={options} />
    </div>
    </>
  );
};

export default graficaBarras;
