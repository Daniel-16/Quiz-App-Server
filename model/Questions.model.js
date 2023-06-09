const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new mongoose.Schema({
  quizID: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
  questions: [
    {
      prompt: String,
      options: Array,
      answers: String,
    },
  ],
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
