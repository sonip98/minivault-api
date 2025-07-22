# Use Node.js LTS base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your Fastify server runs on
EXPOSE 3000

# Start the Fastify server
CMD ["npm", "start"]
