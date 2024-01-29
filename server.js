require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});

// Add more routes or middleware as needed...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});