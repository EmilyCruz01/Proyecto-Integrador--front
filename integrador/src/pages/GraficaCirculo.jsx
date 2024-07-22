import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/pages.style/GraficaCirculo.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Navbar from '../components/Menu/Navbar'

const GraficaCirculo = () => {
    const data = {
        labels: ['Verdes', 'Maduros', 'Pasados'],
        datasets: [
          {
            data: [25, 62.5, 12.5],
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
            formatter: (value) => `${value}%`,
            font: {
              weight: 'bold',
              size: 16,
            },
          },
        },
      };
    
      return (
        <>
        <Navbar></Navbar>
        <div style={{display:'flex', width:'100%'}}>
        
        <div style={{width:'50%',margin:'2%'}}>
        <div className='tituloCirculo'><h2>Función multinomial:</h2></div>
        <div className="datosProbCirculo" style={{display:'flex'}}>
          <div className='labelProb'>
          <h3>Verdes:</h3>
          <input type="text" />
         
          </div>
          <div className='labelProb'>
          <h3>Maduros:</h3>
          <input type="text" />
         
          </div>
          <div className='labelProb'>
          <h3>Pasados:</h3>
          <input type="text" />
         
          </div>
        <button className='botonGrafica'> Calcular</button>
        </div>

        <div>
        <div className='titulo2Circulo'><h2>Probabilidad:</h2></div>
        <div className="datosProbCirculo" style={{display:'flex'}}>
          <div className='labelProb'>
          <h3>Verdes:</h3>
          <label htmlFor="" className='probVerdes'>datos verdes</label>
          </div>
          <div className='labelProb'>
          <h3>Maduros:</h3>
          <label htmlFor="" className='probMaduros'>datos maduros</label>
          </div>
          <div className='labelProb'>
          <h3>Pasados:</h3>
          <label htmlFor="" className='probPasados'>datos pasados</label>
          </div>
        <button className='botonGrafica'> Calcular</button>
        </div>
        </div>
        </div>
        <div className="pie-chart-container" style={{width:'100%', margin:'2%'}}>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
        </div>
        </>
      );
    };
export default GraficaCirculo;