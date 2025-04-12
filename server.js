const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

mongoose.connect('mongodb+srv://Matheesha:math123@weddingplanner.crwciem.mongodb.net')
  .then(() => app.listen(5001, () => console.log('Task Service on 5001')))
  .catch(console.error);
