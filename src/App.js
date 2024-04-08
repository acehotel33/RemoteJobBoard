// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, /*Link*/ } from 'react-router-dom';
import './styles/App.css'; // Adjust the path based on your structure

// Components
import HomePage from './components/HomePage';
import JobPage from './components/JobPage';
import SubmissionPage from './components/SubmissionPage'; 
// import DevNavigationBar from './components/DevNavigationBar'; // Import the DevNavigationBar

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between"> {/* Make sure the main div is a flex container */}
        
        <Routes>
          <Route path="/job-page" element={<JobPage />} />
          <Route path="/submit-job" element={<SubmissionPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Development Navigation Bar at the bottom */}
        {/* <DevNavigationBar /> */}
      </div>
    </Router>
  );
}

export default App;
