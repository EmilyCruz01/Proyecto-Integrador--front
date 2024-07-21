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
        <div className="pie-chart-container">
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
        </>
      );
    };
export default GraficaCirculo;