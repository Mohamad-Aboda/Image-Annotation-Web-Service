import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, Legend } from 'chart.js';
import 'chart.js/auto'; // Import necessary chart components
import '../App.css'


ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, Legend);

const StatsChartComponent = ({ stats }) => {
  const chartRef = useRef(null); // Reference to the chart canvas

  useEffect(() => {
    if (!stats || !chartRef.current) return;

    const ctx = chartRef.current.getContext('2d'); // Get 2D context for drawing

    // Create a new chart instance
    const myChart = new ChartJS(ctx, {
      type: 'bar', // Chart type (bar in this case)
      data: {
        labels: ['Cat', 'Dog', 'Neither'], // Category labels
        datasets: [{
          label: 'Annotation Counts', // Dataset label
          data: [stats.cat, stats.dog, stats.neither], // Data values
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Cat color
            'rgba(54, 162, 235, 0.2)', // Dog color
            'rgba(255, 206, 86, 0.2)', // Neither color
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', // Cat border color
            'rgba(54, 162, 235, 1)', // Dog border color
            'rgba(255, 206, 86, 1)', // Neither border color
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              font: {
                size: 14,
                color: '#333',
              },
            },
            gridLines: {
              color: '#eee',
              lineWidth: 0.5,
            },
          }],
          yAxes: [{
            ticks: {
              font: {
                size: 14,
                color: '#333',
              },
            },
            gridLines: {
              color: '#eee',
              lineWidth: 0.5,
            },
          }],
        },
        legend: {
          labels: {
            font: {
              size: 14,
              color: '#333',
            },
          },
        },
      },
    });

    // Cleanup function to avoid memory leaks
    return () => myChart.destroy();
  }, [stats]); // Rerun effect when stats change

  return <canvas ref={chartRef} />;
};

export default StatsChartComponent;
