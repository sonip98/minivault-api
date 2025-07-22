// utils/logger.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/prompts.log');

async function logInteraction(prompt, response) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} | Prompt: ${prompt} | Response: ${response}\n`;
  fs.appendFileSync(logFilePath, logEntry);
}

module.exports = {
  logInteraction
};
