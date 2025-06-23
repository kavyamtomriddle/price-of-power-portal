import React, { useState } from 'react';
import './GrievanceForm.css';

function GrievanceForm({ addGrievance }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addGrievance({ text, date: new Date().toLocaleString() });
      setText('');
    }
  };

  return (
    <div className="form-container">
      <h2>Submit a Grievance</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your grievance..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GrievanceForm;
