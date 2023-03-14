import React, { useState } from 'react';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [term, setTerm] = useState('');
  const [major, setMajor] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the survey data to the backend using Axios or another library
  }

  return (
    <div>
      <h1>Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Year:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <label>
          Term:
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </label>
        <br />
        <label>
          Major:
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </label>
        <br />
        <label>
            Course:
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;