import express from "express";
import cookieParser from "cookie-parser";
import empRoutes from './routes/empRoutes.js';
import { sequelize } from './sequelize.js';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Enable CORS for specific origins
app.use(cors({
  origin: ["http://localhost:3001"],
  credentials: true,
}));

// Initialize the database connection
async function init() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync();
    console.log('Database schema synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

init();

// Define routes
app.use('/emp', empRoutes);

export default app;
