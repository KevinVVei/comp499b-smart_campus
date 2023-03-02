import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/CourseSummary.css';

function CourseSummary(props) {
  return (
    <div key={props.course.id} id="summary">
      <div>
        <h2>
          {props.course.title}
        </h2>

        <p>
          {props.course.description}
        </p>
        
        <Link to={'/coursehome/courses/' + props.course.id}>
          <button>More</button>
        </Link>
      </div>  
    </div>
  )
}

export default CourseSummary