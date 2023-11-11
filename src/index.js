import express from 'express';
import connectDB from './db/db.config.js';
import allRoutes from "./routes/index.route.js";

const app = express();

// Connect to MongoDB
connectDB(); // Un-comment this line to connect to the database

// Body parser middleware
app.use(express.json());

// Use all routes from the index
app.use('/api', allRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
