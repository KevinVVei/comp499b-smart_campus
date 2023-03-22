import SurveyForm from './SurveyForm';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Styles/Guidance.css';


function Guidance() {
  const [showSurveyForm, setShowSurveyForm] = useState(false);

  const [forms, setForms] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/api/survey')
    .then(response => {
      setForms(response.data);
    })
    .catch(err=>{
        console.log(err);
    });
  }, []);

  return (
    <div className="guidance">
      <div className='guidance-info'>
        <h1>Academic Guidance</h1>
        <p>Here you can find some helpful resources and links for academic guidance.</p><br/>
        <button onClick={() => {setShowSurveyForm(true); document.body.classList.add('disable-scroll');}}>Recommend your schedule</button>
      </div>

      {showSurveyForm && <span className="survey-form" ><span onClick={() => {setShowSurveyForm(false); document.body.classList.remove('disable-scroll');}}></span><SurveyForm /></span>}

      <div className='surveys'>
          <>
          {forms.map(SurveyForms => {
            return (
              <div key={SurveyForms.FormID} id="form_info">
                  <div>
                    <h2>{SurveyForms.Name} : {SurveyForms.Major}</h2>
            
                    <p><b>{SurveyForms.Term} {SurveyForms.Year}</b> : {SurveyForms.Courses}</p><br />
                  </div>  
              </div>
            );
          })}
          </>
          
      </div>
    </div>

    
  );
}

export default Guidance;
