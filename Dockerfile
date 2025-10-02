# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build:prod

# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the built files to the Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]