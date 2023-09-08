# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install API dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your API listens on
EXPOSE 3000

# Command to start your API
CMD ["node", "app.js"]
