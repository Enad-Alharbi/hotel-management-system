// Environment variables loader and validator
// Ensures required variables are set before app starts

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY || '7d',
  logLevel: process.env.LOG_LEVEL || 'info',

  // Validation function - call before starting app
  validate() {
    if (!this.mongoUri) {
      throw new Error('MONGO_URI environment variable is required');
    }
    if (!this.jwtSecret) {
      throw new Error('JWT_SECRET environment variable is required');
    }
    return true;
  }
};
