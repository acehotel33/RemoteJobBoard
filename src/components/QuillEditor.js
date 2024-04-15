// src/components/QuillEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include quill CSS

const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill theme="snow" value={value} onChange={onChange} />
  );
};

export default QuillEditor;
