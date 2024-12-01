import { Pie } from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import 'chart.js/auto';
import '../styles/pages.style/GraficaCirculo.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Navbar from '../components/Menu/Navbar';
import axios from 'axios';

import WorkerCalculation from '../workers/WorkerCalculation?worker';

const GraficaCirculo = () => {
  const [bananasData, setBananasData] = useState([]);
  const [maduros, setMaduros] = useState([]);
  const [verdes, setVerdes] = useState([]);
  const [incomibles, setIncomibles] = useState([]);
  const [inputMaduros, setInputMaduros] = useState(0);
  const [inputVerdes, setInputVerdes] = useState(0);
  const [inputIncomibles, setInputIncomibles] = useState(0);
  const [inputMuestra, setInputMuestra] = useState(0);
  const [probabilities, setProbabilities] = useState({ maduros: 0, verdes: 0, incomibles: 0 });

  const workerRef = useRef();

  useEffect(() => {
    workerRef.current = new WorkerCalculation();

    workerRef.current.onmessage = (e) => {
      const { type, result } = e.data;
      if (type === 'calculateProb') {
        setProbabilities(result);
        alert(`La probabilidad multinomial es: ${result.maduros}%`);
      }
    };

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleCalculate = () => {
    workerRef.current.postMessage({
      type: 'calculateProb',
      payload: {
        maduros: maduros.length,
        verdes: verdes.length,
        incomibles: incomibles.length,
      },
    });
  };

  const classifyBananas = (data) => {
    const maduros = data.filter((banana) => banana.classification === 'Maduro');
    const verdes = data.filter((banana) => banana.classification === 'Verde');
    const incomibles = data.filter((banana) => banana.classification === 'Incomible');

    setMaduros(maduros);
    setVerdes(verdes);
    setIncomibles(incomibles);
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const madurosResponse = await axios.get('https://api-fi.dreamapp.com.mx/bananas', config);
      setBananasData(madurosResponse.data.data);
      classifyBananas(madurosResponse.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const madurosCount = maduros.length;
  const verdesCount = verdes.length;
  const incomiblesCount = incomibles.length;

  const data = {
    labels: ['Verdes', 'Maduros', 'Incomibles'],
    datasets: [
      {
        data: [verdesCount, madurosCount, incomiblesCount],
        backgroundColor: ['#00FF00', '#FFFF00', '#000000'],
        hoverBackgroundColor: ['#00CC00', '#CCCC00', '#333333'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      datalabels: {
        color: '#fff',
        formatter: (value) => `${value}`,
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%', margin: '2%' }}>
          <div className='tituloCirculo'><h2>Función multinomial:</h2></div>
          <div className="datosProbCirculo" style={{ display: 'flex' }}>
            <div className='labelProb'>
              <h3>Verdes:</h3>
              <input type="number" value={inputVerdes} onChange={(e) => setInputVerdes(Number(e.target.value))} />
            </div>
            <div className='labelProb'>
              <h3>Maduros:</h3>
              <input type="number" value={inputMaduros} onChange={(e) => setInputMaduros(Number(e.target.value))} />
            </div>
            <div className='labelProb'>
              <h3>Pasados:</h3>
              <input type="number" value={inputIncomibles} onChange={(e) => setInputIncomibles(Number(e.target.value))} />
            </div>
            <div className='labelProb'>
              <h3>Muestra:</h3>
              <input type="number" value={inputMuestra} onChange={(e) => setInputMuestra(Number(e.target.value))} />
            </div>
            <button className="botonGrafica" onClick={handleCalculate}>
              Calcular
            </button>
          </div>
          <div>
            <div className='titulo2Circulo'><h2>Probabilidad:</h2></div>
            <div className="datosProbCirculo" style={{ display: 'flex' }}>
              <div className='labelProb'>
                <h3>Verdes:</h3>
                <label htmlFor="" className='probVerdes'>{probabilities.verdes}%</label>
              </div>
              <div className='labelProb'>
                <h3>Maduros:</h3>
                <label htmlFor="" className='probMaduros'>{probabilities.maduros}%</label>
              </div>
              <div className='labelProb'>
                <h3>Pasados:</h3>
                <label htmlFor="" className='probPasados'>{probabilities.incomibles}%</label>
              </div>
              <button className='botonGrafica' onClick={handleCalculate}> Calcular</button>
            </div>
          </div>
        </div>
        <div className="pie-chart-container" style={{ width: '100%', margin: '2%' }}>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      </div>
    </>
  );
};

export default GraficaCirculo;