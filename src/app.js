const express = require('express');
let bodyParser = require('body-parser');



const app = express();
const PORT = process.env.PORT || 9000;
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// database connection 
const mongoDBUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/crick-app';

mongoose
  .connect(mongoDBUrl, { useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// Routes
const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

