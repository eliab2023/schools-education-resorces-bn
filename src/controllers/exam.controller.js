import Exam from '../models/exam.model';

export const createExam = async (req, res) => {
  const { id, title, questions } = req.body;
  try {
    const newExam = new Exam({ id, title, questions });
    const savedExam = await newExam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the exam' });
  }
};