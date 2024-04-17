require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

const connectToDatabase = async () => {
    let uri;
    
    if (process.env.NODE_ENV === 'production') {
        // Configuration for AWS Secrets Manager using SDK v3
        const client = new SecretsManagerClient({ region: 'eu-north-1' });
        const secretName = "arn:aws:secretsmanager:eu-north-1:339713118500:secret:MONGODB_URI-gFq8Bz";

        try {
            const data = await client.send(new GetSecretValueCommand({ SecretId: secretName }));
            if (data.SecretString) {
                const secret = JSON.parse(data.SecretString);
                uri = secret.MONGODB_URI;
            }
        } catch (error) {
            console.error("Error retrieving secret:", error);
            return;
        }
    } else {
        // Use .env in development
        uri = process.env.MONGODB_URI;
    }

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(`MongoDB connection error: ${err}`);
    }
};

// Call connectToDatabase function
connectToDatabase();

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
    applicationLink: String,
});

// Create Mongoose model
const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

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
        const jobPostings = await JobPosting.find().sort({ datePosted: -1 });
        res.json(jobPostings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
