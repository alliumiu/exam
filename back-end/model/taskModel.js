const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: String,
  id: String,
  createdDate: Date,
});
