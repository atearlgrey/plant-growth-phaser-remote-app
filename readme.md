# Plant Growth Phaser Project

This project is a Phaser 3 game built with TypeScript and Webpack. It uses Module Federation to expose remote modules and supports Docker for deployment.

## Features
- **Phaser 3**: A fast and flexible 2D game framework.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **Module Federation**: Share and consume remote modules.
- **Docker Support**: Easily deploy the application using Docker and Nginx.

## Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/).
- **npm**: Comes with Node.js.
- **Docker**: Install [Docker](https://www.docker.com/).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/plant-growth-phaser.git
   cd plant-growth-phaser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

4. Start the development remote app for Micro Frontend:
   ```bash
   npm run start:remote
   ```

5. Build the project for dev|fat|uat|prod:
   ```bash
   npm run build:{dev|fat|uat|prod}
   ```

6. Serve the production build with Docker:
   ```bash
   docker build --build-arg env={dev|fat|uat|prod} -t plant-growth-phaser .
   docker run -p 80:80 plant-growth-phaser
   ```

## Project Structure
```
.
├── dist/                # Production build output
├── public/              # Static assets
├── src/                 # Source code
│   ├── scenes/          # Game scenes
│   ├── main.ts          # Entry point
├── webpack.config.js    # Webpack configuration
├── Dockerfile           # Docker configuration
├── package.json         # Project metadata and scripts
```

## Static Assets
Place static assets like images or audio files in the `public` folder. They will be served automatically.

## License
This project is licensed under the MIT License.
