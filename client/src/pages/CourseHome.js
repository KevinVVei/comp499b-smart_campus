import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/CourseHome.css';

/*displays links to courses according to faculty*/
function CourseHome() {

  return (
    <div className="CourseHomePage">  
      <header>
        <h1 className="CourseHomeTitle">Faculties</h1>
      </header>

      {/*all buttons links to same page but pass their names through state to infrom the page what specific courses to load*/}
      <Link to='/FacultyCourses' state={{name: "AHSS"}} >
        <div className='faculty'>
          <h1>Arts, Humanities<br/>and Social Science</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Education"}}>
        <div className='faculty'>
          <h1>Education</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Engineering"}}>
        <div className='faculty'>
          <h1>Engineering</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Graduate Studies"}}>
        <div className='faculty'>
          <h1>Graduate Studies</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Human Kinetics"}}>
        <div className='faculty'>
          <h1>Human Kinetics</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Law"}}>
        <div className='faculty'>
          <h1>Law</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Nursing"}}>
        <div className='faculty'>
          <h1>Nursing</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Business"}}>
        <div className='faculty'>
          <h1>Odette School of Business</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Computer Science"}}>
        <div className='faculty'>
          <h1>Science</h1>
        </div>
      </Link>
      
      <Link to='/FacultyCourses' state={{name: "Math"}}>
        <div className='faculty'>
          <h1>Mathematics</h1>
        </div>
      </Link>

      <Link to='/FacultyCourses' state={{name: "Stat"}}>
        <div className='faculty'>
          <h1>Statistics</h1>
        </div>
      </Link>

    </div>
  )
}

export default CourseHome 
