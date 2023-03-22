import React, { useState } from 'react';
import Axios from 'axios';
import './Styles/SurveyForm.css';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [term, setTerm] = useState('');
  const [major, setMajor] = useState('');
  const [course, setCourse] = useState('');
  // const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var today = new Date();
    // Send the survey data to the backend using Axios or another library
    if(term.toLowerCase() !== "fall" && term.toLowerCase() !== "summer" && term.toLowerCase() !== "winter") {
      alert("Please enter a valid term: Fall, Winter or Summer");
      return;
    } else {
      console.log("submit it");
      Axios.post('http://localhost:4000/api/surveyIn', {
        formID: parseInt(" " + today.getHours()+ today.getMinutes() +today.getSeconds()),
        name: name,
        year: year,
        term: term,
        major: major,
        courses: course
      })
      .then(response => {
        if(response.data.message){
          alert(response.data.message);
        }
      })
      .catch(err=> {
        console.log(err)
      });

      window.location.reload(false);
    }
  };

  return (
    <div className='survey'>
      <h1>Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label><br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>Year: </label><br/>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} /><br />
        <label>Term: </label><br/>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} /><br />
        <label>Major: </label><br/>
        <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} /><br />
        <label>Course: </label><br/>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;