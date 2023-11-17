// api.js

// Replace 'your-api-endpoint' with the actual endpoint URL
const API_ENDPOINT = 'https://your-api-endpoint/metrics';

const fetchMetrics = async () => {
  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export default fetchMetrics;
