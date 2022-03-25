const mongoose = require('mongoose')

const QuestionModel = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  point: {
    type: String,
  },
  options: {
    type: Array,
  },
})

module.exports = Question = mongoose.model('question',QuestionModel)