// Entry point - initializes config, DB, and starts server

require('dotenv').config(); // Load environment variables from .env

const config = require('./src/config/env');
const { connectDB } = require('./src/config/database');
const app = require('./src/app');

// Validate environment variables
config.validate();

// Start server
const start = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port} (${config.nodeEnv})`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();
