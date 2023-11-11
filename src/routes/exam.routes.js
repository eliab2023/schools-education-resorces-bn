import express from 'express';
import { createExam } from '../controllers/examController';

const router = express.Router();

router.post('/create', createExam);

export default router;
