import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  id: Number,
  text: String,
  options: [String],
  correctAnswer: String,
});

class ExamClass {
  constructor() {
    const examSchema = new mongoose.Schema({
      id: Number,
      title: String,
      questions: [questionSchema],
    });
    return mongoose.model('Exam', examSchema);
  }
}

export default new ExamClass();
