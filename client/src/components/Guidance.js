import React, { useState } from 'react';
import SurveyForm from './SurveyForm';

function Guidance() {
  const [showSurveyForm, setShowSurveyForm] = useState(false);

  return (
    <div className="Guidance">
      <h1>Guidance</h1>
      <p>Here you can find some helpful resources and links for academic guidance.</p>
      <button onClick={() => setShowSurveyForm(true)}>Take the Survey</button>
      {showSurveyForm && <SurveyForm />}
    </div>
  );
}

export default Guidance;