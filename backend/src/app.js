// Express application setup and configuration

const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (will be configured based on frontend URL)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hotel Management System API' });
});

// TODO: Mount routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/rooms', require('./routes/roomRoutes'));
// app.use('/api/requests', require('./routes/requestRoutes'));
// app.use('/api/stays', require('./routes/stayRoutes'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
