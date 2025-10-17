# Use Node.js 18
FROM node:18-slim

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install express node-fetch

# Copy app code
COPY . .

# Expose port
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]