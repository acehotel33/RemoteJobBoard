// src/config.js

const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://weremotege-prod.eu-north-1.elasticbeanstalk.com/api' // Replace with your Elastic Beanstalk URL
  : 'http://localhost:3001/api';

export default API_URL;