// cli.js
const axios = require('axios');

const prompt = process.argv.slice(2).join(' ');

if (!prompt) {
  console.log('Usage: node cli.js "Your prompt here"');
  process.exit(1);
}

axios.post('http://localhost:3000/generate', { prompt })
  .then(res => {
    console.log('🧠 Response:', res.data.response);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
