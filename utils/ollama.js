// utils/ollama.js
require('dotenv').config();
const axios = require('axios');

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';

async function queryOllama(prompt) {
  try {
    const res = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: 'mistral',
      prompt,
      stream: false
    });

    // Check response structure
    if (res.data && res.data.response) {
      return res.data.response.trim();
    } else {
      console.error('Unexpected response format:', res.data);
      return 'Unexpected format from Ollama';
    }
  } catch (err) {
    console.error('Ollama API Error:', err.message);
    return 'Error: Failed to generate response from Ollama.';
  }
}

module.exports = { queryOllama };
