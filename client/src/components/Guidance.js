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
    <div className="Guidance">
      <h1>Guidance</h1>
      <p>Here you can find some helpful resources and links for academic guidance.</p>
      <button onClick={() => setShowSurveyForm(true)}>Recommend Your Course Combination</button>
      {/* check the state of survey form */}
      {showSurveyForm && <SurveyForm />}

      <div className='surveys'>
        <>
          {/* accept input from user using a form */}
          {forms.map(SurveyForms => {
            return (
              <div key={SurveyForms.FormID} id="form_info">
                  <div>
                    <h2>{SurveyForms.Name} : {SurveyForms.Term}{SurveyForms.Year}</h2>
            
                    <p>{SurveyForms.Major} : {SurveyForms.Courses}</p><br />
                      
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
