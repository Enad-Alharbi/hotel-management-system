# Hotel Management System - Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your local settings
# At minimum, set:
# - MONGO_URI: Your MongoDB connection string
# - JWT_SECRET: Your JWT secret key
```

3. **Start the server:**

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:5000` by default.

## Project Structure

```
src/
├── config/          # Configuration files
│   ├── env.js       # Environment variables & validation
│   ├── database.js  # MongoDB connection
│   └── constants.js # App constants (roles, request types, etc.)
├── models/          # Mongoose schemas (User, Room, Stay, Request)
├── controllers/     # Route handlers
├── services/        # Business logic
├── routes/          # API endpoints
├── middlewares/     # Express middlewares (auth, role-based access, error handling)
└── utils/           # Helper functions
```

## Environment Variables

Required variables in `.env`:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token signing

Optional variables:
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production, default: development)
- `JWT_EXPIRY`: JWT token expiry (default: 7d)
- `LOG_LEVEL`: Logging level (default: info)

## API Health Check

Once running, test the server:
```bash
curl http://localhost:5000/health
```

Should return:
```json
{ "status": "Server is running" }
```

## Next Steps

- Create MongoDB models (User, Room, Stay, Request)
- Implement controllers for each module
- Set up routes
- Add middlewares for authentication and authorization
