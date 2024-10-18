import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Best-selling products data for the Doughnut chart
const bestSellingProductsData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Best Selling Products',
      data: [30000, 25000, 18000, 12000],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      hoverOffset: 3,
    },
  ],
};

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

const DoughnutChart = ({ data = bestSellingProductsData, options = defaultOptions }) => {
  return (
    <div style={{ height: '100%', width: '100%', padding: '15px 0 10px', margin: '-25px 10px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
