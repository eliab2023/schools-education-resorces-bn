import express from 'express';
import { getExams, createExam, updateExam, deleteExam } from '../controllers/exam.controller.js';

 const router = express.Router();

// router.get('/', getExams);
router.post('/', createExam);
// router.put('/:id', updateExam);
// router.delete('/:id', deleteExam);

export default router;
