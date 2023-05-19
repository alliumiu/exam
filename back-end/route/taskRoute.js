const express = require("express");
const taskRouter = express.Router();
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController.js");

router
  .get("/:id", getTask)
  .get("/", getTasks)
  .post("/", createTask)
  .patch("/:id", updateTask)
  .delete("/:id", deleteTask);
module.exports = router;
