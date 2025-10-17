# Use official Node.js LTS image
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you have one)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the port Cloud Run expects
ENV PORT 8080
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
