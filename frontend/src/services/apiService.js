import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const generateContent = async (prompt, contentType, tone) => {
  try {
    const response = await axios.post(`${API_URL}/content/generate`, {
      prompt,
      contentType,
      tone,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const checkBackendHealth = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/health');
    return response.data;
  } catch (error) {
    return null;
  }
};
