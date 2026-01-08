const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const activityRoutes = require('./routes/activities');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('MongoDB connected successfully');
  console.log('Database:', mongoose.connection.db.databaseName);
})
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/activities', activityRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

