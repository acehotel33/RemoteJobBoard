require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
const uri = process.env.MONGODB_URI

// console.log(uri); // This should output your MongoDB URI

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Handle connection errors
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });

  
// Define Job Posting Schema
const jobPostingSchema = new mongoose.Schema({
  role: String,
  company: String,
  salaryRange: { min: Number, max: Number },
  jobType: String,
  remoteType: String,
  datePosted: { type: Date, default: Date.now },
  englishOK: Boolean,
  description: String,
  descriptors: [String],
});

// Create Mongoose model
const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

// Define routes
app.post('/api/jobs', async (req, res) => {
  try {
    const newJob = new JobPosting(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/jobs', async (req, res) => {
  try {
    const jobPostings = await JobPosting.find().sort({ datePosted: -1 }); // Sort by datePosted in descending order
    res.json(jobPostings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ... Define other routes ...

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
