# Use official Node.js LTS image
FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json first for caching dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port Cloud Run expects
ENV PORT 8080
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
