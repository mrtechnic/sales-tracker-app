// src/components/BarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, options }) => {
  return (
    <div style={{ height: '100%', width: '100%', padding: '30px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
