import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://ishimweeliab0:h1ghKQ7wJVQXp4tY@cluster0.gb1mzgf.mongodb.net/");
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not able to connect to database.", error);
  }
};
