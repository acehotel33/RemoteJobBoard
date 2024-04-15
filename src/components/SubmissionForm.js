// src/components/SubmissionForm.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import axios from 'axios'; 


const SubmissionForm = () => {

  
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    remoteType: 'Fully',
    jobType: 'Full-time',
    salaryRange: { min: '', max: '' },
    englishOK: false,
    description: '',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'salaryRangeMin' || name === 'salaryRangeMax') {
      // Use 'min' or 'max' as the key accentd on the input's name
      const key = name === 'salaryRangeMin' ? 'min' : 'max';
      setFormData(prev => ({
        ...prev,
        salaryRange: { ...prev.salaryRange, [key]: value },
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData(prev => ({ ...prev, description: value }));
  };

  // Handler for tags will be added here

  const sanitizeConfig = {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'ul', 'ol', 'li', 'p', 'b', 'i', 'strong', 'em', 'br'], // Add more tags as needed
    ALLOWED_ATTR: ['href', 'align', 'alt', 'src', 'title', 'style'], // Add more attributes as needed
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Sanitize description with custom configuration
    const sanitizedDescription = DOMPurify.sanitize(formData.description, sanitizeConfig);
    const sanitizedFormData = { ...formData, description: sanitizedDescription };
  
    try {
      // Send sanitizedFormData to the backend
      const response = await axios.post('http://localhost:3001/api/jobs', sanitizedFormData);
      console.log('Job posted successfully', response.data);
      // Handle post-success actions here, like clearing the form or showing a success message
    } catch (error) {
      console.error('Error posting job:', error.response.data.message);
      // Handle posting errors here, like showing an error message to the user
    }
  };
  
  
  // For now, we're just logging the formData to the console
  // Here you would typically send the formData to the backend

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
      {/* Consistent spacing and centered form */}

  
      <div className="grid gap-6 md:grid-cols-2">
        {/* Responsive grid layout for fields */}
  
        <div className="form-field">
          <label htmlFor="company" className="form-label text-gray-800">Company Name</label>
          <input type="text" id="company" name="company" className="form-input focus:border-accent-500" onChange={handleChange} value={formData.company} />
        </div>
  
        <div className="form-field">
          <label htmlFor="role" className="form-label text-gray-800">Role</label>
          <input type="text" id="role" name="role" className="form-input focus:border-accent-500" onChange={handleChange} value={formData.role} />
        </div>


        <div className="form-field">
          <label htmlFor="remoteType" className="form-label text-gray-800">Remote Type</label>
          <select id="remoteType" name="remoteType" className="form-select focus:border-accent-500" onChange={handleChange} value={formData.remoteType}>
            <option value="Fully">Fully Remote</option>
            <option value="Partly">Partly Remote</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="jobType" className="form-label text-gray-800">Job Type</label>
          <select id="jobType" name="jobType" className="form-select focus:border-accent-500" onChange={handleChange} value={formData.jobType}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Salary Range Side by Side */}
        <div className="form-field">
          <label htmlFor="salaryRangeMin" className="form-label text-gray-800">Salary Range Min ($)</label>
          <input
            type="number"
            id="salaryRangeMin"
            name="salaryRangeMin"
            className="form-input focus:border-accent-500" 
            onChange={handleChange}
            value={formData.salaryRange.min} 
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="salaryRangeMax" className="form-label text-gray-800">Salary Range Max ($)</label>
          <input
            type="number"
            id="salaryRangeMax"
            name="salaryRangeMax"
            className="form-input focus:border-accent-500" 
            onChange={handleChange}
            value={formData.salaryRange.max}
          />
        </div>

      </div>

        {/* English OK? Checkbox right next to label */}
        <div className="form-field flex justify-between items-center text-gray-800">
          <label htmlFor="englishOK" className="form-label">
            English OK?
          </label>
          <input type="checkbox" id="englishOK" name="englishOK" className="form-checkbox" onChange={handleChange} checked={formData.englishOK} />
        </div>

      

        <div className="form-field mt-6">
          <label className="form-label text-gray-800">Description</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleDescriptionChange} />
          {/* Ensure ReactQuill fits within form design */}
        </div>

        {/* Adjusted position for the submit button for visual importance */}
        <div className="text-center mt-8">
          <button type="submit" className="submit-button bg-accent-500 hover:bg-accent-500 text-base font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
          
      </form>
  
  );
};

export default SubmissionForm;
