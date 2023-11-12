import express from 'express';
import connectDB from './db/db.config.js';
import indexRoute from './routes/index.route.js';

const app = express();


connectDB(); 

app.use(express.json());

app.use('/api', indexRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
