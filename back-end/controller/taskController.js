const Task = require("../model/taskModel.js");

exports.getTasks = async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({
    success: true,
    data: tasks,
  });
};
exports.createLink = async (req, res, next) => {
  const task = await Task.create({
    task: req.body,
  });
  res.status(200).json({
    success: true,
    data: link,
  });
};

exports.createComment = async (req, res) => {
  const task = req.body;
  try {
    const newTask = TaskModel.create({
      task: task,
    });
    return res.status(200).json({
      message: true,
      data: createTask,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "error",
    });
  }
};

exports.deleteTasks = async (req, res, next) => {
  try {
    const task = await taskModel.delete();
    res.status(200).json({
      message: "task deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};
