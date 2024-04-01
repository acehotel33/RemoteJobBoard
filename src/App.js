// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css'; // Adjust the path based on your structure


// Components
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Navigation Link */}
            </li>
            <li>
              <Link to="/jobs">Jobs</Link> {/* Navigation Link */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
