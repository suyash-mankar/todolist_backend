const Task = require("../models/tasks");

module.exports.view = async function (req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      tasks: tasks,
      message: "Request Successful",
    });
  } catch (err) {
    if (err) {
      console.log("error in finding tasks", err);
    }
  }
};

module.exports.create = async function (req, res) {
  try {
    console.log(req.body.title);
    const task = await Task.create({
      title: req.body.title,
      completed: false,
    });

    res.status(200).json({
      task: task,
      message: "Task Created Successfully",
    });
  } catch (err) {
    console.log("error in creating task", err);
  }
};

module.exports.modify = async function (req, res) {
  try {
    console.log(req.body.completed);
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        completed: req.body.completed,
      },
      // to return the updated task
      { new: true }
    );

    res.status(200).json({
      task: task,
      message: "Task modified successfully",
    });
  } catch (err) {
    console.log("error in creating task", err);
  }
};
