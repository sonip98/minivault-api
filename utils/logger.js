// utils/logger.js
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '..', 'logs');
const logFile = path.join(logDir, 'log.jsonl');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

async function logInteraction(prompt, response) {
  const entry = {
    timestamp: new Date().toISOString(),
    prompt,
    response
  };

  fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');
}

module.exports = { logInteraction };
