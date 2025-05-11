const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact'); 
const projectRoutes = require('./routes/projectRoutes');
const path = require('path');  

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add test route here
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

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
