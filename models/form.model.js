const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
	description: String,
  adminId: String, 
  q1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Q1',
  },
  q2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Q2',
  },
  q3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Q3',
  },
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = {FormModel};
