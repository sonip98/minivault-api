// index.js
const fastify = require('fastify')({ logger: true });
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

// Register routes
fastify.register(require('./routes/generate'));

// Health check endpoint (Bonus)
fastify.get('/status', async () => {
  const uptime = process.uptime();
  const memoryUsage = process.memoryUsage();
  return {
    status: 'ok',
    uptime,
    memoryUsage
  };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });

    console.log('🚀 MiniVault API running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
