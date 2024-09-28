 
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db'

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to accept JSON data

// Simple route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});