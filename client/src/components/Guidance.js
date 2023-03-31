import SurveyForm from './SurveyForm';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Styles/Guidance.css';


function Guidance() {
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [forms, setForms] = useState([]);

  //grabs all the surveys from server
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
        <button onClick={() => setShowSurveyForm(true)}>Recommend your schedule</button>
      </div>

      {/* check the state of survey form */}
      {showSurveyForm && <span className="survey-form" ><span onClick={() => {setShowSurveyForm(false);}}></span><SurveyForm /></span>}

      <div className='surveys'>
          <>
          {/* accept input from user using a form */}
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
