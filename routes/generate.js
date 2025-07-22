// routes/generate.js
const logger = require('../utils/logger');
const { queryOllama } = require('../utils/ollama');

async function routes(fastify, options) {
  fastify.post('/generate', async (request, reply) => {
    const { prompt } = request.body;

    if (!prompt) {
      reply.code(400).send({ error: 'Prompt is required' });
      return;
    }

    const responseText = await queryOllama(prompt);

    await logger.logInteraction(prompt, responseText);
    return { response: responseText };
  });
}

module.exports = routes;
