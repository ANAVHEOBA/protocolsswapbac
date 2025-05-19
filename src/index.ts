import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import authRoutes from './module/auth/auth.route';
import poolRoutes from './module/pool/pool.route';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', poolRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 