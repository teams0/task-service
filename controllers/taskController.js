const Task = require('../models/Task');
const axios = require('axios');

exports.createTask = async (req, res) => {
  const { name, category } = req.body;
  try {
    const task = new Task({ name, category });
    await task.save();

    // Notify notification-service
    await axios.post('http://notification-service:5003/notifications', {
      message: `Task created: ${name}`
    });    

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
