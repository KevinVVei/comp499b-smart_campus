import React from 'react';
import courses from '../courses'
import CourseSummary from '../components/CourseSummary'
import './CourseHome.css'

function CourseHome() {
  return (
    <div className="CourseHomePage">  
      <header>
        <h1 className="CourseHomeTitle">Smart Campus CS Courses</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course={course} key={course.id} />
      ))}
    </div>
  )
}

export default CourseHome 