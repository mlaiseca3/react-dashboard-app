// MetricsComponent.jsx
import React from 'react';

const MetricsComponent = ({ metrics }) => {
  return (
    <div>
      <h2>Key Metrics</h2>
      <ul>
        <li>Users: {metrics.users}</li>
        <li>Revenue: ${metrics.revenue}</li>
        <li>Page Views: {metrics.pageViews}</li>
      </ul>
    </div>
  );
}

export default MetricsComponent;
