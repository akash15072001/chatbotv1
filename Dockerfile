# Use Node.js as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure all files are included and properly built
RUN npm run build || echo "No build script defined"

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
