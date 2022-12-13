const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", tasksSchema);

module.exports = Task;
