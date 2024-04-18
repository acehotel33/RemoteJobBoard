require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const app = express();
app.use(cors());
app.use(express.json());

const secretsClient = new SecretsManagerClient({ region: 'eu-north-1' });

app.get('/', (req, res) => {
  res.send('Server is healthy!');
});

const connectToDatabase = async () => {
    let uri;

    console.log(`Environment: ${process.env.NODE_ENV}`);
    
    if (process.env.NODE_ENV === 'production') {
        const secretName = "arn:aws:secretsmanager:eu-north-1:339713118500:secret:MONGODB_URI-gFq8Bz";

        try {
            const data = await secretsClient.send(new GetSecretValueCommand({ SecretId: secretName }));
            if (data.SecretString) {
                const secret = JSON.parse(data.SecretString);
                uri = secret.MONGODB_URI;
            }
            console.log(`Attempting to connect to MongoDB at URI: ${uri}`);
        } catch (error) {
            console.error("Error retrieving secret:", error);
            return;
        }
    } else {
        uri = process.env.MONGODB_URI;
    }

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(1);
    }
};

connectToDatabase();

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

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

app.post('/api/jobs', async (req, res) => {
    try {
        const newJob = new JobPosting(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/test-db', async (req, res) => {
    try {
        const jobs = await JobPosting.find().limit(1);
        console.log('Successfully fetched data from MongoDB:', jobs);
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ message: 'Failed to fetch data from MongoDB' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
