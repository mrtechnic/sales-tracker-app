import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const SalesChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Keep track of the Chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Sales Data',
          },
        },
      },
    });

    // Cleanup: destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default SalesChart;
