import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetBarChart = ({ categories }) => {
  const chartData = {
    labels: categories.map(category => category.category),
    datasets: [
      {
        label: 'Spending',
        data: categories.map(category => category.spent),
        backgroundColor: categories.map(category => category.color),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Budget Bar Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BudgetBarChart;
