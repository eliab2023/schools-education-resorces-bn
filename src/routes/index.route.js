import express from 'express';
import examRoutes from './exam.routes';

const allRoutes = express.Router();

allRoutes.use('/users', examRoutes);

export default allRoutes;
