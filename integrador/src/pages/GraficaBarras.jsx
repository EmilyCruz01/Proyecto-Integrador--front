import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/pages.style/graficaBarras.css';
import Navbar from '../components/Menu/Navbar';

const graficaBarras = () => {
  const data = {
    labels: ['Maduros', 'Pasados', 'Verdes'],
    datasets: [
      {
        label: 'kg',
        data: [1, 0.7, 1.1],
        backgroundColor: ['#FFFF00', '#000000', '#00FF00'],
        borderColor: ['#CCCC00', '#333333', '#00CC00'],
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
