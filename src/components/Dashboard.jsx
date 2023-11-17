// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import MetricsComponent from './MetricsComponent';
import ChartComponent from './ChartComponent';
import api from './api'; // Assume you have an API module for fetching data

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch key metrics
    api.fetchMetrics()
      .then(data => setMetrics(data))
      .catch(error => console.error('Error fetching metrics:', error));

    // Fetch chart data
    api.fetchChartData()
      .then(data => setChartData(data))
      .catch(error => console.error('Error fetching chart data:', error));
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <MetricsComponent metrics={metrics} />
      <ChartComponent data={chartData} />
    </div>
  );
}

export default Dashboard;
