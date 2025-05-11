const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact'); // Correct contact route import
const projectRoutes = require('./routes/projectRoutes'); // This is the correct path
const path = require('path');  // Import the 'path' module for serving static files

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming requests with JSON payloads

// Serve static files from 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));  // This will serve images from the 'backend/images' folder

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);  // Ensure this points to the correct file

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
